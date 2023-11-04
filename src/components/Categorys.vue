<template>
    <div>
        <h2 style="text-align: center; color: rgb(40, 228, 15)">{{ $t("category") }}</h2>
        <div style="margin-top: 2px" v-for="data in getCategory">
            <router-link
                @click="scrollToTop()"
                :to="'/' + data"
                class="btn btn-outline-success text-truncate"
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
</style>
