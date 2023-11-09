import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SideNavbar from './SideNavbar'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

import { getBrand, deleteBrand } from "../../Store/ActionCreators/BrandActionCreators"
import { useDispatch, useSelector } from 'react-redux';

export default function Brand() {
    var dispatch = useDispatch()
    var allbrands = useSelector((state) => state.BrandStateData)
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
                    navigate("/admin-update-brand/" + row.id)
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
                    dispatch(deleteBrand({ id: row.id }))
                }}>
                    <i className='fa fa-trash'></i>
                </Button>,
        }
    ];
    var rows = []
    if (allbrands.length) {
        for (let item of allbrands.slice(1, allbrands.length))
            rows.push(item)
    }
    function getAPIData() {
        dispatch(getBrand())
    }
    useEffect(() => {
        getAPIData()
        // console.log(allbrands)
    }, [allbrands.length])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <SideNavbar />
                    </div>
                    <div className="col-md-9 col-12">
                        <h5 className='bg-primary text-center p-2'>Brands <Link to="/admin-add-brand" className='text-dark'><span className="fa fa-plus float-right"></span></Link></h5>
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
