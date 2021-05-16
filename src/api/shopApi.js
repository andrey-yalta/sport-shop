import * as axios from "axios";
const instance = axios.create({
    baseURL:`/shoes/`

});


export const shoesApi  = {
    getShoes (sex=null,SelectedColor=null,SelectedSizes =null,SelectedBrand=null ,SelectedPriceSortBy=null, nameLikeIs=null, page =1, id=null)   {
        if(SelectedColor === "all"){SelectedColor = null}
        if(SelectedSizes === "all"){SelectedSizes = null}
        if(SelectedBrand === "ALL"){SelectedBrand = null}

        return instance.get(`${sex !== null ? `?sex=${sex}` : 'men'}${SelectedColor !== null ? `&colors_like=${SelectedColor}` : ''}${SelectedSizes !== null ? `&sizes_like=${SelectedSizes}` : ''}${SelectedBrand !== null ? `&company_like=${SelectedBrand}` : ''}${SelectedPriceSortBy !== null ? `&_sort=price&_order=${SelectedPriceSortBy}` : ''}${nameLikeIs !== null ? `&name_like=${nameLikeIs}` : ''}${page !== null ? `&_limit=8&_page=${page}` : '&_limit=8&_page=1'}${id !== null ? `&id=${id}` : ''}` )
            .then(response=> {

                return response})
    }
}


