// pages/project/project.js
var sliderWidth = 96; 
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    barBg: '#ffffff',//#ff6600
    color: '#000000',//#ffffff
    leftButton: 'back',

    listData: [{"codeUrl":"https://gitee.com/api/v5/repos/didispace/SpringBoot-Learning/contents/sponsor","fileName":"sponsor","isFile":"0","download_url":""},{"codeUrl":"https://gitee.com/api/v5/repos/didispace/SpringBoot-Learning/contents/.gitignore","fileName":".gitignore","isFile":"1","download_url":"https://gitee.com/didispace/SpringBoot-Learning/raw/master/.gitignore"},{"codeUrl":"https://gitee.com/api/v5/repos/didispace/SpringBoot-Learning/contents/.gitmodules","fileName":".gitmodules","isFile":"1","download_url":"https://gitee.com/didispace/SpringBoot-Learning/raw/master/.gitmodules"},{"codeUrl":"https://gitee.com/api/v5/repos/didispace/SpringBoot-Learning/contents/README.md","fileName":"README.md","isFile":"1","download_url":"https://gitee.com/didispace/SpringBoot-Learning/raw/master/README.md"},{"codeUrl":"https://gitee.com/api/v5/repos/didispace/SpringBoot-Learning/contents/README_zh.md","fileName":"README_zh.md","isFile":"1","download_url":"https://gitee.com/didispace/SpringBoot-Learning/raw/master/README_zh.md"},{"codeUrl":"https://gitee.com/api/v5/repos/didispace/SpringBoot-Learning/contents/pom.xml","fileName":"pom.xml","isFile":"1","download_url":"https://gitee.com/didispace/SpringBoot-Learning/raw/master/pom.xml"}],
    codePage:1,
    url:"",
    projectName:"",
 
    tabs: ["ReadMe", "Code", "Issues"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    article:"# Spring Boot基础教程\n\n本项目内容为[《Spring Boot基础教程》](http://blog.didispace.com/Spring-Boot%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/)的程序样例。\n\n**专题目标**：打造全网内容最全，比收费教程更好的Spring Boot免费教程！\n\n**如何支持**：\n1. 关注我的公众号”**程序猿DD**“\n2. 点个`Star`并`Follow`我\n3. 把该仓库分享给更多的朋友\n\n如果您对文字类教程不感冒或者想要通过综合案例学习Spring，那么给您推荐这个我觉得目前内容与价格最良心的视频课程：[\"玩转Spring全家桶\"](https://time.geekbang.org/course/intro/100023501?code=d1se%2F7ugeBEyuU%2FIYp1ynfSZa6ulbGhhDK%2Fkpn3-lFc%3D)\n\n## 教程目录\n\n- [Spring Boot 1.x版本教程：1.x分支](../../tree/1.x)\n- [Spring Boot 2.x版本教程：2.x分支](../../tree/2.x)\n\n> **关注公众号：“程序猿DD”**，领取我整理的免费学习资料。<br>\n\n## 特别赞助商\n\n<table>\n      <tbody>\n        <tr>\n          <td align=\"center\" valign=\"middle\">\n            <a href=\"https://promotion.aliyun.com/ntms/act/ambassador/sharetouser.html?userCode=wxfqkr0o&utm_source=wxfqkr0o\" target=\"_blank\">\n              <img width=\"300\" src=\"https://github.com/dyc87112/SpringBoot-Learning/blob/master/sponsor/git-springboot-sponsor-2-300x100.jpg?raw=true\">\n            </a>\n          </td>  \n          <td align=\"center\" valign=\"middle\">\n            <a href=\"http://gk.link/a/103EK\" target=\"_blank\">\n              <img width=\"300\" src=\"https://github.com/dyc87112/SpringBoot-Learning/blob/master/sponsor/git-springboot-sponsor-4.jpg?raw=true\">\n            </a>\n          </td>  \n          <td align=\"center\" valign=\"middle\">\n            <a href=\"https://cloud.tencent.com/redirect.php?redirect=1027&cps_key=f6a8af1297bfac40b9d10ffa1270029a&from=console\" target=\"_blank\">\n              <img width=\"300\" src=\"https://github.com/dyc87112/SpringBoot-Learning/blob/master/sponsor/git-springboot-sponsor-5.jpg?raw=true\">\n            </a>\n          </td>            \n        </tr>\n      </tbody>\n</table>\n\n> 如果您也想赞助支持并出现在上表中的话，可以通过邮件联系我：`didi@didispace.com`\n\n- [阿里云：ECS云服务器2折起](https://promotion.aliyun.com/ntms/act/ambassador/sharetouser.html?userCode=wxfqkr0o&utm_source=wxfqkr0o)\n- [腾讯云：轻松应对建站成本问题](https://cloud.tencent.com/redirect.php?redirect=1027&cps_key=f6a8af1297bfac40b9d10ffa1270029a&from=console)\n\n## 推荐内容\n\n- [我的博客](http://blog.didispace.com)：分享平时学习和实践过的技术内容\n- [知识星球](https://t.xiaomiquan.com/zfEiY3v)：聊聊技术人的斜杠生活\n- [GitHub](https://github.com/dyc87112/SpringBoot-Learning)：Star支持一下呗\n- [Gitee](https://gitee.com/didispace/SpringBoot-Learning)：Star支持一下呗\n- [Spring问答社区](http://www.spring4all.com/)：如果您有什么问题，可以去这里发帖\n- [Spring Boot基础教程](http://blog.didispace.com/Spring-Boot%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/)：全网Star最多的免费Spring Boot基础教程\n- [Spring Cloud基础教程](http://blog.didispace.com/Spring-Cloud%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/)：全网最早最全的免费Spring Cloud基础教程\n\n## 我的公众号\n\n<img src=\"http://blog.didispace.com/css/images/weixin.jpg\" style=\"width:150px;height:150px;\" />\n\n## 我出版的书\n\n![输入图片说明](https://git.oschina.net/uploads/images/2017/0416/233656_dd3bce94_437188.png \"在这里输入图片标题\")\n",

    repo: 'SpringBoot-Learning',
    picture: 'https://avatar.gitee.com/uploads/88/437188_didispace.png?1548556333',
    html_url: 'https://gitee.com/didispace/SpringBoot-Learning.git',
    desc: 'Spring Boot基础教程，Spring Boot 2.x版本连载中！！！',
    forks: '4885',
    stars: '13282',
    isExist: true,
    collectionIcon: '../img/collectioned.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var title = options.projectName.split('/')[1];
    var repo = options.projectName.split('/')[0];

    if (repo.length > 20) {
      repo = repo.substr(0, 20) + '...'
    }
    this.setData({
      url: options.url,
      projectName: options.projectName,
      title: title,
      repo: repo
    })

    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

    var that = this;

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //导航栏
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },


  // 根据文件类型加载数据
  reloadCode:function(e){
    var that = this;
    var param = e.currentTarget.dataset;
    var cp = that.data.codePage;

    console.log(param)
    //文件夹
    if(param.type=='0'){
      // 显示加载图标  
      wx.showLoading({
        title: '加载中',
        mask: true 
      })
      wx.hideLoading();
     
    }else{
      wx.navigateTo({
        url: '../code/code?codeUrl=' + param.downloadurl + '&filename=' + param.filename + '&flag=0' // 页面 code
      })
    }
  },


  // 返回按钮
  back:function(e){
    var that = this;
    var cp = that.data.codePage;
    // 显示加载图标  
    wx.showLoading({
      title: '加载中',
      mask: true 
    })
    wx.request({
      url: that.data.giteeBackUlr,
      data: { "url": that.data.listData[0].codeUrl },
      success: function (res) {
        var article = res.data
        console.log(article)
        that.setData({
          listData: article,

          codePage: cp - 1
        })
        // 隐藏加载框  
        wx.hideLoading();
      }
    })
    
  },

  // 复制链接
  copy: function (e) {
    var that = this;
    wx.setClipboardData({
      data: that.data.url,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '已复制该项目地址',
              icon: '',
              duration: 2000, //弹出时间
            })
          }
        })
      }
    })
  },

  // 添加到收藏夹
  addColl: function () {
    var that = this;
    var params = {
      'url': that.data.url,
      'projectName': that.data.projectName,
      'userOpenid': app.globalData.openid,
      'type': '0'
    }

    wx.showToast({
      title: '收藏成功',
      icon: 'success',
      duration: 2000
    })

  },

  // 删除收藏夹
  delColl: function () {

    var opid = app.globalData.openid;
    var that = this;
    var params = {
      'url': that.data.url,
      'openid': opid
    }
    wx.showToast({
      title: '已取消收藏',
      icon: 'success',
      duration: 2000
    })

  },

// 收藏
  collection: function (e) {
    var that = this;

    var exist = that.data.isExist
    //取消收藏
    if (exist){
      wx.showModal({
        title: '提示',
        content: '确定要取消收藏？',
        success: function (res) {
          if (res.confirm) {
            //确定
            that.delColl();
            that.setData({
              isExist: false,
              collectionIcon: '../img/nocollection.png'
            })
          } else if (res.cancel) {
          }
        }
      }) 
    }else{
      that.addColl();
      that.setData({
        isExist: true,
        collectionIcon: '../img/collectioned.png'
      })
    }

  },

  // 查看用户仓库信息
  userRepo:function(e){
    var that = this;
    wx.navigateTo({
      url: '../repo/repo?repoUrl=' + that.data.url + '&type=1&projectName=' +that.data.projectName
    })
  }

})