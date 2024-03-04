app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        },
    },
    template:
    /*html*/
    `      <div class="product-display">
    <div class="product-container">
      <div class="product-image" :class="{ 'out-of-stock-img': ! isActive}" :disabled="!isActive">
        
        <img v-bind:src="image">

        </div>
        <div class="product-info">
  <h1>{{ title }}</h1>
  <p>{{ description }}</p>
  <p v-if="inStock">In Stock</p>
  <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
  <p v-else>Out of Stock</p>    
  <p>Shipping: {{ shipping }}</p>
  <p v-if="onSale">{{ sale }}</p>
  <a :href="url">Made with Vue</a>
  <ul>
    <li v-for="detail in details">{{ detail }}</li>
  </ul>
  <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
  class="color-circle" :style="{ backgroundColor: variant.color }"></div>
  <li v-for="size in sizes">{{ size }}</li>
  <button class="button" :class="{ disabledButton: !isActive }" :disabled="!isActive" @click="addToCart">Add to Cart</button>
  <button class="button" @click="removeFromCart">Remove Item</button>
  </div>
  </div>
</div>`,
data: function() {
    return {
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
        sizes: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
        reviews: {}
    }
},
methods: {
    addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
        this.selectedVariant = index;
    },       
    addReview(review) {
        this.reviews.push(review)
    }
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
    },
    shipping() {
        if (this.premium) {
            return 'Free'
        }
        return 2.99
    }
}
})