<template>
    <div class="container ">
        <table class="table d-f-table" v-if="this.$store.state.ProductsToCart.length > 0">
            <thead>
                <tr col-12>
                    <th>{{$t('product')}}</th>
                    <th class="d-n">{{$t('photo')}}</th>
                    <th class="d-n">{{$t('price')}}</th>
                    <th>{{$t('allpro')}}</th>
                    <th>{{$t('allcost')}}</th>
                    <th>{{$t('delete')}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in this.$store.state.ProductsToCart">
                    <td>{{ product.title }}</td>
                    <td class="d-n"><img style="width: 50px; height: 30px" :src="product.thumbnail" /></td>
                    <td class="d-n">{{ product.price }}$</td>
                    <td class="d-f">
                        <button @click="ChangeCount(product.id, 'decrease')" class="btn btn-danger">-</button>
                        {{ product.Counter }}
                        <button @click="ChangeCount(product.id, 'increase')" class="btn btn-success">+</button>
                    </td>
                    <td>{{ product.price * product.Counter }}$</td>
                    <td>
                        <button class="btndel" @click="deleteFromCart(product.id)">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p
            style="text-align: center; color: red; margin-top: 50px; margin-bottom: 50px; font-family: F-2"
            class="h1"
            v-else
        >
            კალათა ცარიელია
        </p>
    </div>



</template>

<script>
export default {
    
    methods: {
        deleteFromCart(productId) {
            let index = this.$store.state.ProductsToCart.findIndex((obj) => {
                return obj.id == productId;
            });

            this.$store.state.ProductsToCart.splice(index, 1);


            localStorage.setItem('ProductsToCart', JSON.stringify(this.$store.state.ProductsToCart))
        },
        ChangeCount(productID, action) {
    let changeProduct = this.$store.state.ProductsToCart.find((ob) => {
        return ob.id == productID;
    });

    if (changeProduct) {
        if (action == "decrease") {
            if (changeProduct.Counter > 1) {
                changeProduct.Counter--;
            } else {
                this.deleteFromCart(changeProduct.productID);
            }
        } else if (action == "increase") {
            changeProduct.Counter++;
        }localStorage.setItem('ProductsToCart', JSON.stringify(this.$store.state.ProductsToCart))
    }
    
},
    },
};
</script>

<style>
.btndel {
    background-color: rgb(236, 10, 10);
    color: black;
    border: none;
    border-radius: 10px;
    padding: 2px 10px;
    font-size: 20px;
}


.btndel:hover {
    background-color: rgb(128, 20, 20);
    transition: 1s;
}
td,
th {
    font-family: "F-2";
}
.product-response{
    display: flex;
    flex-wrap: wrap;
}



@media (max-width:991px){
    .d-n{
        display: none;
    }
    .d-f{
    display: flex;
    align-items: center;
    flex-direction: column;
}

}


</style>
