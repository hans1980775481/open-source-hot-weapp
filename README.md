## 声明
本项目只提供了UI样式和固定数据，因为后端使用了多种语言，不方便上传和部署，所以这里并没有公布。如果你需要全部源码(java 后端以及Python爬虫等)，请留下你的邮箱。

数据来自[GitHub API](https://developer.github.com/v3/ "GitHub API")及[GitEE Api](https://gitee.com/api/v5/swagger#/ "GitEE Api")，部分数据来自网页爬虫。此小程序非移动版客户端，不可以登录，不能查看和管理你在GitHub或GitEE中Star的项目，因为不能保证你的账户数据是否会泄露。

**感谢：**
- [wux-weapp](https://github.com/wux-weapp/wux-weapp "wux-weapp")提供UI组件库
- [html2wxml](https://github.com/qwqoffice/html2wxml "html2wxml")提供富文本渲染组件


## 部署方式
- 由于[html2wxml]富文本组件采用插件方式引用，需要在小程序公众平台添加[**html2wxml富文本组件**]插件，如下图所示
![](https://www.svipss.top/20190917/html2wxml.jpg)

- 在小程序全局参数配置[**project.config.json**]中，设置你自己的appid

![](https://www.svipss.top/20190917/config.json.png)



## 部分页面演示
![](https://www.svipss.top/20190917/github_main.png)

![](https://www.svipss.top/20190917/github_desc.jpg)

![](https://www.svipss.top/20190917/github_code.jpg)

![](https://www.svipss.top/20190917/code.jpg)

![](https://www.svipss.top/20190917/conllection.jpg)

## 扫码体验
![logo](https://www.svipss.top/20190917/logo.jpg "logo")



