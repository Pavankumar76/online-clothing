import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.jsx";


export const CategoryContext = createContext({
    categoriesMap :{},
});

export const CategoryProvider = ({children}) =>{

    const [categoriesMap, setcategoriesMap] = useState({});

    useEffect(()=> {
        const getCategoriesMap = async () =>{
           const categoryMap = await  getCategoriesAndDocuments();
            
            setcategoriesMap(categoryMap);
        }

        getCategoriesMap();
    },[])
    
    const value = {categoriesMap};
    return(
        <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
    )
};