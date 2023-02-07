import React, {useState}from 'react'
import {HiOutlineMenu} from 'react-icons/hi'
import {BiSearchAlt2 } from 'react-icons/bi'

import './main.css'

interface Props{
    setToggle: Function;
}
const Main = (props: Props) => {
    var isToggle = false;
    const ChangeToggle = () => {
        props.setToggle(isToggle = !isToggle);
    }
  return (
    <div className='main'>
        <div className="topbar">
            <div className="toggle"
                onClick = {ChangeToggle}>
                <HiOutlineMenu/>
            </div>
            <div className="search">
                <label htmlFor="">
                    <input type="text" placeholder='Search bar' />
                    <BiSearchAlt2 className='searchIcon'/>
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