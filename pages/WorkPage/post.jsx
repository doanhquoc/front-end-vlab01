import axios from "axios";
import styles from '../../styles/Home.module.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import React, { useState, useEffect } from 'react';
import {data} from "autoprefixer";
import { useForm } from "react-hook-form";
import {useRouter} from "next/router";
import ReactDOM from "react-dom"
const Post = () => {
    console.log('kiểm tra')
    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

    // router về trang chủ
    const router = useRouter()
    const handleClick = (e)=>{
        e.preventDefault()
        router.push('./1')
    }
    // Modal hiện thông báo khi submit form
    const [showModal, setShowModal] = useState(false)

    //Biến state cho model workInfor
    const [workInfo, setworkInfo] = useState({
        WorkName_text  :'',
        Company_text:'',
        level:'',
        Description_text:'',
        LongTime:'',
        phone_number: '',
        // photo:null,
        money: 0,
    })

    //Biến state riêng cho trường hình ảnh
    const [photo, setPhoto] = useState(null);


    //hàm lấy
    const onSelectPhoto = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setPhoto(null);
            return;
        }
        setPhoto(e.target.files[0]);
    };
    console.log(photo)
    const handleSubmit = async(event) => {
        event.preventDefault()

        //---------Thu nghiem (uc che) ----------
        // if (event.target.input.files || event.target.input.files.length !== 0){
        //     workInfo.photo = event.target.input.files[0];
        // }
        // store the states in the form data


        // Sử dụng formData để chứa dữ liệu
        const workFormData = new FormData();
        workFormData.append("WorkName_text", workInfo.WorkName_text)
        workFormData.append("Company_text", workInfo.Company_text)
        workFormData.append("level", workInfo.level)
        workFormData.append("Description_text", workInfo.Description_text)
        workFormData.append("LongTime", workInfo.LongTime)
        workFormData.append("phone_number", workInfo.phone_number)
        if(photo) {
            workFormData.append("photo", photo)
        }
        // workFormData.append("photo", workInfo.photo)
        workFormData.append("money", workInfo.money)

        // Sử dụng axios để đưa dữ liệu xuống back-end
        try {
            const response = await axios({
                method: "post",
                url: 'http://127.0.0.1:8000/WorkInfo/',
                data: workFormData,
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch (error){
            console.log(error)
        }
    }

    const handleChange = (event) => {
        setworkInfo({
            ...workInfo,
            [event.target.name]: event.target.value,
        });
    }

    return(
        <>
            <div className="navbar bg-base-100 sticky top-0 z-40">
                <div className="flex-1">
                    <a href={'./1'}>
                        <button onClick={handleClick} className="btn btn-ghost normal-case text-xl">Trang chủ</button>
                    </a>
                </div>
                <div className="flex-1 text-2xl font-bold uppercase subpixel-antialiased " >
                    <h2>Đăng thông tin tuyển dụng </h2>
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

            {/*form submit thông tin tuyển dụng*/}
            <div className=" flex mb-4 p-3">
                <form  onSubmit={handleSubmit} encType="multipart/form-data" className=" grid grid-cols-2 gap-x-20 gap-y-10 font-black subpixel-antialiased" >

                    <div >
                        <label>Công việc </label><br/>
                        <input name="WorkName_text"  onChange={handleChange}
                               type="text" placeholder="Tên công việc" className="input w-full max-w-xs"/>
                    </div>

                    <div>
                        <label>Công ty </label><br/>
                        <input name='Company_text'   onChange={handleChange}
                               type="text" placeholder="Tên công ty" className="input w-full max-w-xs"/>
                    </div>

                    <div className="form-control">
                        <label>Cấp bậc </label>
                        <div className="input-group input-group-vertical">
                            <select  onChange={handleChange}
                                     className="select select-bordered ">
                                <option>Intership</option>
                                <option>Fresher</option>
                                <option>Senior</option>
                                <option>Junior</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label>Lương </label><br/>
                        <input name='money'   onChange={handleChange}
                               type="number" placeholder="lương" className="input w-full max-w-xs"/>
                    </div>
                    <div>
                        <label>Mổ tả </label><br/>
                        <textarea   onChange={handleChange} name="Description_text"
                                    className="resize-none input" rows={5} cols={50} placeholder="Mô tả "></textarea>
                    </div>

                    <div  className="file-uploader">
                        <label>Ảnh kèm (nếu có)</label><br/>
                        <input type='file'  onChange={onSelectPhoto} name='photo' />
                    </div>


                    <div>
                        <label>Số điện thoại liên hệ </label><br/>
                        <input name="phone_number"  onChange={handleChange}
                               type="number" placeholder="Số điện thoại" className="input w-full max-w-xs"/>

                    </div>
                    <div className="form-control">
                        <label>Thời gian muốn lưu trữ trên hệ thống</label>
                        <div className="input-group ">
                            <select   onChange={handleChange}
                                      className="select select-bordered ">
                                <option>3 giờ</option>
                                <option>12 giờ</option>
                                <option>2 ngày</option>
                            </select>
                        </div>
                    </div>

                    <button onClick={() => setShowModal(true)} className="btn modal-button ">Đăng bài</button>


                    {/*<button  type="submit" href="#my-modal-2" className="btn ">check Đăng bài </button>*/}
                </form>
            </div>

            {showModal ? (
                <>
                    <div className="modal" >
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Chúc mừng bạn đã dăng bài thành công!</h3>
                            <p className="py-4">Bạn đã đăng một bài tuyển dụng lên website của chúng tôi, chúc bạn có được nhiều ứng viên liên hệ!</p>
                            <div className="modal-action">
                                <a href="#" className="btn">Yay!</a>
                            </div>
                        </div>
                    </div>
                </>

            ) :null}




        </>
    )
}
export default Post