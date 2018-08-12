var appKey = require('../../config.js');
const detailURL = 'https://apis.juhe.cn/cook/queryid?';
var menuIds = [];

Page({

    /**
     * 页面的初始数据
     */
    data: {
        menuList: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let self = this;
        wx.getUserInfo({
            success: function(res) {
                self.setData({
                    avatarUrl: res.userInfo.avatarUrl,
                    nickName: res.userInfo.nickName
                })
            }
        })
        this.handleRequest();

    },
    handleRequest() {
        menuIds = [100, 1013, 23, 1818, 51, 84]
        let self = this;
        let list = [];
            for (let i = 0; i < menuIds.length; i++) {
                wx.request({
                    url: detailURL + 'key=' + appKey + '&id=' + menuIds[i],
                    data: {
                        result: []
                    },
                    success: function(res) {
                        let data = res.data.result.data[0];
                        data.tags = data.tags.split(";", 3).slice(0, 2);
                        list.push(data)
                        if (i == menuIds.length - 1) {
                            self.setData({
                                menuList: list
                            })
                        }
                    }
                
                })
            }
    },
    onTap(e) {
        let self = this;
        wx.navigateTo({
            url: `/pages/detail/index?id=${e.currentTarget.dataset.id}&menuStr=${e.currentTarget.dataset.name}`,
        });

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



