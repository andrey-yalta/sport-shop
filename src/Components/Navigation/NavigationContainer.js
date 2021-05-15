import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setSelectedBrand, setSelectedColor, setSelectedPriceSortBy, setSelectedSize} from "../../redux/shoes-reducer";
import {thtottle} from "./trottle";
import {Navigation} from "./Navigation";

export const NavigationContainer = React.memo(()=>{
        const navigationMenu = [
            "company",
            "colors",
            "sizes",
            "price"
        ]
        const dispatch = useDispatch();
        const brands = useSelector(state => state.shopPage.brandsCategories);
        const sizes= useSelector(state => state.shopPage.sizes);
        const colors = useSelector(state => state.shopPage.colors);
        const priceSort = useSelector(state => state.shopPage.priceSort);
        const categories = {"company":brands,"sizes":sizes,"colors":colors,"price":priceSort}
        const [selectedCategoryItem, setSelectedCategoryItem] = React.useState("NIKE")
        const [selectedCategory, setSelectedCategory] = React.useState(navigationMenu[0])
        const [isNavMenuOpen, setisNavMenuOpen] = React.useState(false)
        const setSelectedCategoryOnClick = (item)=>{
            setSelectedCategory(item);
        }
        const onNavMenuCLick =()=>{
            setisNavMenuOpen(!isNavMenuOpen)
        }
        const setSelectedColorOnClick = (item,selectedCategory)=>{
            setSelectedCategoryItem(item)
            switch (selectedCategory) {
                case "colors":
                {

                    dispatch(setSelectedColor(item))
                    break
                }
                case "sizes":
                {

                    dispatch(setSelectedSize(item))
                    break
                }
                case "company":
                {

                    dispatch(setSelectedBrand(item))

                    break
                }
                case "price":
                {

                    dispatch(setSelectedPriceSortBy(item))
                    break
                }
                default:
                    return true;
            }

        }
        /// scroll
        const [scroll, setScroll] = React.useState(0);
        const [scrollPrev, setScrollPrev] = React.useState(0);


        const handleScroll = React.useCallback( () => {
            setScroll(scrollPrev=>{
                setScrollPrev(scrollPrev)
                return window.scrollY})

        },[])

        React.useEffect(() => {
            window.addEventListener("scroll", thtottle(handleScroll,1000));
            return () =>window.removeEventListener("scroll", thtottle(handleScroll,1000));

        }, [handleScroll]);

        return(
           <Navigation scroll={scroll} scrollPrev={scrollPrev} navigationMenu={navigationMenu} setSelectedCategoryOnClick={setSelectedCategoryOnClick}
    selectedCategory={selectedCategory} onNavMenuCLick={onNavMenuCLick} isNavMenuOpen={isNavMenuOpen} categories={categories}
    setSelectedColorOnClick={setSelectedColorOnClick} selectedCategoryItem={selectedCategoryItem}/>

        )
    }
)