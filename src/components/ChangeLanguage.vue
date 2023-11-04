<template>
    <button :class="this.Lang === 'ge' ? 'red' : 'green'" @click="changelanguage('ge')">GEO</button>
    <button style="margin-left: 3px" :class="this.Lang === 'en' ? 'red' : 'green'" @click="changelanguage('en')">
        ENG
    </button>
</template>

<script>
import i18n from "@/i18n";
import {mapGetters} from "vuex";
export default {
    computed: {
        ...mapGetters({
            Lang: "getLang",
        }),
    },

    methods: {
        changelanguage(val) {
            this.$store.dispatch("setLang", val);
        },
    },

    mounted() {
        i18n.global.locale = this.Lang;
        localStorage.setItem("currentLang", this.Lang);
    },

    watch: {
        Lang(val) {
            localStorage.setItem("currentLang", val);
            i18n.global.locale = val;
        },
    },
};
</script>

<style>
.red {
    font-family: F-2;
    border: none;
    color: red;
    background-color: rgb(38, 207, 38);
    border-radius: 10px;
}

.green {
    font-family: F-2;
    border: none;
    color: rgb(8, 110, 8);
    border-radius: 10px;
    background-color: rgb(199, 196, 196);
}
</style>
