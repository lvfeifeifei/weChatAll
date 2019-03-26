// pages/details/details.js
let listDatas = require('../../datas/list-data.js')
console.log(listDatas,'details========')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isCollect: false, //默认不收藏
    detailObj:{}
  },
  handleCollect () {
    this.setData({
      //修改状态
      isCollect: !this.data.isCollect
    })
    let title = this.data.isCollect?'收藏成功':'取消收藏'
    console.log(this.data.isCollect)
    //显示消息提示
    wx.showToast({
      title,
      icon: 'success',
    })
    //存储是否收藏的状态
    // 缓存思路：
    /*
      对象 : {0: true, 1: false,  2: true}
    
     */
    let {index} = this.data
    let obj = wx.getStorageSync('isCollect')
    //用户首次访问预处理
    obj = obj?obj:{}
    console.log(obj, 'xxxx');
    //空对象里面放key=value
    obj[index] = this.data.isCollect
    wx.setStorageSync('isCollect',obj)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let index = options.index;
    //更新状态数据
    this.setData({
      detailObj: listDatas.list_data[index],
      index:index
    })
    let oldObj = wx.getStorageSync('isCollect')
    //获取本地缓存的是否收藏的状态----判断页面是否已经收藏--没有收藏或者undefined时不做处理即可，因为初始就是false
    if (oldObj[index]){
      //更新数据状态
      this.setData({
        isCollect:true
      })
    }
   
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

  }
})