import React, { useEffect, useState } from 'react'
import SideNavbar from './SideNavbar'

import {updateProduct,getProduct} from "../../Store/ActionCreators/ProductActionCreators"
import { getMaincategory } from "../../Store/ActionCreators/MaincategoryActionCreators"
import { getSubcategory } from "../../Store/ActionCreators/SubcategoryActionCreators"
import { getBrand } from "../../Store/ActionCreators/BrandActionCreators"


import { useDispatch, useSelector } from 'react-redux'
import { useNavigate,useParams } from 'react-router-dom'

export default function UpdateProduct() {
    var [data, setData] = useState({
        name: "",
        maincategory: "",
        subcategory: "",
        brand: "",
        color: "",
        size: "",
        baseprice: 0,
        discount: 0,
        finalprice: 0,
        stock: "In Stock",
        description: "This is Sample Product",
        pic1:"",
        pic2:"",
        pic3:"",
        pic4:""
    })
    var {id} = useParams()
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var allproducts = useSelector((state)=>state.ProductStateData)
    var allmaincategories = useSelector((state) => state.MaincategoryStateData)
    var allsubcategories = useSelector((state) => state.SubcategoryStateData)
    var allbrands = useSelector((state) => state.BrandStateData)
    function getInputData(e){
        var {name,value} = e.target
        setData((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    function getInputFile(e) {
        var { name, files } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: files[0].name
            }
        })
    }
    function postData(e){
        e.preventDefault()
        e.preventDefault()
        var fp = parseInt(data.baseprice)-parseInt(data.baseprice)*parseInt(data.discount)/100
        dispatch(updateProduct({ 
            id:id,
            name: data.name,
            maincategory: data.maincategory,
            subcategory: data.subcategory,
            brand: data.brand,
            color: data.color,
            size: data.size,
            baseprice: parseInt(data.baseprice),
            discount: parseInt(data.discount),
            finalprice: fp,
            stock: data.stock,
            description: data.description,
            pic1: data.pic1,
            pic2: data.pic2,
            pic3: data.pic3,
            pic4: data.pic4
        }))
        return navigate("/admin-products")
    }
    function getAPIData(){
        dispatch(getProduct())
        dispatch(getProduct())
        dispatch(getMaincategory())
        dispatch(getSubcategory())
        dispatch(getBrand())
        if(allproducts.length){
            var item = allproducts.find((x)=>x.id===parseInt(id))
            if(item){
                setData((old)=>{
                    return{
                        ...old,...item
                    }
                })
            }
        }
    }
    useEffect(()=>{
        getAPIData()
    },[allproducts.length])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <SideNavbar />
                    </div>
                    <div className="col-md-9 col-12">
                        <h5 className='bg-primary text-center p-2'>Products</h5>
                        <div className=''>
                        <form onSubmit={postData}>
                                <div className="mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" value={data.name} required onChange={getInputData} id="name" placeholder='Enter Product : ' className="form-control" />
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <label>Maincategory</label>
                                        <select name="maincategory" value={data.maincategory} required onChange={getInputData} className='form-control'>
                                            {
                                                allmaincategories.slice(1).map((item, index) => {
                                                    return <option key={index} value={item.name}>{item.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <label>Subcategory</label>
                                        <select name="subcategory" required value={data.subcategory} onChange={getInputData} className='form-control'>
                                            {
                                                allsubcategories.slice(1).map((item, index) => {
                                                    return <option key={index} value={item.name}>{item.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <label>Brand</label>
                                        <select name="brand" required value={data.brand} onChange={getInputData} className='form-control'>
                                            {
                                                allbrands.slice(1).map((item, index) => {
                                                    return <option key={index} value={item.name}>{item.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <label>Stock</label>
                                        <select name="stock" required value={data.stock} onChange={getInputData} className='form-control'>
                                            <option  value="In Stock">In Stock</option>
                                            <option  value="Out Of Stock">Out Of Stock</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label>Color</label>
                                        <input type="text" name="color" value={data.color} required onChange={getInputData} className='form-control' placeholder='Enter Color Name : ' />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Size</label>
                                        <input type="text" name="size" required value={data.size} onChange={getInputData} className='form-control' placeholder='Enter Size : ' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label>Base Price</label>
                                        <input type="number" name="baseprice" value={data.baseprice} required onChange={getInputData} className='form-control' placeholder='Enter Base Price : ' />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Discount</label>
                                        <input type="number" name="discount" value={data.discount} required onChange={getInputData} className='form-control' placeholder='Enter Discount : ' />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label>Description</label>
                                    <textarea name="description" rows="5" value={data.description} required onChange={getInputData} className='form-control'></textarea>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label>Pic1</label>
                                        <input type="file" name="pic1" onChange={getInputFile} className='form-control' />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Pic2</label>
                                        <input type="file" name="pic2" onChange={getInputFile} className='form-control' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label>Pic3</label>
                                        <input type="file" name="pic3" onChange={getInputFile} className='form-control' />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Pic4</label>
                                        <input type="file" name="pic4" onChange={getInputFile} className='form-control' />
                                    </div>
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
