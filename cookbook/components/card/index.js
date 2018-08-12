Component({
    properties:{
        cardList:{
            type:Array,
        }
    },
    methods:{
        toDetail(e) {
            wx.navigateTo({
                url: `/pages/detail/index?id=${e.currentTarget.dataset.id}&menuStr=${e.currentTarget.dataset.name}`,
            });
        },
    }
});