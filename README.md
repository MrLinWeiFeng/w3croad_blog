# w3croad_blog

自己之前学习前端的方式太差，都是看视频、看文章、做做例子，缺乏总结和复习，几年下来，虽然知识点知道了很多，但是总是感觉不太扎实。为了让自己稍微扎实些，现在详细的把自己所知道的前端知识体系过一遍，主要是通过查阅大量文章，对每个知识点进行测试和总结。目的是用最简的文字就将一个专题总结清楚，方便复习和查看。

## 基础知识

1. [什么是html5语义化?](html/语义化.md)
1. [canvas](html&css/布局/canvas.md)
1. [css选择器](html&css/css选择器.md)
1. [css属性和值](html&css/css属性和值.md)
1. [css盒模型](html&css/box-mode/css-box.md)
1. [css布局详解](html&css/布局/basic.md)
1. [视觉格式化模型]()
1. [元素水平垂直居中](html&css/布局/position-center)
1. [数据类型](javascript/数据类型.md)
1. [Array 数组](javascript/Array.md)
1. [Date 时间](javascript/Date.md)
1. [Math 数学](javascript/Math.md)
1. [Object](javascript/Object.md)
1. [window对象](javascript/bom/window.md)
1. [navigator](javascript/bom/navigator.md)
1. [history](javascript/bom/history.md)
1. [location](javascript/bom/location.md)
1. [DOM](javascript/dom/dom.md)
1. [事件](javascript/dom/event.md)
1. [Promise和异步编程](javascript/Promise和异步编程.md)
1. [错误监控](issue/错误监控.md)
1. [性能优化]()
1. [网络基础]()
1. [前端安全]()
1. [可视化开发 - canvas]()
1. [前端工程化 - 模块化开发和require.js]()
1. [前端工程化 - 思想]()
1. [前端工程化 - gulp]()
1. [前端工程化 - webpack打包]()
1. [前端工程化 - eslint代码验证]()
1. [前端工程化 - eslint]()
1. [前端工程化 - 单元测试]()
1. [前端工程化 - UI测试]()
1. [前端工具 - webstorm]()
1. [前端工具 - chrome调试工具](工具/chrome-devtools.md)
1. [性能优化 - 网络基础](工具/charles.md)
1. [性能优化 - 浏览器渲染原理](工具/charles.md)
1. [性能优化 - 策略大全](工具/charles.md)
1. [前端安全 - 策略大全](工具/charles.md)
1. [精通vue]
1. [精通react]
1. [jsdoc]

## 设计模式

1. [工厂模式]()
1. 建造者模式
1. 原型模式
1. 单例模式
1. 外观模式
1. 适配器模式
1. 代理模式
1. 装饰者模式
1. 组合模式
1. 观察者模式
1. 状态模式
1. 策略模式
1. 命令模式
1. 访问者模式
1. 中介者模式
1. 迭代器模式


## 数据结构和算法

1. 时间复杂度
2. 空间复杂度
3. 常见排序算法
1. 冒泡排序、优化
2. 选择排序
3.插入排序
4.归并排序
5.快速排序式
6.计数排序
7.桶排序
8.基数排序
4.链表(链表反转、链表是否有环)
5.树(高度、前序、中序、后序、广度优先算法、反转)
6.二叉树搜索算法
7.青蛙跳台阶问题-动态规划算法
8.React虚拟DOM Diff算法实现

## 使用react-native开发app

1. [自己搭建codepush热更新服务](react-native/codepush.md)
1. [ios发布流程](react-native/iso_deploy.md)
1. [react-native-scroll-tab-view](react-native/react_native_scroll_tab_view.md)
1. [react-navigation](react_navigation.md)

## 工具


## Node

1. NODE原理与解析
1. REPL交互环境
1. 模块与NPM
1. Buffer缓存区
1. fs文件操作
1. Stream流
1. TCP&UDP
1. 异步编程
1. HTTP&HTTPS
1. 进程与集群
1. 网络安全
1. Express
1. 路由
1. 中间件
1. 模板引擎
1. 错误处理
1. 项目生成器
1. [mongodb]
1. [mysql]
1. [websocket&socket.io]
1. [express]
5. Node静态服务器实现与缓存机制的实现
6. HTTP常用报文的实际应用
7. Node Stream的应用与文件分片上传策略
8. RestfulAPI设计和使用
9. CDN和OSS的使用
10. HTTPS安全通信过程分析
1. 手写express框架
2. 中间件的实现原理、bodyParser、cookie-parser、static、模板原理
3. Koa
1. 手写Koa框架
2. 中间件的实现原理、bodyParser、cookie-parser、static、模板原理

## Linux必备知识

1.Linux介绍
2.Linux文件和目录
3.Linux用户和组权限
4.Linux命令
5.Shell脚本
8.使用Model对文档进行增删改查
6.珠峰博客(express+mongodb+mongodb)
基于bootstrap+express+mongodb实现一个包括用户管理、文章管理、多看留言、分页查询、 搜索、文件上传、pv留言统计等功能完整的博客系统。使用了express的路由、ejs模板和serve-favicon、 morgan、cookie-parser、body-parser、express-session、connect-mongo、connect-flash、uuid、 async等内置各种中间件以及其它发路径保护等自定义中间件，并扩展了富文本编辑器、markdown和heroku云布署等功能。
1.项目初始化
2.用户管理
3.文章管理
4.分页查询
5.搜索
6.文件上传
7.PV留言统计
7.珠峰聊天室项目实战(react+socket.io+mongodb)
1.什么是实时通信
2.什么是Websocket
3.websocket和http的对比
4.使用socket.io实现聊天室
5.匿名聊天
6.有用户名的聊天和用户列表
7.用户私聊
8.划分不同的聊天房间
9.消息持久化
10.支持QQ表情
8.MySQL
1.MYSQL安装与使用
2.MYSQL系统架构
3.数据处理之增删改查
4.数据类型和约束分页
5.索引和慢查询性能分析
6.数据库安全之防止SQL注入
9.珠峰爬虫(cheerio+request+mysql)
1.发出HTTP请求获取指定URL中的内容
2.使用cheerio的语法操作网页元素，提取需要的元素
3.将数据保存到mysql数据库中
4.建立web服务器显示这些数据
5.使用计划任务自动执行更新任务
6.布署项目到阿里云中并配置反向代理
10.Redis
1.Redis安装和使用
2.5种数据结构及使用场景
3.API的理解和使用
4.Redis客户端
11.Nginx
1.nginx的安装和使用
2.模块和基本配置
3.正向反向代理等应用场景
12.Docker
1.Docker介绍和安装
2.Dockerfile
3.存储和镜像仓库
4.Dock实战

14.集群和负载均衡
1.cluster的工作原理和负载均衡算法
2.pm2工具

8.网络缓存技术分析
9.浏览器渲染过程分析(DOM树、RenderObject、绘图上下文)
16.项目部署
1.npm script工作流
2.shell脚本布署

