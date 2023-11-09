import {all} from "redux-saga/effects"

import { maincategorySaga } from "./MainCategorySagas"
import { subcategorySaga } from "./SubCategorySagas"
import { brandSaga } from "./BrandSagas"
import { productSaga } from "./ProductSagas"
import { cartSaga } from "./CartSagas"
import { checkoutSaga } from "./CheckoutSagas"
import { wishlistSaga } from "./WishlistSagas"
import { newslatterSaga } from "./NewslatterSagas"
import { contactUsSaga } from "./ContactUsSagas"

export default function* rootSaga(){
    yield all([
        maincategorySaga(),
        subcategorySaga(),
        brandSaga(),
        productSaga(),
        cartSaga(),
        wishlistSaga(),
        checkoutSaga(),
        contactUsSaga(),
        newslatterSaga(),
        
        
        
       
    ])
}