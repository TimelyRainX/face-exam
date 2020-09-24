所以记住这条经验法则：（理想情况下，）最慢样式表的下载时间决定了页面渲染的时间。
基于上述考虑，我们需要尽快构建 DOM 与 CSSOM。
如果条件允许，缩短渲染前等待时间最有效的方式就是使用 Critical CSS （关键 CSS）模式：找出首次渲染所需的样式（通常是首屏相关的样式）
懒加载非关键 CSS：

优先加载关键 CSS，懒加载其他 CSS；
或根据媒体类型拆分 CSS 文件。

避免使用 @import：
在 HTML 文档中应该避免；
在 CSS 文件之中更应避免；
以及警惕预加载扫描器的怪异行为。

关注 CSS 与 JavaScript 的顺序：

在 CSS 文件后的 JavaScript 仅在 CSSOM 构建完成后才会执行；
如果你的 JavaScript 不依赖 CSS；
将它放置于 CSS 之前；
如果 JavaScript 依赖 CSS：
将它放置于 CSS 之后。

仅加载 DOM 依赖的 CSS：
这将提高初次渲染的速度使让页面逐步渲染。