19.全链路优化
1.DNS优化
2.请求速度优化
3.渲染优化之 JS css image html
4.缓存优化
5.服务器优化
6.数据库优化



## 读后感

## 博客

- [网络埋伏纪事](http://www.xiaojichao.com/archives/)
- [riskers](https://github.com/riskers/blog/issues)
- [fouber张云龙](https://github.com/fouber/blog)













项目导入WEB程序的结构与部署、项目需求、项目开发流程“学子商城”项目
导入了解WEB程序的开发流程，理解WEB程序的结构与部署，了解项目需求，学习标准开发文档
数据库技术服务器概述、数据库服务器、创建数据库、创建数据表、基础查询、复杂查询、关联查询、增删改操作、常用函数“学子商城”项目
所用数据库使用MySQL创建“学子商城”项目所用数据库，根据需求完成数据表的创建，并熟练掌握各种常用数据库操作
WEB SERVRWEB服务器、WEB服务器技术简介、PHP服务器端技术概述、Apache服务器、PHP语法基础、PHP常用函数、PHP访问数据库、使用PHP进行复杂数据操作“学子商城”项目
的服务器端功能、
常用接口了解各种主流服务器以及服务器端技术，能够实现服 务器端的部署，掌握服务器端组件原理，能够实现服务器端的各种常用功能
HTML5基础HTML5快速入门、文本、图像、链接、表格、列表、表单、iframe熟练掌握各种HTML标签，能够手动快速完成各种页面的编写
JavaScript
核心JavaScript的V8引擎运行环境、JavaScript代码的编写与调试、JavaScript的基础语法、变量与常量、数据类型及其转换应用、运算符和表达式、函数的定义及使用、变量与作用域、函数作用域、程序的流程控制、条件语句与循环语句、数组的定义和使用、数组API、二维数组的使用“学子商城”项目
的基础页面理解JavaScript的语言原理与运行模式， 熟练掌握 JavaScript核心编程技巧，能够熟练使用JavaScript实现逻辑算法、流程控制
AjaxAjax原理、Ajax实现方式、get与post提交、JSON的定义和使用、HTTP协议、HTTP请求、HTTP响应、HTTP优化“学子商城”的服
务器端功能交互深入理解 Ajax的基本通信原理，掌握基于JSON的数据规则，透彻理解 HTTP协议，能够熟练使用Ajax 实现与服务器的异步通信，实现服务器端的通信分析，并完成页面的局部提交和刷新
阶段项目项目搭建、项目资源管理、静态页面编写、服务器端功能实现、前后端数据交互“学子商城”之用
户模块结合服务器端和AJAX知识，实现网站与服务器的交互功能，包括登录、注册、个人中心、用户信息维护等功能，深入理解 WEB 程序的结构和运行原理以及项目的开发流程




CSS3基础CSS3基础语法、各种选择器（通用选择器、元素选择器、id和class选择器、后代选择器、伪类选择器等）、框模型与背景、文本格式化、表格、显示与定位熟练掌握各种常用CSS选择器以及CSS样式的定 义和使用，能够手动完成各种页面样式的定义和编写
CSS3 高级复杂选择器、2D/3D转换（包括移动、旋转、倾 斜和缩放和视点）、过渡、动画、弹性布局、CSS Hack和优化、浏览器兼容性“学子商城”之用
户模块的静态页
面完善熟练掌握各种CSS复杂选择器以及高级应用，实现 页面的弹性布局，实现复杂页面效果的制作，理解CSS Hack和CSS优化，能够手动完成各种页面样式的定义和编写，并保证浏览器兼容性
阶段项目项目完善、静态页面编写、样式细节实现、页面动效制作“学子商城”项目
的所有静态页面
编写、页面样式、
页面动效实现完成“学子商城”项目所有静态页面的布局分析、设计，并用纯手写代码的方式实现整个页面，夯实 WEB前端基础，提高页面实操能力
JavaScript
高级String的使用及API、正则表达式的定义和使 用、 常用内置对象（Math、Date、Number、Boolean）、错误处理、Function 与匿名函数、作用域与闭包、面向对象编程、Object对象与对象模板、原型与继承、原型链、ECMAScript 5和ECMAScript 6的新特性“学子商城”项目
之商品模块的页
面编写、功能实
现以及服务器交
互功能完善理解JavaScript的语言原理与运行模式，熟练掌 握JavaScript核心编程技巧，能够熟练使用JavaScript实现逻辑算法、流程控制、界面验证以及功能实现
DOM 编程Document对象、节点对象、节点树、选取并读取节点、文档遍历以及增加节点、删除节点、元素样式编辑、Window对象、定时器、BOM模型、事件的定义及处理、event对、location对象、history对象、screen对象、cookie对象的使用深入理解DOM和BOM理论，熟练掌握DOM编程， 能够熟练的使用JavaScript原生代码对页面进行处理，完成各种页面动态效果以及动态交互的实现
阶段项目实战游戏项目搭建、游戏项目算法分析、WEB项目页 面功能实现1）2048或
者俄罗斯方块
2）“学子商城 ”
项目中页面功能
的实现 "通过游戏类项目，理解项目需求以及相关算法，熟练掌握网页型游戏程序的开发技术，深入理解JS的 应用技巧，提高编程力通过WEB项目，理解互联网 UI交互设计理论，完全手动代码实现WEB项目的页面功能，从而熟练掌握 WEB前端开发的必备技能
jQueryjQuery原理、jQuery的使用步骤、jQuery选择器（包括基本选择器、层次选择器、过滤选择器、表单选择器）、jQuery的DOM操作（包括 HTML页面元素的增删改查）、jQuery事件、事件冒泡与事件处 理、jQuery动画、jQuery常用 Plug-in、开发jQuery插件、jQuery扩展、jQuery的AJAX应用、AJAX的增强操作、JSONP与跨域访问“学子商城”项目
的购物车功能实
现掌握JQuery核心API，深入理解JQuery设计原则，了解多种 JQuery插件，能够熟练使用JQuery编程，实现页面各种功能、效果以及服务器端交互
阶段项目实战项目完善、服务器端功能实现、前后端数据交互、复杂跨域访问“学子商城”之订
单模块进一步完善项目中购物车、订单相关功能，熟练掌握 全栈开发中，从前端到后台开发的全部技能
HTML5高级表单功能、增强的表单控件、新表单元素及属性、表单验证、音频和视频处理、Canvas绘制及图像处理、Chart.js框架的使用、SVG元素及使用、Two.js框架的使用、ECharts框架的使用、Geolocation API、百度地图 API、Web StorageAPI（ 包 括 sessionStorage 和 localStorage）、HTML5拖放、 拖放事件及相关对象、WebWorker、Web Socket“学子商城”项目
的账户查询功能熟练掌握 HTML5 的各种新特性，能够熟练使用新表单特性实现页面功能，能够实现页面中的音视频处理，实现复杂绘图以及图表绘制，实现页面的地理定位操作以及页面的离线存储功能，能够熟练使用 HTML5进行各种 Web应用开发
阶段项目实战项目完善、WEB项目中H5功能的实现“学子商城”项目
完整功能分析页面功能需求，能够熟练使用 HTML5的相关技 术实现 WEB应用开发，使用原生技术完成整个项目的 PC版本的开发，熟练掌握原生代码开发技能



Bootstrap媒体查询技术、CSS的 @media规则、手动编写以及测试响应式网页、Bootstrap基础及其基础模板、全局CSS样式（包括布局、按钮、图片等）、栅格系统、组件（包括导航菜单、列表、警告框等）、JS插件（包括模态框、工具提示等）、LESS及Bootstrap定制“学子商城”项目
之响应式专题页
或者响应式个人
简历理解响应式布局的原理，熟练掌握 Bootstrap的核心API，能够熟练应用 Bootstrap的全局样式、组件以及 JS插件来实现响应式布局的开发、测试以及功能交互，并能够使用 LESS语言实现动态样式的编写以及定制
VueJSVue.js开发概述、环境搭建、 Vue指令、组件化应 用构建、组件通信、组件嵌套、自定义指令、 自定义过滤器、组件属性、组件的路由、路由跳转、网络请求、 Vue-Resource等理解 Vue.js的框架原理，熟练掌握数据驱动的渐进 式框架，能够熟练使用 Vue.JS实现视图层的开发，驱动复杂的单页应用
阶段项目实战使用框架技术实现“学子商城”项目的重构（视图层）深入理解电商项目前台站点和后台管理站点的需求，基于后台功能接口，实现后台管理站点的 WEB前端功能开发
AngularJS设计原则和模式、Angular的表达式和指令、MVC编程模型、控制器、双向数据绑定、过滤器和函数、服务和依赖注入、文件压缩、模块化编程、单页应用、路由、事件绑定、TypeScript、移动端开发支持、RxJS、国际化理解AngularJS的框架原理，熟练掌握 MVC编程模式，能够熟练使用AngularJS实现页面的重构和单页面WEB应用程序的开发
阶段项目实战使用框架技术实现“学子商城”项目的重构（MVC 模式）“学子商城”项目
重构了解软件开发流程，学习从功能分析到软件设计、再到功能实现的整个开发流程，能够熟练使用AngularJS的相关知识，实现Web应用程序的开发，并实现和其他框架的整合

WEB APPAPP开发环境、WEB APP开发模式、Android的开发环境及模式、使用 Ionic构建APP应用、使用Ionic实现页面构建、UI组件、CSS应用、基于AngularJS扩展API、路由控制、触屏事件、动画实现学习Android的开发环境、测试方式以及部署演， 结合Ionic的组件以及相关API，能够实现WEB页面到移动端的迁移和部署，熟练完成各种WEB APP的开发和实现
阶段项目实战使用移动端开发环境，结合APP框架技术，实现WEB APP的开发“学子商城”的
APP版了解WEB APP的开发模式，学习从功能分析到软件设计、再到功能实现的整个开发流程，能够熟练使用Ionic的相关知识，实现Web APP的开发，以及测试和部署
"React.js NativeReact.js概述、环境搭建、JSX、组件、state、组件生命周期、事件处理、表单、虚拟DOM算法简析、 实现ToDoList、React native概述、React native开发理解React的框架原理，熟练掌握组件的构建以及复用，能够熟练使用 ReactJS实现视图层的创建和渲染 ；学习react native，构建功能强大且流畅的APP
阶段项目实战使用跨平台移动应用开发框架，结合web前端技术，实现Hybrid App的开发“学子商城”后台
管理项目:PC版、
APP 版学习UI组件开发技术，熟练掌握react native的开发技能，能够灵活选择框架技术并实现APP的开发
混编APP框架混编APP概述、PhoneGap环境搭建、移动端事件处理、震动蜂鸣和加速度、地理位置和指南针等传感器的使用、多媒体控制、声音和图像采集APP版本的打包
部署熟练使用 PhoneGap实现混编APP开发，能够熟练完 APP的迁移和部署
微信开发微信开发准备（包括帐号注册、空间申请、域名解析等）、微信公众帐号开发及维护、JS-SDK API、微信小程序开发、WXML／ WXSS语法、微信小程序常用组件及API“学子商城”项目
的微信推广功能了解微信公众平台开发及维护的相关知识，掌握微信产品设计和接口开发实现的相关技能，能够基于微信平台开发微信应用小程序


node.jsNode.js 概述、搭建服务器端运行环境、交互模式 和脚本模式、全局对象、常用模块、NPM、事件循环、文件I/O、访问数据库、Express框架“学子商城”项目
的服务器端重构了解 Node.js服务器端应用特性，掌握常用模，熟 悉NPM模块管理，在学会文件I/O操作基础上，结合数据库访问和HTTP协议等相关知识，创建动态Web应用
常用JS框架最新前端框架技术，比如 zepto.js、require.js、redux、weex等，学习webpack、gulp等前端工具项目总结及打包
部署了解各种最新前端框架技术，紧跟技术前沿，学习常 用的web部署打包工具
阶段项目实战学习使用SVN进行源代码管理，以及使用GitHub进行代码托管，理解开源代码库以及版本控制系统的相关知识，学习多个项目的需求分析及开发流程项目库中多个备
选项目通过项目库中多个备选项目的学习，深入理解项目的开发流程、需求、项目搭建以及部署发布，熟练掌握完整WEB项目从前端到后台的完整开发技能

MongoDB
MongoDB快速入门、MongoDB概述和环境配置、实现基本的增删改查数据操作

复杂查询、修改操作、运算符、修改器的使用以及如何访问复杂数据结构

查询选项、索引定义及实现、复杂索引、查询优化、约束机制、数据操作优化

聚合操作、聚合框架、聚合操作符、分组操作、执行复杂数据统计和分析功能、对常见社交网络数据进行数据库建模

理解MongoDB的基本原理，熟练掌握MongoDB的安装、环境配置、基本原理、常用CRUD操作以及复杂操作，实现快速高效的修改和查询操作。学习高效率的查询技能，实现查询优化、统计和汇总，并结合基本的WEB前端页面来实现数据的操作和展示。以时下流行的社交网络为需求，设计数据库结构。
Node.js
Node.js 特点及适用场景、安装Node.js以及两种运行模式、Node.js基础语法和内置对象的使用、ES6中的新特性在Node.js中的使用

Node.js中的全局对象、四种定时器的使用、模块系统中的文件模块和目录模块、CommonJS包规范、使用NPM工具创建／上传／下载和维护第三方模块

常用原生模块（global、os、readline、querystring、url、path、dns、util、error 模块等）、常用API

进程和线程等操作系统基础知识、Node.js中的单线程模型、非阻塞型的异步事件、事件回调、events模块、自定义事件对象、添加事件监听函数和监听事件

使用Buffer模块操作缓冲区、fs模块、文件的访问模式、操作文件目录、异步和同步读取／写出／和追加文件内容、文件的管道式操作

HTTP协议、请求消息格式和响应消息格式、http模块、基于 HTTP协议的客户端应用和服务器端应用、HTTPS协议背景、加密技术、基于https模块创建服务器端应用和客户端应用

MySQL数据库的使用、常用 DDL／ DML／ DQL语句、复杂查询、mysql模块、实现数据连接和访问、连接池技术

第三方Express 模块、路由定义、接收 GET／POST／PUT／DELETE请求、消息返回、自定义和预定义中间件、EJS模板引擎整合

进程概述、process 全局对象、使用 child_process 模块、创建子进程、cluster 模块、进程集群

WebSocket协议、Socket.IO模块整合、全双工通信应用、Socket.IO中的事件、广播消息、划分名称空间和房间

从 Node.js的特点和使用方法开始，完整的学习 Node.js各种常用的原生模块，以及众多的第三方扩展模块。通过此课程的学习，可以全面掌握Node.js服务器端开发的各方面知识，正式步入Web全栈工程师行列。
项目实战
使用SVN/Git实现项目代码管理、使用Gulp实现项目的自动化构建、使用Webpack实现模块加载和打包管理、介绍软件工程标准流程和各阶段产出标准文档

分析并设计项目数据结构、编写SQL语句、创建初始数据库结构、创建Node.js服务器并整合常用模块、实现项目的服务器端业务逻辑

查询选项、索引定义及实现、复杂索引、查询优化、约束机制、数据操作优化

使用移动端框架创建移动版应用、实现项目的部署、打包安装调试

使用node.js和mongodb实现服务器端功能，使用常用前端框架构建使用，并完成 PC版和APP版本。 使用SVN/Git／Gulp实现项目代码管理和自动化构建 ；使用Webpack实现模块加载和打包管理 ；整合Yeoman生成器创建项目并实现工作流标准化。





Html5	css3	京东商城项目
常用浏览器及其内核	选择器、属性	样式初始化
WEB标准组成	引入方式和特性	项目流程文档
HTML常用标签	盒模型、浮动、定位	icon图标
标签语义化	CSS3新增选择器及新增属性	SEO
字符编码	高级技巧	DIV+CSS布局
HTML5新特性	伸缩布局/变形/过渡/动画	Web整站项目
HTML5常用标签	美食美客案例	动画效果制作
JavaScript基础	Web API	JavaScript高级	jQuery
JavaScript基础教程	Web API介绍	预解析	jQuery简介
操作符、表达式和语句	BOM	创建对象的4中方式	jQuery对象和DOM对象转换
流程控制	DOM	原型链、闭包、作用域链	选择器、DOM操作
分支结构、循环结构	模拟DOM结构	沙箱模式、严格模式	jQuery事件
数组、函数	DOM获取页面元素操作	函数的调用方式及this指向	链式编程和隐式迭代
对象	DOM中属性操作、节点操作	递归	jQuery的常见插件
JavaScript内置对象	DOM中事件操作详解	面向对象理论与实践	jQuery插件开发
匀速、变速动画	正则表达式及使用	jQuery团队合作实战
常见特效		

PHP后台开发	Ajax	前端模块化	阿里百秀项目
PHP基础	Ajax对象	模块化开发基本概念	开发准备工作
Get/Post传值	请求方式	模块化演变过程分析	实现后台登录
MySQL数据库	缓存问题及处理方式	AMD设计规范	实现分类管理功能
PHP操作MySQL	XML/json 传输数据	CMD设计规范	实现内容管理功能
HTTP协议	jQuery发送Ajax请求	RequireJS	实现前台页面
表单传值	跨域请求及解决方法	定义与成员导出	模板引擎ArtTemplate
会话技术cookie、session
	
	H5C3	Canvas	移动Web	Git	电商全端项目
    CSS3选择器	Canvas简介	视口和CSS单位	命令行	项目开发前后端技术
    CSS3新属性	绘图命令	流式布局、弹性盒模型	Git的基本使用	使用前后端分离开发模式
    2D转换与过渡	非零环绕原则	移动终端触摸事件处理	对比文件差异、还原、合并	安装nodejs环境
    3D转换	绘制形状、文字、图片	CSS预处理器LESS	回滚操作	使用git创建项目
    动画规则及基础属性	平移变换/缩放变换/旋转变换	移动端类库	远端仓库操作	使用git创建分支进行开发
    弹性盒模型布局	环境与优化	常见的移动端布局	使用github创建远端仓库	创建数据库
    CSS3炫酷活动页项目	Echarts数据报表	CSS框架		使用npm下载后台需要依赖的包
    HTML5多媒体操作		响应式金融平台移动端项目(Bootstrap)		使用npm启动项目
    HTML5新增API				分别实现移动端和PC端功能开发
    自定义播放器				实现首页、分类页、搜索功能
    地理定位				实现商品、登录、个人信息、分类功能
    
    
    NodeJS开发	Vue实战项目
    Node.js快速入门	Vue项目介绍
    模块化思想及操作	MVVM模式
    ES6常用语法	常用系统指令
    异步编程，非阻塞I/O	数据绑定
    Web开发工作流	指令、过滤器
    http模块初步实现服务器功能	品牌管理案例
    Node.js静态服务器功能	生命周期
    基于express实现动态网站	组件化、路由
    Node.js操作数据库	webpack
    express实现json和jsonp接口	项目实战
    Ajax与后台接口的前端渲染	项目打包和发布
    http模块主动发送请求	包管理与维护
    
    Angular实战项目	React实战项目	React Native实战开发移动App	移动App	微信小程序和公众号开发
    Angular介绍	webpack和gulp集成构建项目	使用fetch进行数据请求	混合app的优缺点	小程序介绍
    MVC模式在客户端的实现	es6语法书写组件	Promise	app开发的常见平台	小程序项目结构
    指令、过滤器、服务	React生命周期函数	列表组件	使用inoic打包app	UI开发
    单页应用、路由	操作dom元素	加载更多		API操作
    《豆瓣一刻》项目	绝对路由	列表分页		《豆瓣电影》项目
    重定向组件	详细页		
    代理方式进行跨域	常见的RN组件		
    项目实战	项目实战	
    
    框架封装	博学谷项目
    框架核心	模块化开发
    封装选择器框架	搭建整体项目架构
    封装事件框架	开发流程，调试，测试
    封装DOM操作链式编程	Bootstrap综合运用
    插件机制	AJAX真实数据交互
    JQuery插件结构剖析	
    设计框架的插件结构	
    封装属于传智自己的框架
    
    
    
    
    javascript是用来做什么的、 常见网页特效的原理、 js书写位置、 getELementById()、 什么是事件、 初识函数、 变量、 命名规范、 属性操作的第一种方法、 案例：热身练习讲解、 字符串、 属性操作的第二种方式、 练习：简易留言板、 if判断、 常用运算符"+","-","*","/"、 初始数组、 小例子: 点击按钮 加减数字、 案例：上一张下一张图片切换(数字版)、 案例2：上一张下一张图片切换(数组版)、 新的获取元素的方法、 获取一组元素操作、 for循环、 取模、 this关键字、 案例：简易仿select控件、 案例：单选模拟、 选项卡思路讲解
    
    字符串的格式、 string.length、 string.charAt(index)、 string.charCodeAt(index)、 string.indexOf("str")、 string.lastIndexOf("str")、 string.slice(start,end)、 string.split(separator)、 string.substr(start,length)、 string.substring(start,end)、 string.toLowerCase()、 string.toUpperCase()、 string.trim()、 模板字符串、 arr.length、 arr.push(data) arr.unshift(da、 arr.pop()、 arr.shift()、 arr.sort()、 arr.concat(arr2)、 arr.reverse()、 arr.join(separator)、 arr.slice(start,end)、 arr.splice()、 arr.forEach()、 arr.map()、 arr.filter()
    05
    对象
    创建对象、 new Object()、 {}、 in 操作符 for-in语句、 JSON(JavaScript Object Notation)、 Math 对象、 Math.abs() 返回绝对值、 Math.ceil() 返回向上取整后的数值、 Math.floor() 返回向下取整后的数值、 Math.round() 返回四舍五入后的数值、 Math.max(x,y) 、 Math.min(x,y) 、 Math.random() 、 Math.sqrt() 返回平方根、 Math.PI 圆周率、 角度和弧度的相互转换、 Math.sin() 返回正弦值、 Math.cos() 返回余弦值、 Math.tan() 返回正切值、 Math.asin() 返回反正弦值、 Math.acos() 返回反余弦值、 Math.atan() 返回反正切值
    
    定时器和动画帧
    setInterval(执行函数,间隔时间) 间隔型定时器、 间隔一定时间，重复执行，执行函数、 返回值是定时器的编号、 setTimeout(执行函数,延迟时间) 延迟型定时器、 延迟一定时间执行，执行函数、 返回值是定时器的编号、 关闭定时器、 clearInterval(定时器编号) 关闭setInterval开启的定时器、 clearTimeout(定时器编号) 关闭setTimeout开启的定时器、 定时器管理、 requestAnimateFrame(function) 动画帧、 CancelAnimationFrame(动画帧编号)、 关闭动画帧、 CancelAnimationFrame的兼容处理、 封装兼容的动画帧处理方法
    07
    动画函数封装
    tween.js tween类来自于flash，在tween中封装了各种各样的动画算法、 tween的动画，主要依赖于t，b，c，d四个参数：、 t 动画当前执行至第几次、 b 需要动画的样式的初始值、 c 需要动画的样式的初始值和结束值的差值、 d 动画执行总次数、 案例: 控制小方块移动、 单个元素，单个属性动画封装、 多个元素，单个属性动画封装、 多个元素，多个属性动画封装、 添加回调函数、 在动画结束之后，添加callBack() 回调函数、 在动画执行中，添加callIng() 回调函数、 call 修改函数在执行中的this执行
    
    transform相关
    transoform 变换、 rotate 元素旋转、 角度单位、 scale 元素缩放、 skew、 translate、 transform的执行顺序、 transform-origin、 transoform3D rotate3D、 translate3D、 transform-style 、 perspective 、 perspective-origin 、 backface-visibility 、 案例：3d盒子、 利用transform做动画的好处、 transform在获取时，获取到的是矩阵，不能直接进行计算、 封装transform获取和设置方法、 把封装好的transform方法引入css方法、 transition过渡 为元素的样式变化时添加动画、 animation、 分析3种动画实现方式的不同
    09
    Date对象
    Date对象主要用于获取或设置时间，用法 new Date()、 日期获取相关参数： Date() 、 getDate() 、 getDay() 、 getMonth() 、 getFullYear() 、 getHours() 、 getMinutes() 、 getSeconds() 、 getMilliseconds() 、 getTime() 、 Date.now() 、 案例：时钟效果、 日期获取相关参数、 new Date(2018,4,1,0,0,0)、 new Date('June 10,2018 0:0:0')、 new Date(new Date().getTime())、 setDate() 、 setMonth() 、 setFullYear() 、 setYear() 、 setHours() 、 setMinutes() 、 setSeconds() 、 setMilliseconds() 、 setTime()
    
    
    BOM
    BOM (browser object model) 浏览器对象模型,、五大对象：window、navigator、locaation、history、screen window 对象、 window.open(URL,name,features,replace) 打开新窗口、 window.close() 关闭窗口、 页面相关距离获取、 可视区大小、 页面大小、 窗口滚动条距离、 window常用事件、 scroll 监听滚动条滚动、 resize 监听窗口大小发生变化、 location 对象、 href hash search host hostname pathname port protocol reload()、 navigator、 screen、 history
    11
    事件基础
    事件、 事件监听器 、 el.removeEventListener("event",func,事件流)、 事件流、 事件对象、 e.target 事件源，发生事件的元素、 e.type 事件类型、 阻止冒泡、 阻止默认行为、 鼠标位置获取、 e.button 返回用户按下的是鼠标的哪个键、 键盘事件、 滚轮事件、 常用事件汇总：、 鼠标事件、 键盘事件、 keydown 键盘按下、 keyup	键盘抬起、 表单事件、 change 状态发生改变、 input value发生变化、 blur 失去焦点 focus 获得焦点、 reset 重置时、 submit 提交时、 submit() 提交表单
    
    事件应用
    拖拽的原理分析、 事件：mousedown鼠标按下，mousemove 鼠标移动、mouseup 鼠标抬起、 记录信息、 move时获取新的鼠标坐标，计算出move于down之间的位移值、 用down时的鼠标坐标加上位置值求出元素拖拽后的坐标、 案例：限制范围拖拽、 碰撞检测、 检测元素所有不会碰撞的状态，剩余状态便是碰撞了、 综合案例：拖拽图片，碰撞交换位置、 自定义滚动条、 根据内容高度和外框高度计算滚动条高度、 为滚动条添加限制范围拖拽、 添加滚轮操作移动滚动条位置、 根据滚动条移动距离同步内容移动距离
    13
    移动端事件
    touch事件、 touchEvent、 touches 当前屏幕上的手指列表 targetTouches 当前元素上的手指列表、 changedTouches 触发当前事件的手指列表、 案例：移动端幻灯片效果实现、 orientationchange 事件，监听手机横竖屏切换、 window.orientation 获取当前手机横竖屏状态、 devicemotion 事件,监听手机加速度发生变化、 -accelerationIncludingGravity 加速度对象 deviceorientation 事件, 监听手机旋转角度发生变化、 ev.alpha 围绕Z轴的旋转角度、 ev.beta 围绕X轴的旋转角度、 ev.gamma 围绕Y轴的旋转角度
    
    Node.js
    node环境搭建、 node模块使用、 commonJS规范、 内置模块、 第三方模块、 使用http模块搭建web server、 nodejs-web开发框架介绍、 express、 sails、 koa、 express.io、 express的安装、 npm init配置安装、 package.json配置安装、 express项目初始化、 项目的创建、 项目的启动运行、 Routing的使用、 路由方法:http method、get、post、body-parse模块、 route paths(路由路径)：字符串路由、字符串模式路由、正则路由、 swig模板引擎、 安装swig、 express中使用swig、 数据库
    15
    Ajax
    ajax全称为Asynchronous JavaScript And XML，即异步的JavaScript和XML，主要用来与服务器进行通信，在不重新加载页面的情况下发送请求给服务器，做到无刷新页面更新数据，接受并使用从服务器发来的数据。创建包含发送请求和响应功能的对象：new XMLHttpRequest。课程包括原生ajax知识点：get,post,状态码status,原生ajax库的封装使用，jQuery中ajax的使用，axios库的使用，ajax文件上传 、跨域产生和解决方案、cookie介绍，http 协议、获取cookie，设置cookie、localStorage介绍。
    
    DOM
    DOM(文档对象模型)：DOM树，DOM根据文档结构描绘出的一个层次化的节点树。DOM节点childNodes 子节点、节点的层级关系：parentNode父节点，children子元素、元素相关尺寸及位置获取：offsetLeft / offsetTop，clientLeft / clientTop，getBoundingClientRect() 、元素的属性操作：getAttribute，setAttribute，removeAttribute、元素操作：createElement，appendChild/insertBefore，removeChild、表格操作。综合案例：配后端的留言板案例(添加留言、删除留言)
    17
    
    面向对象
    面向对象编程面向对象编程（oop）是一种编程思想，用抽象方式创建基于现实世界模型的一种编程模式。目的是在编程中促进更好的灵活性和可维护性。JavaScript是基于构造函数（constructor）和原型链（prototype），JavaScript 语言使用构造函数（constructor）作为对象的模板。所谓”构造函数”，就是专门用来生成对象的函数。它提供模板，描述对象的基本结构。一个构造函数，可以生成多个对象，这些对象都有相同的结构。面向对象三大特性：封装、 继承、多态。
    19
    JQuery3
    jQuery是一个兼容多浏览器的javascript库，核心理念是write less,do more(写得更少,做得更多)。它的语法设计可以使开发更加便捷，例如操作文档对象、选择DOM元素、制作动画效果、事件处理、使用Ajax、编写和使用jQuery插件以及其他功能。课程包含：选择器jQuery( selector [context ] )、工具方法：$.type()、$.isFunction()、$. isNumeric()、DOM/BOM过滤操作，增删改操作、jQuery事件系统、jQuery动画、编写和使用jQuery插件,$.extend()扩展JQuery静态方法,$().extend()扩展JQuery动态方法
    
    ECMAScript6
    ECMAScript6是目前ECMAScript语言规范的标准，通常被称为"ES2015"。可用var、let、const声明不同类型的关键字。ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。除此之外还新增了：模板字符串（增强版的字符串）、箭头函数（使用“箭头”（=>）定义函数）、函数的扩展（给形参直接赋值）、数组的扩展、字符串的扩展（str.repeat(n)返回一个新字符串，表示将原字符串重复n次。）、对象的扩展（函数可省略function关键字）和简写等内容。
    21
    React+redux 开发
    React.js 是一个帮助你构建页面 UI 的库，它不是一个框架，它只是一个库。它只提供 UI （view）层面的解决方案。React.js 将帮助我们将界面分成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套，就成了我们的页面。组件的显示和行为有可能是由某些数据决定的。而 React.js 也提供了一种非常高效的方式帮助我们做到了数据和组件显示形态之间的同步。内容包括：React.js、react-router-dom、redux状态管理、webpack...
    
    vue2.0
    Vue是一个构建数据驱动的Web界面的库，通过简单的API提供高效的数据绑定和灵活的组件系统。具有简洁、轻量、快速、数据驱动、组件化等特点，除此之外，还具有上手快，简单易学，学完即用，快速开发的优势。可把页面组件化、模块化，分工明确，互不干涉，低耦合的设计使组件可复用、可测试，更易于维护。响应式编程，开发者只需要聚焦在状态的逻辑处理上，让框架来进行DOM操作，不需要自己手动更新视图、官方提供健全的周边工具，例如vue-cli、vue-router、vuex...
    
    
    
    
    第三章 面向对象
    在面向对象语言中，理解类和对象的概念
    工厂方法
    构造函数模式
    new 调用构造函数经历的步骤
    instanceof 验证对象和构造函数之间的关系
    原型模式
    constructor 指向拥有这个原型的构造函数
    proto 属性
    原型链的概念
    第四章 归纳 JS 中继承的方式
    继承的概念
    原型链式
    类式继承
    拷贝继承
    【案例】动态创建小球具有拖拽功能
    第五章 ES6 中的面向对象
    当使用原始类型的值，隐式创建对应类型的对象，称为包装对象
    valueOf() 获取对应类型的原始值
    for…in 循环对象上所有可枚举[enumerable]的属性
    in 操作符
    hasOwnProperty()
    ES6 引入了Class（类）这个概念，通过 class 关键字，可以定义类。
    定义的方式：声明式和表达式
    class 类的继承：通过 extends 关键字实现继承
    第六章 订阅发布模式（自定义事件）
    模态框组件的封装
    模态框基本样式
    可定制模态框
    订阅者
    发布者
    取消订阅
    自定义事件
    解耦程序
    【实例】完全解耦拖拽功能
    第七章 ajax 的工作原理解析
    jQuery 中 ajax 的使用
    前后盾交互示意
    使用 $.ajax 发送请求接口
    ajax 函数参数说明
    ajax 介绍和优缺点
    创建对象 XMLHttpRequest()、open 方法、send()、onload
    同步和异步
    get 和 post 的区别
    JSON 数据格式
    JSON.parse() 解析 json 字符串为对象
    JSON.stringify() 把对象转成 json 字符串
    Ajax 工作步骤
    第八章 跨域解决方案
    转成二进制数据 ：new FormData
    upload.onprogress：监控上传触发的事件
    跨域的产生分析
    跨域常用的解决方式
    标准浏览器，利用 XMLHttpRequest() 与后端配合来解决
    后端代理
    jsonp 利用 script 标签可以请求任意域名的 JS 脚本的能力来实现
    【实例】百度搜索
    第九章 ajax 和 jsonp 实战应用
    【实例】瀑布流
    案例需求分析
    瀑布流原理分析
    瀑布流实现
    
    【实战】豆瓣搜索
    
    豆瓣开发 API 分析
    利用 jsonp 请求数据
    数据渲染页面
    第十章 jQuery 常用 API
    JQ 的选择器
    JQ 的属性操作(attr,prop)
    JQ 的 DOM/BOM 操作
    JQ 的事件系统
    【实例】JQ 版本的选项卡
    【实例】JQ 版本留言板
    第十一章 jQuery 运动和插件使用
    animate 的使用
    JQ 的运动 animate
    JQ 工具方法使用
    插件的原理分析和使用
    第十二章 node 的模块分析使用
    搭建 webserver，http 模块
    前后端交通信流 get、post 处理
    模块系统
    npm 的使用
    第十三章 深入使用 express 框架
    express 框架安装和使用
    利用 express 写一个服务器
    服务端路由分析
    管理静态文件 static
    第十四章 express 框架实战
    swig
    中间件的使用
    get 和 post 数据的获取
    【实战】
    第十五章 自动化打包工具 - webpack
    webpack 介绍
    webpack 配置文件组织
    入口配置 entry
    出口配置 output
    模块处理 module
    加载器 loaders
    插件 plugins
    第十六章 vue 的语法梳理
    vue 的响应数据绑定
    vue 的指令含义：v-bind、v-on、v-model、v-if
    vue 的事件系统
    计算属性
    watch 属性
    第十七章 vue 的组件
    组件组成分析
    定义和使用组件
    组件之间的通信
    slot 插槽
    第十八章 vue 周边工具
    vue-cli 脚手架
    vue-router 路由配置
    【实例】任务管理列表
    第十九章 React 简介
    虚拟 DOM 单向数据流 JSX
    搭建 react 环境
    ReactDOM.render()
    map 方法使用
    事件 event 事件应用
    ref、refs 使用
    state
    第二十章 组件之间的通信
    组件之间的通信
    组件之间的嵌套
    组件的生命周期
    todoList（例子）
    第二十一章 react 路由
    react-router-dom
    Route，Link
    children,render 路由对象
    exact,strict
    改写 todoList（例子）
    第二十二章 antd-mobile 移动端实战
    导航栏
    tabs
    轮播
    第二十三章 antd-mobile 移动端实战
    列表信息组件
    数据请求fetch
    下拉刷新
    上拉加载
    
    课程大纲（上）
    第一节：变量、事件、函数、style 属性操作
    javascript 介绍
    javascript 出现的位置
    从实例开始
    获取元素
    变量
    事件
    初始函数
    属性操作
    第二节：元素的其他属性、字符串、classList 的使用、流程控制—-if、数组
    元素的其他属性
    字符串
    classList 的使用
    程序的流程控制
    流程控制—- if 分支语句
    数组
    第三节：获取元素的方法、类数组、流程控制—-for、this 关键字、模拟单选/多选、选项卡思维
    获取元素的方法
    类数组
    流程控制—- for 循环语句
    for 语句使用的场景
    for 循环语法分析和执行过程示意
    【实例】生成多个 div
    【实例】给每一个元素绑定点击处理
    this 关键字
    位于全局和函数中
    this 的值不固定，随着执行环境（上下文）的改变而改变
    点击处理中 this 的指向
    【实例】模拟单选
    【实例】模拟多选
    选项卡思维
    选项卡基本原理分析
    应用场景
    自定义属性
    第四节：京东无缝滚动幻灯片、百度音乐全选
    第五节：数据类型、数据类型转换、运算符、【实例】找数据
    数据类型
    数据类型转换
    运算符
    【实例】找数据
    第六节：深入理解函数、作用域、作用域链、闭包
    深入理解函数
    [实例]获取计算后元素的指定样式
    作用域
    【实例】商品累计
    第七节：开启定时器、停止定时器、延迟消失的广告、无缝轮播图片
    开启定时器
    【实例】让一个元素运动起来
    【实例】延迟消失菜单
    停止定时器
    【实例】延迟消失的广告
    mTween 函数的使用
    参数说明
    【实例】无缝轮播图片
    需求分析
    无缝轮播图片的原理
    第八节：日期对象、获取/设置时间和日期的方法、字符串方法学习、打字机案例
    日期对象
    创建日期对象：new Date ()
    参数：不传参、传入字符串、传入时间戳
    获取时间和日期的方法
    设置时间和日期的方法
    【例子】获取当前月份有多少天
    【例子】获取一个月的 1 号星期几
    【例子】倒计时
    如何学习一个方法
    字符串方法学习
    【实例】打字机
    第九节：数组方法学习、筛选人物信息、数组去重、Math 方法
    数组方法学习
    【案例】筛选人物信息
    数组去重
    Math方法
    第十节：冒泡排序、快速排序、sort 方法、递归原理分析、无限级菜单
    冒泡排序和快速排序原理分析
    sort 方法排序时候的注意点
    递归原理分析
    【实例：递归的运营—-无限级菜单】
    第十一节：Es6 基础语法、let、const、解构赋值、数组扩展、对象扩展、函数的扩展
    声明变量的方式
    let 和 var 的异同点
    定义常量 const
    数组的解构赋值
    数组扩展：Array.from()、Array.isArray()
    对象扩展：Object.is()、Object.assign()
    函数的扩展：rest 参数、参数默认值、箭头函数=>
    第十二节：DOM 介绍、DOM节点类型和关系、DOM 属性操作、无限级菜单展开收缩操作
    DOM 节点类型和关系
    DOM 属性操作
    DOM 元素操作
    【实例—-无限级菜单展开收缩操作】
    第十三节：元素尺寸、登录框实例、定位父级、getBoundingClientRect
    元素尺寸：可视区域宽高、元素宽高
    滚动触发事件、浏览器大小改变触发事件
    定位父级：offsetParent
    getBoundingClientRect :返回元素的大小及其相对于视口的位置
    【实例：居中显示的登录框】
    【实例：tip 特别提醒框】
    第十四节：BOM 介绍、用户代理信息、BOM 常用方法、地址栏信息、BOM 常用事件、招聘信息的实例
    回顾 js 的组成：ECMAscript 、DOM —- 文档对象模型、BOM —- 浏览器对象模型
    BOM 介绍
    BOM 常用方法：open、close
    用户代理信息：window.navigator.userAgent
    URL 完整的组成
    【实例：判断是否是移动端】
    【实例：招聘信息】
    第十五节：事件、绑定事件处理程序、事件对象、事件流、冒泡的利弊、阻止浏览器默认行为
    事件的产生
    绑定事件处理程序：HTML 事件处理程序、DOM1 级事件处理程序、DOM2 级事件处理程序
    事件对象的获取
    事件流：事件流描述的是从页面中接收事件的顺序。
    事件的三个阶段：事件捕获阶段、处于目标阶段、事件冒泡阶段
    冒泡的利弊、阻止浏览器默认行为
    【实例：事件委托的利用】
    【实例：拖拽元素的实现】
    第十六节：鼠标事件、鼠标事件实例—-放大镜、鼠标滚轮事件、call 和apply、焦点事件
    鼠标滚轮事件和兼容处理：mousewheel、DOMMouseScroll
    call 和 apply 的使用和异同点
    焦点事件：onfcus、onblur
    【实例：封装mousewheel函数】
    第十七节：键盘事件、事件对象上的功能属性、自定义滚动条、生成自由选区、碰撞检测
    键盘事件：onkeydown、onkeyup
    事件对象上的功能属性：shiftKey、ctrlKey、altKey
    自定义滚动条：滚动条的原理分析、比例计算
    生成自由选区
    九宫格碰撞检测
    【实例：框选选中元素】
    第十八节： 实战案例：云盘《一》
    事件扁平化格式介绍
    渲染无限极属性菜单
    封装操作数据的算法
    利用事件委托写进入目录的交互
    自定义全选单选框
    第十九节：实战案例：云盘《二》
    新建文件夹
    删除文件夹
    重命名文件夹
    框选文件夹
    第二十节：总结
    课程回顾和梳理
    常见问题解答
    学习情况总结序、事件对象、事件流、冒泡的利弊、阻止浏览器默认行为、兼容问题
    
    第三章 面向对象
    在面向对象语言中，理解类和对象的概念
    工厂方法
    构造函数模式
    new 调用构造函数经历的步骤
    instanceof 验证对象和构造函数之间的关系
    原型模式
    constructor 指向拥有这个原型的构造函数
    proto 属性
    原型链的概念
    第四章 归纳 JS 中继承的方式
    继承的概念
    原型链式
    类式继承
    拷贝继承
    【案例】动态创建小球具有拖拽功能
    第五章 ES6 中的面向对象
    当使用原始类型的值，隐式创建对应类型的对象，称为包装对象
    valueOf() 获取对应类型的原始值
    for…in 循环对象上所有可枚举[enumerable]的属性
    in 操作符
    hasOwnProperty()
    ES6 引入了Class（类）这个概念，通过 class 关键字，可以定义类。
    定义的方式：声明式和表达式
    class 类的继承：通过 extends 关键字实现继承
    第六章 订阅发布模式（自定义事件）
    模态框组件的封装
    模态框基本样式
    可定制模态框
    订阅者
    发布者
    取消订阅
    自定义事件
    解耦程序
    【实例】完全解耦拖拽功能
    第七章 ajax 的工作原理解析
    jQuery 中 ajax 的使用
    前后盾交互示意
    使用 $.ajax 发送请求接口
    ajax 函数参数说明
    ajax 介绍和优缺点
    创建对象 XMLHttpRequest()、open 方法、send()、onload
    同步和异步
    get 和 post 的区别
    JSON 数据格式
    JSON.parse() 解析 json 字符串为对象
    JSON.stringify() 把对象转成 json 字符串
    Ajax 工作步骤
    第八章 跨域解决方案
    转成二进制数据 ：new FormData
    upload.onprogress：监控上传触发的事件
    跨域的产生分析
    跨域常用的解决方式
    标准浏览器，利用 XMLHttpRequest() 与后端配合来解决
    后端代理
    jsonp 利用 script 标签可以请求任意域名的 JS 脚本的能力来实现
    【实例】百度搜索
    第九章 ajax 和 jsonp 实战应用
    【实例】瀑布流
    案例需求分析
    瀑布流原理分析
    瀑布流实现
    
    【实战】豆瓣搜索
    
    豆瓣开发 API 分析
    利用 jsonp 请求数据
    数据渲染页面
    第十章 jQuery 常用 API
    JQ 的选择器
    JQ 的属性操作(attr,prop)
    JQ 的 DOM/BOM 操作
    JQ 的事件系统
    【实例】JQ 版本的选项卡
    【实例】JQ 版本留言板
    第十一章 jQuery 运动和插件使用
    animate 的使用
    JQ 的运动 animate
    JQ 工具方法使用
    插件的原理分析和使用
    第十二章 node 的模块分析使用
    搭建 webserver，http 模块
    前后端交通信流 get、post 处理
    模块系统
    npm 的使用
    第十三章 深入使用 express 框架
    express 框架安装和使用
    利用 express 写一个服务器
    服务端路由分析
    管理静态文件 static
    第十四章 express 框架实战
    swig
    中间件的使用
    get 和 post 数据的获取
    【实战】
    第十五章 自动化打包工具 - webpack
    webpack 介绍
    webpack 配置文件组织
    入口配置 entry
    出口配置 output
    模块处理 module
    加载器 loaders
    插件 plugins
    第十六章 vue 的语法梳理
    vue 的响应数据绑定
    vue 的指令含义：v-bind、v-on、v-model、v-if
    vue 的事件系统
    计算属性
    watch 属性
    第十七章 vue 的组件
    组件组成分析
    定义和使用组件
    组件之间的通信
    slot 插槽
    第十八章 vue 周边工具
    vue-cli 脚手架
    vue-router 路由配置
    【实例】任务管理列表
    第十九章 React 简介
    虚拟 DOM 单向数据流 JSX
    搭建 react 环境
    ReactDOM.render()
    map 方法使用
    事件 event 事件应用
    ref、refs 使用
    state
    第二十章 组件之间的通信
    组件之间的通信
    组件之间的嵌套
    组件的生命周期
    todoList（例子）
    第二十一章 react 路由
    react-router-dom
    Route，Link
    children,render 路由对象
    exact,strict
    改写 todoList（例子）
    第二十二章 antd-mobile 移动端实战
    导航栏
    tabs
    轮播
    第二十三章 antd-mobile 移动端实战
    列表信息组件
    数据请求fetch
    下拉刷新
    上拉加载
    
    
    
    HTML5标签及兼容处理
    CSS3属性
    CSS3选择器
    移动端页面设计规范及分析
    移动端视口概念
    媒体查询
    rem 及 百分比布局
    综合实战 – QQ音乐
    弹性盒模型
    弹性盒模型综合实战
    移动端综合实战案例
    知识点综合应用 总结及讲解面试题
    
    
    盒子模型
    盒子模型的兼容问题
    BFC
    基线对齐方式
    overflow
    ps的使用
    综合实战
    浮动
    定位
    背景background属性
    雪碧图的制作和使用
    网格布局
    轮廓线
    margin的负值技巧
    一周综合练习
    设计图解析
    导航练习
    banner练习
    网格布局及结构复用
    表单知识及练习
    完整网站综合练习
    
    数据类型
    条件、循环语句
    DOM基础
    数组和对象
    String
    Math方法
    Date类
    数据类型转换
    定时器
    
    
    
    预解释
    闭包
    this关键字
    call和apply深入
    作用域和作用链
    面向对象
    原型和继承
    JS中的封装、继承和多态
    DOM实现原理和DOM深入
    正则表达式及实战
    JSON和JSON的解析
    事件、事件传播和委托
    DOM二级事件兼容性问题解决
    事件原理和自定义事件
    事件驱动和事件发射器
    拖拽和原生拖拽事件
    手机的touch/gesture事件模型
    Ajax
    HTTP协议
    服务器和浏览器模型
    nodeJS
    Ajax同源策略和跨域
    惰性函数
    函数柯里化
    大数据处理
    内存管理
