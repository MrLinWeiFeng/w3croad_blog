# dom

## 简述

`dom` 的全称是 `document object model`。因为 html渲染引擎 和 js引擎是分开的，为了操作html和xml文档，而制定了一套接口，这套接口就是dom。

html 会形成 dom树 (所有的节点都是Node类的实例)。js可以操作dom树。dom树最终会渲染到页面上。

nodeName
nodeType
nodeValue
parentNode
childNodes
appendChild()
insertBefore()

常用的节点类型
1 Element 大写标签名
2 Attribute
3 Text     #text
9 Document #document
11 DocumentFragment  #document-fragment


# DOM模型概述

## Node
### nodeName,nodeType,nodeValue

- `Document`：整个文档树顶层结构，#document，9
- `DocumentType`: `doctype`标签，等同于DocumentType.name, 10
- `Element`：大写HTML元素名，1
- `Attribute`: Attr.name, 2
- `Comment`: #comment, 8
- `Text`: #text, 3
- `DocumentFragment`: #document.fragment, 11

由于只有Text节点、Comment节点、XML文档的CDATA节点有文本值，因此只有这三类节点的nodeValue可以返回结果，其他类型的节点一律返回null。同样的，也只有这三类节点可以设置nodeValue属性的值。对于那些返回null的节点，设置nodeValue属性是无效的。

`node`的其它属性

- contentText: 返回节点内文本内容，会忽略html标签。设置的文本不会解析
- baseURI: 当前网页绝对路径，如果无法获取，则返回，只读。
- ownerDocument: 返回当前节点的顶层文档对象document,document.ownerDocument为null
- nextSibling: 返回当前节点后第一个同级节点，包含文本和注释，没有则返回null
- previousSibling 
- parentNode: 当前节点的父节点。可能是element，document,或documentFragment，对于那些生成没有插入的dom树节点，父节点为null
- parentElement: 返回当前节点的父Element节点，如果没有，则返回，ie中只有Element节点有该属性，其它浏览器则是所有类型节点都有该属性
- childNodes: 返回NodeList集合，没有则返回空的NodeList集合，它是动态集合
- firstChild, lastChild

`node`的其它方法

- appendChild()
- hasChildNodes()
- cloneNode(): 参数表示是否要克隆子节点，不会克隆`addEventListener`和`on-`属性
- insertBefore()
- removeChild()
- replaceChild()
- contains()
- compareDocumentPosition()
- isEqualNode()
- normalize() 

**NodeList对象**
**HTMLCollection对象**

**ParentNode接口**

- children：返回动态HTMLCollection集合
- firstElementChild
- lastElementChild
- childElementCount

**ChildNode接口**
Element,DocumentType,CharacterData 部署了ChildNode接口。

- remove()
- before()
- after()
- replaceWith()


## 属性的操作

- Elements.attributes : name/value   和 nodeName/nodeValue一致。其它节点attributes为null。Elements.hasAttributes()
- 元素节点属性可读可写，通过 `f.id`形式，注意className和htmlFor(label特有)。delete不能删除属性
- html属性值一般是字符串，但是js属性会自动转换类型。

**属性操作的方法**

- Element.getAttribute(): 返回当前节点指定属性，如果不存在，返回null
- Element.setAttribute(): 新增属性，如果存在则覆盖
- Element.hasAttribute(): 是否包含某个属性
- Element.removeAttribute(): 移除属性

**和html对象属性的区别**

- 适用性`html` 标签对象属性操作，只适合标准属性和js添加的属性。
- 返回值是字符串，而对象属性返回各种类型，字符串，数值，布尔值，对象等
- 属性名，都是标准名称比如class，for等。对大小写不敏感

**dataset属性**

- 自定义属性不能通过html代码校验
- 可以添加data-属性，然后通过`.dataset.`的方式获取。删除可以直接使用delete
- 还可以通过`getAttribute('data-foo')`操作
- 注意，data-后面的属性名有限制，只能包含字母、数字、连词线（-）、点（.）、冒号（:）和下划线（_)。而且，属性名不应该使用A到Z的大写字母，比如不能有`data-helloWorld`这样的属性名，而要写成`data-hello-world`。
- 出现大写会转成小写 `data-helloWord` -> `helloworld`


## css操作

1. 通过getAttribute()、setAttribute()、removeAttribute()操作style对象
2. 可以直接通过`.style.width`方式来读写行内css样式。background-color -> backgroundColor。 如果是保留字，前面要加css，比如cssFloat
3. `style`对象下的`cssText`属性,可以读写和删除整个样式，不用改写css属性名
4. css模块的侦探，
```
console.log(isPropertySupport('webkitTransform'))

function isPropertySupport(property) {
    if (property in document.body) return true

    var prefixs = ['webkit', 'ms', 'o', 'moz']

    var prefProperty = property.charAt(0).toUpperCase() + property.substring(1)

    for (var i = 0; i < prefixs.length; i++) {
        if ((prefixs[i] + prefProperty) in document.body.style) {
            return true
        }
    }
    return false
}

// 也可以使用 CSS.supports('background','red')
```

5. 读写行内样式，通过Style对象的方法: setProperty(), getPropertyValue(),removeProperty()，参数都是css属性名，不用改写

6. window.getComputedStyle(), 第一个参数是dom对象，第二个参数是伪元素。这个方法获取的style对象是经过计算后的，也可以使用上面的getPropertyValue('height')方法。是只读的。

- 返回的css值是绝对单位，比如长度都是像素，带'px'单位，颜色是rgb或rgba
- css规则简写无效，比如读margin需要读marginLeft详细的属性
- 如果不是绝对定位，top，left总是auto
- 这个方法返回的样式对象的cssText属性无效， 是undefined
- 样式对象是只读的，如果想设置，需要使用.style.的方法
- 伪元素默认是行内样式

7. 