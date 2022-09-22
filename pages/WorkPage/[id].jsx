import axios from "axios";
import styles from '../../styles/Home.module.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from "next/link";
import WorkPage from "./index";
import {render} from "react-dom";

export async function getServerSideProps(context){
    const {id} = context.query

    let workData = await axios.get(`http://127.0.0.1:8000/WorkInfo/?page=${id}`)
        .then(res => res.data)
        .catch(err => console.log(err))

    return{
        props:{
            id,
            workData,
        }
    }
}

export default function Id({id, workData})  {
    console.log(workData)
    console.log(id)

    const router = useRouter()

    // router đến trang đăng tuyển
    const handleClickPost = (e)=>{
        e.preventDefault()
        router.push('./post')
    }

    // router đến trang Chiêt tiết thông tin bài đăng
    const handleClickDeal = (e)=>{
        e.preventDefault()

        router.push('./deal')
    }

    // // hàm lấy dữ liệu những ngày đầu :D . Sau dùng getServerSideProps nên bỏ vào đó :V
    // async function getData() {
    //     let data = await axios.get(`http://127.0.0.1:8000/WorkInfo/?page=${id}`)
    //         .then(res => res.data.data)
    //
    //     setWorkName(data)
    // }
    // useEffect(() => {
    //     getData()
    // }, [])

    return (
    <>
        <div className="navbar bg-base-100 sticky top-0 z-40">
            <div className="flex-1">
                <a href={'./post'}>
                    <button  onClick={handleClickPost} className="btn btn-ghost normal-case text-xl">Đăng tuyển</button>
                </a>

            </div>
                <div className="flex-1 text-2xl font-bold uppercase subpixel-antialiased " >
                    <h2>Thông tin tuyển dụng </h2>
                </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered"/>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people"/>
                        </div>
                    </label>
                    <ul tabIndex="0"
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
            {/*danh sách các thẻ đứa data được list*/}
        <div className={`${styles.gridContainer}`}>
            {workData.data.map((item, index) => (
                    <div key={index} className= {'card  shadow-2xl shadow-indigo-500/40 border-accent text-left subpixel-antialiased resize-none' } >
                        <figure><img src = {item.photo ? item.photo : "/img/default-image.jpg"} alt="Ảnh mô tả" style={{width:'500px', height:'300px'}} /></figure>

                        <div style={{wordBreak: "break-word", display: "flex", flexDirection: "column"}} className="card-body text-2xl font-black">
                            <div> Bài đăng thứ : {item.id}</div>
                            <div>Công ty {item.Company_text}</div>
                            <div>Tuyển dụng {item.WorkName_text}</div>
                            <div>Cấp bậc {item.level}</div>
                            {/*<div >Lương: {item.money}</div>*/}
                            {/*<div >Mổ tả: {item.Description_text}</div>*/}
                            {/*<div >Số điện thoại liên hệ: {item.phone_number}</div>*/}
                            <div>Thời gian còn lại  {item.LongTime}</div><br/>
                            {/*<span className="countdown font-mono text-6xl">*/}
                            {/*    <span style={{fontSize: 200}}>jgjhjhj</span>*/}
                            {/*</span>*/}
                           <div className="grid justify-items-stretch font-bold" style={{marginTop: "auto"}}>
                               <a href={'./deal'} className="btn btn-outline text-2xl">
                                   <button onClick={handleClickDeal} >Chi tiết</button>
                               </a>
                            </div>
                        </div>

                    </div>
                )

            )
            }
        </div>

        <div className="btn-group object-bottom" style={{margin: 'center'}}>
            {[...Array(5)].map( (item,index)=>(
                <Link key={index} href={`/WorkPage/${index + 1}`}>
                    <a className={`btn ${id==index+1 ? `btn-active` :""}`}>{index + 1}</a>
                </Link>
                )
            )}
        </div>


    </>

    )
}



