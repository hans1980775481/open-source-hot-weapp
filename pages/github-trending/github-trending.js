const app = getApp();

import {
  $wuxToast
} from '../../wux/index'

const seasons = [
    ['Daily', 'Weekly', 'Monthly'],
    ['Any', 'Java', 'Python', 'JavaScript', 'C', 'C++', 'C#', 'CSS', 'PHP', 'HTML', 'GO'],
]

Page({

  /**
   * 页面的初始数据
   */
  data: {

    notice:null,  //通知栏
    show_feedback:null,   //是否显示反馈按钮

    title: 'GitHub实时趋势',
    barBg: '#ffffff',//#ff6600
    color: '#000000',//#ffffff

    leftButton:'back',
    right: [
    {
      text: '收藏',
      style: 'background-color: #F4333C; color: white',
    }],
    
    inputShowed: false,
    value: [],
    selectedIdx: [0, 0],
    displayValue: 'Daily/Any',
    seasons,
    list: [{"fork":"735","star":"5,392","today":"296 stars today","projectName":"microsoft/recommenders","lang":"Jupyter Notebook","url":"https://github.com/microsoft/recommenders","desc":"Best Practices on Recommendation Systems"},{"fork":"3,083","star":"11,854","today":"216 stars today","projectName":"d2l-ai/d2l-zh","lang":"Python","url":"https://github.com/d2l-ai/d2l-zh","desc":"《动手学深度学习》：面向中文读者、能运行、可讨论。英文版即伯克利“深度学习导论”教材。"},{"fork":"633","star":"1,053","today":"20 stars today","projectName":"mne-tools/mne-python","lang":"Python","url":"https://github.com/mne-tools/mne-python","desc":"MNE : Magnetoencephalography (MEG) and Electroencephalography (EEG) in Python"},{"fork":"7,755","star":"26,442","today":"36 stars today","projectName":"home-assistant/home-assistant","lang":"Python","url":"https://github.com/home-assistant/home-assistant","desc":"\uD83C\uDFE1 Open source home automation that puts local control and privacy first"},{"fork":"53","star":"462","today":"120 stars today","projectName":"commanderx16/x16-emulator","lang":"C","url":"https://github.com/commanderx16/x16-emulator","desc":"Emulator for the Commander X16 8-bit computer"},{"fork":"16,448","star":"55,222","today":"179 stars today","projectName":"TheAlgorithms/Python","lang":"Jupyter Notebook","url":"https://github.com/TheAlgorithms/Python","desc":"All Algorithms implemented in Python"},{"fork":"68","star":"413","today":"109 stars today","projectName":"uknowsec/Active-Directory-Pentest-Notes","url":"https://github.com/uknowsec/Active-Directory-Pentest-Notes","desc":"个人域渗透学习笔记"},{"fork":"412","star":"3,700","today":"252 stars today","projectName":"30-seconds/30-seconds-of-python","lang":"Python","url":"https://github.com/30-seconds/30-seconds-of-python","desc":"A curated collection of useful Python snippets that you can understand in 30 seconds or less."},{"fork":"337","star":"1,277","today":"546 stars today","projectName":"ShusenTang/Dive-into-DL-PyTorch","lang":"Jupyter Notebook","url":"https://github.com/ShusenTang/Dive-into-DL-PyTorch","desc":"本项目将《动手学深度学习》（Dive into Deep Learning）原书中的MXNet代码实现改为PyTorch实现。"},{"fork":"191","star":"968","today":"353 stars today","projectName":"gxtrobot/bustag","lang":"JavaScript","url":"https://github.com/gxtrobot/bustag","desc":"a tag and recommend system for old bus driver"},{"fork":"878","star":"4,564","today":"553 stars today","projectName":"microsoft/ai-edu","lang":"Jupyter Notebook","url":"https://github.com/microsoft/ai-edu","desc":"AI education materials for Chinese students, teachers and IT professionals."},{"fork":"3,338","star":"47,885","today":"280 stars today","projectName":"danistefanovic/build-your-own-x","url":"https://github.com/danistefanovic/build-your-own-x","desc":"\uD83E\uDD13 Build your own (insert technology here)"},{"fork":"31","star":"399","today":"91 stars today","projectName":"hukkelas/DeepPrivacy","lang":"Python","url":"https://github.com/hukkelas/DeepPrivacy","desc":"DeepPrivacy: A Generative Adversarial Network for Face Anonymization"},{"fork":"30","star":"453","today":"243 stars today","projectName":"NVIDIA/NeMo","lang":"Python","url":"https://github.com/NVIDIA/NeMo","desc":"Neural Modules: a toolkit for conversational AI"},{"fork":"168","star":"1,316","today":"452 stars today","projectName":"yeahhub/Hacking-Security-Ebooks","url":"https://github.com/yeahhub/Hacking-Security-Ebooks","desc":"Top 100 Hacking & Security E-Books (Free Download) - Powered by Yeahhub.com"},{"fork":"63","star":"316","today":"142 stars today","projectName":"Tencent/TubeMQ","lang":"Java","url":"https://github.com/Tencent/TubeMQ","desc":"TubeMQ focuses on high-performance storage and transmission of massive data in large data scenarios"},{"fork":"69","star":"718","today":"121 stars today","projectName":"salesforce/ctrl","lang":"Python","url":"https://github.com/salesforce/ctrl","desc":"Conditional Transformer Language Model for Controllable Generation"},{"fork":"4,875","star":"11,088","today":"95 stars today","projectName":"abhat222/Data-Science--Cheat-Sheet","url":"https://github.com/abhat222/Data-Science--Cheat-Sheet","desc":"Cheat Sheets"},{"fork":"53","star":"1,090","today":"439 stars today","projectName":"daumann/ECMAScript-new-features-list","url":"https://github.com/daumann/ECMAScript-new-features-list","desc":"A comprehensive list of new ES features, including ES2015 (ES6), ES2016 (ES7), ES2017 (ES8), ES2018 (ES9), ES2019 (ES10)"},{"fork":"3,217","star":"18,652","today":"142 stars today","projectName":"azl397985856/leetcode","lang":"JavaScript","url":"https://github.com/azl397985856/leetcode","desc":"LeetCode Solutions: A Record of My Problem Solving Journey.( leetcode题解，记录自己的leetcode解题之路。)"},{"fork":"6,970","star":"15,234","today":"30 stars today","projectName":"googlehosts/hosts","url":"https://github.com/googlehosts/hosts","desc":"镜像：https://coding.net/u/scaffrey/p/hosts/git"},{"fork":"2,319","star":"4,195","today":"12 stars today","projectName":"coolsnowwolf/lede","lang":"C","url":"https://github.com/coolsnowwolf/lede","desc":"Lean's OpenWrt source"},{"fork":"94","star":"358","today":"73 stars today","projectName":"emmawedekind/developer-portfolios","url":"https://github.com/emmawedekind/developer-portfolios","desc":"A list of developer portfolios for your inspiration"},{"fork":"22,735","star":"59,955","today":"155 stars today","projectName":"jackfrued/Python-100-Days","lang":"Jupyter Notebook","url":"https://github.com/jackfrued/Python-100-Days","desc":"Python - 100天从新手到大师"},{"fork":"24,607","star":"77,178","today":"121 stars today","projectName":"CyC2018/CS-Notes","lang":"Java","url":"https://github.com/CyC2018/CS-Notes","desc":"\uD83D\uDCDA Tech Interview Guide 技术面试必备基础知识、Leetcode 题解、Java、C++、Python、后端面试、操作系统、计算机网络、系统设计"}],
    getTrending: app.globalData.getTrending,

    githubSearchUrl: app.globalData.githubSearchUrl,
    addCollUrl:app.globalData.addCollUrl
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var taht = this;

    // this.getGitHubData('daily', '');

    // wx.request({
    //   url: app.globalData.noticeEnvUrl,
    //   method: 'GET',
    //   success: function (res) {
    //     var resData = res.data;
    //     taht.setData({
    //       notice: resData.notice,
    //       show_feedback: resData.show_feedback
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
   
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },


  setValue(values) {
    this.setData({
      [`value`]: values.value,
      [`displayValue`]: values.label,
      // ['selectedIdx']: values.selectedIndex
      ['selectedIdx']: values.selectedValue

    })
  },

  // 条件查询按钮
  pickerConfirm(e) {
    var that = this;

    const {
      index
    } = e.currentTarget.dataset
    that.setValue(e.detail)

    console.log(that.data)
    var val1 = e.detail.selectedIndex[0]
    var val2 = e.detail.selectedIndex[1]

    console.log(val1, val2)
    if (val1 == 0 && val2 == 0) {
      that.setData({
        list: [{ "fork": "735", "star": "5,392", "today": "296 stars today", "projectName": "microsoft/recommenders", "lang": "Jupyter Notebook", "url": "https://github.com/microsoft/recommenders", "desc": "Best Practices on Recommendation Systems" }, { "fork": "3,083", "star": "11,854", "today": "216 stars today", "projectName": "d2l-ai/d2l-zh", "lang": "Python", "url": "https://github.com/d2l-ai/d2l-zh", "desc": "《动手学深度学习》：面向中文读者、能运行、可讨论。英文版即伯克利“深度学习导论”教材。" }, { "fork": "633", "star": "1,053", "today": "20 stars today", "projectName": "mne-tools/mne-python", "lang": "Python", "url": "https://github.com/mne-tools/mne-python", "desc": "MNE : Magnetoencephalography (MEG) and Electroencephalography (EEG) in Python" }, { "fork": "7,755", "star": "26,442", "today": "36 stars today", "projectName": "home-assistant/home-assistant", "lang": "Python", "url": "https://github.com/home-assistant/home-assistant", "desc": "\uD83C\uDFE1 Open source home automation that puts local control and privacy first" }, { "fork": "53", "star": "462", "today": "120 stars today", "projectName": "commanderx16/x16-emulator", "lang": "C", "url": "https://github.com/commanderx16/x16-emulator", "desc": "Emulator for the Commander X16 8-bit computer" }, { "fork": "16,448", "star": "55,222", "today": "179 stars today", "projectName": "TheAlgorithms/Python", "lang": "Jupyter Notebook", "url": "https://github.com/TheAlgorithms/Python", "desc": "All Algorithms implemented in Python" }, { "fork": "68", "star": "413", "today": "109 stars today", "projectName": "uknowsec/Active-Directory-Pentest-Notes", "url": "https://github.com/uknowsec/Active-Directory-Pentest-Notes", "desc": "个人域渗透学习笔记" }, { "fork": "412", "star": "3,700", "today": "252 stars today", "projectName": "30-seconds/30-seconds-of-python", "lang": "Python", "url": "https://github.com/30-seconds/30-seconds-of-python", "desc": "A curated collection of useful Python snippets that you can understand in 30 seconds or less." }, { "fork": "337", "star": "1,277", "today": "546 stars today", "projectName": "ShusenTang/Dive-into-DL-PyTorch", "lang": "Jupyter Notebook", "url": "https://github.com/ShusenTang/Dive-into-DL-PyTorch", "desc": "本项目将《动手学深度学习》（Dive into Deep Learning）原书中的MXNet代码实现改为PyTorch实现。" }, { "fork": "191", "star": "968", "today": "353 stars today", "projectName": "gxtrobot/bustag", "lang": "JavaScript", "url": "https://github.com/gxtrobot/bustag", "desc": "a tag and recommend system for old bus driver" }, { "fork": "878", "star": "4,564", "today": "553 stars today", "projectName": "microsoft/ai-edu", "lang": "Jupyter Notebook", "url": "https://github.com/microsoft/ai-edu", "desc": "AI education materials for Chinese students, teachers and IT professionals." }, { "fork": "3,338", "star": "47,885", "today": "280 stars today", "projectName": "danistefanovic/build-your-own-x", "url": "https://github.com/danistefanovic/build-your-own-x", "desc": "\uD83E\uDD13 Build your own (insert technology here)" }, { "fork": "31", "star": "399", "today": "91 stars today", "projectName": "hukkelas/DeepPrivacy", "lang": "Python", "url": "https://github.com/hukkelas/DeepPrivacy", "desc": "DeepPrivacy: A Generative Adversarial Network for Face Anonymization" }, { "fork": "30", "star": "453", "today": "243 stars today", "projectName": "NVIDIA/NeMo", "lang": "Python", "url": "https://github.com/NVIDIA/NeMo", "desc": "Neural Modules: a toolkit for conversational AI" }, { "fork": "168", "star": "1,316", "today": "452 stars today", "projectName": "yeahhub/Hacking-Security-Ebooks", "url": "https://github.com/yeahhub/Hacking-Security-Ebooks", "desc": "Top 100 Hacking & Security E-Books (Free Download) - Powered by Yeahhub.com" }, { "fork": "63", "star": "316", "today": "142 stars today", "projectName": "Tencent/TubeMQ", "lang": "Java", "url": "https://github.com/Tencent/TubeMQ", "desc": "TubeMQ focuses on high-performance storage and transmission of massive data in large data scenarios" }, { "fork": "69", "star": "718", "today": "121 stars today", "projectName": "salesforce/ctrl", "lang": "Python", "url": "https://github.com/salesforce/ctrl", "desc": "Conditional Transformer Language Model for Controllable Generation" }, { "fork": "4,875", "star": "11,088", "today": "95 stars today", "projectName": "abhat222/Data-Science--Cheat-Sheet", "url": "https://github.com/abhat222/Data-Science--Cheat-Sheet", "desc": "Cheat Sheets" }, { "fork": "53", "star": "1,090", "today": "439 stars today", "projectName": "daumann/ECMAScript-new-features-list", "url": "https://github.com/daumann/ECMAScript-new-features-list", "desc": "A comprehensive list of new ES features, including ES2015 (ES6), ES2016 (ES7), ES2017 (ES8), ES2018 (ES9), ES2019 (ES10)" }, { "fork": "3,217", "star": "18,652", "today": "142 stars today", "projectName": "azl397985856/leetcode", "lang": "JavaScript", "url": "https://github.com/azl397985856/leetcode", "desc": "LeetCode Solutions: A Record of My Problem Solving Journey.( leetcode题解，记录自己的leetcode解题之路。)" }, { "fork": "6,970", "star": "15,234", "today": "30 stars today", "projectName": "googlehosts/hosts", "url": "https://github.com/googlehosts/hosts", "desc": "镜像：https://coding.net/u/scaffrey/p/hosts/git" }, { "fork": "2,319", "star": "4,195", "today": "12 stars today", "projectName": "coolsnowwolf/lede", "lang": "C", "url": "https://github.com/coolsnowwolf/lede", "desc": "Lean's OpenWrt source" }, { "fork": "94", "star": "358", "today": "73 stars today", "projectName": "emmawedekind/developer-portfolios", "url": "https://github.com/emmawedekind/developer-portfolios", "desc": "A list of developer portfolios for your inspiration" }, { "fork": "22,735", "star": "59,955", "today": "155 stars today", "projectName": "jackfrued/Python-100-Days", "lang": "Jupyter Notebook", "url": "https://github.com/jackfrued/Python-100-Days", "desc": "Python - 100天从新手到大师" }, { "fork": "24,607", "star": "77,178", "today": "121 stars today", "projectName": "CyC2018/CS-Notes", "lang": "Java", "url": "https://github.com/CyC2018/CS-Notes", "desc": "\uD83D\uDCDA Tech Interview Guide 技术面试必备基础知识、Leetcode 题解、Java、C++、Python、后端面试、操作系统、计算机网络、系统设计" }],
      })
    } else {
      that.setData({
        list: [{ "star": "600k", "projectName": that.data.value[0], "lang": "Java", "url": "https://github.com/yisier/thief-book-idea", "desc": that.data.value[1], "tags": [] }]
      })
    }

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