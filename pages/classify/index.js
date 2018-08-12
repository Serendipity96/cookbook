var appKey = require('../../config.js');
const classifyURL = 'https://apis.juhe.cn/cook/category?key=';


Page({

    /**
     * 页面的初始数据
     */
    data: {
        tagList: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.handleResult();
    },

    handleResult(){
        let self = this;
        wx.request({
            url: classifyURL + appKey,
            data: {
                result: []
            },
            success: function (res) {
                const tempList = []
                const ids = [16, 2, 8, 15,13];
                ids.map(i => tempList.push(res.data.result[i]));
                self.setData({
                    tagList: tempList
                })
                console.log(self.data.tagList)
            }
        });
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