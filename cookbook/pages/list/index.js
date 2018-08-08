var appKey = require('../../config.js');
const menuURL = 'https://apis.juhe.cn/cook/query?';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        menuList: [],
        menuStr: '',
        pageNumber: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            menuStr: options.menuStr
        })
        this.handleRequest();
    },

    handleRequest() {
        wx.showNavigationBarLoading()
        let self = this;
        const rn = 10; // 一次请求返回条数
        const albums = 1; // 封面图片，默认是1
        let pn = self.data.pageNumber;
        wx.request({
            url: menuURL + 'key=' + appKey + '&menu=' + self.data.menuStr + '&rn=' + rn + '&pn=' + pn * rn + '&albums=' + albums,
            data: {
                result: []
            },
            success: function(res) {
                let oldList = self.data.menuList;
                let data = res.data.result.data;
                pn += 1; 
                if (oldList.length == 0) {
                    for (let i = 0; i < 10; i++) {
                        data[i].tags = data[i].tags.split(";", 4).slice(1, 3);
                    }
                    self.setData({
                        menuList: data,
                        pageNumber: pn,
                    })
                } else {
                    for (let i = 0; i < 10; i++) {
                        data[i].tags = data[i].tags.split(";", 4).slice(1, 3);
                    }
                    self.setData({
                        menuList: oldList.concat(data),
                        pageNumber: pn,
                    })
                }
                wx.hideNavigationBarLoading()
            }
        });
    },
    onTap(e){
        wx.navigateTo({
            url: `/pages/detail/index?id=${e.currentTarget.dataset.id}`,
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
        this.handleRequest();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})