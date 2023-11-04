<template>
    <div>
        <button class="btn">
            <router-link  @click="scrollToTop"  to="/cart" :count="this.$store.state.ProductsToCart.length" class="myc"><i class="bi bi-cart4"></i></router-link>
        </button>
    </div>
</template>

<script>

export default {
    methods: { 
  scrollToTop() {
    window.scrollTo(0,0);
  }
}
};
</script>

<style>
.myc i {
    font-size: 25px;
}

.myc::after {
    content: attr(count);
    position: absolute;
    color: white;
    border-radius: 10px;
    width: 20px;
    height: 20px;
    background-color: red;
    bottom: 25px;

    font-size: 12px;
    padding: 2px;
}
</style>
