import React from 'react'
import './customer.css'
const Customer = () => {
  return (
    <div className='recentCustomers'>
        <div className="cardHeader">
            <h2>Recent Customers</h2>
        </div>
        <table>
            <thead></thead>
            <tbody>
                <tr>
                    <td width="60px"><div className="imgBx"><img src="assets/img1.jpg" alt="" /></div></td>
                    <td><h4>David<br></br><span>Italy</span></h4></td>
                </tr>
                <tr>
                    <td width="60px"><div className="imgBx"><img src="assets/img2.jpg" alt="" /></div></td>
                    <td><h4>David<br></br><span>Italy</span></h4></td>
                </tr>
                <tr>
                    <td width="60px"><div className="imgBx"><img src="assets/img3.jpg" alt="" /></div></td>
                    <td><h4>David<br></br><span>Italy</span></h4></td>
                </tr>
                <tr>
                    <td width="60px"><div className="imgBx"><img src="assets/img4.jpg" alt="" /></div></td>
                    <td><h4>David<br></br><span>Italy</span></h4></td>
                </tr>
                <tr>
                    <td width="60px"><div className="imgBx"><img src="assets/img5.jpg" alt="" /></div></td>
                    <td><h4>David<br></br><span>Italy</span></h4></td>
                </tr>
                <tr>
                    <td width="60px"><div className="imgBx"><img src="assets/img6.jpg" alt="" /></div></td>
                    <td><h4>David<br></br><span>Italy</span></h4></td>
                </tr>
                <tr>
                    <td width="60px"><div className="imgBx"><img src="assets/img7.jpg" alt="" /></div></td>
                    <td><h4>David<br></br><span>Italy</span></h4></td>
                </tr>
                <tr>
                    <td width="60px"><div className="imgBx"><img src="assets/img8.jpg" alt="" /></div></td>
                    <td><h4>David<br></br><span>Italy</span></h4></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Customer