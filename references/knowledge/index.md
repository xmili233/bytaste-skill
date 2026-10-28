# 可复用的设计知识条目

分类词库帮助找到要谈的概念；知识条目帮助把这个概念用于提问、选择、实施与验证。先用用户原话、任务和有关维度选择条目，核对适用条件，再使用其中相关部分。

层级和概念关系见 [六层概念地图](../concepts.md)。本索引按高频问题路由，不要求把所有条目一起加载。原有分类 ID 保持不变；一个条目可服务多个维度。L0 的表达意图沿用引导、词库与决定记录，不另造一套偏好状态。布局和动效的专门指南从概念地图进入。

条目中的实现策略按条件选择；[默认质量基线](../visual-quality.md) 独立适用。条目被读到不代表用户已选其风格，策略未被采用也不免除相关基线。

## 按问题读取

| 所在层 | 条目 ID | 常见入口 | 关联分类 | 读取 |
| --- | --- | --- | --- | --- |
| L1 内容 | `knowledge.content-expression` | 像模板文案、内容平铺、没有叙述感 | `visual.voice`、`visual.emphasis` | [内容组织与表达](content-expression.md) |
| L2 空间 | `knowledge.density` | 太空、太挤、信息看不全、紧凑 | `visual.density`、`goal.comparison`、`goal.efficiency` | [信息密度](density.md) |
| L2 空间 / L3 排版 | `knowledge.hierarchy` | 重点不突出、全在抢、标题太大 | `visual.emphasis`、`visual.scale`、`goal.clarity` | [文字层级](hierarchy.md) |
| L2 空间 | `knowledge.grouping` | 干净、卡片太多、不知道哪组是哪组 | `visual.decoration`、`goal.clarity`、`goal.focus` | [容器与装饰](grouping.md) |
| L3 视觉 | `knowledge.typography` | 字体对但排版粗糙、中文挤、数字不齐 | `visual.typography`、`visual.scale` | [排版系统](typography.md) |
| L3 视觉 | `knowledge.color` | 色值对但感觉不对、配色失衡 | `visual.palette`、`visual.saturation`、`visual.brightness` | [色彩关系与角色](color.md) |
| L3 视觉 | `knowledge.shape-surface` | 太像玩具、层次廉价、光学不齐 | `visual.shape`、`visual.depth`、`visual.texture` | [形状、表面与光学细节](shape-surface.md) |
| L3 视觉 | `knowledge.imagery` | 图标拼凑、照片放进去不对、裁切跑偏 | `visual.imagery`、`visual.scale` | [图标、图像与图形语言](imagery.md) |
| L4 组合 | `knowledge.component-grammar` | 组件组合不成体系、状态变味 | `visual.shape`、`visual.density`、`visual.emphasis` | [组件语法与组合模式](component-grammar.md) |
| 跨 L1 / L4 / L5 | `knowledge.experience-quality` | 费脑、绕路、被打断、失去进度、失败无从处理、慢或难以操作 | `goal.clarity`、`goal.low-friction`、`goal.control`、`goal.confidence` | [体验品质：目的与可选案例](experience-quality.md) |
| L5 延续 | `knowledge.adaptation` | 手机变挤、长内容破版、跨页面失去风格 | `visual.geometry`、`visual.typography`、`visual.motion` | [情境适配与设计延续](adaptation.md) |

一个输入可能关联两个条目，例如“简洁但别太空”涉及装饰与密度。先弄清哪个问题最影响当前决定，不一次加载全部条目。没有适合条目时保留缺口，不能伪造命中或把相近词强制套用。

## 条目约定

每个可复用条目应提供以下信息；简单条目可以合并段落，避免空字段：

| 内容 | 要求 |
| --- | --- |
| 身份与入口 | 稳定 ID、相关分类、用户常用说法 |
| 性质 | 区分研究发现、作者经验、参考观察、ByTaste 推导和有来源的标准要求。项目采用状态不放进通用条目 |
| 问题与机制 | 说明用户描述可能指向哪些问题、建议为什么可能形成目标效果；机制只是解释，不保证当前项目效果 |
| 候选策略 | 同一目标可有多个实现，分别说明适用条件与代价，不把一种风格当成唯一答案 |
| 可辨认差异 | 用户能看见或体验到的变化；使用中性表述 |
| 提问与选择 | 一个能减少歧义的问题，及选择可以、不能说明什么 |
| 适用条件与取舍 | 任务、内容与平台条件，适用边界及可能代价 |
| 参考与反例 | 来源、具体位置、观察范围；区分真实观察、原创示例和推导。反例描述误用，不把另一个合理选项当坏设计 |
| 落地关联 | 对规则、组件、Token 角色的影响；具体值由项目决定 |
| 检查与证据边界 | 说明如何看出选择是否落实、如何取得偏好反馈，以及来源实际研究了什么、没有证明什么；不额外要求效率或可用性研究 |

新增条目时复用既有分类 ID 和近义说法。只有能支持一个真实问题或决定时才增加条目。不要将个人选择或一次成功截图升级成跨项目规律。

## 从库内条目到项目规则

库内条目是可选知识，不携带用户的采用状态。引用到项目时，在设计规范中关联源条目 ID、具体规则、真实依据与检查记录。涉及用户选择时在 [决策记录](../decisions.md) 保存实际选择和范围并引用决定 ID；落实默认基线时引用基线版本/ID，实现建议仍注明建议来源。用户只选中其中一个特征时，只采用对应部分。

例如，从 `knowledge.density` 得到“报销列表采用较紧凑间距”的项目规则，不会自动决定字体、数据数量或配色。全局规则与页面例外按 [设计规格结构](../design-spec.md) 解析。

## 来源与维护

条目提供理解概念和做出取舍的知识，不规定 Agent 必须使用什么方式解释。外部指南与设计推导提供背景，不代表其结论已在当前项目中通过用户验证。

优先保留原始出处、证据类型、研究或观察的对象与范围，以及已知限制。多篇转载来自同一项研究时只算同一来源；多个网站采用某形式也不能证明该形式造成成功。不同结论先比较条件，不用票数强行选出“最佳设计”。条目在项目中被采用或用户喜欢，不自动升级成跨项目规律。

未来 API 可以返回同类条目；仍需检查来源、适用范围与版本，并区分检索建议和用户选择。已有足够依据时使用本地材料，API 不作为核心流程前提。

来源管理可参考 [GOV.UK 的模式贡献标准](https://design-system.service.gov.uk/community/contribution-criteria/) 中明确适用情境与已有证据的方式；不将其整套准入测试移植为 ByTaste 必经流程。早期建议可保留，但必须如实标明依据与未知。
