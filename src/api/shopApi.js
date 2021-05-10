import db from "../assets/sport-shop.json"
import * as axios from "axios";
const instance = axios.create({
    baseURL:`http://localhost:3001/shoes/`

});
export const shopAPI  = {
    // getShoes (category=null, SelectedSortBy)   {
    //     // debugger;
    //     return instance.get(`${category !== null ? `?category=${category}` : '?'}&_sort=${SelectedSortBy.type}&_order=${
    //         SelectedSortBy.order
    //     } ` )
    //         .then(response=> {
    //             return response.data})
    // }
    getShoes (){
        return db.shoes
    }
}
//_sort=price&_order=asc
export const shoesApi  = {
    getShoes (sex=null,SelectedColor=null,SelectedSizes =null,SelectedBrand=null ,priceSortBy=null,SelectedPriceSortBy=null)   {
        if(SelectedColor === "all"){SelectedColor = null}
        if(SelectedSizes === "all"){SelectedSizes = null}
        if(SelectedBrand === "ALL"){SelectedBrand = null}


        return instance.get(`${sex !== null ? `?sex=${sex}` : 'men'}${SelectedColor !== null ? `&colors_like=${SelectedColor}` : ''}${SelectedSizes !== null ? `&sizes_like=${SelectedSizes}` : ''}${SelectedBrand !== null ? `&company_like=${SelectedBrand}` : ''}${SelectedPriceSortBy !== null ? `&_sort=price&_order=${SelectedPriceSortBy}` : ''}` )
            .then(response=> {

                return response.data})
    }
}


