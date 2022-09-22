import React from "react";
import {useRouter} from "next/router";
import axios from "axios";


export async function getServerSideProps(context){
    // const {id} = context.query

    let workData = await axios.get(`http://127.0.0.1:8000/WorkInfo/?page=${1}`)
        .then(res => res.data)
        .catch(err => console.log(err))

    return{
        props:{
            workData,
        }
    }
}

export default function Deal ({id}) {

    const router = useRouter()
    const handleClickPost = (e)=> {
        e.preventDefault()
        router.push('./1')
    }

        return(
      <>
          <div className="navbar bg-base-100">
              <div className="flex-1">
                  <a href={'./1'} className="btn btn-ghost normal-case text-xl">
                      Trang chủ
                      <button onClick={handleClickPost}></button>
                  </a>
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


          <div>

          </div>
      </>
    )
}
