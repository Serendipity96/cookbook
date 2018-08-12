Component({
    properties: {
        detail: {
            type: Object,
            observer: '_init'
        }
    },
    methods: {
        _init() {
            const detail = this.properties.detail
            if (Object.keys(detail).length !== 0) {
                let ingredients = detail.ingredients.split(';');
                let burden = detail.burden.split(';');
                let ing = [];
                let bur = [];
                ingredients.forEach(element => {
                    let tmp = element.split(',')
                    ing.push({ name: tmp[0], value: tmp[1] })
                });

                burden.forEach(element => {
                    let tmp = element.split(',')
                    bur.push({name:tmp[0],value:tmp[1]})
                });

                this.setData({
                    tags: detail.tags.split(';').slice(1, 4),
                    ingredients: ing,
                    burden: bur
                })

            }

        }
    },


});