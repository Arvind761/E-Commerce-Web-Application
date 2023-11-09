import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SideNavbar from './SideNavbar'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

import { getProduct, deleteProduct } from "../../Store/ActionCreators/ProductActionCreators"
import { useDispatch, useSelector } from 'react-redux';

export default function Product() {
    var dispatch = useDispatch()
    var allproducts = useSelector((state) => state.ProductStateData)
    var navigate = useNavigate()
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'maincategory', headerName: 'Maincategory', width: 130 },
        { field: 'subcategory', headerName: 'Subcategory', width: 130 },
        { field: 'brand', headerName: 'Brand', width: 130 },
        { field: 'color', headerName: 'Color', width: 100 },
        { field: 'size', headerName: 'Size', width: 130 },
        { field: 'baseprice', headerName: 'Base Price', width: 130,renderCell: ({ row }) =>{
            return <p>&#8377;{row.baseprice}</p>
        }},
        { field: 'discount', headerName: 'Discount', width: 130,renderCell: ({ row }) =>{
            return <p>{row.discount}% Off</p>
        }},
        { field: 'finalprice', headerName: 'Final Price', width: 130,renderCell: ({ row }) =>{
            return <p>&#8377;{row.finalprice}</p>
        }},
        { field: 'stock', headerName: 'Stock', width: 130,heigh:130},
        { field: 'pic1', headerName: 'Pic1', width: 130,renderCell: ({ row }) =>{
            return <a href={`/assets/images/${row.pic1}`} target="_blank">
            <img src={`/assets/images/${row.pic1}`} style={{ height: "100px", width: "100px" }} alt="" />
        </a>
        }},
        { field: 'pic2', headerName: 'Pic2', width: 130,renderCell: ({ row }) =>{
            return <a href={`/assets/images/${row.pic2}`} target="_blank">
                    <img src={`/assets/images/${row.pic2}`} style={{ height: "100px", width: "100px" }} alt="" />
                </a>
        }},
        { field: 'pic3', headerName: 'Pic3', width: 130,renderCell: ({ row }) =>{
            return <a href={`/assets/images/${row.pic3}`} target="_blank">
                    <img src={`/assets/images/${row.pic3}`} style={{ height: "100px", width: "100px" }} alt="" />
                </a>
        }},
        { field: 'pic4', headerName: 'Pic4', width: 130,renderCell: ({ row }) =>{
            return <a href={`/assets/images/${row.pic4}`} target="_blank">
                    <img src={`/assets/images/${row.pic4}`} style={{ height: "100px", width: "100px" }} alt="" />
                </a>
        }},
        {
            field: "edit",
            headerName: "Edit",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    navigate("/admin-update-product/" + row.id)
                }}>
                    <i className='fa fa-edit'></i>
                </Button>,
        },
        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    dispatch(deleteProduct({ id: row.id }))
                }}>
                    <i className='fa fa-trash'></i>
                </Button>,
        }
    ];
    var rows = []
    if (allproducts.length) {
        for (let item of allproducts.slice(1, allproducts.length))
            rows.push(item)
    }
    function getAPIData() {
        dispatch(getProduct())
    }
    useEffect(() => {
        getAPIData()
    }, [allproducts.length])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <SideNavbar />
                    </div>
                    <div className="col-md-9 col-12">
                        <h5 className='bg-primary text-center p-2'>Products <Link to="/admin-add-product" className='text-dark'><span className="fa fa-plus float-right"></span></Link></h5>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
