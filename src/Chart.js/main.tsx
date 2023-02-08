import React, {useState}from 'react'
import {HiOutlineMenu} from 'react-icons/hi'
import {BiSearchAlt2 } from 'react-icons/bi'

import './main.css'
import Card from './card';
import Data from './data';

interface Props{
    setToggle: Function;
}
const Main = (props: Props) => {
    const [isToggle, setToggle] = useState<Boolean>(false);

    const ChangeToggle = () => {
        props.setToggle(!isToggle);
        setToggle(!isToggle);
    }
  return (
    <div className={`main` + `${isToggle ? ` active` : ``}`}>
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

        <Card/>
        <Data/>
    </div>
  )
}

export default Main