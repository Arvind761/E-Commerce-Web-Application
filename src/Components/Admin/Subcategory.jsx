
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SideNavbar from './SideNavbar'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

import { getSubcategory,deleteSubcategory } from "../../Store/ActionCreators/SubcategoryActionCreators"
import { useDispatch, useSelector } from 'react-redux';

export default function Subcategory() {
    var dispatch = useDispatch()
    var allSubcategories = useSelector((state) => state.SubcategoryStateData)
    var navigate = useNavigate()
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        {
            field: "edit",
            headerName: "Edit",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    navigate("/admin-update-subcategory/" + row.id)
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
                    dispatch(deleteSubcategory({ id: row.id }))
                }}>
                   <i className='fa fa-trash'></i>   
                </Button>,
        }
    ];
    var rows = []
    if (allSubcategories.length) {
        for (let item of allSubcategories.slice(1, allSubcategories.length))
            rows.push(item)
    }
    
    
    function getAPIData() {
        dispatch(getSubcategory())
        // console.log(allSubcategories);
         
 }
    useEffect(() => {
        getAPIData()
    }, [allSubcategories.length])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <SideNavbar />
                    </div>
                    <div className="col-md-9 col-12">
                        <h5 className='bg-primary text-center p-2'>Maincategories <Link to="/admin-add-subcategory" className='text-dark'><span className="fa fa-plus float-right"></span></Link></h5>
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
