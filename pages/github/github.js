const app = getApp();

import {
  $wuxToast
} from '../../wux/index'

const seasons = [
  ['总榜', '周榜', '月榜', '季榜', '年榜'],
  ['所有语言', 'Java', 'Python', 'JavaScript', 'C', 'C++', 'C#', 'PHP', 'GO'],
]

const searchTitle = '根据已选择条件搜索'
Page({

  /**
   * 页面的初始数据
   */
  data: {

    notice:'点击左上角,即可查看GitHub实时趋势。如果你有好的意见或建议可以跟我反馈哦！感谢每一位访客!',  //通知栏
    show_feedback:true,   //是否显示反馈按钮

    // 自定义导航栏显示内容
    title: 'GitHub Star榜',
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
    selectedIdx: [0, 0],    // 两个下拉框列表索引
    displayValue: '创建日期/语言',  // 两个下拉框显示内容
    seasons,    // 两个下拉框内容

    index: 1, // 当前页

    // 主页显示内容
    list: [{"star":"305k","projectName":"freeCodeCamp/freeCodeCamp","lang":"JavaScript","url":"https://github.com/freeCodeCamp/freeCodeCamp","desc":"The https://www.freeCodeCamp.org open source codebase and curriculum. Learn to code for free together with millions of people.","tags":["learn-to-code","nonprofits","programming"]},{"star":"247k","projectName":"996icu/996.ICU","lang":"Rust","url":"https://github.com/996icu/996.ICU","desc":"Repo for counting stars and contributing. Press F to pay respect to glorious developers.","tags":[]},{"star":"148k","projectName":"vuejs/vue","lang":"JavaScript","url":"https://github.com/vuejs/vue","desc":"\uD83D\uDD96 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.","tags":["vue","javascript","frontend"]},{"star":"136k","projectName":"facebook/react","lang":"JavaScript","url":"https://github.com/facebook/react","desc":"A declarative, efficient, and flexible JavaScript library for building user interfaces.","tags":["javascript","react","frontend"]},{"star":"136k","projectName":"twbs/bootstrap","lang":"JavaScript","url":"https://github.com/twbs/bootstrap","desc":"The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.","tags":["css","bootstrap","javascript"]},{"star":"134k","projectName":"tensorflow/tensorflow","lang":"C++","url":"https://github.com/tensorflow/tensorflow","desc":"An Open Source Machine Learning Framework for Everyone","tags":["tensorflow","machine-learning","python"]},{"star":"128k","projectName":"EbookFoundation/free-programming-books","lang":"None","url":"https://github.com/EbookFoundation/free-programming-books","desc":":books: Freely available programming books","tags":["education","books","list"]},{"star":"115k","projectName":"sindresorhus/awesome","lang":"None","url":"https://github.com/sindresorhus/awesome","desc":"\uD83D\uDE0E Awesome lists about all kinds of interesting topics","tags":["awesome","awesome-list","unicorns"]},{"star":"108k","projectName":"getify/You-Dont-Know-JS","lang":"None","url":"https://github.com/getify/You-Dont-Know-JS","desc":"A book series on JavaScript. @YDKJS on twitter.","tags":["book-series","javascript","closures"]},{"star":"95k","projectName":"robbyrussell/oh-my-zsh","lang":"Shell","url":"https://github.com/robbyrussell/oh-my-zsh","desc":"\uD83D\uDE43 A delightful community-driven (with 1,300+ contributors) framework for managing your zsh configuration. Includes 200+ optional plugins (rails, git, OSX, hub, capistrano, brew, ant, php, python, etc)","tags":["shell","zsh-configuration","theme"]}],
  
    githubDataUrl: app.globalData.githubDataUrl,
    githubSearchUrl: app.globalData.githubSearchUrl,
    addCollUrl:app.globalData.addCollUrl
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
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
    var that = this;
    var sv = that.data.inputVal;
    if (sv != '') {
      return
    }
   
    that.setData({
      index: 1,
      list:[{"star":"305k","projectName":"freeCodeCamp/freeCodeCamp","lang":"JavaScript","url":"https://github.com/freeCodeCamp/freeCodeCamp","desc":"The https://www.freeCodeCamp.org open source codebase and curriculum. Learn to code for free together with millions of people.","tags":["learn-to-code","nonprofits","programming"]},{"star":"247k","projectName":"996icu/996.ICU","lang":"Rust","url":"https://github.com/996icu/996.ICU","desc":"Repo for counting stars and contributing. Press F to pay respect to glorious developers.","tags":[]},{"star":"148k","projectName":"vuejs/vue","lang":"JavaScript","url":"https://github.com/vuejs/vue","desc":"\uD83D\uDD96 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.","tags":["vue","javascript","frontend"]},{"star":"136k","projectName":"facebook/react","lang":"JavaScript","url":"https://github.com/facebook/react","desc":"A declarative, efficient, and flexible JavaScript library for building user interfaces.","tags":["javascript","react","frontend"]},{"star":"136k","projectName":"twbs/bootstrap","lang":"JavaScript","url":"https://github.com/twbs/bootstrap","desc":"The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.","tags":["css","bootstrap","javascript"]},{"star":"134k","projectName":"tensorflow/tensorflow","lang":"C++","url":"https://github.com/tensorflow/tensorflow","desc":"An Open Source Machine Learning Framework for Everyone","tags":["tensorflow","machine-learning","python"]},{"star":"128k","projectName":"EbookFoundation/free-programming-books","lang":"None","url":"https://github.com/EbookFoundation/free-programming-books","desc":":books: Freely available programming books","tags":["education","books","list"]},{"star":"115k","projectName":"sindresorhus/awesome","lang":"None","url":"https://github.com/sindresorhus/awesome","desc":"\uD83D\uDE0E Awesome lists about all kinds of interesting topics","tags":["awesome","awesome-list","unicorns"]},{"star":"108k","projectName":"getify/You-Dont-Know-JS","lang":"None","url":"https://github.com/getify/You-Dont-Know-JS","desc":"A book series on JavaScript. @YDKJS on twitter.","tags":["book-series","javascript","closures"]},{"star":"95k","projectName":"robbyrussell/oh-my-zsh","lang":"Shell","url":"https://github.com/robbyrussell/oh-my-zsh","desc":"\uD83D\uDE43 A delightful community-driven (with 1,300+ contributors) framework for managing your zsh configuration. Includes 200+ optional plugins (rails, git, OSX, hub, capistrano, brew, ant, php, python, etc)","tags":["shell","zsh-configuration","theme"]}],
    })
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that = this;

    var sv = that.data.inputVal;
    if (sv != '') {
      return
    }

    var next = that.data.index + 1;
    that.setData({
      index: next
    })

    var response = [{"star":"89k","projectName":"jwasham/coding-interview-university","lang":"None","url":"https://github.com/jwasham/coding-interview-university","desc":"A complete computer science study plan to become a software engineer.","tags":["computer-science","interview-prep","interview"]},{"star":"89k","projectName":"github/gitignore","lang":"None","url":"https://github.com/github/gitignore","desc":"A collection of useful .gitignore templates","tags":["gitignore","git"]},{"star":"89k","projectName":"airbnb/javascript","lang":"JavaScript","url":"https://github.com/airbnb/javascript","desc":"JavaScript Style Guide","tags":["javascript","eslint","naming-conventions"]},{"star":"88k","projectName":"kamranahmedse/developer-roadmap","lang":"None","url":"https://github.com/kamranahmedse/developer-roadmap","desc":"Roadmap to becoming a web developer in 2019","tags":[]},{"star":"87k","projectName":"d3/d3","lang":"JavaScript","url":"https://github.com/d3/d3","desc":"Bring data to life with SVG, Canvas and HTML. :bar_chart::chart_with_upwards_trend::tada:","tags":["visualization"]},{"star":"83k","projectName":"microsoft/vscode","lang":"TypeScript","url":"https://github.com/microsoft/vscode","desc":"Visual Studio Code","tags":["editor","electron","visual-studio-code"]},{"star":"81k","projectName":"facebook/react-native","lang":"JavaScript","url":"https://github.com/facebook/react-native","desc":"A framework for building native apps with React.","tags":[]},{"star":"80k","projectName":"torvalds/linux","lang":"C","url":"https://github.com/torvalds/linux","desc":"Linux kernel source tree","tags":[]},{"star":"77k","projectName":"CyC2018/CS-Notes","lang":"Java","url":"https://github.com/CyC2018/CS-Notes","desc":":books: Tech Interview Guide 技术面试必备基础知识、Leetcode 题解、Java、C++、Python、后端面试、操作系统、计算机网络、系统设计","tags":["algorithm","leetcode","interview"]},{"star":"77k","projectName":"electron/electron","lang":"C++","url":"https://github.com/electron/electron","desc":":electron: Build cross-platform desktop apps with JavaScript, HTML, and CSS","tags":["electron","javascript","c-plus-plus"]}]

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
  onShareAppMessage: function() {

  },


  setValue(values) {
    this.setData({
      [`value`]: values.value,
      [`displayValue`]: values.label,
      ['selectedIdx']: values.selectedIndex
    })
  },

  // 条件查询按钮
  pickerConfirm(e) {
    var that = this;

    const {
      index
    } = e.currentTarget.dataset
    that.setValue(e.detail)

    var val1 = e.detail.selectedIndex[0]
    var val2 = e.detail.selectedIndex[1]

    console.log(val1, val2)
    if (val1 == 0 && val2 == 0) {
      that.setData({
        index: 1,
        list: [{ "star": "305k", "projectName": "freeCodeCamp/freeCodeCamp", "lang": "JavaScript", "url": "https://github.com/freeCodeCamp/freeCodeCamp", "desc": "The https://www.freeCodeCamp.org open source codebase and curriculum. Learn to code for free together with millions of people.", "tags": ["learn-to-code", "nonprofits", "programming"] }, { "star": "247k", "projectName": "996icu/996.ICU", "lang": "Rust", "url": "https://github.com/996icu/996.ICU", "desc": "Repo for counting stars and contributing. Press F to pay respect to glorious developers.", "tags": [] }, { "star": "148k", "projectName": "vuejs/vue", "lang": "JavaScript", "url": "https://github.com/vuejs/vue", "desc": "\uD83D\uDD96 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.", "tags": ["vue", "javascript", "frontend"] }, { "star": "136k", "projectName": "facebook/react", "lang": "JavaScript", "url": "https://github.com/facebook/react", "desc": "A declarative, efficient, and flexible JavaScript library for building user interfaces.", "tags": ["javascript", "react", "frontend"] }, { "star": "136k", "projectName": "twbs/bootstrap", "lang": "JavaScript", "url": "https://github.com/twbs/bootstrap", "desc": "The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.", "tags": ["css", "bootstrap", "javascript"] }, { "star": "134k", "projectName": "tensorflow/tensorflow", "lang": "C++", "url": "https://github.com/tensorflow/tensorflow", "desc": "An Open Source Machine Learning Framework for Everyone", "tags": ["tensorflow", "machine-learning", "python"] }, { "star": "128k", "projectName": "EbookFoundation/free-programming-books", "lang": "None", "url": "https://github.com/EbookFoundation/free-programming-books", "desc": ":books: Freely available programming books", "tags": ["education", "books", "list"] }, { "star": "115k", "projectName": "sindresorhus/awesome", "lang": "None", "url": "https://github.com/sindresorhus/awesome", "desc": "\uD83D\uDE0E Awesome lists about all kinds of interesting topics", "tags": ["awesome", "awesome-list", "unicorns"] }, { "star": "108k", "projectName": "getify/You-Dont-Know-JS", "lang": "None", "url": "https://github.com/getify/You-Dont-Know-JS", "desc": "A book series on JavaScript. @YDKJS on twitter.", "tags": ["book-series", "javascript", "closures"] }, { "star": "95k", "projectName": "robbyrussell/oh-my-zsh", "lang": "Shell", "url": "https://github.com/robbyrussell/oh-my-zsh", "desc": "\uD83D\uDE43 A delightful community-driven (with 1,300+ contributors) framework for managing your zsh configuration. Includes 200+ optional plugins (rails, git, OSX, hub, capistrano, brew, ant, php, python, etc)", "tags": ["shell", "zsh-configuration", "theme"] }],
      })
    } else {
      that.setData({
        index: 1,
        list: [{ "star": "600k", "projectName": that.data.value[0], "lang": "Java", "url": "https://github.com/yisier/thief-book-idea", "desc": that.data.value[1], "tags": [] }]
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

  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  
  // 搜索框取消
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false,
      index: 1,
      list:[{"star":"305k","projectName":"freeCodeCamp/freeCodeCamp","lang":"JavaScript","url":"https://github.com/freeCodeCamp/freeCodeCamp","desc":"The https://www.freeCodeCamp.org open source codebase and curriculum. Learn to code for free together with millions of people.","tags":["learn-to-code","nonprofits","programming"]},{"star":"247k","projectName":"996icu/996.ICU","lang":"Rust","url":"https://github.com/996icu/996.ICU","desc":"Repo for counting stars and contributing. Press F to pay respect to glorious developers.","tags":[]},{"star":"148k","projectName":"vuejs/vue","lang":"JavaScript","url":"https://github.com/vuejs/vue","desc":"\uD83D\uDD96 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.","tags":["vue","javascript","frontend"]},{"star":"136k","projectName":"facebook/react","lang":"JavaScript","url":"https://github.com/facebook/react","desc":"A declarative, efficient, and flexible JavaScript library for building user interfaces.","tags":["javascript","react","frontend"]},{"star":"136k","projectName":"twbs/bootstrap","lang":"JavaScript","url":"https://github.com/twbs/bootstrap","desc":"The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.","tags":["css","bootstrap","javascript"]},{"star":"134k","projectName":"tensorflow/tensorflow","lang":"C++","url":"https://github.com/tensorflow/tensorflow","desc":"An Open Source Machine Learning Framework for Everyone","tags":["tensorflow","machine-learning","python"]},{"star":"128k","projectName":"EbookFoundation/free-programming-books","lang":"None","url":"https://github.com/EbookFoundation/free-programming-books","desc":":books: Freely available programming books","tags":["education","books","list"]},{"star":"115k","projectName":"sindresorhus/awesome","lang":"None","url":"https://github.com/sindresorhus/awesome","desc":"\uD83D\uDE0E Awesome lists about all kinds of interesting topics","tags":["awesome","awesome-list","unicorns"]},{"star":"108k","projectName":"getify/You-Dont-Know-JS","lang":"None","url":"https://github.com/getify/You-Dont-Know-JS","desc":"A book series on JavaScript. @YDKJS on twitter.","tags":["book-series","javascript","closures"]},{"star":"95k","projectName":"robbyrussell/oh-my-zsh","lang":"Shell","url":"https://github.com/robbyrussell/oh-my-zsh","desc":"\uD83D\uDE43 A delightful community-driven (with 1,300+ contributors) framework for managing your zsh configuration. Includes 200+ optional plugins (rails, git, OSX, hub, capistrano, brew, ant, php, python, etc)","tags":["shell","zsh-configuration","theme"]}],
    });
  },

  // 搜索框清空
  clearInput: function() {
    this.setData({
      inputVal: ""
    });

  },
  //搜索框输入
  inputTyping: function(e) {
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
      list: [{"star":"60k","projectName":val,"lang":"Java","url":"https://github.com/yisier/thief-book-idea","desc":val,"tags":[]}]
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
  },


  // 跳转到github-trending
  onGoto:function(){
    wx.navigateTo({
      url: '../github-trending/github-trending'
    })
  }
})