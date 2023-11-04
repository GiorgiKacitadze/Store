<template>
    <section class="footer_top">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="footer_top_item line_4">
                        <div class="f_t_i_child">
                            <i class="bi bi-globe-americas"></i>
                        </div>
                        <div class="f_t_i_child_2">
                            <span>{{ $t("WORLDWIDE") }}</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="footer_top_item line_4 line_4_res">
                        <div class="f_t_i_child">
                            <i class="bi bi-bag-check"></i>
                        </div>
                        <div class="f_t_i_child_2">
                            <span>{{ $t("CUSTOMER-SUPPORT") }}</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="footer_top_item line_4">
                        <div class="f_t_i_child">
                            <i class="bi bi-car-front-fill"></i>
                        </div>
                        <div class="f_t_i_child_2">
                            <span>{{ $t("SECURE-SYSTEM") }}</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="footer_top_item">
                        <div class="f_t_i_child">
                            <i class="bi bi-shop-window"></i>
                        </div>
                        <div class="f_t_i_child_2">
                            <span>{{ $t("ENUINE-PRODUCTS") }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mid_footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="mid_footer_item">
                        <h2>{{ $t("about") }}</h2>
                        <p>
                            {{ $t("Loren") }}
                        </p>
                    </div>
                </div>

                <div class="col-lg-2">
                    <div class="mid_footer_item">
                        <h2>{{ $t("category") }}</h2>
                        <p>{{ $t("somthing") }}</p>
                        <p>{{ $t("somthing") }}</p>
                        <p>{{ $t("somthing") }}</p>
                        <p>{{ $t("somthing") }}</p>
                        <p>{{ $t("somthing") }}</p>
                        <p>{{ $t("somthing") }}</p>
                        <p>{{ $t("somthing") }}</p>
                    </div>
                </div>

                <div class="col-lg-2">
                    <div class="mid_footer_item">
                        <h2>{{ $t("MY-ACCOUNT") }}</h2>
                        <p>{{ $t("Compare") }}</p>
                        <p>{{ $t("Wishlist") }}</p>
                        <p>{{ $t("Log-In") }}</p>
                        <p>{{ $t("Register") }}</p>
                        <p>{{ $t("Orders") }}</p>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="mid_footer_item">
                        <h2>{{ $t("CONTACT-INFO") }}</h2>
                        <div class="mid_footer_item_for_contact">
                            <span><i class="bi bi-compass"></i></span>
                            <p>{{ $t("Addres") }}</p>
                        </div>

                        <div class="mid_footer_item_for_contact">
                            <span><i class="bi bi-phone-fill"></i></span>
                            <p>+025 2155 3255</p>
                        </div>

                        <div class="mid_footer_item_for_contact">
                            <span><i class="bi bi-envelope"></i></span>
                            <p>info@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="last_footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="footer_last_left_item">
                        <p>Copyright © 2023 Giorgi Katsitadze All Rights Reserved.</p>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="footer_last_right_item">
                        <p><i class="bi bi-facebook"></i></p>
                        <p><i class="bi bi-twitter"></i></p>
                        <p><i class="bi bi-instagram"></i></p>
                        <p><i class="bi bi-linkedin"></i></p>
                        <p><i class="bi bi-google"></i></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
/* footer_top */

.footer_top_item {
    display: flex;
    align-items: center;
}

.f_t_i_child i {
    font-size: 40px;
    color: #363f4d;
}

.f_t_i_child_2 {
    padding: 5px 5px;
}

.f_t_i_child_2 p {
    color: #363f4d;
    font-size: 20px;
    font-weight: 500;
    margin: 0;
}

.f_t_i_child_2 span {
    color: #666666;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
}

.line_4 {
    border-right: 1px solid silver;
}

/* mid_footer */

.mid_footer {
    margin: 50px 0;
    background-color: #fbfafa;
}

.mid_footer_item h2 {
    font-size: 16px;
    margin: 20px 0;
    font-family: f2;
}

.mid_footer_item_for_contact {
    display: flex;
    justify-items: center;
    align-items: center;
}

.mid_footer_item_for_contact span {
    margin-right: 10px;
    display: block;
    font-size: 30px;
}

.mid_footer_item_for_contact span i {
    color: #eb3e32;
    font-size: 20px;
}

.mid_footer_item p {
    display: block;
    text-decoration: none;
    color: #7a7a7a;
    font-size: 17px;
    font-family: f2;
    font-weight: 500;
    padding-top: 10px;
}

.mid_footer_item p:hover {
    color: #eb3e32;
}

.mid_footer_item p {
    color: #7a7a7a;
    font-size: 17px;
    padding-top: 10px;
}

/* last footer */

.last_footer {
    background-color: #363f4d;
    padding: 22px 0;
}

.footer_last_left_item p {
    color: white;
    font-weight: 500;
    font-family: f1;
    font-size: 14px;
}

.footer_last_right_item p {
    text-decoration: none;
    display: block;
    padding: 0px 10px;
}

.footer_last_right_item p i {
    color: white;
    transition: 0.5s;
}

.footer_last_right_item p i:hover {
    color: red;
}

.footer_last_right_item {
    justify-content: flex-end;
    display: flex;
}
</style>
