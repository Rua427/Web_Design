import React from 'react'
import Customer from './customer'
import './data.css'
const Data = () => {
  return (
    <div className='details'>
        <div className="recentOrders">
            <div className="cardHeader">
                <h2>Recent Orders</h2>
                <a href="#" className="btn">View All</a>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Payment</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                   <tr>
                       <td>Star Refrigerator</td>
                       <td>$1200</td>
                       <td>Paid</td>
                       <td><span className="status delivered">Delivered</span></td>
                   </tr>
                   <tr>
                       <td>Star Refrigerator</td>
                       <td>$1200</td>
                       <td>Paid</td>
                       <td><span className="status delivered">Delivered</span></td>
                   </tr>
                   <tr>
                       <td>Star Refrigerator</td>
                       <td>$1200</td>
                       <td>Paid</td>
                       <td><span className="status delivered">Delivered</span></td>
                   </tr>
                   <tr>
                       <td>Star Refrigerator</td>
                       <td>$1200</td>
                       <td>Paid</td>
                       <td><span className="status delivered">Delivered</span></td>
                   </tr>
                   <tr>
                       <td>Star Refrigerator</td>
                       <td>$1200</td>
                       <td>Paid</td>
                       <td><span className="status delivered">Delivered</span></td>
                   </tr>
                   <tr>
                       <td>Star Refrigerator</td>
                       <td>$1200</td>
                       <td>Paid</td>
                       <td><span className="status delivered">Delivered</span></td>
                   </tr>
                   <tr>
                       <td>Star Refrigerator</td>
                       <td>$1200</td>
                       <td>Paid</td>
                       <td><span className="status delivered">Delivered</span></td>
                   </tr>
                   <tr>
                       <td>Star Refrigerator</td>
                       <td>$1200</td>
                       <td>Paid</td>
                       <td><span className="status delivered">Delivered</span></td>
                   </tr>
                   <tr>
                       <td>Star Refrigerator</td>
                       <td>$1200</td>
                       <td>Paid</td>
                       <td><span className="status delivered">Delivered</span></td>
                   </tr>
                   <tr>
                       <td>Star Refrigerator</td>
                       <td>$1200</td>
                       <td>Paid</td>
                       <td><span className="status delivered">Delivered</span></td>
                   </tr>
                </tbody>
            </table>
        </div>
        
        <Customer/>
    </div>
  )
}

export default Data