// pages/posts/posts.js
//导入数据
var postsData = require('../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post_img:'../../image/post/sls.jpg',
    post_img1:'../../image/post/cat.png',
    post_img2:'../../image/post/crab.png',
  },
  onPostTap:function(event) {
  
    var postId = event.currentTarget.dataset.postid
  
    wx.navigateTo({
      //跳转到详情页面
      url: '../post_detail/post_detail?id='+postId  //传递参数id 传递多个用&链接
    })
  },
  process:function(){
var date = "nOV 2020 - 12 -31"

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  
   this.setData({post_key:postsData.postList})  //必须传递的是一个对象
  //  相当于把数据拷贝到data里面
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