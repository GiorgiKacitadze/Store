import { toNumber } from "@vue/shared";
import {createStore} from "vuex";

export default createStore({
    state: {
        categories: [],
        allProduct: [],
        ProductId: [],
        SearchP: '',
        Language: localStorage.getItem('currentLang')?localStorage.getItem('currentLang'):'ge',
        ProductsToCart: localStorage.getItem('ProductsToCart')?JSON.parse(localStorage.getItem('ProductsToCart')):[]

        
        
    },
    getters: {
        //  მივიღთ პროდუქტები
        GetAllProduct: (state) => {
            return state.allProduct;
        },

        // ვიღებთ კატეგორიებს

        getCategory: (state) => {
            return state.categories;
        },
        // გავხსნათ პროდუქტის აიდი
        GetProductId: (state) => {
            return state.ProductId;
        },

        // ვიღებთ კატეგორიაში ჩაწერილ ინფუთს მნიშვნელობას 

        GetSearch: (state) => {
            return state.SearchP;
        },

         //  მივიღოთ ენა
        getLang:(state)=>{return state.Language},

       

   
       
        
    },




    mutations: { },
    actions: {
        // მივიღოთ ყველა პროდუქტი
        SetAllProduct({state}, Product) {
            state.allProduct = Product;
        },
        // ვსეტავთ კეტეგორებს
        setCategory({state}, AllCategory) {
            state.categories = AllCategory;
        },

        // გავხსნათ პროდუქტის აიდი
        SetProductId: ({state}, ProductId) => {
            state.ProductId = ProductId;
        },

        // ვიღებთ კატეგორიაში ჩაწერილ ინფუთს მნიშვნელობას 

        SetSearch: ({state}, SearchWord) => {
            state.SearchP = SearchWord
            
            
        },

        //  მივიღოთ ენა
        setLang:({state}, language)=>{
            state.Language = language
        },

        // კალათა
        SetProductsToCart({state}, products){
            state.ProductsToCart.push(products)
            localStorage.setItem('ProductsToCart',JSON.stringify(state.ProductsToCart))
            
        }
       


    
   
       




    },
    modules: {},
});
