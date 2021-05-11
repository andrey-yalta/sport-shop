import * as axios from "axios";
const instance = axios.create({
    baseURL:`http://localhost:3001/shoes/`

});


export const shoesApi  = {
    getShoes (sex=null,SelectedColor=null,SelectedSizes =null,SelectedBrand=null ,SelectedPriceSortBy=null, nameLikeIs=null)   {
        if(SelectedColor === "all"){SelectedColor = null}
        if(SelectedSizes === "all"){SelectedSizes = null}
        if(SelectedBrand === "ALL"){SelectedBrand = null}

        return instance.get(`${sex !== null ? `?sex=${sex}` : 'men'}${SelectedColor !== null ? `&colors_like=${SelectedColor}` : ''}${SelectedSizes !== null ? `&sizes_like=${SelectedSizes}` : ''}${SelectedBrand !== null ? `&company_like=${SelectedBrand}` : ''}${SelectedPriceSortBy !== null ? `&_sort=price&_order=${SelectedPriceSortBy}` : ''}${nameLikeIs !== null ? `&name_like=${nameLikeIs}` : ''}` )
            .then(response=> {

                return response.data})
    }
}


