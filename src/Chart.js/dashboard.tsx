import React, { useRef, useState } from 'react'
import Main from './main';
import Navigation from './navigation'
import Card from './card';

import './dashboard.css'

const Dashboard = () => {

    const [isToggle, setToggle] = useState<Boolean>(false);

    return (
        <div className="container">
            <Main setToggle={setToggle}/>
            <Navigation isToggle={isToggle}/>
        </div>
    )

}

export default Dashboard