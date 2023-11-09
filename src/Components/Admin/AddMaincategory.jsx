// import React, { useEffect, useState } from 'react'
// import SideNavbar from './SideNavbar'
// // import { Link } from 'react-router-dom'

// import {addMaincategory,getMaincategory} from "../../Store/ActionCreators/MaincategoryActionCreators"
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// export default function AdminAddMaincategory () {
//   var [data,setData]=useState({
//     name:""
//   })
//   var dispatch = useDispatch()
//   var navigate=useNavigate()
//   var allMaincategories=useSelector((state)=>state.maincategoryStateData)
//   function getInputData(e){
//     var {name,value}=e.target
//     setData((old)=>{
//       return{
//       ...old,
//       [name]:value
//     }
  
//     })
//   }
//   function postData(){
     
//     var item = allMaincategories.find(x=>x.name && x.name.toLowerCase()===data.name.toLowerCase())
//     if(item){
//       alert("maincategory allready exists")

//     }
//     else{
    
//     dispatch(addMaincategory({name:data.name}))
//     return navigate("/admin-maincategories")
//     }
//   }
//   function getAPIData(){
//     dispatch(getMaincategory())
      

//   }
//   useEffect(()=>{
//     getAPIData()
    
//   },[allMaincategories.length])
//   return (
//     <>
//       <div className="container-fluid ">
//         <div className="row">
//             <div className="col-md-3  col-12">
//                 <SideNavbar/>
//             </div>
//             <div className="col-md-9 col-12 ">
//               <h5 className='bg-primary text-center p-3 '>MainCategory    </h5>
//               <div>
//                 <form onSubmit={postData}>
//                   <div className="mb-3">
//                     <label htmlFor="name">Name</label>
//                     <input type="text" name="name" onChange={getInputData} id="name" placeholder="Enter MainCategory: "className='form-control' />
//                   </div>
//                   <div className="mb-3">
//                     <button className='btn btn-danger w-50 '>Reset</button>
//                     <button className='btn bg-primary w-50  ' type='submit'>submit</button>
//                   </div>
//                 </form>
//               </div>
    

            
                
//             </div>
//         </div>
//       </div>  
//     </>
//   )
// }


//sir

import React, { useEffect, useState } from 'react'
import SideNavbar from './SideNavbar'

import {addMaincategory,getMaincategory} from "../../Store/ActionCreators/MaincategoryActionCreators"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AddMaincategory() {
    var [data, setData] = useState({
        name: ""
    })
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var allMaincategories = useSelector((state)=>state.MaincategoryStateData)
    function getInputData(e){
        var {name,value} = e.target
        setData((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    function postData(e){
        e.preventDefault()
        var item = allMaincategories.find(x=>x.name && x.name.toLowerCase()===data.name.toLowerCase())
        if(item){
            alert("Maincategory is Already Exist!!!")
        }
        else{
            dispatch(addMaincategory({name:data.name}))
            return navigate("/admin-maincategories")
        }
    }
    function getAPIData(){
        dispatch(getMaincategory())
    }
    useEffect(()=>{
        getAPIData()
        // console.log(allMaincategories);
    },[allMaincategories.length])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <SideNavbar />
                    </div>
                    <div className="col-md-9 col-12">
                        <h5 className='bg-primary text-center p-2'>Maincategories</h5>
                        <div className=''>
                            <form onSubmit={postData}>
                                <div className="mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" onChange={getInputData} id="name" placeholder='Enter Maincategory : ' className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <button type='reset' className='btn btn-danger w-50'>Reset</button>
                                    <button className='btn btn-primary w-50' type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
