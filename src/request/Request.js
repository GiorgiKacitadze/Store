import axios from "axios";

export default class MyHttpRequests {
    GetAllProducts(routeParam) {
        if (routeParam) {
            //მოწმდება თუ არის პარამეტრი გადმოცემული (ანუ: კატეგორია)

            //შესაბამისად ვკინძავთ API როუტს პროდუქტების კატეგორიებად ჩვენებისთვის
            var url = "/category/" + routeParam;
        } else {
            var url = "";
        }

        return axios.get("https://dummyjson.com/products/" + url);
    }

    GetAllProductCategory() {
        return axios.get("https://dummyjson.com/products/categories");
    }

    getFilteredProducts(productID) {
        return axios.get("https://dummyjson.com/products/" + productID);
    }
}
