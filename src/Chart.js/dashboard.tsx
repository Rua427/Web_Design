import React, {useRef} from 'react'
import './dashboard.css'
import {AiFillApple, AiOutlineUser, AiOutlineHome, AiOutlineSetting} from 'react-icons/ai';
import {BsChat} from 'react-icons/bs';
import {IoMdHelp} from 'react-icons/io';
import {BiLockAlt} from 'react-icons/bi';
import {VscSignOut} from 'react-icons/vsc';

const Dashboard = () => {
    const activeLink = (e: React.MouseEvent) => {
        const element = e.target as HTMLElement;
        console.log(element);
        if(element.classList.contains("navList")){
            element.classList.remove('hovered');
            element.classList.add('hovered');
        }
    }
    const over = useRef<HTMLDivElement>(null);
    return (
        <div
            className="container">
            <div className='navigation'>
                <ul>
                    <li className='navList' ref={over}>
                        <a href="#">
                            <span className="icon"><AiFillApple/></span>
                            <span className="title">Brand Name</span>
                        </a>
                    </li>
                    <li className='navList'>
                        <a href="#">
                            <span className="icon"><AiOutlineHome/></span>
                            <span className="title">Dashboard</span>
                        </a>
                    </li>
                    <li className='navList'>
                        <a href="#">
                            <span className="icon"><AiOutlineUser/></span>
                            <span className="title">Customers</span>
                        </a>
                    </li>
                    <li className='navList'>
                        <a href="#">
                            <span className="icon"><BsChat/></span>
                            <span className="title">Message</span>
                        </a>
                    </li>
                    <li className='navList'>
                        <a href="#">
                            <span className="icon"><IoMdHelp/></span>
                            <span className="title">Help</span>
                        </a>
                    </li>
                    <li className='navList'>
                        <a href="#">
                            <span className="icon"><AiOutlineSetting/></span>
                            <span className="title">Settings</span>
                        </a>
                    </li>
                    <li className='navList'>
                        <a href="#">
                            <span className="icon"><BiLockAlt/></span>
                            <span className="title">Password</span>
                        </a>
                    </li>
                    <li className='navList'>
                        <a href="#">
                            <span className="icon"><VscSignOut/></span>
                            <span className="title">Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>



    )

}

export default Dashboard