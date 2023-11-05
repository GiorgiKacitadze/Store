<template>
    <button  @click="burgerClick()" class="burgeri"><i class="bi bi-list"></i></button>
    <div v-if="burger===true" class="Responsive">
        <h2 style="text-align: center; color: rgb(40, 228, 15)">{{ $t("category") }}</h2>
        <div  style="margin-top: 2px" v-for="data in getCategory">
            <router-link
                @click="scrollToTop()"
                :to="'/' + data"
                class="btn btn-outline-success text-truncate responsive-a"
                style="width: 100%; color: rgb(69, 70, 69)"
                :key="data.id"
                >{{ $t("categories." + data) }}
            </router-link>
        </div>
    </div>

    <div class="response-router" >
        <h2 style="text-align: center; color: rgb(40, 228, 15)">{{ $t("category") }}</h2>
        <div  style="margin-top: 2px" v-for="data in getCategory">
            <router-link
                @click="scrollToTop()"
                :to="'/' + data"
                class="btn btn-outline-success text-truncate responsive-a"
                style="width: 100%; color: rgb(69, 70, 69)"
                :key="data.id"
                >{{ $t("categories." + data) }}
            </router-link>
        </div>
    </div>
</template>

<script>
import MyHttpRequests from "../request/Request";
import {mapGetters} from "vuex";
const API = new MyHttpRequests();

export default {

    data() {
        return {
            burger: false
        }
    },
    computed: {
        ...mapGetters(["getCategory"]),
    },

    methods: {
        GetAllProductCategory() {
            API.GetAllProductCategory().then((response) => {
                this.$store.dispatch("setCategory", response.data);
            });
        },
            scrollToTop() {
                window.scrollTo(0, 0);
            },

            // ბურგერის გახსნა რესპონსივზე
            
            burgerClick(){
                this.burger = !this.burger
                
                
                 
                 
                 
            }
        
    },

    mounted() {
        this.GetAllProductCategory();
    },
};
</script>

<style>
.my_img {
    width: 100%;
    height: 200px;
}

.M_T {
    margin-top: 30px;
}

.M_B {
    margin-bottom: 40px;
}


.burgeri{
    display: none;
}

@media (max-width:991px){
    .burgeri{
        display: flex;
        margin-left: auto;
        padding: 15px 30px;
        

        
    }
    .Responsive{
     display: flex;
     flex-wrap: wrap;
}
.response-router{
    display: none;
}
}







</style>
