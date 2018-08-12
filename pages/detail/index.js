var appKey = require('../../config.js');
const detailURL = 'https://apis.juhe.cn/cook/queryid?';
const menuURL = 'https://apis.juhe.cn/cook/query?';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        detail: {},
        menuList: [],
        pageNumber: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            id: options.id,
            menuStr: options.menuStr
        })
        this.handleDetail();
        this.handleRecommend();
    },
    handleDetail() {
        let self = this;
        wx.request({
            url: detailURL + 'key=' + appKey + '&id=' + self.data.id,
            data: {
                result: []
            },
            success: function(res) {
                self.setData({
                    detail: res.data.result.data[0]
                })
            }
        })
    },
    handleRecommend() {
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
                console.log(res.data.result)
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
    onTap(e) {
        let self = this;
        wx.navigateTo({
            url: `/pages/detail/index?id=${e.currentTarget.dataset.id}&menuStr=${self.data.menuStr}`,
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
        this.handleRecommend();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})