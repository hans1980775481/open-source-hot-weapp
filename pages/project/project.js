// pages/project/project.js
var sliderWidth = 96; 
const app = getApp();
var wxCharts = require('../../utils/wxcharts-min.js');
var lineChart = null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '详情',
    barBg: '#ffffff',//#ff6600
    color: '#000000',//#ffffff
    leftButton:'back',

    listData: [{"codeUrl":"https://api.github.com/repos/996icu/996.ICU/contents/archived?ref=master","fileName":"archived","isFile":"0","download_url":""},{"codeUrl":"https://api.github.com/repos/996icu/996.ICU/contents/awesomelist?ref=master","fileName":"awesomelist","isFile":"0","download_url":""},{"codeUrl":"https://api.github.com/repos/996icu/996.ICU/contents/blacklist?ref=master","fileName":"blacklist","isFile":"0","download_url":""},{"codeUrl":"https://api.github.com/repos/996icu/996.ICU/contents/externals?ref=master","fileName":"externals","isFile":"0","download_url":""},{"codeUrl":"https://api.github.com/repos/996icu/996.ICU/contents/i18n?ref=master","fileName":"i18n","isFile":"0","download_url":""},{"codeUrl":"https://api.github.com/repos/996icu/996.ICU/contents/proposal?ref=master","fileName":"proposal","isFile":"0","download_url":""},{"codeUrl":"https://api.github.com/repos/996icu/996.ICU/contents/remotelist?ref=master","fileName":"remotelist","isFile":"0","download_url":""},{"codeUrl":"https://api.github.com/repos/996icu/996.ICU/contents/whitelist?ref=master","fileName":"whitelist","isFile":"0","download_url":""},{"codeUrl":"https://api.github.com/repos/996icu/996.ICU/contents/.gitignore?ref=master","fileName":".gitignore","isFile":"1","download_url":"https://raw.githubusercontent.com/996icu/996.ICU/master/.gitignore"},{"codeUrl":"https://api.github.com/repos/996icu/996.ICU/contents/ANTI-996%20DAY.MD?ref=master","fileName":"ANTI-996 DAY.MD","isFile":"1","download_url":"https://raw.githubusercontent.com/996icu/996.ICU/master/ANTI-996%20DAY.MD"},{"codeUrl":"https://api.github.com/repos/996icu/996.ICU/contents/LICENSE?ref=master","fileName":"LICENSE","isFile":"1","download_url":"https://raw.githubusercontent.com/996icu/996.ICU/master/LICENSE"},{"codeUrl":"https://api.github.com/repos/996icu/996.ICU/contents/LICENSE_CN?ref=master","fileName":"LICENSE_CN","isFile":"1","download_url":"https://raw.githubusercontent.com/996icu/996.ICU/master/LICENSE_CN"},{"codeUrl":"https://api.github.com/repos/996icu/996.ICU/contents/README.md?ref=master","fileName":"README.md","isFile":"1","download_url":"https://raw.githubusercontent.com/996icu/996.ICU/master/README.md"},{"codeUrl":"https://api.github.com/repos/996icu/996.ICU/contents/README_CN.md?ref=master","fileName":"README_CN.md","isFile":"1","download_url":"https://raw.githubusercontent.com/996icu/996.ICU/master/README_CN.md"},{"codeUrl":"https://api.github.com/repos/996icu/996.ICU/contents/logo.svg?ref=master","fileName":"logo.svg","isFile":"1","download_url":"https://raw.githubusercontent.com/996icu/996.ICU/master/logo.svg"}],
    codePage:1,
    url:"",
    projectName:"996.ICU",

    tabs: ["ReadMe", "Code", "Issues"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,

    // readMe markdown 文档
    article:"[996.ICU](https://996.icu/#/en_US)\n=======\n**Please note that there exists NO other official account, app or merchandise except for the official domain and this repository.**\n\n* [中文版](./README_CN.md)\n\nThe name `996.ICU` refers to **\"Work by '996', sick in ICU\"**, an ironic saying among Chinese developers, which means that by following the \"996\" work schedule, you are risking yourself getting into the ICU (Intensive Care Unit).\n\n[![Badge](https://img.shields.io/badge/link-996.icu-%23FF4D5B.svg?style=flat-square)](https://996.icu/#/en_US)\n[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg?style=flat-square)](https://github.com/996icu/996.ICU/blob/master/LICENSE)\n[![Slack](https://img.shields.io/badge/slack-996icu-green.svg?style=flat-square)](https://join.slack.com/t/996icu/shared_invite/enQtNjI0MjEzMTUxNDI0LTkyMGViNmJiZjYwOWVlNzQ3NmQ4NTQyMDRiZTNmOWFkMzYxZWNmZGI0NDA4MWIwOGVhOThhMzc3NGQyMDBhZDc)\n[![HitCount](http://hits.dwyl.io/996icu/996.ICU.svg)](http://hits.dwyl.io/996icu/996.ICU)\n\n\nRelated press coverage:\n---\n* *RadiiChina:* [GitHub Protest Over Chinese Tech Companies’ “996” Culture Goes Viral](https://radiichina.com/github-protest-chinese-tech-996/)\n* *Financial Times:*  [China tech worker protest against long working hours goes viral](https://www.ft.com/content/72754638-55d1-11e9-91f9-b6515a54c5b1)\n* *Wired:* [How github is helping overworked Chinese programmers](https://www.wired.com/story/how-github-helping-overworked-chinese-programmers/)\n\nSee a [full list of press](externals/news_EN.md)\n\n\n\nWhat is 996?\n---\n\nA \"996\" work schedule refers to an unofficial work schedule (9 a.m.&ndash;9 p.m., 6 days per week) that has been gaining popularity. Serving a company that encourages the \"996\" work schedule usually means working for at least 60 hours per week.\nVisit [996 working hour system](https://en.wikipedia.org/wiki/996_working_hour_system) on Wikipedia for more details.\n\n\nWhat can I do?\n---\n\n- Update this [list](blacklist/README.md) with evidence to help every worker.  [Third party perfect list channel](https://www.996action.com/index.php/889799)\n- Add this [badge](externals/instruction.md) to your project to support 996.ICU.  \n- License your awesome projects with the [Anti 996 License](LICENSE).  \n- Add [proposals](proposal/README.md) to give advice about the development of 996.ICU.\n- Go home at 6 pm without feeling sorry.\n\n\nVoices\n---\n\n### State Media\n- [The 996 shall disappear](http://www.xinhuanet.com/politics/2019-04/15/c_1124370790.htm)\n\n\n### Capitalists\n- **Jack Ma, founder of Alibaba**: `It is a huge blessing to be able to '996'`.\n- **Richard Liu, founder of JD.com**: `We will never force our employee to work as '996'`.\n(However, as a result many anonymous employees claim that there is a **list** of departments which **ranked** them by overtime hours. The shortest will take punishments. And the leaders never leave evidences when asking employees to work as '996'.)\n- **Bai Ya, founder of Youzan**: `This will definitely be a right decision when we look back in a few years.`\n\n### Developers\n- **Guido van Rossum, founder of Python**: [`The '996' working schedule is inhumane.`](https://twitter.com/gvanrossum/status/1111628076801236993)\n\n\nPrinciples and purposes\n---\n\n* 996.ICU is an initiative initiated by IT practitioners. We welcome people from other fields and other countries to join the discussion.\n\n* This is not a political movement. We firmly uphold the labor law and request employers to respect the legitimate rights and interests of their employees.\n\n* It is great progress from closed source to open source, and it will also be great progress from open source to emphasizing labor rights at the same time. What we want is to create an open source software license that advocates workers' rights.\n\n* We are willing to hear all positive and constructive proposals and advocate mature and responsible speech.\n\n\nExpanding influence\n---\n\nPlease feel free to [translate 996.ICU's contents](i18n/README.md), adjust the format, add some contents or fix grammatical errors. Please note that adding too many translations is getting off the track.\n\nCommunity powers\n---\n\n - [955.WLB](https://github.com/formulahendry/955.WLB) is a repo that maintains a whitelist of 955 work-life balanced companies.\n - [996.LIST](https://github.com/fengT-T/996_list) is a repo of a rank list of 996 companies and 955 companies.\n - [996.law](https://github.com/CPdogson/996.law) This is a manual for workers who want to conduct labor arbitration and litigation on their own.\n - [996.YAOCL](https://github.com/boycott996/yaocl) Yet Another Overtime Corps List, current another anonymous voting list.\n - [996.Leave](https://github.com/623637646/996.Leave) encourages & introduces working overseas.\n - [996.RIP](https://996.rip) Old news never vanished.\n - [996.Petition](https://github.com/xokctah/996.petition) initiates petitions by sending open letters to relevant government departments.\n - [996.action](https://github.com/CPdogson/996action) Supporters are encouraged to participate in public supervision.\n - [996.avengers](https://github.com/996-icu-avengers/Natasha) adds `996ICU` and `955WLB` tags on recruitment websites.\n - [996.OD](https://github.com/zheolong/996.OD.git) occupational diseases are the forewarning of ICU.\n - [996.Q](https://github.com/alexddhuang/996.Q) A repository to collect mocks, jokes, or gags about 996. \n - [996.survey](https://github.com/0594mazhiyuan/996.survey) A survey of the status of 996.\n - [support.996.ICU](https://github.com/msworkers/support.996.ICU) Microsoft and GitHub Workers Support 996.ICU\n - [996.Blockchain](https://github.com/996BC/996.Blockchain) Blockchain for the 996 evidence\n - [996.Error](https://github.com/MagicLu550/996Error) Collect \"996\" exceptions written in various languages and can be used directly in the project.\n\nWhere are the issues?\n---\n\nEven with interaction limits on, the issues area was totally out of control.\nSo I **personally** decided to switch it off, not by GitHub or others.\n\n\nLicense\n---\n\n[Anti-996 License](LICENSE)\n\n - The purpose of this license is to prevent anti-labour-law companies from using the software or codes under the license, and force those companies to weigh their way of working\n - See a [full list of projects](awesomelist/README.md) under Anti-996 License\n\n - This draft is adapted from the MIT license. For a more detailed explanation, please see [Wiki](https://github.com/kattgu7/996-License-Draft/wiki). This license is designed to be compatible with all major open source licenses.  \n - For law professionals or anyone who is willing to contribute to future version directly, please go to [Anti-996-License-1.0](https://github.com/kattgu7/996-License-Draft). Thank you.\n \nContact\n---\n\nYou can reach me by [E-mail](mailto:996icu.repo@gmail.com) if you need.\n",
    repo:'996',
    picture:'https://avatars3.githubusercontent.com/u/48942249?v=4',
    html_url:'test',
    desc:'996',
    forks:'996k',
    stars:'996k',
    isExist:true,
    collectionIcon:'../img/collectioned.png',

    starsArray:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var title = options.projectName.split('/')[1];
    var repo = options.projectName.split('/')[0];
    if (repo.length>20){
      repo = repo.substr(0,20)+'...'
    }
    this.setData({
      url: options.url,
      projectName: options.projectName,
      title: title,
      repo: repo,
    })

    var that = this;
    console.log("that", app.globalData.githubReadMeUrl)
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

    var that = this;
    that.drawHistory();
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
    wx.hideLoading();
    
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
  addColl:function() {
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
  delColl:function() {
    
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

  // 收藏 or 取消收藏
  collection:function(e){
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
      url: '../repo/repo?repoUrl=' + that.data.url + '&type=0&projectName=' +that.data.projectName
    })
  },

  // 点击Star 历史图
  touchHandler: function (e) {
    console.log(lineChart.getCurrentDataIndex(e));
    lineChart.showToolTip(e, {
        // background: '#7cb5ec',
        format: function (item, category) {
            return category + ' ' + item.name + ':' + item.data 
        }
    });
},

drawHistory:function(){

  var that = this;
  var windowWidth = 320;
      try {
          var res = wx.getSystemInfoSync();
          windowWidth = res.windowWidth;
      } catch (e) {
          console.error('getSystemInfoSync failed!');
      }
      that.setData({
        starsArray: [1,7998,11997,15996,19995,23994,27993,31992,35991,274281]
      })

      lineChart = new wxCharts({
        canvasId: 'lineCanvas',
        type: 'line',
        categories: ["20141224","20150720","20150808","20150906","20151011","20151027","20151111","20151123","20151204","20190917"],  //数据
        animation: false,
        // background: '#f5f5f5',
        series: [{
          name: '996.ICU',    // 下侧标题
          data: [1,7998,11997,15996,19995,23994,27993,31992,35991,274281],  // 数据
          format: function (val, name) {
            return val;
          }
        }],
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          title: 'Star Number',
          format: function (val) {
            return val;
          },
          min: 0
        },
        width: windowWidth,
        height: 200,
        dataLabel: false,
        dataPointShape: true,
        extra: {
          lineStyle: 'curve'
        }
      });
}
})