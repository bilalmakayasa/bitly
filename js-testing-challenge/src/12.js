const Item = {

    list: function() {
        return [
            { id: 1, name: 'Kecap', sale_start_at: new Date('2018-10-01'), sale_end_at: new Date('2018-10-10') },
            { id: 2, name: 'Sambal', sale_start_at: new Date('2018-10-15'), sale_end_at: new Date('2018-10-30') },
            { id: 3, name: 'Merica', sale_start_at: new Date('2018-08-01'), sale_end_at: new Date('2018-08-31') },
            { id: 4, name: 'Detergen', sale_start_at: new Date('2019-02-10'), sale_end_at: new Date('2019-10-10') },
            { id: 5, name: 'Sapu', sale_start_at: new Date('2017-09-01'), sale_end_at: new Date('2030-07-15') },
        ]
    },

    findById(id) {
        let itemArray = this.list()
            // console.log([Item.list().indexOf(id)])
            // return(this.list()[Item.list().indexOf(id)]);
        for (let i = 0; i < itemArray.length; i++) {
            if (itemArray[i].id == id) {
                this.itemArray = itemArray[i]
                return this
            }

        }

    },

    isOnSale() {
        let currentDate = new Date
        if (this.itemArray.sale_start_at < currentDate && this.itemArray.sale_end_at > currentDate) {
            return true
        } else {
            return false
        }
    },

}

// console.log(Item.findById(3))
// console.log(Item.findById(5).isOnSale())
module.exports = Item