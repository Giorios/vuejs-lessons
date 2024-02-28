const app = Vue.createApp ({
    data: function() {
        return {
            cart: 0,
            brand: 'Vue Mastery',
            product: 'Socks',
            description: 'Cool socks',
            selectedVariant: 0,
            url: 'https://www.vuemastery.com/',
            onSale: true,
            details:['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
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
        updateVariant(index) {
            this.selectedVariant = index;
        },       
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        isActive() {
            return this.variants[this.selectedVariant].quantity > 0;
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        sale() {
            return this.brand + ' ' + this.product + ' are on sale' 
        }
    }
})