# ByTaste

把你的审美，变成 AI 的设计标准。

ByTaste 从你喜欢的设计案例或文字描述出发，通过可查看的版本和逐轮反馈，形成并维护项目的设计规范，让后续页面持续沿用已确认的方向。

当前版本：**v0.5.2**。适用于支持 Agent Skills 的 AI 开发工具，包括 Claude Code 和 Codex。

## 安装

在项目目录运行：

```sh
npx skills add xmili233/bytaste-skill
```

按安装器提示选择工具和安装范围。也可以下载本仓库，将包含 `SKILL.md`、`references/` 与 `assets/` 的文件夹以 `bytaste` 为名放入对应工具的 Skills 目录。

## 开始使用

把喜欢的截图、网站或设计文件交给 AI，或直接描述希望的感觉：

> 使用 ByTaste，帮我明确这个项目的设计方向。我希望界面干净、有重点，但不要太空。结合我的参考，先形成规范和可以查看的预览，再根据我的反馈调整；把已确认的选择保存下来，供后续页面沿用。

推荐先了解用途、目标用户和使用场景，再探索整体感觉与视觉风格；已有信息直接复用，也可以从参考或试做版本开始，无需填完固定问卷。

核心流程：**参考或描述 → 可查看的版本 → 用户反馈 → 更新规范 → 继续迭代与复用**。

## 会得到什么

- `design.decisions.md`：有效选择、作用范围与修订依据。
- `design.md`：可复用的设计规则。
- 独立 Token 来源：颜色、字体、尺寸、间距等具体值。
- `interaction.md`：交互、状态、反馈和动效约定。
- 对应预览页面：实际查看规范、布局、组件与动态效果。

已有等价文档、主题或预览系统时直接沿用。只探索风格时展示规范本身，不虚构业务页面。

## 设计品质与专业资料

[默认品质基线](references/visual-quality.md)覆盖视觉完成度、省脑、掌控、连续、恢复、响应稳定、基础无障碍和环境适应。条目规定目的和判断依据，具体实现留给当前项目与模型决定。

需要深入处理动效时，[动效约定](references/motion.md)会引导读取相关开源 Skill：已安装时优先使用本机版本，否则可按需读取上游。不会自动安装其他 Skill，也不会让外部作者的风格偏好覆盖用户的选择。

[随附规范预览](assets/monochrome-preview/index.html)可下载后直接打开，或在仓库目录运行：

```sh
python3 -m http.server 4187 --bind 127.0.0.1 --directory assets/monochrome-preview
```

访问 `http://127.0.0.1:4187/`。示例中的黑白灰、字体与参数仅供参考，不是所有项目的默认风格。

完整入口见 [SKILL.md](SKILL.md)。技能效果仍需在实际项目与用户反馈中验证，不保证不同模型产出完全相同。

## 许可

ByTaste 使用 [MIT License](LICENSE)。随附预览中的第三方资源保留各自许可：[Motion](assets/monochrome-preview/assets/motion-LICENSE.txt)、[Manrope](assets/monochrome-preview/assets/manrope-OFL.txt)。
