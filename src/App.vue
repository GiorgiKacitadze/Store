<template>
    <nav class="bg-light sticky-top">
        <div class="navbar navbar-expand-lg navbar-light container">
            <div class="container-fluid">
                <router-link class="nav-link" to="/"
                    ><img class="logo" src="./assets/InMarket-Logo.wine.svg" alt="logo"
                /></router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">{{ $t('home') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">{{ $t('about') }}</router-link>
                        </li>
                    </ul>
                    <HeaderSearch />
                    <ChangeLanguage />
                    <Cartvue/>
                </div>
            </div>
        </div>
    </nav>

    <router-view />

    <div class="body">
        <div class="footer">
            <FootecrComp />
        </div>
    </div>
</template>

<script>
import HeaderSearch from "./components/HeaderSearch.vue";
import FootecrComp from "./components/FootecrComp.vue";
import ChangeLanguage from "./components/ChangeLanguage.vue";
import Cartvue from "./components/Cartvue.vue";


export default {
    components: {
        HeaderSearch,
        FootecrComp,
        ChangeLanguage,
        Cartvue
    },

    
};
</script>

<style>
.logo {
    width: 100px;
    height: 30px;
}

.container-fluid {
    align-items: baseline !important;
}

@font-face {
    font-family: "F-F";
    src: url("./assets/Fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf");
}

@font-face {
    font-family: "F-2";
    src: url('./assets/Fonts/Roboto-Black.ttf');
}

h1,
h2,
h3,
h4,
h5,
h6,
a,
p {
    font-family: "F-2";
}

.body {
    position: relative;
    width: 100%;
}

.footer {
    position: absolute;
    top: 100px;
    right: 0;
    left: 0;
}
</style>
