<template>
    <section class="fullinfo">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
                        <Slide v-for="image in GetProductId.images" :key="image">
                            <div class="carousel__item">
                                <img :src="image" alt="" />
                            </div>
                        </Slide>
                    </Carousel>

                    <Carousel
                        id="thumbnails"
                        :items-to-show="4"
                        :wrap-around="true"
                        v-model="currentSlide"
                        ref="carousel"
                    >
                        <Slide v-for="(image, id) in GetProductId.images" :key="id">
                            <div class="carousel__item" @click="slideTo(id - 1)">
                                <img :src="image" />
                            </div>
                        </Slide>
                    </Carousel>
                </div>

                <div class="col-6">
                    <h2>{{ GetProductId.title }}</h2>
                    <p>
                        <span style="color: red">{{ $t("brand") }} : </span>{{ GetProductId.brand }}
                    </p>
                    <h3 style="color: red">{{ $t("Product-about") }}:</h3>
                    <p>{{ GetProductId.description }}</p>
                    <p>
                        <span style="color: red">{{ $t("price") }}: </span>{{ GetProductId.price }}$
                    </p>
                    <p>
                        <span style="color: red">{{ $t("category") }}: </span>{{ GetProductId.category }}
                    </p>
                    <div class="cart">
                        <input min="1"  type="number" class="form-control" v-model="Counter">
                        <button @click="AddToCart()">დამატება</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {defineComponent} from "vue";
import {Carousel, Slide} from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import {mapGetters} from "vuex";
import MyHttpRequests from "@/request/Request";
const API = new MyHttpRequests();
export default defineComponent({
    name: "Gallery",
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        currentSlide: 0,
        products:[],
        Counter: 1
    }),

    computed: {
        ...mapGetters(["GetProductId"]),
    },

    methods: {
        slideTo(val) {
            this.currentSlide = val;
        },

        AddToCart() {
                  let FilteredProducts =this.$store.state.ProductsToCart.find((o)=>{
                    return o.id==this.products.id
                 })
                   
                 if(FilteredProducts){
                    this.products.Counter+=this.Counter
                    // localstorage

                    localstorage.setItem('ProductsToCart',JSON.stringify(this.$store.state.ProductsToCart))
                   
                   
                 }else{
                    this.products=this.GetProductId
               this.GetProductId.Counter = this.Counter
               this.$store.dispatch('SetProductsToCart', this.products)
               
                 }
               
                 
                     
                 
              
            
               
            
        },
    },

    mounted() {
        API.getFilteredProducts(this.$route.params.productID).then((response) => {
            this.$store.dispatch("SetProductId", response.data);
            window.scrollTo(0,0);
        });
    },
});
</script>

<style>
.carousel__item img {
    width: 100%;
    object-fit: cover;
    max-height: 300px;
}
.carousel__item {
    min-height: 100px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

.fullinfo {
    margin-top: 50px;
}

.cart{
    display: flex;
    font-family: F-2;

}
</style>
