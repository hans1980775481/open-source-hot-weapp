// pages/list/list.js
const app = getApp();
import {
  $wuxToast
} from '../../wux/index'

const seasons = ['所有语言', 'Java', 'Python', 'JavaScript', 'C', 'C++', 'C#', 'PHP', 'GO', 'Android', 'Objective-C']
const searchTitle = '根据已选择条件搜索'
Page({

  /**
   * 页面的初始数据
   */

  data: {

    // 自定义导航栏显示内容
    title: 'Gitee Star榜',
    barBg: '#ffffff',//#ff6600
    color: '#000000',//#ffffff
    
    // 右滑显示内容
    right: [
      {
        text: '收藏',
        style: 'background-color: #F4333C; color: white',
      }],
      
     // 搜索框属性
    inputShowed: false,
    inputVal: "",
    placeholder: searchTitle,
    value: [],

     // 下拉框属性
    selectedIdx: [0],
    displayValue: '选择语言',
    seasons,


    index: 1, // 当前页

    // 主页显示内容
    list: [{"star":"17.5K","projectName":"shuzheng/zheng","lang":"Java","url":"https://gitee.com/shuzheng/zheng","desc":"基于Spring+SpringMVC+Mybatis分布式敏捷开发系统架构，提供整套公共微服务服务模块：集中权限管理（单点登录）、内容管理、支付中心、用户管理（支持第三方登录）、微信平台、存储系统、配置中心、日志分析、任务和通知等，支持服务治理、监控和追踪，努力为中小型企业打造全方位J2EE企业级开发解决方案。","tags":["Web开发框架","后台管理框架","MIT"]},{"star":"13.3K","projectName":"程序猿DD/SpringBoot-Learning","lang":"Java","url":"https://gitee.com/didispace/SpringBoot-Learning","desc":"Spring Boot基础教程，Spring Boot 2.x版本连载中！！！","tags":["教程配套代码","图书/手册/教程"]},{"star":"9.9K","projectName":"The Sun/Cloud-Platform","lang":"Java","url":"https://gitee.com/geek_qi/cloud-platform","desc":"Cloud-Platform是国内首个基于Spring Cloud微服务化开发平台，具有统一授权、认证后台管理系统，其中包含具备用户管理、资源权限管理、网关API 管理等多个模块，支持多业务系统并行开发，可以作为后端服务的开发脚手架。代码简洁，架构清晰，适合学习和直接项目中使用。 核心技术采用Spring Boot 2.1.2以及Spring Cloud (Greenwich.RELEASE) 相关核心组件，采用Nacos注册和配置中心，集成流量卫兵Sentinel，前端采用vue-element-a...","tags":["后台管理框架","Apache-2.0"]},{"star":"9.5K","projectName":"stylefeng/Guns","lang":"Java","url":"https://gitee.com/stylefeng/guns","desc":"Guns基于Spring Boot2，致力于做更简洁的后台管理系统。包含系统管理，代码生成，多数据库适配，SSO单点登录，工作流，短信，邮件发送，OAuth2登录，任务调度，持续集成，docker部署等功。支持Spring Cloud Alibaba微服务。社区活跃，版本迭代快，加群免费技术支持。","tags":["后台管理框架"]},{"star":"8.6K","projectName":"iBase4J/iBase4J","lang":"Java","url":"https://gitee.com/iBase4J/iBase4J","desc":"基于SpringBoot 2.0，SpringMVC，Mybatis，mybatis-plus，motan/dubbo分布式，Redis缓存，Shiro权限管理，redis管理Session，Quartz分布式集群调度，Restful服务；系统管理：包括用户管理、权限管理、数据字典、系统参数管理等等；支持QQ/微信登录，App token登录，微信/支付宝支付；日期转换、数据类型转换、序列化、汉字转拼音、身份证号码验证、数字转人民币、发送短信、发送邮件、加密解密、图片处理、excel导入导出、FTP/...","tags":["Web开发框架","Apache-2.0"]},{"star":"8.5K","projectName":"pig4cloud.com/pig","lang":"Java","url":"https://gitee.com/log4j/pig","desc":"基于Spring Boot 2.1.7、 Spring Cloud Greenwich.SR2、 OAuth2 的RBAC 权限管理系统。  记得右上角点个star 关注更新","tags":["后台管理框架","LGPL-3.0"]},{"star":"8.1K","projectName":"若依/RuoYi","lang":"Java","url":"https://gitee.com/y_project/RuoYi","desc":"基于SpringBoot的权限管理系统 易读易懂、界面简洁美观。 核心技术采用Spring、MyBatis、Shiro没有任何其它重度依赖。直接运行即可用","tags":["后台管理框架","MIT"]},{"star":"7.5K","projectName":"Hutool/hutool","lang":"Java","url":"https://gitee.com/loolly/hutool","desc":"Hutool是一个Java工具包，也只是一个工具包，它帮助我们简化每一行代码，减少每一个方法，让Java语言也可以“甜甜的”。","tags":["常用工具包","MulanPSL-1.0"]},{"star":"7.3K","projectName":"JFinal/JFinal","lang":"Java","url":"https://gitee.com/jfinal/jfinal","desc":"JFinal 是基于 Java 语言的极速 WEB + ORM 框架，其核心设计目标是开发迅速、代码量少、学习简单、功能强大、轻量级、易扩展、Restful。在拥有Java语言所有优势的同时再拥有ruby、python、php等动态语言的开发效率！为您节约更多时间，去陪恋人、家人和朋友 :)","tags":["Web开发框架","Apache-2.0"]},{"star":"6.9K","projectName":"铭飞/MCMS","lang":"Java","url":"https://gitee.com/mingSoft/MCMS","desc":"完整开源！Java快速开发平台！基于SpringBoot 2架构，前端基于vue、element ui。一套简单好用的开源系统、一整套优质的开源生态内容体系。铭飞的使命就是降低开发成本提高开发效率，提供全方位的企业级开发解决方案，每月28定期更新版本。MStore为使用者提供上百套免费模板,同时提供适用的插件（文章、商城、微信、论坛、会员、评论、支付、积分、工作流、任务调度等...）","tags":["CMS建站系统","MIT"]}],
  },

  getGitEEData: function (index) {
    var that = this;
    var params = {
      'index': index,
      'language': that.data.selectedIdx[0]
    }
    app.commonRequest(that.data.giteeDataUrl, params, "GET").then(function (response) {
      that.setData({
        list: response
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that = this;
    var sv = that.data.inputVal;
    if (sv != '') {
      return
    }
    that.setData({
      index: 1,
      list: [{"star":"17.5K","projectName":"shuzheng/zheng","lang":"Java","url":"https://gitee.com/shuzheng/zheng","desc":"基于Spring+SpringMVC+Mybatis分布式敏捷开发系统架构，提供整套公共微服务服务模块：集中权限管理（单点登录）、内容管理、支付中心、用户管理（支持第三方登录）、微信平台、存储系统、配置中心、日志分析、任务和通知等，支持服务治理、监控和追踪，努力为中小型企业打造全方位J2EE企业级开发解决方案。","tags":["Web开发框架","后台管理框架","MIT"]},{"star":"13.3K","projectName":"程序猿DD/SpringBoot-Learning","lang":"Java","url":"https://gitee.com/didispace/SpringBoot-Learning","desc":"Spring Boot基础教程，Spring Boot 2.x版本连载中！！！","tags":["教程配套代码","图书/手册/教程"]},{"star":"9.9K","projectName":"The Sun/Cloud-Platform","lang":"Java","url":"https://gitee.com/geek_qi/cloud-platform","desc":"Cloud-Platform是国内首个基于Spring Cloud微服务化开发平台，具有统一授权、认证后台管理系统，其中包含具备用户管理、资源权限管理、网关API 管理等多个模块，支持多业务系统并行开发，可以作为后端服务的开发脚手架。代码简洁，架构清晰，适合学习和直接项目中使用。 核心技术采用Spring Boot 2.1.2以及Spring Cloud (Greenwich.RELEASE) 相关核心组件，采用Nacos注册和配置中心，集成流量卫兵Sentinel，前端采用vue-element-a...","tags":["后台管理框架","Apache-2.0"]},{"star":"9.5K","projectName":"stylefeng/Guns","lang":"Java","url":"https://gitee.com/stylefeng/guns","desc":"Guns基于Spring Boot2，致力于做更简洁的后台管理系统。包含系统管理，代码生成，多数据库适配，SSO单点登录，工作流，短信，邮件发送，OAuth2登录，任务调度，持续集成，docker部署等功。支持Spring Cloud Alibaba微服务。社区活跃，版本迭代快，加群免费技术支持。","tags":["后台管理框架"]},{"star":"8.6K","projectName":"iBase4J/iBase4J","lang":"Java","url":"https://gitee.com/iBase4J/iBase4J","desc":"基于SpringBoot 2.0，SpringMVC，Mybatis，mybatis-plus，motan/dubbo分布式，Redis缓存，Shiro权限管理，redis管理Session，Quartz分布式集群调度，Restful服务；系统管理：包括用户管理、权限管理、数据字典、系统参数管理等等；支持QQ/微信登录，App token登录，微信/支付宝支付；日期转换、数据类型转换、序列化、汉字转拼音、身份证号码验证、数字转人民币、发送短信、发送邮件、加密解密、图片处理、excel导入导出、FTP/...","tags":["Web开发框架","Apache-2.0"]},{"star":"8.5K","projectName":"pig4cloud.com/pig","lang":"Java","url":"https://gitee.com/log4j/pig","desc":"基于Spring Boot 2.1.7、 Spring Cloud Greenwich.SR2、 OAuth2 的RBAC 权限管理系统。  记得右上角点个star 关注更新","tags":["后台管理框架","LGPL-3.0"]},{"star":"8.1K","projectName":"若依/RuoYi","lang":"Java","url":"https://gitee.com/y_project/RuoYi","desc":"基于SpringBoot的权限管理系统 易读易懂、界面简洁美观。 核心技术采用Spring、MyBatis、Shiro没有任何其它重度依赖。直接运行即可用","tags":["后台管理框架","MIT"]},{"star":"7.5K","projectName":"Hutool/hutool","lang":"Java","url":"https://gitee.com/loolly/hutool","desc":"Hutool是一个Java工具包，也只是一个工具包，它帮助我们简化每一行代码，减少每一个方法，让Java语言也可以“甜甜的”。","tags":["常用工具包","MulanPSL-1.0"]},{"star":"7.3K","projectName":"JFinal/JFinal","lang":"Java","url":"https://gitee.com/jfinal/jfinal","desc":"JFinal 是基于 Java 语言的极速 WEB + ORM 框架，其核心设计目标是开发迅速、代码量少、学习简单、功能强大、轻量级、易扩展、Restful。在拥有Java语言所有优势的同时再拥有ruby、python、php等动态语言的开发效率！为您节约更多时间，去陪恋人、家人和朋友 :)","tags":["Web开发框架","Apache-2.0"]},{"star":"6.9K","projectName":"铭飞/MCMS","lang":"Java","url":"https://gitee.com/mingSoft/MCMS","desc":"完整开源！Java快速开发平台！基于SpringBoot 2架构，前端基于vue、element ui。一套简单好用的开源系统、一整套优质的开源生态内容体系。铭飞的使命就是降低开发成本提高开发效率，提供全方位的企业级开发解决方案，每月28定期更新版本。MStore为使用者提供上百套免费模板,同时提供适用的插件（文章、商城、微信、论坛、会员、评论、支付、积分、工作流、任务调度等...）","tags":["CMS建站系统","MIT"]}],

    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;

    var sv = that.data.inputVal;
    if (sv != '') {
      return
    }
    var next = that.data.index + 1;
    that.setData({
      index: next
    })

    var response = [{"star":"6.2K","projectName":"微同科技/微同商城","lang":"Java","url":"https://gitee.com/fuyang_lipengjun/platform","desc":"减少重复造轮子，开源微信小程序商城  。快速搭建一个属于自己的微信小程序商城。QQ交流群：66502035、870579539欢迎大家进群交流技术。","tags":["微信小程序/小游戏","新零售/网店/商城","Apache-2.0"]},{"star":"6.1K","projectName":"ThinkGem/JeeSite 4.x","lang":"Java","url":"https://gitee.com/thinkgem/jeesite4","desc":"Java EE 企业级快速开发平台，基于 Spring Boot、Spring MVC、Shiro、MyBatis、Beetl、Bootstrap、AdminLTE 在线代码生成功能，采用经典开发模式，让初学者能够更快的入门并投入到团队开发中去。包括核心模块如：组织机构、角色用户、菜单及按钮授权、数据权限、系统参数、内容管理、工作流等。松耦合设计；界面无刷新；一键换肤；众多账号安全设置，密码策略；在线定时任务配置；支持 Spring Cloud 微服务；支持 SAAS 多租户；支持集群部署；支持多数据源；","tags":["后台管理框架","AGPL-3.0"]},{"star":"5.9K","projectName":"ThinkGem/JeeSite","lang":"Java","url":"https://gitee.com/thinkgem/jeesite","desc":"Java EE 快速开发框架，基于经典技术组合（Spring MVC、Apache Shiro、MyBatis、Bootstrap UI），包括核心模块如：组织机构、角色用户、权限授权、数据权限、内容管理、工作流等。虽说很长时间没有大的更新了，但它的架构精良易于扩展深受大家喜爱，依然是中小企业的首选，它的功能设计、底层架构也非常具有参考意义、是学习入门的首选。关注我ThinkGem开源中国博客了解4.0最新动态。","tags":["后台管理框架","Apache-2.0"]},{"star":"5.8K","projectName":"talent-tan/t-io","lang":"Java","url":"https://gitee.com/tywo45/t-io","desc":"t-io是基于aio的网络编程框架：完善的脚手架、丰富的业务API、够用的文档、大量生产案例 以行践言“让天下没有难驾驭的网络编程”","tags":["网络开发包","Apache-2.0"]},{"star":"5.8K","projectName":"人人开源/renren-security","lang":"Java","url":"https://gitee.com/renrenio/renren-security","desc":"采用SpringBoot2.0、MyBatis、Shiro框架，开发的一套权限系统，极低门槛，拿来即用。设计之初，就非常注重安全性，为企业系统保驾护航，让一切都变得如此简单。【QQ群：324780204、145799952】","tags":["权限管理","Apache-2.0"]},{"star":"5.8K","projectName":"@Sun/JeeSpringCloud","lang":"Java","url":"https://gitee.com/JeeHuangBingGui/jeeSpringCloud","desc":"基于SpringBoot2.0的后台权限管理系统界面简洁美观敏捷开发系统架构。核心技术采用Spring、MyBatis、Shiro没有任何其它重度依赖。 互联网云快速开发框架,微服务分布式代码生成的敏捷开发系统架构。项目代码简洁,注释丰富,上手容易,还同时集中分布式、微服务,同时包含许多基础模块和监控、服务模块。模块包括:定时任务调度、服务器监控、平台监控、平台设置、开发平台、单点登录、Redis分布式高速缓存、会员、营销、在线用户、日志、在线人数、访问次数、调用次数、直接集群、接口文档、生成模块、代...","tags":["后台管理框架","MIT"]},{"star":"5.7K","projectName":"baomidou/mybatis-plus","lang":"Java","url":"https://gitee.com/baomidou/mybatis-plus","desc":"mybatis 增强工具包，简化 CRUD 操作。 文档 http://mp.baomidou.com","tags":["数据库开发包","Apache-2.0"]},{"star":"5.4K","projectName":"小柒2012/spring-boot-seckill","lang":"Java","url":"https://gitee.com/52itstyle/spring-boot-seckill","desc":"从0到1构建分布式秒杀系统，脱离案例讲架构都是耍流氓","tags":["新零售/网店/商城","Apache-2.0"]},{"star":"5.2K","projectName":"班纳睿/WxJava","lang":"Java","url":"https://gitee.com/binary/weixin-java-tools","desc":"WxJava - 微信开发 Java SDK，支持微信支付、开放平台、公众号、企业号/企业微信、小程序等的后端开发","tags":["微信开发包","Apache-2.0"]},{"star":"5K","projectName":"开源中国/android-app","lang":"Android","url":"https://gitee.com/oschina/android-app","desc":"OSChina Android 客户端源码","tags":["移动App"]}]
    var moment_list = that.data.list;

    for (var i = 0; i < response.length; i++) {
      moment_list.push(response[i]);
    }
    // 设置数据  
    that.setData({
      list: moment_list
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  setValue(values) {
    this.setData({
      [`value`]: values.value,
      [`displayValue`]: values.label,
      ['selectedIdx']: values.selectedIndex
    })
  },

  // 查询按钮
  onConfirm(e) {
    var that = this;

    const {
      index
    } = e.currentTarget.dataset
    that.setValue(e.detail)


    var val1 = e.detail.selectedIndex[0]

    console.log(val1)
    if (val1 == 0) {
      that.setData({
        index: 1,
        list: [{ "star": "17.5K", "projectName": "shuzheng/zheng", "lang": "Java", "url": "https://gitee.com/shuzheng/zheng", "desc": "基于Spring+SpringMVC+Mybatis分布式敏捷开发系统架构，提供整套公共微服务服务模块：集中权限管理（单点登录）、内容管理、支付中心、用户管理（支持第三方登录）、微信平台、存储系统、配置中心、日志分析、任务和通知等，支持服务治理、监控和追踪，努力为中小型企业打造全方位J2EE企业级开发解决方案。", "tags": ["Web开发框架", "后台管理框架", "MIT"] }, { "star": "13.3K", "projectName": "程序猿DD/SpringBoot-Learning", "lang": "Java", "url": "https://gitee.com/didispace/SpringBoot-Learning", "desc": "Spring Boot基础教程，Spring Boot 2.x版本连载中！！！", "tags": ["教程配套代码", "图书/手册/教程"] }, { "star": "9.9K", "projectName": "The Sun/Cloud-Platform", "lang": "Java", "url": "https://gitee.com/geek_qi/cloud-platform", "desc": "Cloud-Platform是国内首个基于Spring Cloud微服务化开发平台，具有统一授权、认证后台管理系统，其中包含具备用户管理、资源权限管理、网关API 管理等多个模块，支持多业务系统并行开发，可以作为后端服务的开发脚手架。代码简洁，架构清晰，适合学习和直接项目中使用。 核心技术采用Spring Boot 2.1.2以及Spring Cloud (Greenwich.RELEASE) 相关核心组件，采用Nacos注册和配置中心，集成流量卫兵Sentinel，前端采用vue-element-a...", "tags": ["后台管理框架", "Apache-2.0"] }, { "star": "9.5K", "projectName": "stylefeng/Guns", "lang": "Java", "url": "https://gitee.com/stylefeng/guns", "desc": "Guns基于Spring Boot2，致力于做更简洁的后台管理系统。包含系统管理，代码生成，多数据库适配，SSO单点登录，工作流，短信，邮件发送，OAuth2登录，任务调度，持续集成，docker部署等功。支持Spring Cloud Alibaba微服务。社区活跃，版本迭代快，加群免费技术支持。", "tags": ["后台管理框架"] }, { "star": "8.6K", "projectName": "iBase4J/iBase4J", "lang": "Java", "url": "https://gitee.com/iBase4J/iBase4J", "desc": "基于SpringBoot 2.0，SpringMVC，Mybatis，mybatis-plus，motan/dubbo分布式，Redis缓存，Shiro权限管理，redis管理Session，Quartz分布式集群调度，Restful服务；系统管理：包括用户管理、权限管理、数据字典、系统参数管理等等；支持QQ/微信登录，App token登录，微信/支付宝支付；日期转换、数据类型转换、序列化、汉字转拼音、身份证号码验证、数字转人民币、发送短信、发送邮件、加密解密、图片处理、excel导入导出、FTP/...", "tags": ["Web开发框架", "Apache-2.0"] }, { "star": "8.5K", "projectName": "pig4cloud.com/pig", "lang": "Java", "url": "https://gitee.com/log4j/pig", "desc": "基于Spring Boot 2.1.7、 Spring Cloud Greenwich.SR2、 OAuth2 的RBAC 权限管理系统。  记得右上角点个star 关注更新", "tags": ["后台管理框架", "LGPL-3.0"] }, { "star": "8.1K", "projectName": "若依/RuoYi", "lang": "Java", "url": "https://gitee.com/y_project/RuoYi", "desc": "基于SpringBoot的权限管理系统 易读易懂、界面简洁美观。 核心技术采用Spring、MyBatis、Shiro没有任何其它重度依赖。直接运行即可用", "tags": ["后台管理框架", "MIT"] }, { "star": "7.5K", "projectName": "Hutool/hutool", "lang": "Java", "url": "https://gitee.com/loolly/hutool", "desc": "Hutool是一个Java工具包，也只是一个工具包，它帮助我们简化每一行代码，减少每一个方法，让Java语言也可以“甜甜的”。", "tags": ["常用工具包", "MulanPSL-1.0"] }, { "star": "7.3K", "projectName": "JFinal/JFinal", "lang": "Java", "url": "https://gitee.com/jfinal/jfinal", "desc": "JFinal 是基于 Java 语言的极速 WEB + ORM 框架，其核心设计目标是开发迅速、代码量少、学习简单、功能强大、轻量级、易扩展、Restful。在拥有Java语言所有优势的同时再拥有ruby、python、php等动态语言的开发效率！为您节约更多时间，去陪恋人、家人和朋友 :)", "tags": ["Web开发框架", "Apache-2.0"] }, { "star": "6.9K", "projectName": "铭飞/MCMS", "lang": "Java", "url": "https://gitee.com/mingSoft/MCMS", "desc": "完整开源！Java快速开发平台！基于SpringBoot 2架构，前端基于vue、element ui。一套简单好用的开源系统、一整套优质的开源生态内容体系。铭飞的使命就是降低开发成本提高开发效率，提供全方位的企业级开发解决方案，每月28定期更新版本。MStore为使用者提供上百套免费模板,同时提供适用的插件（文章、商城、微信、论坛、会员、评论、支付、积分、工作流、任务调度等...）", "tags": ["CMS建站系统", "MIT"] }],
      })
    } else {
      that.setData({
        index: 1,
        list: [{ "star":"600k","projectName":that.data.value[0],"lang":that.data.value[0],"url":"https://github.com/yisier/thief-book-idea","desc":that.data.value[0],"tags":[]}]
      })
    }
    

    console.log(that.data.value)
  },

  onVisibleChange(e) {
    this.setData({
      visible: e.detail.visible
    })
  },
  onClick() {
    this.setData({
      visible: true
    })
  },

  //////////////////////////////////////////搜索框

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  // 搜索框取消
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false,
      index: 1,
      list: [{ "star": "17.5K", "projectName": "shuzheng/zheng", "lang": "Java", "url": "https://gitee.com/shuzheng/zheng", "desc": "基于Spring+SpringMVC+Mybatis分布式敏捷开发系统架构，提供整套公共微服务服务模块：集中权限管理（单点登录）、内容管理、支付中心、用户管理（支持第三方登录）、微信平台、存储系统、配置中心、日志分析、任务和通知等，支持服务治理、监控和追踪，努力为中小型企业打造全方位J2EE企业级开发解决方案。", "tags": ["Web开发框架", "后台管理框架", "MIT"] }, { "star": "13.3K", "projectName": "程序猿DD/SpringBoot-Learning", "lang": "Java", "url": "https://gitee.com/didispace/SpringBoot-Learning", "desc": "Spring Boot基础教程，Spring Boot 2.x版本连载中！！！", "tags": ["教程配套代码", "图书/手册/教程"] }, { "star": "9.9K", "projectName": "The Sun/Cloud-Platform", "lang": "Java", "url": "https://gitee.com/geek_qi/cloud-platform", "desc": "Cloud-Platform是国内首个基于Spring Cloud微服务化开发平台，具有统一授权、认证后台管理系统，其中包含具备用户管理、资源权限管理、网关API 管理等多个模块，支持多业务系统并行开发，可以作为后端服务的开发脚手架。代码简洁，架构清晰，适合学习和直接项目中使用。 核心技术采用Spring Boot 2.1.2以及Spring Cloud (Greenwich.RELEASE) 相关核心组件，采用Nacos注册和配置中心，集成流量卫兵Sentinel，前端采用vue-element-a...", "tags": ["后台管理框架", "Apache-2.0"] }, { "star": "9.5K", "projectName": "stylefeng/Guns", "lang": "Java", "url": "https://gitee.com/stylefeng/guns", "desc": "Guns基于Spring Boot2，致力于做更简洁的后台管理系统。包含系统管理，代码生成，多数据库适配，SSO单点登录，工作流，短信，邮件发送，OAuth2登录，任务调度，持续集成，docker部署等功。支持Spring Cloud Alibaba微服务。社区活跃，版本迭代快，加群免费技术支持。", "tags": ["后台管理框架"] }, { "star": "8.6K", "projectName": "iBase4J/iBase4J", "lang": "Java", "url": "https://gitee.com/iBase4J/iBase4J", "desc": "基于SpringBoot 2.0，SpringMVC，Mybatis，mybatis-plus，motan/dubbo分布式，Redis缓存，Shiro权限管理，redis管理Session，Quartz分布式集群调度，Restful服务；系统管理：包括用户管理、权限管理、数据字典、系统参数管理等等；支持QQ/微信登录，App token登录，微信/支付宝支付；日期转换、数据类型转换、序列化、汉字转拼音、身份证号码验证、数字转人民币、发送短信、发送邮件、加密解密、图片处理、excel导入导出、FTP/...", "tags": ["Web开发框架", "Apache-2.0"] }, { "star": "8.5K", "projectName": "pig4cloud.com/pig", "lang": "Java", "url": "https://gitee.com/log4j/pig", "desc": "基于Spring Boot 2.1.7、 Spring Cloud Greenwich.SR2、 OAuth2 的RBAC 权限管理系统。  记得右上角点个star 关注更新", "tags": ["后台管理框架", "LGPL-3.0"] }, { "star": "8.1K", "projectName": "若依/RuoYi", "lang": "Java", "url": "https://gitee.com/y_project/RuoYi", "desc": "基于SpringBoot的权限管理系统 易读易懂、界面简洁美观。 核心技术采用Spring、MyBatis、Shiro没有任何其它重度依赖。直接运行即可用", "tags": ["后台管理框架", "MIT"] }, { "star": "7.5K", "projectName": "Hutool/hutool", "lang": "Java", "url": "https://gitee.com/loolly/hutool", "desc": "Hutool是一个Java工具包，也只是一个工具包，它帮助我们简化每一行代码，减少每一个方法，让Java语言也可以“甜甜的”。", "tags": ["常用工具包", "MulanPSL-1.0"] }, { "star": "7.3K", "projectName": "JFinal/JFinal", "lang": "Java", "url": "https://gitee.com/jfinal/jfinal", "desc": "JFinal 是基于 Java 语言的极速 WEB + ORM 框架，其核心设计目标是开发迅速、代码量少、学习简单、功能强大、轻量级、易扩展、Restful。在拥有Java语言所有优势的同时再拥有ruby、python、php等动态语言的开发效率！为您节约更多时间，去陪恋人、家人和朋友 :)", "tags": ["Web开发框架", "Apache-2.0"] }, { "star": "6.9K", "projectName": "铭飞/MCMS", "lang": "Java", "url": "https://gitee.com/mingSoft/MCMS", "desc": "完整开源！Java快速开发平台！基于SpringBoot 2架构，前端基于vue、element ui。一套简单好用的开源系统、一整套优质的开源生态内容体系。铭飞的使命就是降低开发成本提高开发效率，提供全方位的企业级开发解决方案，每月28定期更新版本。MStore为使用者提供上百套免费模板,同时提供适用的插件（文章、商城、微信、论坛、会员、评论、支付、积分、工作流、任务调度等...）", "tags": ["CMS建站系统", "MIT"] }],
    });


  },
  // 搜索框清空
  clearInput: function () {
    this.setData({
      inputVal: ""
    });

  },
  //搜索框输入
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  //搜索框确认
  searchConfirm(e) {
    // 搜索框内容
    var val = e.detail.value;

    var that = this;
    var sv = that.data.inputVal;
    // 搜索条件为空，执行搜索
    if (sv == '') {
      return
    }

    that.setData({
      list: [{ "star": "60k", "projectName": val, "lang": "Java", "url": "https://github.com/yisier/thief-book-idea", "desc": val, "tags": [] }]
    })
  },
  // 添加到收藏夹
  addColl(e) {
    var that = this;
    var dataset = e.currentTarget.dataset;
    wx.showToast({
      title: '收藏成功',
      icon: 'success',
      duration: 2000
    })
    console.log('添加收藏夹:'+dataset)
  },

  // 回到顶部
  goTop: function () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  }
})