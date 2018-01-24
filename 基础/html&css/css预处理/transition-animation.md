# 过渡与动画


## 基础

```
transition：复合属性。检索或设置对象变换时的过渡效果
transition-property：检索或设置对象中的参与过渡的属性
transition-duration：检索或设置对象过渡的持续时间
transition-timing-function：	检索或设置对象中过渡的类型
transition-delay：检索或设置对象延迟过渡的时间
animation
animation-name
animation-duration
animation-timing-function
animation-delay：延迟时间
animation-iteration-count：数字或 infinite。
animation-direction：normal/reverse/alternate(先正常再反向)/alternate-reverse(先反向，再正向)
animation-play-state：running/paused，可以让动画暂停或开始，比如 :hover 的时候
animation-fill-mode：none/forwards(停在结束状态)/backwards(停在开始状态)/both(结束或开始状态)
```

`transition-timing-function/animation-timing-function` 可以指定一个调速函数，默认是ease，还有`ease-in`、`ease-out`、`ease-in-out`、`linear`，作为补充，也可以指定贝塞尔函数：cubic-bezier(x1,y1,x2,y2)。它接受2个坐标，分别是控制锚点的坐标。x轴是时间[0,1]，y轴是动画进度。从逻辑上来说,只要我们把控制锚点的水平坐标和垂直坐标互换,就 可以得到任何调速函数的反向版本。

<img src="http://www.w3croad.com/images/20170508/animation.jpg">

- <a href='cubic-bezier.com'>贝塞尔图形化工具</a>
- <a href='https://daneden.github.io/animate.css/'>animate.css</a>

## 弹跳动画

物体从高处落下，弹跳2次，然后停止不动。
```
@keyframes bounce { 
    60%, 80%, to {
        transform: translateY(400px);
        animation-timing-function: ease; 
    }
    70% { transform: translateY(300px); }
    90% { transform: translateY(360px); } 
}
.ball {
    /* 外观样式 */
    animation: bounce 3s cubic-bezier(.1,.25,1,.25); 
}
```

## 参考

- https://github.com/cssmagic/CSS-Secrets
