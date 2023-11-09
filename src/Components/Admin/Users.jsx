import React, { useState,useEffect } from 'react'
import SideNavbar from './SideNavbar'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

export default function Users() {
    var [user, setUser] = useState([])
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'role', headerName: 'Role', width: 100 },
        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    deleteItem(row.id)
                }}>
                    <i className='fa fa-trash'></i>
                </Button>,
        }
    ];
    var rows = []
    if (user.length) {
        for (let item of user.slice(1))
            rows.push(item)
    }
    async function getAPIData() {
        var response = await fetch("/user")
        response = await response.json()
        if(response.length)
        setUser(response)
    }
    async function deleteItem(id){
        var response = await fetch("/user/"+id,{
            method:"delete",
            headers:{
                "content-type":"application/json"
            }
        })
        response = await response.json()
        getAPIData()
    }
    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <SideNavbar />
                    </div>
                    <div className="col-md-9 col-12">
                        <h5 className='bg-primary text-center p-2'>Users</h5>
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
