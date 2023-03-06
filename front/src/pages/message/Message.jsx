import React from 'react'
import { Link } from 'react-router-dom'
import './message.scss'
const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <div className="bread">
          <Link to='/messages'>MESSAGES</Link> {'>'} SHIVAM {'>'}
        </div>
        <div className="messages-sec">
          <div className="item">
            <img src="https://i.pinimg.com/originals/7d/4a/ae/7d4aae399e78039b35925065a3ee84c3.jpg" alt="kd" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facere autem commodi voluptas error neque architecto illum, quaerat non voluptate explicabo magnam modi veritatis, tenetur quidem magni possimus, placeat impedit!
            </p>
          </div>
          <div className="item onwer">
            <img src="https://i.pinimg.com/originals/7d/4a/ae/7d4aae399e78039b35925065a3ee84c3.jpg" alt="kd" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facere autem commodi voluptas error neque architecto illum, quaerat non voluptate explicabo magnam modi veritatis, tenetur quidem magni possimus, placeat impedit!
            </p>
          </div>
          <div className="item">
            <img src="https://i.pinimg.com/originals/7d/4a/ae/7d4aae399e78039b35925065a3ee84c3.jpg" alt="kd" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facere autem commodi voluptas error neque architecto illum, quaerat non voluptate explicabo magnam modi veritatis, tenetur quidem magni possimus, placeat impedit!
            </p>
          </div>
          <div className="item onwer">
            <img src="https://i.pinimg.com/originals/7d/4a/ae/7d4aae399e78039b35925065a3ee84c3.jpg" alt="kd" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facere autem commodi voluptas error neque architecto illum, quaerat non voluptate explicabo magnam modi veritatis, tenetur quidem magni possimus, placeat impedit!
            </p>
          </div>
          <div className="item">
            <img src="https://i.pinimg.com/originals/7d/4a/ae/7d4aae399e78039b35925065a3ee84c3.jpg" alt="kd" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facere autem commodi voluptas error neque architecto illum, quaerat non voluptate explicabo magnam modi veritatis, tenetur quidem magni possimus, placeat impedit!
            </p>
          </div>
          <div className="item onwer">
            <img src="https://i.pinimg.com/originals/7d/4a/ae/7d4aae399e78039b35925065a3ee84c3.jpg" alt="kd" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facere autem commodi voluptas error neque architecto illum, quaerat non voluptate explicabo magnam modi veritatis, tenetur quidem magni possimus, placeat impedit!
            </p>
          </div>
          </div>
          <hr/>
          <div className="write">
            <textarea name="" placeholder='write a message...' id="" cols="30" rows="10"></textarea>
            <button>Send</button>
          </div>
      </div>
    </div>
  )
}

export default Message