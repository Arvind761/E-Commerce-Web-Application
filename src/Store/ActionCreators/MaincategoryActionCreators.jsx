// import { ADD_MAINCATEGORY, DELETE_MAINCATEGORY, GET_MAINCATEGORY, GET_SIGLE_MAINCATEGORY, UPDATE_MAINCATEGORY } from "../Constant";

// export function addMaincategory(data){
//     return{
//         type:ADD_MAINCATEGORY,
//         payload:data
//     }
// }
// export function getMaincategory(){
//     return{
//         type:GET_MAINCATEGORY,
        
//     }
// }
// export function getSingleMaincategory(data){
//     return{
//         type:GET_SIGLE_MAINCATEGORY,
//         payload:data
//     }
// }
// export function updateMaincategory(data){
//     return{
//         type:UPDATE_MAINCATEGORY,
//         payload:data
//     }
// }
// export function deleteMaincategory(data){
//     return{
//         type:DELETE_MAINCATEGORY,
//         payload:data
//     }
// }

import {ADD_MAINCATEGORY,DELETE_MAINCATEGORY,GET_MAINCATEGORY, UPDATE_MAINCATEGORY} from "../Constant"
export function addMaincategory(data){
    return{
        type:ADD_MAINCATEGORY,
        payload:data
    }
}
export function getMaincategory(){
    return{
        type:GET_MAINCATEGORY
    }
}

export function updateMaincategory(data){
    return{
        type:UPDATE_MAINCATEGORY,
        payload:data
    }
}
export function deleteMaincategory(data){
    return{
        type:DELETE_MAINCATEGORY,
        payload:data
    }
}