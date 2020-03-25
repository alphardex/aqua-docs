# 定制

大部分组件的文档中，都会有**可定制变量**这一栏

举个例子，如果我想让`input`校验不通过时变成猩红色`crimson`，那么只需用新的变量重载掉旧的变量即可

```css
.form-input-material {
  --invalid-color: crimson;
}
```
