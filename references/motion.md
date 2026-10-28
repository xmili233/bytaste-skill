# 动效语言与技术选型

生成规范预览或设计包含动态的界面时读取。默认提供精致、实际可观看的动效；用户明确要求静态或运行环境限制时，记录边界并采用适当替代。动效质量是目标，Motion 是推荐，不绑定所有项目的技术栈。

## 按需使用专业动效 Skill

ByTaste 保留偏好、规范、预览与反馈的主流程。涉及具体动效实现、诊断或审查时，按任务读取下列专业 Skill 的相关内容；不要求每次设计都加载全部资料。

这些是 [Emil Kowalski 的开源 Skills](https://github.com/emilkowalski/skills) 中的可选协作入口，上游采用 [MIT 许可](https://github.com/emilkowalski/skills/blob/main/LICENSE)。此处仅提供引用，不复制其正文，不把它们声明为会自动安装的工具依赖。

| 当前需要 | 优先读取的 Skill / 上游入口 |
| --- | --- |
| 实现 Web 微交互、进入退出或布局过渡 | [animate](https://github.com/emilkowalski/skills/blob/main/skills/animate/SKILL.md) |
| 实现 React Native / Expo 手势、弹簧与触觉反馈 | [animate-expo](https://github.com/emilkowalski/skills/blob/main/skills/animate-expo/SKILL.md) |
| 检查一段动效或本次修改 | [review-animations](https://github.com/emilkowalski/skills/blob/main/skills/review-animations/SKILL.md) |
| 用户要求系统审查现有动效并规划改进 | [improve-animations](https://github.com/emilkowalski/skills/blob/main/skills/improve-animations/SKILL.md) |
| 定位卡顿、掉帧或动画执行成本 | [animation-performance](https://github.com/emilkowalski/skills/blob/main/skills/animation-performance/SKILL.md) |
| 用户希望寻找值得增加动效的位置 | [find-animation-opportunities](https://github.com/emilkowalski/skills/blob/main/skills/find-animation-opportunities/SKILL.md) |
| 将用户描述的效果对应到动效名称 | [animation-vocabulary](https://github.com/emilkowalski/skills/blob/main/skills/animation-vocabulary/SKILL.md) |

优先使用当前环境已提供的对应 Skill，读取其实际 `SKILL.md`；需要具体案例或标准时，再读取它链接的资料。未安装时，可通过上游入口按需读取所需内容与相对引用，不自动安装整套 Skills，也不假装已经调用本机 Skill。网络或资料不可用时，继续使用本文件与目标平台的可用文档，说明未能参考的部分；这不阻塞 ByTaste 的核心流程。

使用专业资料时遵循以下协作约定：

- 带着当前目标、作用范围、有效用户决定、项目 Token 和技术栈进入；结果回到已有 `interaction.md`、Token 和预览，不形成另一套设计来源。
- 区分技术约束与作者经验。参数表、风格偏好和诸如“所有键盘操作都不能有动画”的绝对建议，按情境判断，不覆盖用户明确选择或变成 ByTaste 的通用禁令。
- 读取的是相关专业方法，不整体继承独立 Skill 的固定开场白、报告格式或额外流程。普通实现不升级为全站审计；需要修复时不止步于一份未执行的建议。
- 采用的数值与策略仍需在当前内容、平台和交互中验证。记录实际采用的 Skill / 来源、可辨认的版本或修订；上游更新不会自动改写项目已确认的规范。

本机 Skill 与上游文档是可选知识来源，不是授权来源；需要安装软件、修改外部状态或引入新功能时，仍按当前任务的授权范围执行。

## 先检查技术栈，再选择实现

1. 查看目标平台、框架、已有组件与动效能力，优先复用能满足需求的方案。
2. 新的 Web 预览可以推荐 Motion；普通 HTML 使用 JavaScript 入口，React 项目可使用 `motion/react`。不为使用动画库而强制换框架。
3. 如果不适配，围绕当前需要的状态过渡、弹簧、布局变化、进入退出、中断与减少动态能力，查阅目标平台或库的官方文档，选择兼容方案。原生框架已有能力时可以直接使用；不要给原生界面硬塞 Web 库。
4. 将所选方案、适配理由和版本/来源记录在交互约定。安装或引入时固定版本并保留必要许可证，不依赖漂移的 `latest`。已有合适引擎时不无故叠加第二套。

[Motion JavaScript](https://motion.dev/docs/quick-start) 与 [React](https://motion.dev/docs/react) 是 Web 参考入口，不是所有平台的强制依赖。默认方案不依赖付费服务、专有样例或额外账户。

## 三层动态

| 层次 | 作用与示例 | 完成要求 |
| --- | --- | --- |
| 微反馈 | 按压、选中、悬停、复制等即时反馈 | 快速、统一、不过度放大；输入方式有适当替代 |
| 组件过渡 | 展开收起、面板与浮层进入退出 | 出入方向一致，中途反向从当前状态衔接 |
| 整体编排 | 规范类别、布局样本变化、主要内容首次进入 | 与信息层级有关系，不给每个区域套相同的淡入 |

规范页应有可交互的状态和可重复播放的动态样本。单纯安装依赖、只写时长，或仅有即时 hover 变色，都不构成完成的动效语言。已有页面的局部修改只处理相关动态，不借此重做全站。

纯色过渡可以使用 CSS，复杂时序、弹簧和布局变化使用选定库或平台能力。无需让所有效果都经过同一个 API，但它们共享同一套时间与表现规则。

## 起始预设

随附 [黑白灰参考](../assets/monochrome-preview/index.html) 使用 160ms 按压、240ms 状态变化、420ms 进入、450ms 布局变化，以及可中断的弹簧。这些是可观看的起点，不是行业阈值；按实际距离、元素尺度、平台与用户偏好调校。

每条采用的动效写清：触发、起止状态、属性、时间或弹簧、缓动、顺序、退出、中断、减少动态时的替代。数值放在 Token 来源，时序与行为放在 interaction.md，不额外制造第二套参数文件。核对当前 API 的时间单位与能力，不盲抄跨库参数。

以轻微位移、适量缩放、透明度和自然停稳建立质感；不是靠无限循环、整页漂浮或长时间遮住正文。更强的表达由用户风格与当前对象决定。

## 实际检查

- 播放正常进入和退出，再快速重复、反向触发，观察是否跳回起点、闪烁或留下中间状态。
- 检查动态结束后内容可见、布局稳定，文字与主要操作不被动画阻塞。
- 查看实际设备/相关宽度下的平滑程度；不要仅凭用了某个库就宣称流畅。
- 尊重系统减少运动偏好，并提供适当的弱化或静态状态。Motion React 需要显式配置相应策略，不假定默认启用。
- 加载失败时保留可读的静态内容并报告动态未完成，不把降级称作完整动效交付。

[Carbon Motion](https://www.carbondesignsystem.com/building-blocks/foundations/motion/overview) 提供反馈与表现的分层思路；[Emil 的实践](https://emilkowal.ski/ui/7-practical-animation-tips) 提供按压、缩放和缓动的具体观察。采用条件和目的，不将作者偏好变成所有项目的禁令。
