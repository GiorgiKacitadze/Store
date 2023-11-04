<template>
    <main>

        <section class="top-Hover">
            <ForSliderTOp/>
        </section>



        <section class="Products" style="margin-top: 50px">
            <div class="container">
                <div class="row">
                    <div class=" col-lg-3 col-md-12 mb-4 ">
                        <Categorys />
                    </div>
                    <div class="col-lg-9 col-md-12 ">
                        <GetAllProduct />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Categorys from "../components/Categorys.vue";
import GetAllProduct from "@/components/GetAllProduct.vue";
import ForSliderTOp from '../components/ForSliderTOp.vue'

export default {
    components: {
        Categorys,
        GetAllProduct,
        ForSliderTOp
    },
};
</script>

<style>
.text-truncate {
    font-family: "F-F";
}
</style>
