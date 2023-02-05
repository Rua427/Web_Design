import React, { useRef, useState } from 'react'
import './dashboard.css'
import {AiFillApple, AiOutlineUser, AiOutlineHome, AiOutlineSetting} from 'react-icons/ai';
import {BsChat} from 'react-icons/bs';
import {IoMdHelp} from 'react-icons/io';
import {BiLockAlt} from 'react-icons/bi';
import {VscSignOut} from 'react-icons/vsc';
import Main from './main';

const Dashboard = () => {
    const over = useRef<HTMLUListElement>(null);
    const [isHoverList, setHoverList] = useState<number>(1);

    const activeLink = (e: React.MouseEvent) => {
        const element = e.target as HTMLElement;
        
        if(element.parentElement === null) {
            return;
        }
        if(element.parentElement.parentElement === null) {
            return;
        }

        const list = over.current?.getElementsByClassName("navList");
        
        if(list === undefined) 
            return;
        for(var i = 0; i < list.length; i++ ){
            if(element.parentElement.classList === list[i].classList){
                setHoverList(i);
            }
            else if(element.parentElement.parentElement.classList === list[i].classList){
                setHoverList(i);
            }
        }
    }
    return (
        <div
            className="container">
            <div className='navigation'>
                <ul ref={over} onMouseOver={(e) => activeLink(e)}>
                    <li className={`navList ${isHoverList === 0 ? `hovered` : ``}`} >
                        <a href="#">
                            <span className="icon"><AiFillApple/></span>
                            <span className="title">Brand Name</span>
                        </a>
                    </li>
                    <li className={`navList ${isHoverList === 1 ? `hovered` : ``}`}>
                        <a href="#">
                            <span className="icon"><AiOutlineHome/></span>
                            <span className="title">Dashboard</span>
                        </a>
                    </li>
                    <li className={`navList ${isHoverList === 2 ? `hovered` : ``}`}>
                        <a href="#">
                            <span className="icon"><AiOutlineUser/></span>
                            <span className="title">Customers</span>
                        </a>
                    </li>
                    <li className={`navList ${isHoverList === 3 ? `hovered` : ``}`}>
                        <a href="#">
                            <span className="icon"><BsChat/></span>
                            <span className="title">Message</span>
                        </a>
                    </li>
                    <li className={`navList ${isHoverList === 4 ? `hovered` : ``}`}>
                        <a href="#">
                            <span className="icon"><IoMdHelp/></span>
                            <span className="title">Help</span>
                        </a>
                    </li>
                    <li className={`navList ${isHoverList === 5 ? `hovered` : ``}`}>
                        <a href="#">
                            <span className="icon"><AiOutlineSetting/></span>
                            <span className="title">Settings</span>
                        </a>
                    </li>
                    <li className={`navList ${isHoverList === 6 ? `hovered` : ``}`}>
                        <a href="#">
                            <span className="icon"><BiLockAlt/></span>
                            <span className="title">Password</span>
                        </a>
                    </li>
                    <li className={`navList ${isHoverList === 7 ? `hovered` : ``}`}>
                        <a href="#">
                            <span className="icon"><VscSignOut/></span>
                            <span className="title">Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>

            <Main/>
        </div>



    )

}

export default Dashboard