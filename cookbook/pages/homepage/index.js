var appKey = require('../../config.js');
const detailURL = 'https://apis.juhe.cn/cook/queryid?';
var menuIds = [];
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputValue: '',
        cardList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getCardList();

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
    handleInput(e) {
        this.setData({
            inputValue: e.detail.value,
        });
    },
    getCardList() {
        let timeStamp = (new Date()).valueOf();
        
        // menuIds = [timeStamp % 79, timeStamp % 131, timeStamp % 258, timeStamp % 169, timeStamp % 44, timeStamp % 523];
        menuIds = [1,2,3,4,5,6]
        console.log(menuIds)
        let self = this;
        let list = [];
        for (let i = 0; i < menuIds.length; i++) {
            wx.request({
                url: detailURL + 'key=' + appKey + '&id=' + menuIds[i],
                data: {
                    result: []
                },
                success: function(res) {
                    let url = res.data.result.data[0].albums[0];
                    let name = res.data.result.data[0].title;
                    list.push({
                        id: menuIds[i],
                        name: name,
                        albums: url
                    })
                    if (i == menuIds.length - 1) {
                        self.setData({
                            cardList: list
                        })
                    }
                }
            })
        }


    },
    toDetail(e) {
        let self = this;
        wx.navigateTo({
            url: `/pages/detail/index?id=${e.currentTarget.dataset.id}&menuStr=${e.currentTarget.dataset.name}`,
        });
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