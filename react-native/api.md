# RN官方API汇总


 BackAndroid

## 简介

BackAndroid 用于监听硬件 back 键返回操作，如果没有任何监听函数，或者监听函数的返回值不是 true，则会调用默认的 back 键功能退出应用。

## 使用

```javascript
BackAndroid.addEventListener('hanrwareBackPress', ()=>{
    if(!this.onMainScreen){
        this.goBack()
        return true
    }
    return false
})
```

## 属性和方法
```markup
exitApp() : 退出app
addEventListener()
removeEventListener()


