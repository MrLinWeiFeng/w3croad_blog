# css选择器

## 基本选择器

```
*
element
.classname
#idname
```

## 关系选择器

```
a + b 相邻兄弟
a ~ b 后面兄弟
a > b 子选择器
a b   后代
```

## 伪类选择器

```
:root：根元素html
e:nth-child(n)： 第几个子元素，odd是奇数，even是偶数。比如.box p:nth-child(2)要p是第二个元素才行
e:nth-last-child(n)：从后面开始数其
e:nth-of-type(n)：第几个相同类型的兄弟，比如.box p:nth-child(2)就是第二个p
e:nth-last-of-type(n)
e:first-child
e:last-child
e:first-of-type
e:last-of-type
e:only-child
e:only-of-type
e:empty： 不能有空字符
e:link，如果href为空或没有设置，不会显示为设置的颜色
e:visited： 链接访问了会被记录，同页面的<a >有相同链接的话，都会被变色
e:hover
e:active：要放在hover后面，否则不能层叠掉hover样式
e:focus
e:target：会突出显示当前活动的 HTML 锚。比如点了锚链接，会选中相关那块内容
e:lang(de)：和属性选择器[|=]的区别是属性选择器只会选中有属性的元素。而lang是子元素也会选中
e:enabled
e:disabled
e:checked
e:not(s)
```

## 伪元素选择器

```
e::first-line
e::first-letter
e::before
e::after
```

## 属性选择器

```
el[attr]
el[attr=value] ：value可以加引号，也可以不加
el[attr^=value]：以value开头
el[attr$=value]：以value结尾
el[attr*=value]：只要有这个字符串
el[attr~=value]：属性中包含值，会选中 class="top fs"
el[attr|=value]：div[class|=top]会选中 class="top"(全等) 以及 class="top-fs"（有横线）这样的元素
```


## css优先级顺序如下：
   
   ```
   !important > style > id > class(属性选择器、伪类选择器) > 元素选择器（伪元素） > * > 浏览器默认 > 继承
   ```
   
   - 有人测试256个class才可以比过一个id。
   - 如果权重值相等，后声明的优先。
   
   
## 参考资料

- https://www.w3.org/TR/selectors/#selectors
