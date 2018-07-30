Component({
    properties: {
        placeholder: {
            type: String,
            value: '搜索'
        },
        inputValue: {
            type: String
        }
    },
    data: {
        showCloseIcon: false,
    },
    methods: {
        inputFocused(e) {
            if (e.detail.value !== '') {
                this.setData({
                    showCloseIcon: true,
                });
            }
        },
        handleInput(e) {
            if (e.detail.value == '') {
                this.setData({
                    showCloseIcon: false,
                });
            } else {
                this.setData({
                    showCloseIcon: true,
                });
                this.triggerEvent('handleInput', {
                    value: e.detail.value
                });
            }
        },
        handleSearch() {
            this.setData({
                showCloseIcon: false,
            });
            console.log('handleSearch', this.data.inputValue);
        },
        clearValue() {
            this.triggerEvent('handleInput', {
                value: ''
            });
            this.setData({
                showCloseIcon: false,
            });
        },
        onTap() {
            this.setData({
                showCloseIcon: false,
            });
            console.log('onTap', this.data.inputValue);
        },
    }
});