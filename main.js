const app = Vue.createApp ({
    data: function() {
        return {
            cart: [],
            premium: true,
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        removeItem(id) {
            const num = this.cart.indexOf(id);
            if (num > -1) {
                this.cart.splice(num, 1)
            }
        },
    },

})