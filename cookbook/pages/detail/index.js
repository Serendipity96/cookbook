var appKey = require('../../config.js');
const detailURL = 'https://apis.juhe.cn/cook/queryid?';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: 0,
        detail:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            id: options.id
        })
        this.handleRequest();
    },
    handleRequest(){
        let self = this;
        wx.request({
            url: detailURL+'key='+appKey+'&id='+self.data.id,
            data:{
                result:[]
            },
            success:function(res){
                self.setData({
                    detail: res.data.result.data[0]
                })
            }
        })
        
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

    }
})