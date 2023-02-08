import React from 'react'
import "./card.css"

import {AiOutlineEye} from 'react-icons/ai'
import {HiOutlineChatBubbleLeftRight} from 'react-icons/hi2'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineDollarCircle} from 'react-icons/ai'

const Card = () => {
  return (
    <div className="cardBox">
        <div className="card">
            <div>
                <div className="numbers">1,504</div>
                <div className="cardName">Dakyeom Kim</div>
            </div>
            <div className="iconBx">
                <AiOutlineEye/>
            </div>
        </div>
        <div className="card">
            <div>
                <div className="numbers">1,504</div>
                <div className="cardName">Dakyeom Kim</div>
            </div>
            <div className="iconBx">
                <AiOutlineShoppingCart/>
            </div>
        </div>
        <div className="card">
            <div>
                <div className="numbers">1,504</div>
                <div className="cardName">Dakyeom Kim</div>
            </div>
            <div className="iconBx">
                <HiOutlineChatBubbleLeftRight/>
            </div>
        </div>
        <div className="card">
            <div>
                <div className="numbers">1,504</div>
                <div className="cardName">Dakyeom Kim</div>
            </div>
            <div className="iconBx">
                <AiOutlineDollarCircle/>
            </div>
        </div>
    </div>
  )
}

export default Card