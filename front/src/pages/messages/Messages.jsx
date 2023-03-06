import React from 'react'
import {Link} from 'react-router-dom'
import './messages.scss'
const Messages = () => {
  const message='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit harum ullam dicta ea tempore nesciunt vitae et. Maxime optio vitae deleniti iusto reiciendis, cum, error sunt, nisi neque voluptate culpa.'
  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
          {/* <Link to='/add'>
            <button>Add New Gig</button>
          </Link> */}
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Jonethan</td>
            <td>
              <Link to='/message/12'>
              {message.substring(0,90)}...
              </Link>
              </td>
            <td>20 Jan, 2023</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>Jonethan</td>
            <td>
              <Link to='/message/12'>
              {message.substring(0,90)}...
              </Link>
              </td>
            <td>20 Jan, 2023</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>Jonethan</td>
            <td>
              <Link to='/message/12'>
              {message.substring(0,90)}...
              </Link>
              </td>
            <td>20 Jan, 2023</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>Jonethan</td>
            <td>
              <Link to='/message/12'>
              {message.substring(0,90)}...
              </Link>
              </td>
            <td>20 Jan, 2023</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages