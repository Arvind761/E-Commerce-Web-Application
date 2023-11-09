import { combineReducers } from "@reduxjs/toolkit";

import MaincategoryReducer from "./MaincategoryReducer"
import SubcategoryReducer from "./SubcategoryReducer"
import BrandReducer from "./BrandReducer"
import ProductReducer from "./ProductReducer"
import CartReducer from "./CartReducer"
import WishlistReducer from "./WishlistReducer"
import CheckoutReducer from "./CheckoutReducer"
import ContactUsReducer from "./ContactUsReducer"
import NewslatterReducer from "./NewslatterReducer"

export default combineReducers({
    MaincategoryStateData:MaincategoryReducer,
    SubcategoryStateData:SubcategoryReducer,
    BrandStateData:BrandReducer,
    ProductStateData:ProductReducer,
    CartStateData:CartReducer,
    WishlistStateData:WishlistReducer,
    CheckoutStateData:CheckoutReducer,
    ContactUsStateData:ContactUsReducer,
    NewslatterStateData:NewslatterReducer,
})
