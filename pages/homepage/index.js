var appKey = require('../../config.js');
const detailURL = 'https://apis.juhe.cn/cook/queryid?';
var menuIds = [];
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputValue: '',
        listOne:[],
        listTwo:[],
        listThree:[]
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
        menuIds = [100, 1013, 23, 1818, 51, 84]
        let self = this;
        let listOne = [];
        let listTwo = [];
        let listThree = [];
        for (let i = 0; i < menuIds.length; i++) {
            wx.request({
                url: detailURL + 'key=' + appKey + '&id=' + menuIds[i],
                data: {
                    result: []
                },
                success: function(res) {
                    let url = res.data.result.data[0].albums[0];
                    let name = res.data.result.data[0].title;
                    if (i < 2) {
                        listOne.push({
                            id: menuIds[i],
                            name: name,
                            albums: url
                        })
                    }
                    if (i >= 2 && i < 4) {
                        listTwo.push({
                            id: menuIds[i],
                            name: name,
                            albums: url
                        })
                    }
                    if (i >= 4 && i < 6) {
                        listThree.push({
                            id: menuIds[i],
                            name: name,
                            albums: url
                        })
                    }
                    if(i == menuIds.length-1){
                        self.setData({
                            listOne:listOne,
                            listTwo:listTwo,
                            listThree:listThree
                        })
                    }
                }
            })
        }
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