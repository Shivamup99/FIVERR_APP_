import React from 'react'
// import { Link } from 'react-router-dom'
import './order.scss'
const Order = () => {
  const currentUser={
    name:'Shivam',
    isSeller:true,
    id:1
  }
  return (
    <div className='order'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
          {/* <Link to='/add'>
            <button>Add New Gig</button>
          </Link> */}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller?'Buyer':'Seller'}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className='pro-img' src="https://i.pinimg.com/originals/7d/4a/ae/7d4aae399e78039b35925065a3ee84c3.jpg" alt="ssss" />
            </td>
            <td>AI Image</td>
            <td>$ 30</td>
            <td>Jonethan</td>
            <td>
              <img className='delete' src="/images/contact.png" alt="dp" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='pro-img' src="https://i.pinimg.com/originals/7d/4a/ae/7d4aae399e78039b35925065a3ee84c3.jpg" alt="ssss" />
            </td>
            <td>AI Image</td>
            <td>$ 30</td>
            <td>Araya</td>
            <td>
              <img className='delete' src="/images/contact.png" alt="dp" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='pro-img' src="https://i.pinimg.com/originals/7d/4a/ae/7d4aae399e78039b35925065a3ee84c3.jpg" alt="ssss" />
            </td>
            <td>AI Image</td>
            <td>$ 30</td>
            <td>Jon Snow</td>
            <td>
              <img className='delete' src="/images/contact.png" alt="dp" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='pro-img' src="https://i.pinimg.com/originals/7d/4a/ae/7d4aae399e78039b35925065a3ee84c3.jpg" alt="ssss" />
            </td>
            <td>AI Image</td>
            <td>$ 30</td>
            <td>Ragnor</td>
            <td>
              <img className='delete' src="/images/contact.png" alt="dp" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Order