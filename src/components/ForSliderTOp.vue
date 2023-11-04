<template>
    <section class="s_3">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 MM">
                    <div class="s_3_img">
                        <img src="../assets/hovertop1.webp" alt="" />
                        <div class="s_3_child"></div>
                    </div>
                </div>
                <div class="col-lg-4 MM">
                    <div class="s_3_img">
                        <img src="../assets/hovertop2.avif" alt="" />

                        <div class="s_3_child"></div>
                    </div>
                </div>
                <div class="col-lg-4 MM">
                    <div class="s_3_img">
                        <img src="../assets/hovertop3.webp" alt="" />
                        <div class="s_3_child"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.s_3 {
    margin: 50px 0;
}

.s_3_img {
    overflow: hidden;
    position: relative;
}

.s_3_img img {
    width: 100%;
    object-fit: cover;
    max-height: 200px;
    min-height: 200px;
}

.s_3_child {
    background-color: rgba(200, 245, 203, 0.37);
    position: absolute;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    transition: 0.5s;
}

.s_3_img:hover .s_3_child {
    right: 100%;
}
</style>
