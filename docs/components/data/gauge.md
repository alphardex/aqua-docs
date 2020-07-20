# Gauge 仪表盘

圆形的仪表盘，用于显示数据的比例

使用前注意：IE、Firefox 暂不支持`conic-gradient()`，请自行用其他手段实现相关功能

## 基础用法

<p class="codepen" data-height="450" data-theme-id="dark" data-default-tab="html,result" data-user="alphardex" data-slug-hash="BaydVvQ" style="height: 450px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Gauge (No SVG)">
  <span>See the Pen <a href="https://codepen.io/alphardex/pen/BaydVvQ">
  Gauge (No SVG)</a> by alphardex (<a href="https://codepen.io/alphardex">@alphardex</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 可定制变量

### .gauge

| 名称                         | 作用                               |
| ---------------------------- | ---------------------------------- |
| --gauge-width                | gauge 的宽度                       |
| --gauge-value                | gauge 的值                         |
| --gauge-max-value            | gauge 的最大值                     |
| --gauge-percentage           | gauge 的百分比，根据值自动计算而来 |
| --gauge-bg                   | gauge 的背景色                     |
| --gauge-circle-color         | gauge 条的颜色                     |
| --gauge-circle-color-lighter | gauge 槽的颜色                     |
| --gauge-color                | gauge 的文本颜色                   |
