import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideNavbar from './SideNavbar'

import { getContactUs, deleteContactUs, updateContactUs } from "../../Store/ActionCreators/ContactUsActionCreators"
import { useDispatch, useSelector } from 'react-redux';
export default function AdminSingleContact() {
    var [contact,setContact] = useState({})
    var dispatch = useDispatch()
    var allContacts = useSelector((state) => state.ContactUsStateData)
    var navigate = useNavigate()
    var { id } = useParams()
    function getAPIData() {
        dispatch(getContactUs())
        if(allContacts.length){
            setContact(allContacts.find((x)=>x.id==id))
        }
    }
    function update(){
        dispatch(updateContactUs({...contact,status:"Done"}))
        setContact((old)=>{
            return{
                ...old,
                ['status']:"Done"
            }
        })
    }
    function deleteItem(){
        dispatch(deleteContactUs({id:id}))
        navigate("/admin-contacts")
    }
    useEffect(() => {
        getAPIData()
    }, [allContacts.length])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-12">
                    <SideNavbar />
                </div>
                <div className="col-md-9 col-12">
                    <h5 className='bg-primary text-center p-2'>Contacts</h5>
                    <div className="table-responsive">
                        <table className='table table-bordered'>
                            <tr>
                                <th>Id</th>
                                <td>{contact.id}</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>{contact.name}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{contact.email}</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>{contact.phone}</td>
                            </tr>
                            <tr>
                                <th>Date</th>
                                <td>{contact.date}</td>
                            </tr>
                            <tr>
                                <th>Status</th>
                                <td>{contact.status}</td>
                            </tr>
                            <tr>
                                <th>Message</th>
                                <td>{contact.message}</td>
                            </tr>
                            <tr>
                                {
                                    contact.status==="Active"?
                                    <td colSpan={2}><button className='btn btn-primary w-100' onClick={update}>Update Status to Done</button></td>:
                                    <td colSpan={2}><button className='btn btn-primary w-100' onClick={deleteItem}>Delete</button></td>
                                }
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
