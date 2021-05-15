import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setSearchLike, setSelectedSex} from "../../redux/shoes-reducer";
import {Header} from "./Header";

export const HeaderContainer = React.memo(({isHeaderScroll = false})=>{
    const dispatch = useDispatch();
    const category = useSelector(state => state.shopPage.category);
    const [selectedCategory, setSelectedCategory] = React.useState(category[0])
    const [searchValue, setSearchValue] = React.useState("")
    const [isNavMenuOpen, setisNavMenuOpen] = React.useState(false)
    const [isSearchOpen, setIsSearchOpen] = React.useState(false)
    const [isSearchOpenMobile, setIsSearchOpenMobile] = React.useState(false)
    const totalCount = useSelector(state => state.cartPage.totalCount);

    const setSelectedCategoryOnClick = React.useCallback((sex) => {
        setSelectedCategory(sex);
        dispatch(setSelectedSex(sex));
    }, [dispatch]);

    const setSearchOnClick = React.useCallback((e) => {
        e.preventDefault()
        e.target.reset()

        dispatch(setSearchLike(searchValue));
        setSearchValue("")


    }, [dispatch, searchValue]);

    const onSearchInput = (e)=>{
        setSearchValue(e.target.value)

    }
    const onNavMenuCLick =()=>{
        setisNavMenuOpen(!isNavMenuOpen)
    }
    const sortRef = React.useRef()
    const searchRef = React.useRef()
    const searchRefMobile = React.useRef()

    const handleOutsideClick =(e)=>{

        if(e.path){// проверка на e path для сафари
            if(!e.path.includes(sortRef.current)){
                setisNavMenuOpen(false);
            }
        }
        if(e.path){// проверка на e path для сафари
            if(!e.path.includes(searchRef.current)){
                setIsSearchOpen(false);

            }
        }
        if(e.path){// проверка на e path для сафари
            if(!e.path.includes(searchRefMobile.current)){
                setIsSearchOpenMobile(false);

            }
        }

    }
    const handleClickToSearch = ()=>{
        setIsSearchOpen(!isSearchOpen)
    }
    const handleClickToSearchMobile = ()=>{
        setIsSearchOpenMobile(!isSearchOpenMobile)
    }
    React.useEffect(()=>{
        document.body.addEventListener("click",handleOutsideClick)

    },[])


    return(

        <Header isHeaderScroll={isHeaderScroll} category={category} setSelectedCategoryOnClick={setSelectedCategoryOnClick} selectedCategory={selectedCategory}
                    searchRef={searchRef} handleClickToSearch={handleClickToSearch} isSearchOpen={isSearchOpen} setSearchOnClick={setSearchOnClick} onSearchInput={onSearchInput}
                    searchValue={searchValue} totalCount={totalCount} searchRefMobile={searchRefMobile} handleClickToSearchMobile={handleClickToSearchMobile} isSearchOpenMobile={isSearchOpenMobile}
                    onNavMenuCLick={onNavMenuCLick} sortRef={sortRef} isNavMenuOpen={isNavMenuOpen}/>

    )
})
