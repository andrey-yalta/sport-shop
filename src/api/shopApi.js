import db from "../assets/sport-shop.json"
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