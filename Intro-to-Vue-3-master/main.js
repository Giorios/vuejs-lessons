const app = Vue.createApp ({
    data: function() {
        return {
            product: 'Socks',
            description: 'Cool socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.vuemastery.com/',
            inventory: 100,
            onSale: true,
        }
    }
})
