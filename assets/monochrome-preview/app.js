(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const engine = window.Motion;
  const active = new WeakMap();
  const running = new Set();
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  const reduceInput = $('#reduce-motion');
  const status = $('#motion-status');
  const tokenStyle = getComputedStyle(document.documentElement);
  const ms = name => parseFloat(tokenStyle.getPropertyValue(name)) / 1000;
  const duration = { press: ms('--duration-press'), state: ms('--duration-state'), enter: ms('--duration-enter'), layout: ms('--duration-layout') };
  const ease = [0.23, 1, 0.32, 1];
  let reduced = media.matches;
  let toastTimer, buttonTimer;
  let disclosureRevision = 0;
  let springRight = false;
  let entryRevision = 0;
  let glyphIndex = 0;
  const glyphs = ['Aa', 'Ag', 'Rr', '09'];

  function finishValues(el, values) {
    for (const [key, value] of Object.entries(values)) {
      el.style[key] = Array.isArray(value) ? value.at(-1) : value;
    }
  }
  function animate(el, values, options = {}) {
    active.get(el)?.stop();
    if (!engine || reduced) {
      finishValues(el, values);
      return Promise.resolve();
    }
    const control = engine.animate(el, values, { duration: duration.state, ease, ...options });
    active.set(el, control);
    running.add(control);
    Promise.resolve(control).then(() => running.delete(control), () => running.delete(control));
    return control;
  }
  function notify(message) {
    const toast = $('#toast');
    clearTimeout(toastTimer);
    toast.textContent = message;
    animate(toast, { opacity: 1, transform: 'translate(-50%, 0px)' });
    toastTimer = setTimeout(() => animate(toast, { opacity: 0, transform: 'translate(-50%, 8px)' }), 1900);
  }
  async function copy(text) {
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
      else {
        const field = document.createElement('textarea');
        field.value = text;
        field.style.cssText = 'position:fixed;left:-9999px;';
        document.body.append(field);
        field.select();
        const copied = document.execCommand('copy');
        field.remove();
        if (!copied) throw new Error('Clipboard unavailable');
      }
      notify(`已复制 ${text.startsWith('#') ? text : '样式参数'}`);
    } catch {
      notify(`暂时无法复制，请手动选择：${text}`);
    }
  }
  $$('[data-copy]').forEach(button => button.addEventListener('click', () => copy(button.dataset.copy)));

  $('#change-glyph').addEventListener('click', () => {
    const glyph = $('#hero-glyph');
    glyphIndex = (glyphIndex + 1) % glyphs.length;
    glyph.textContent = glyphs[glyphIndex];
    animate(glyph, { opacity: [0.25, 1], transform: ['translateY(12px)', 'translateY(0px)'] }, { duration: duration.enter });
  });

  const canvas = $('#layout-canvas');
  const descriptions = {
    editorial: '让主标题与正文形成错落的阅读节奏。',
    split: '主要与辅助区域分开，建立清楚的空间关系。',
    modular: '共同的网格之中，保留不同的信息权重。',
  };
  $$('.layout-tab').forEach(button => button.addEventListener('click', () => {
    if (canvas.dataset.layout === button.dataset.layout) return;
    const pieces = $$('.layout-piece', canvas);
    const before = pieces.map(el => el.getBoundingClientRect());
    pieces.forEach(el => { active.get(el)?.stop(); el.style.transform = ''; });
    canvas.dataset.layout = button.dataset.layout;
    $$('.layout-tab').forEach(tab => {
      const selected = tab === button;
      tab.classList.toggle('selected', selected);
      tab.setAttribute('aria-pressed', String(selected));
    });
    $('#layout-description').textContent = descriptions[button.dataset.layout];
    pieces.forEach((el, index) => {
      const after = el.getBoundingClientRect();
      animate(el, { transform: [`translate(${before[index].left - after.left}px, ${before[index].top - after.top}px)`, 'translate(0px, 0px)'] }, { duration: duration.layout });
    });
  }));
  $('#grid-toggle').addEventListener('click', event => {
    const button = event.currentTarget;
    const shown = canvas.classList.toggle('show-grid');
    button.setAttribute('aria-pressed', String(shown));
  });

  $('#sample-button').addEventListener('click', () => {
    clearTimeout(buttonTimer);
    const button = $('#sample-button');
    $('span', button).textContent = '已触发';
    $('use', button).setAttribute('href', '#i-check');
    buttonTimer = setTimeout(() => { $('span', button).textContent = '主要按钮'; $('use', button).setAttribute('href', '#i-arrow'); }, 1500);
  });
  $('#secondary-button').addEventListener('click', () => notify('这是次要按钮的反馈样式'));
  $('#sample-switch').addEventListener('click', event => {
    const button = event.currentTarget;
    const enabled = button.getAttribute('aria-checked') !== 'true';
    button.setAttribute('aria-checked', String(enabled));
    $('#switch-description').textContent = enabled ? '已开启' : '已关闭';
    animate($('span', button), { transform: `translateX(${enabled ? 18 : 0}px)` }, { type: 'spring', duration: 0.35, bounce: 0.18 });
  });
  $$('.selection').forEach(button => button.addEventListener('click', () => {
    $$('.selection').forEach(option => { option.classList.toggle('selected', option === button); option.setAttribute('aria-pressed', String(option === button)); });
    animate(button, { opacity: [0.6, 1] });
  }));
  $('#disclosure-toggle').addEventListener('click', async event => {
    const button = event.currentTarget;
    const content = $('#disclosure-content');
    const open = button.getAttribute('aria-expanded') !== 'true';
    const revision = ++disclosureRevision;
    const from = content.hidden ? 0 : content.getBoundingClientRect().height;
    active.get(content)?.stop();
    content.hidden = false;
    content.style.height = 'auto';
    const target = open ? content.scrollHeight : 0;
    content.style.height = `${from}px`;
    button.setAttribute('aria-expanded', String(open));
    await animate(content, { height: `${target}px`, opacity: open ? 1 : 0 });
    if (revision !== disclosureRevision) return;
    content.hidden = !open;
    content.style.height = '';
    content.style.opacity = '';
  });

  const press = $('#press-demo');
  const pressDown = () => animate(press, { transform: 'scale(0.96)' }, { duration: duration.press });
  const pressUp = () => animate(press, { transform: 'scale(1)' }, { type: 'spring', duration: 0.35, bounce: 0.2 });
  press.addEventListener('pointerdown', pressDown);
  ['pointerup', 'pointercancel', 'pointerleave', 'blur'].forEach(name => press.addEventListener(name, pressUp));
  press.addEventListener('keydown', event => { if ([' ', 'Enter'].includes(event.key) && !event.repeat) pressDown(); });
  press.addEventListener('keyup', pressUp);

  async function replayEntry() {
    const revision = ++entryRevision;
    const el = $('#enter-demo');
    if (reduced) { finishValues(el, { opacity: 1, transform: 'none' }); return; }
    await animate(el, { opacity: 0, transform: 'translateY(-7px) scale(.98)' }, { duration: duration.press });
    if (revision !== entryRevision || reduced) return;
    await animate(el, { opacity: [0, 1], transform: ['translateY(12px) scale(.98)', 'translateY(0px) scale(1)'] }, { duration: duration.enter });
  }
  function springMove() {
    springRight = !springRight;
    const travel = $('#spring-track').clientWidth - $('#spring-dot').offsetWidth - 14;
    animate($('#spring-dot'), { transform: `translateX(${springRight ? travel : 0}px)` }, { type: 'spring', duration: 0.6, bounce: 0.22 });
  }
  $('#replay-enter').addEventListener('click', replayEntry);
  $('#replay-spring').addEventListener('click', springMove);
  $('#spring-track').addEventListener('click', springMove);
  $('#replay-all').addEventListener('click', async () => {
    replayEntry();
    springMove();
    await animate(press, { transform: ['scale(1)', 'scale(.96)', 'scale(1)'] }, { duration: 0.4 });
  });

  function updateReduced(value) {
    reduced = value;
    reduceInput.checked = value;
    document.documentElement.classList.toggle('reduce-motion', value);
    if (value) {
      for (const control of running) control.complete();
      running.clear();
      entryRevision++;
      finishValues($('#enter-demo'), { opacity: 1, transform: 'none' });
      finishValues(press, { transform: 'none' });
    }
    status.textContent = !engine ? '动效资源未能加载。当前显示静态样式。' : value ? '已减少位移与弹簧动态，保留状态反馈。' : '';
  }
  reduceInput.addEventListener('change', () => updateReduced(reduceInput.checked));
  media.addEventListener('change', event => updateReduced(event.matches));
  updateReduced(reduced);
  document.documentElement.dataset.motionEngine = engine ? 'motion-14.6.0' : 'unavailable';

  const navLinks = $$('.header-inner nav a');
  function updateNav() {
    let current = '';
    $$('.section, .motion-section').forEach(section => { if (section.getBoundingClientRect().top <= 170) current = section.id; });
    navLinks.forEach(link => {
      const selected = link.hash === `#${current}`;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
  }
  let navQueued = false;
  addEventListener('scroll', () => { if (!navQueued) { navQueued = true; requestAnimationFrame(() => { updateNav(); navQueued = false; }); } }, { passive: true });
  updateNav();
  let resizeTimer;
  addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (springRight) finishValues($('#spring-dot'), { transform: `translateX(${$('#spring-track').clientWidth - $('#spring-dot').offsetWidth - 14}px)` });
    }, 100);
  });
  animate($('.hero-copy'), { opacity: [0, 1], transform: ['translateY(18px)', 'translateY(0px)'] }, { duration: 0.65 });
  animate($('.hero-specimen'), { opacity: [0, 1], transform: ['translateY(24px)', 'translateY(0px)'] }, { duration: 0.7, delay: reduced ? 0 : 0.08 });
  if (engine && !reduced) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        animate(entry.target, { opacity: [0, 1], transform: ['translateY(10px)', 'translateY(0px)'] }, { duration: duration.enter });
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15 });
    $$('.section-heading').forEach(el => observer.observe(el));
  }
})();
