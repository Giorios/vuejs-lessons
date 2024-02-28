const app = Vue.createApp ({
    data: function() {
        return {
            cart: 0,
            brand: 'Vue Mastery',
            product: 'Socks',
            description: 'Cool socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.vuemastery.com/',
            inventory: 100,
            onSale: true,
            details:['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'},
            ],
            sizes: ['xsmall', 'small', 'medium', 'large', 'xlarge']
        }
    },
    methods: {
        addToCart() {
            this.cart +=1;
        },
        removeFromCart() {
            if(this.cart >= 1)
            this.cart -=1;  
        },
        updateImage(variantImage) {
            this.image = variantImage;
        },       
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        isActive() {
            return this.inventory > 0;
        }
    }
})