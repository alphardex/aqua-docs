# 纯天然

## 无 reset

aqua.css 没有任何所谓的重置样式，只有一条规范化的样式：将表单元素的字体设为继承。仅此一条，别无他物。

为什么不建议用 reset 来重置样式呢？原因主要有以下 2 条，当然可能还有更多：

1. 过于一刀切，破坏了所有浏览器的基本样式
2. 增加浏览器进行样式计算的成本，影响性能（因为 reset 是全局的，每个元素都会受影响）

## 基于原生 HTML

aqua.css 的大部分组件都是基于原生的 HTML 标签进行改造的。没有任何冗余的元素

首先看原生的 HTML 表单是这样的

<p class="codepen" data-height="450" data-theme-id="dark" data-default-tab="html,result" data-user="alphardex" data-slug-hash="bGdOXpz" style="height: 450px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML Form">
  <span>See the Pen <a href="https://codepen.io/alphardex/pen/bGdOXpz">
  HTML Form</a> by alphardex (<a href="https://codepen.io/alphardex">@alphardex</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

引入 aqua.css，就会被美化成这个样子，在具有设计感的同时，又不影响之前的交互

<p class="codepen" data-height="450" data-theme-id="dark" data-default-tab="html,result" data-user="alphardex" data-slug-hash="bGdzqBz" style="height: 450px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Beautiful Form with aqua.css">
  <span>See the Pen <a href="https://codepen.io/alphardex/pen/bGdzqBz">
  Beautiful Form with aqua.css</a> by alphardex (<a href="https://codepen.io/alphardex">@alphardex</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

让 UI 和业务能够各司其职，这就是基于 HTML 开发的强大之处
