import React from 'react'
import './mygig.scss'
import {Link} from 'react-router-dom'
const MyGig = () => {
  return (
    <div className='mygig'>
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to='/add'>
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='pro-img' src="https://i.pinimg.com/originals/7d/4a/ae/7d4aae399e78039b35925065a3ee84c3.jpg" alt="ssss" />
            </td>
            <td>AI Image</td>
            <td>$ 30</td>
            <td>123</td>
            <td>
              <img className='delete' src="/images/delete.png" alt="dp" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='pro-img' src="https://i.pinimg.com/originals/7d/4a/ae/7d4aae399e78039b35925065a3ee84c3.jpg" alt="ssss" />
            </td>
            <td>AI Image</td>
            <td>$ 30</td>
            <td>123</td>
            <td>
              <img className='delete' src="/images/delete.png" alt="dp" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='pro-img' src="https://i.pinimg.com/originals/7d/4a/ae/7d4aae399e78039b35925065a3ee84c3.jpg" alt="ssss" />
            </td>
            <td>AI Image</td>
            <td>$ 30</td>
            <td>123</td>
            <td>
              <img className='delete' src="/images/delete.png" alt="dp" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='pro-img' src="https://i.pinimg.com/originals/7d/4a/ae/7d4aae399e78039b35925065a3ee84c3.jpg" alt="ssss" />
            </td>
            <td>AI Image</td>
            <td>$ 30</td>
            <td>123</td>
            <td>
              <img className='delete' src="/images/delete.png" alt="dp" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGig