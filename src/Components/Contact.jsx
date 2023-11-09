import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import { addContactUs } from "../Store/ActionCreators/ContactUsActionCreators"
import { useDispatch } from 'react-redux'
export default function Contact() {
    var [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })
    var [show, setShow] = useState(false)
    var dispatch = useDispatch()
    function getInputData(e) {
        var { name, value } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
        setShow(false)
    }
    function postData(e) {
        e.preventDefault()
        var item = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message,
            status: "Active",
            date: new Date()
        }
        dispatch(addContactUs(item))
        setShow(true)
        setData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        })
    }
    return (
        <>

            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <Link className="breadcrumb-item text-dark" to="/">Home</Link>
                            <span className="breadcrumb-item active">Contact</span>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4 text-center"><span className="bg-secondary pr-3">Contact Us</span></h2>
                <div className="row px-xl-5">
                    <div className="col-lg-7 mb-5">
                        <div className="bg-light p-30">
                            {
                                show ?
                                    <div className="alert alert-success text-center alert-dismissible fade show" role="alert">
                                        Thanks to Share Your Query With Us!!! Our Team Will Contact Your Soon!!!
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div> : ""
                            }
                            <form onSubmit={postData}>
                                <div className="control-group mb-2">
                                    <input type="text" className="form-control" name="name" value={data.name} onChange={getInputData} placeholder="Your Name" required />
                                </div>
                                <div className="control-group mb-2">
                                    <input type="email" className="form-control" name="email" value={data.email} onChange={getInputData} placeholder="Your Email" required />
                                </div>
                                <div className="control-group mb-2">
                                    <input type="text" className="form-control" name="phone" value={data.phone} onChange={getInputData} placeholder="Your Phone" required />
                                </div>
                                <div className="control-group mb-2">
                                    <input type="text" className="form-control" name="subject" value={data.subject} onChange={getInputData} placeholder="Subject" required />

                                </div>
                                <div className="control-group mb-2">
                                    <textarea className="form-control" rows="8" name="message" value={data.message} onChange={getInputData} placeholder="Message" required></textarea>
                                </div>
                                <div>
                                    <button className="btn btn-primary py-2 px-4 w-100" type="submit">SendMessage</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5 mb-5">
                        <div className="bg-light p-30 mb-30">
                            <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="300px" name="gmap_canvas" src="https://maps.google.com/maps?q=a-43%20sector%2016%20Noida&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
                        </div>
                        <div className="bg-light p-30 mb-3">
                            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>J-Block, Sector 22,Noida India</p>
                            <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i><a href="mailto:arvindkuamrjay07@gmail.com" className='text-dark' target='_blank'>arvindkuamrjay07@gmail.com</a></p>
                            <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3"></i><a href="tel:9129479296" className='text-dark' target='_blank'>+91 9129479296</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
