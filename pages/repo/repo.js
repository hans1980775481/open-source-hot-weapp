const app = getApp();
import {
  $wuxToast
} from '../../wux/index'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    barBg: '#ffffff',//#ff6600
    color: '#000000',//#ffffff
    leftButton:'back',
    
    repoUrl:'',
    list: [{"star":247283,"language":"Rust","projectName":"996icu/996.ICU","type":"0","url":"https://github.com/996icu/996.ICU","desc":"Repo for counting stars and contributing. Press F to pay respect to glorious developers."},{"star":37,"language":"PHP","projectName":"996icu/skycaiji","type":"0","url":"https://github.com/996icu/skycaiji","desc":"蓝天采集器是一款免费的数据采集发布爬虫软件，采用php+mysql开发，可部署在云服务器，几乎能采集所有类型的网页，无缝对接各类CMS建站程序，免登录实时发布数据，全自动无需人工干预！是大数据、云时代网站数据自动化采集的最佳云端爬虫软件"}],
    right: [{
      text: '收藏',
      style: 'background-color: #F4333C; color: white',
    }],
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var repoName = options.projectName.split('/')[0];
    var repoUrl = options.repoUrl;
    var type = options.type;
    var url = '';
    
    console.log("options:",options)
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

    //导航栏
    tabClick: function (e) {
      this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
      });
    },

})
