# animation

`animation` 是下面几个属性的简写：

- animation-name
- animation-duration
- animation-delay
- animation-timing-function
- animation-iteration-count
- animation-direction
- animation-play-state
- animation-fill-mode: 
    - 默认值是none，结束时停留在元素默认位置。
    - 当值设置为 `forwards` 时，动画执行完后会停在 animation 最后一帧的位置上。
    - 当值设置为 `backwards` 时，如果设置了delay，元素刚开始动画前，会停留在 0% 第一帧的位置。否则是停留在元素默认位置。
    - both

如果动画没有设置最后一帧，则最后一帧为元素的默认位置，而不是 0% 第一帧。


## 常见的css动画库

- https://github.com/daneden/animate.css
- https://github.com/miniMAC/magic
- https://github.com/IanLunn/Hover
- https://github.com/h5bp/Effeckt.css
- https://github.com/lukehaas/css-loaders