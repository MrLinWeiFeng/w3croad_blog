# canvas

```
var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')  // 获取渲染上下文
```

canvas的坐标是以左上角为(0,0)，x,y轴方向分别是右下。

**绘制矩形**

```
context.fillRect(x, y, width，height)  // 实心
context.strokeRect(x, y, width, height)  // 空心
```

**绘制路径**

```
context.beginPath()     // 开始设置路径
context.moveTo(10, 20)  // 设置起点
context.lineTo(50, 20)  // 设置终点
context.stroke()        // 绘制路径

context.fill()  // 填充路径，当调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用 closePath() 函数。
context.closePath()  // 可以自动闭合路径
```

**绘制圆弧**

```
context.arc(x, y, radius, startAngle, endAngle, anticlockwise)
```
- startAngle：默认是0，方向向右
- anticlockwise：可选，默认是false，表示顺时针绘制
- startAngle,endAngle：是弧度，不是角度，需要将角度转成弧度。
     - degree *(Math.PI / 180)

**绘制文本**

```
context.fillText(text, x, y)
context.strokeText(text, x, y)
```

x,y 表示文本左下角的坐标。

**设置颜色**

```
context.fillStyle = color
context.strokeStyle = color
```

**修改线宽**

```
context.lineWidth = number
```

**擦除canvas**

```
context.clearRect(x, y, width, height)
```

**加载图像**

```
context.drawImage(image对象, x, y, [width], [height])
```

如果没有设置宽、高，则会显示原始尺寸

**图像裁剪**

































