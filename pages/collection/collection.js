const app = getApp();
import {
  $wuxToast
} from '../../wux/index'


Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 自定义导航栏显示内容
    title: '收藏夹',
    barBg: '#ffffff',//#ff6600
    color: '#000000',//#ffffff
    
    // 空收藏夹提示
     msg: {
      title: '空空如也',
      text: '快去github或gitee收藏几个项目吧（右滑收藏）',
    },

    // 收藏夹内容
    list: [{"create":"2019-09-16 10:06:59","type":"0","projectName":"commanderx16/x16-emulator","url":"https://github.com/commanderx16/x16-emulator"}],
   
    // 右滑显示内容
    right: [{
      text: '删除',
      style: 'background-color: #F4333C; color: white',
    }],
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

  // 删除收藏夹
  delColl(e) {

    var that = this;
    var newlist = that.data.list.splice(0,1)
    console.log(newlist)

    that.setData({
      list: newlist
    })

  },
})
