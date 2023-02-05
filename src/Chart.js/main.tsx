import React from 'react'
import {HiOutlineMenu} from 'react-icons/hi'
import {BiSearchAlt2 } from 'react-icons/bi'

import './main.css'
const Main = () => {
  return (
    <div className='main'>
        <div className="topbar">
            <div className="toggle">
                <HiOutlineMenu/>
            </div>
            <div className="search">
                <label htmlFor="">
                    <input type="text" placeholder='Search bar' />
                    <BiSearchAlt2/>
                </label>
            </div>
            <div className="user">
                <img src="assets/user.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Main