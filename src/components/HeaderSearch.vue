<template>
    <form class="d-flex">
        <input
            @input="searchProduct"
            v-model="search"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
        />
    </form>
</template>
<script>
export default {
    data() {
        return {
            search: "",
        };
    },

    methods: {
        searchProduct() {
            this.$store.dispatch("SetSearch", this.search);
        },
    },
};
</script>
