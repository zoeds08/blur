// pages/chatsessions/joanna/joanna.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideGuide: true,
    hideYesChat: true,
    hideNoChat: true
  },

  initMovie: function(e) {
    self = this
    if(this.data.hideGuide === true) {
      self.setData({
        hideGuide: !self.data.hideGuide
      })
    }
  },

  initHiking: function() {

  },

  closeTopic: function(e) {
    this.setData({
      hideGuide: !this.data.hideGuide
    })
  },

  chatYes: function(e) {
    this.setData({
      hideGuide: true,
      hideYesChat: false,
      hideNoChat: true
    })
  },

  chatNo: function (e) {
    this.setData({
      hideGuide: true,
      hideYesChat: true,
      hideNoChat: false
    })
  }
})