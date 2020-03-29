# 定制

以开关为例，原先的开关是这样子的

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="alphardex" data-slug-hash="MWwZrdm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Switch">
  <span>See the Pen <a href="https://codepen.io/alphardex/pen/MWwZrdm">
  Switch</a> by alphardex (<a href="https://codepen.io/alphardex">@alphardex</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

现在，我们要把开关变成如下的形态：未开启时背景是红色的，开启时背景变成绿色，且中间的球始终是白色，再把灰色的边框去掉

通过查阅组件文档可知，在`.form-switch`这个类下有以下的变量可满足我们的定制要求

| 变量                            | 动作                                                   |
| ------------------------------- | ------------------------------------------------------ |
| --switch-bg-color               | switch 背景的颜色，改成绿色                            |
| --switch-ball-color             | switch 珠子的颜色，改成白色                            |
| --switch-checked-color          | 打开 switch 时填充的颜色，改成红色                     |
| --border-color                  | switch 边框的颜色，改成透明（注意`checked`状态也要改） |
| --switch-hover-color            | 鼠标悬浮 switch 时边框的颜色，改成透明                 |
| --switch-disabled-checked-color | switch 被禁用且打开时背景的颜色，改成透明              |

代码如下

```css
.form-switch {
  --switch-bg-color: var(--danger-color);
  --switch-ball-color: white;
  --switch-checked-color: var(--success-color);
  --border-color: transparent;
  --switch-hover-color: transparent;
  --switch-disabled-checked-color: transparent;

  &:checked {
    --border-color: transparent;
  }
}
```

如此，就得到了我们想要的效果

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="alphardex" data-slug-hash="bGdOZPQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Custom Switch">
  <span>See the Pen <a href="https://codepen.io/alphardex/pen/bGdOZPQ">
  Custom Switch</a> by alphardex (<a href="https://codepen.io/alphardex">@alphardex</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
