// pages/chatsessions/joanna/joanna.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideGuide: true,
    hideYesChat: true,
    hideNoChat: true,
    unpressed: true,
    pressed: false,
    message_value: "",
    showmessage: 0
  },

  initMovie: function(e) {
    self = this
    if(this.data.hideGuide === true) {
      self.setData({
        hideGuide: !self.data.hideGuide,
        pressed: true,
        unpressed: false
      })
    }
  },

  initHiking: function() {

  },

  closeTopic: function(e) {
    this.setData({
      hideGuide: !this.data.hideGuide,
      pressed: false,
      unpressed: true
    })
  },

  chatYes: function(e) {
    this.setData({
      message_value: "Have you seen Valerian? I saw it! It was awesome!",
      showmessage: 1
    })
  },

  chatNo: function (e) {
    this.setData({
      message_value: "Have you seen Valerian? I heared it's awesome!",
      showmessage: 2
    })
  },

  add: function (e) {
    self = this;
    if(self.data.showmessage === 1) {
      self.setData({
        hideYesChat: false,
        hideNoChat: true,
        message_value: ""
      })
    } else if(self.data.showmessage === 2) {
      self.setData({
        hideYesChat: true,
        hideNoChat: false,
        message_value: ""
      })
    }
  }
})