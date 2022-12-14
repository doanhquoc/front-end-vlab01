import axios from "axios";
import styles from '../../styles/Home.module.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

export default function Get()  {
    const [workname, setWorkname] = useState([])
    console.log(workname)
    async function getData() {
        let data = await axios.get('http://127.0.0.1:8000/WorkInfo/')
            .then(res => res.data)

        setWorkname(data)

    }
    useEffect(() => {
        getData()
    }, [])

    return (
    <>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
                    <ul tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex="0">
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24">
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                                </svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Vlab 01</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Item 1</a></li>
                    <li tabIndex="0">
                        <a>
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                 viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                            </svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <link >
                    <a>link</a>
                </link>
            </div>
        </div>
        <h2 className={styles.title} >Th??ng tin tuy???n d???ng</h2>
        <div style={{display: 'flex'}}>
            {workname.results?.map((item, index) => {
                return <>
                    <div key={index} className="card  w-96  shadow-xl border-accent resize" style={{margin:'20px', border:'groove'}} >
                        <figure><img src = {`${item.photo}`} alt="???nh m?? t???" style={{width:'500px', height: '200px'}} /></figure>

                        <div className="card-body">
                            <div >T??n C??ng vi???c: </div>
                            <div >T??n C??ng vi???c: {item.WorkName_text}</div><br/>
                            <div>C??ng ty: {item.Company_text}</div><br/>
                            <div >C???p b???c: {item.Level}</div><br/>
                            <div >L????ng: {item.money}</div><br/>
                            <div >M??? t???: {item.Description_text}</div><br/>
                            <div >S??? ??i???n tho???i li??n h???: {item.phone_number}</div><br/>
                            <div>Th???i gian c??n l???i tr??n h??? th???ng: {item.LongTime}</div>


                            <a href="" className="btn">???ng tuy???n</a>
                        </div>

                    </div>
                </>
            })
            }
        </div>
        <div className="btn-group object-right-bottom" style={{margin: 'center'}}>
            <button className="btn btn-active">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn">4</button>
        </div>
    </>

    )
}



