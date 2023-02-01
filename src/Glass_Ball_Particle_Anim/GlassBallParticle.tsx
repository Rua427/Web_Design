import React from 'react'
import './GlassBallParticle.css'


const GlassBallParticle = () => {
    const style1 = { "--clr": "#04fc43" } as React.CSSProperties;
    const style2 = { "--clr": "#fee800" } as React.CSSProperties;
    const style3 = { "--clr": "#ff2972" } as React.CSSProperties;
    const style4 = { "--clr": "#03a9f4" } as React.CSSProperties;
     return (
        <div className='ball'>
            <div className="circle" style={style1} ></div>
            <div className="circle" style={style2} ></div>
            <div className="circle" style={style3} ></div>
            <div className="circle" style={style4} ></div>
        </div>
    )
}

export default GlassBallParticle