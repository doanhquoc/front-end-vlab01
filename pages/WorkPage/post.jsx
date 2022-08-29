import axios from "axios";
import styles from '../../styles/Home.module.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import React, { useState, useEffect } from 'react';

export default function Post(){
    console.log('kiểm tra')
    async function postData(){
        let data =  await axios.post()
    }
    return(
        <>
            <h1 className={styles.title}>Đăng thông tin tuyển dụng</h1>

            <div className="artboard phone-6" style={{margin: 'auto' ,alignItems: 'center'}}>
                    <label>Công việc: </label>
                    <div>
                        <input type="text" placeholder="Tên công việc" className="input w-full max-w-xs"/>
                    </div><br/>

                    <div >Công ty: </div>
                    <div>
                        <input type="text" placeholder="Tên công ty" className="input w-full max-w-xs"/>
                    </div><br/>

                    <div >Cấp bậc: </div>
                    <div className="form-control">
                        <div className="input-group input-group-vertical">
                            <select className="select select-bordered ">
                                <option> Intership</option>
                                <option>Fresher</option>
                                <option>Senior</option>
                                <option>Junior</option>
                            </select>
                        </div>
                    </div><br/>

                    <div >Lương: </div>
                    <div>
                        <input type="text" placeholder="Lương ban đầu" className="input w-full max-w-xs"/>
                    </div><br/>
                    <div >Mổ tả: </div>
                    <div>
                        <textarea className="textarea" rows={5} cols={50} placeholder="Mô tả "></textarea>
                    </div><br/>

                    <div >Số điện thoại liên hệ: </div>
                    <div>
                        <input type="text" placeholder="Số điện thoại liên hệ" className="input w-full max-w-xs"/>
                    </div><br/>

                    <div>Thời gian muốn lưu trữ trên hệ thống:</div>
                    <div className="form-control">
                        <div className="input-group ">
                            <select className="select select-bordered ">
                                <option>3 giờ</option>
                                <option>12 giờ</option>
                                <option>2 ngày</option>
                            </select>
                        </div>
                    </div> <br/>

                <a href="#my-modal-2" className="btn">Đăng bài</a>
                <div className="modal" id="my-modal-2">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Chúc mừng bạn đã dăng bài thành công!</h3>
                        <p className="py-4">Bạn đã đăng một bài tuyển dụng lên website của chúng tôi, chúc bạn có được nhiều ứng viên liên hệ!</p>
                        <div className="modal-action">
                            <a href="#" className="btn">Yay!</a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}