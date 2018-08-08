Component({
    properties: {
        List: {
            type: Array,
            value: [],
        },
    },
    methods:{
        onTap(e){
            const name = e.currentTarget.dataset.name;
            wx.navigateTo({
                url: '/pages/list/index?menuStr=' + name,
            })
        }
    }
});