# css基础

## 选择器

```markup
*
div
.box
#box
.box div : 后代选择器

// 新增选择器
father > child： 子元素选择器
sibling + sibling：相邻兄弟选择器
sibling ~ sibling: 后面兄弟选择器
,        : 群组选择器

// 属性选择器
a[href]    : 有属性的
a[href="#"]: 完全匹配#
a[href~="#"]: 包含#的
a[href^="#"]: 以#开头的
a[href$="#"]: 以#结尾的
a[href*="#"]: 包含#的
a[href|="#"]: 以 # 开头或以 #- 开头

// 伪类选择器，相当于是自身的属性
// 动态伪类，用户交互时触发
:link, :visited  锚点伪类,a自带的效果
:hover, :active, :fouces 用户行为伪类

// ui元素状态伪类
:enabled, :disabled, :checked

div:first-child 如果是父级的第一个子元素，且是div，则选中 
div:last-child

div:nth-child()  odd=2n+1,even=2n
div:nth-last-child(n)  倒着数第n个，且是div

div:nth-of-type(2)  父级的第二个 div 子元素
div:nth-last-of-type(n)

div:first-of-type
div:last-of-type
div:only-child  只有一个子元素，且是唯一的
div:only-of-child  只有一个div子元素

:empty  没有子元素(包括文本节点)

a:not(:last-of-type)

// 伪元素选择器，元素::伪元素
:first-line  只用于块级元素
:first-letter
```









## border

- `border-width` 不能是百分比，还可以设置为`thin`(1px),`normal`(3px),`thick`(5px)。
- `border-style`的值可以是`solid`、`dashed`和`dotted`，`dashed`虚线在`ie`(长宽比2/1)和`chrome`(长宽比3/1)表现不一致。`dotted`在`chrome`为方点，而在`ie`为园点。另外还有些属性`double`(双线)、`groove`(凹槽)、`ridge`（垄状）、`inset`、`outset`。3d属性在各浏览器表现都不一致，另外现在流行扁平化，所以基本不用。
- `border-color`会继承`color`的颜色。



## filter

之前ie的`filter`已经废弃。最新的`filter`支持`edge`。

```
filter: url(resource.svg#c1)   
blur()
```





