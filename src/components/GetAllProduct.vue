<template>
    <div style="margin-top: 15px">
        <div class="row">
            <div v-for="data in searchData" class="col-4" :key="data.id">
                <div style="margin-bottom: 10px" class="card">
                    <div class="img-position">
                        <img
                            style="width: 100%; min-height: 200px; max-height: 200px; object-fit: cover"
                            :src="data.thumbnail"
                            class="card-img-top"
                        />
                        <div class="hover-position"></div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ data.title.slice(0, 15) + "..." }}</h5>
                        <p class="card-text">
                            {{
                                data.description.length > 43 ? data.description.slice(0, 43) + "..." : data.description
                            }}
                        </p>
                        <router-link
                            
                            class="btn btn-outline-success"
                            :to="'/GetProductID/' + data.id"
                            >Read More</router-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyHttpRequests from "@/request/Request";
import {mapGetters} from "vuex";
const API = new MyHttpRequests();
export default {
    computed: {
        searchData() {
            return this.GetAllProduct.filter((el) => el.title.toLowerCase().includes(this.GetSearch.toLowerCase()));
        },
        ...mapGetters(["GetAllProduct", "GetSearch"]),
    },

    watch: {
        $route(event) {
            this.GetAllProducts(event.params.category);
        },
    },

    methods: {
        GetAllProducts(categoryParam = null) {
            API.GetAllProducts(categoryParam).then((response) => {
                this.$store.dispatch("SetAllProduct", response.data.products);
            });
        },
        
   
  
        
    },
    mounted() {
        if (this.$route.params.category) {
            this.GetAllProducts(this.$route.params.category);
        } else {
            this.GetAllProducts();
        }
        
    },
};
</script>

<style>
.img-position {
    position: relative;
    overflow: hidden;
}

.card:hover .hover-position {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 100%;
}

.card:hover .img-position img {
    scale: 1.1;
    transition: 1s;
}

.hover-position {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: -100%;
    background-color: rgba(238, 215, 209, 0.11);
    transition: 1s;
}
</style>
