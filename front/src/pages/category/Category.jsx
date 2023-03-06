import React from 'react'
import './category.scss'
import Carousel from 'react-multi-carousel';
const Category = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 1
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 1
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };
  return (
    <div className='category'>
      <div className="container">
        <div className="left">
         <span className="bread">VIKINGS {'>'} GRPHICS & DESIGN</span>
         <h1>I will create all genrated art for YOU !</h1>
         <div className="user">
          <img className='user-img' src="https://i.pinimg.com/originals/ea/e2/94/eae2941842fc8e912c17b3a2d9c2b41c.jpg" alt="" />
          <span>Jhon Doe</span>
          <div className="stars">
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <span>5</span>
          </div>
         </div>
         <img src="https://i.pinimg.com/originals/ea/e2/94/eae2941842fc8e912c17b3a2d9c2b41c.jpg" alt="1" className='sliders'/>
         {/* <Carousel responsive={responsive} infinite={true}  autoPlay={true}  autoPlaySpeed={3000} className='slider'>
          <img src="https://i.pinimg.com/originals/ea/e2/94/eae2941842fc8e912c17b3a2d9c2b41c.jpg" alt="1" />
          <img src="https://i.pinimg.com/originals/7d/4a/ae/7d4aae399e78039b35925065a3ee84c3.jpg" alt="2" />
          <img src="https://i.pinimg.com/originals/ea/e2/94/eae2941842fc8e912c17b3a2d9c2b41c.jpg" alt="3" />
         </Carousel> */}
         <h2>About this GIG</h2>
         <p>
         Alia Advani, known professionally as Kiara Advani, is an Indian actress who works in Hindi and Telugu language films. After making her acting debut in the comedy film Fugly, she played MS Dhoni's wife in the sports biopic M.S. Dhoni: The Untold Story.
         Alia Advani, known professionally as Kiara Advani, is an Indian actress who works in Hindi and Telugu language films. After making her acting debut in the comedy film Fugly, she played MS Dhoni's wife in the sports biopic M.S. Dhoni: The Untold Story.
         Alia Advani, known professionally as Kiara Advani, is an Indian actress who works in Hindi and Telugu language films. After making her acting debut in the comedy film Fugly, she played MS Dhoni's wife in the sports biopic M.S. Dhoni: The Untold Story.
         </p>
         <div className="seller">
          <h2>About The Seller</h2>
          <div className="user">
            <img src="https://i.pinimg.com/originals/ea/e2/94/eae2941842fc8e912c17b3a2d9c2b41c.jpg" alt="" />
            <div className="info">
              <span>Shivam Upadhyay</span>
              <div className="stars">
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <span>5</span>
          </div>
          <button>Contact me</button>
            </div>
          </div>
          <div className="box">
            <div className="items">
              <div className="item">
                <span className="title">From</span>
                <span className="desc">INDIA</span>
              </div>
              <div className="item">
                <span className="title">Member Since</span>
                <span className="desc">Jan 2015</span>
              </div>
              <div className="item">
                <span className="title">Response Time</span>
                <span className="desc">1 Day</span>
              </div>
              <div className="item">
                <span className="title">Last delivery</span>
                <span className="desc">3 Day</span>
              </div>
              <div className="item">
                <span className="title">Language</span>
                <span className="desc">English</span>
              </div>
            </div>
            <hr/>
              <p>
              Alia Advani, known professionally as Kiara Advani, is an Indian actress who works in Hindi and Telugu language films. After making her acting debut in the comedy film Fugly, she played MS Dhoni's wife in the sports biopic M.S. Dhoni: The Untold Story.
              </p>
          </div>
         </div>
         <div className="reviews">
          <h2>Reviews</h2>
          <div className="item">
            <div className="user">
              <img src="https://i.pinimg.com/originals/ea/e2/94/eae2941842fc8e912c17b3a2d9c2b41c.jpg" alt="" />
              <div className="info">
                <span>Shivam Upadhyay</span>
                <div className="country">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIcG8tY5hSyXkuASFh8qqJedfai9nbyRvC9Q&usqp=CAU" alt="" />
                  <span>INDIA</span>
                </div>
              </div>
            </div>
            <div className="stars">
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <span>5</span>
          </div>
          <p>
          The actors and parents-to-be, got together with their director Ayan Mukerji to promote their upcoming film 'Brahmastra' virtually, via a live session. When asked why they aren't going on a multi-city tour to promote the upcoming film, Alia replied, "We will promote the film, and we will be everywhere but if the question you are asking is why we are not phailod everywhere, right now our focus.
          </p>
          <div className="helpful">
            <span>Helpful?</span>
            <img src="/images/tu.png" alt="" />
            <span>Yes</span>
            <img src="/images/td.png" alt="" />
            <span>No</span>
          </div>
          </div>
          <hr/>
         </div>
         <div className="reviews">
          <h2>Reviews</h2>
          <div className="item">
            <div className="user">
              <img src="https://i.pinimg.com/originals/ea/e2/94/eae2941842fc8e912c17b3a2d9c2b41c.jpg" alt="" />
              <div className="info">
                <span>Shivam Upadhyay</span>
                <div className="country">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIcG8tY5hSyXkuASFh8qqJedfai9nbyRvC9Q&usqp=CAU" alt="" />
                  <span>INDIA</span>
                </div>
              </div>
            </div>
            <div className="stars">
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <span>5</span>
          </div>
          <p>
          The actors and parents-to-be, got together with their director Ayan Mukerji to promote their upcoming film 'Brahmastra' virtually, via a live session. When asked why they aren't going on a multi-city tour to promote the upcoming film, Alia replied, "We will promote the film, and we will be everywhere but if the question you are asking is why we are not phailod everywhere, right now our focus.
          </p>
          <div className="helpful">
            <span>Helpful?</span>
            <img src="/images/tu.png" alt="" />
            <span>Yes</span>
            <img src="/images/td.png" alt="" />
            <span>No</span>
          </div>
          </div>
          <hr/>
         </div>
         <div className="reviews">
          <h2>Reviews</h2>
          <div className="item">
            <div className="user">
              <img src="https://i.pinimg.com/originals/ea/e2/94/eae2941842fc8e912c17b3a2d9c2b41c.jpg" alt="" />
              <div className="info">
                <span>Shivam Upadhyay</span>
                <div className="country">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIcG8tY5hSyXkuASFh8qqJedfai9nbyRvC9Q&usqp=CAU" alt="" />
                  <span>INDIA</span>
                </div>
              </div>
            </div>
            <div className="stars">
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <span>5</span>
          </div>
          <p>
          The actors and parents-to-be, got together with their director Ayan Mukerji to promote their upcoming film 'Brahmastra' virtually, via a live session. When asked why they aren't going on a multi-city tour to promote the upcoming film, Alia replied, "We will promote the film, and we will be everywhere but if the question you are asking is why we are not phailod everywhere, right now our focus.
          </p>
          <div className="helpful">
            <span>Helpful?</span>
            <img src="/images/tu.png" alt="" />
            <span>Yes</span>
            <img src="/images/td.png" alt="" />
            <span>No</span>
          </div>
          </div>
          <hr/>
         </div>
        </div>
        <div className="right">
         <div className="price">
          <h3>1 AI genrated image</h3>
          <h2>$ 55.00</h2>
         </div>
         <p>
         Alia Advani, known professionally as Kiara Advani, is an Indian actress who works in Hindi and Telugu language films.
         </p>
         <div className="details">
          <div className="item">
          <img src="/images/clock.png" alt="cl" />
          <span>2 days Delivery</span>
          </div>
          <div className="item">
          <img src="/images/cycle.png" alt="cl" />
          <span>3 Revisions</span>
          </div>
         </div>
         <div className="featurs">
          <div className="item">
            <img src="/images/check.png" alt="" className='ch' />
            <span>Prompt writing</span>
          </div>
          <div className="item">
            <img src="/images/check.png" alt="" className='ch' />
            <span>Prompt writing</span>
          </div>
          <div className="item">
            <img src="/images/check.png" alt="" className='ch' />
            <span>Prompt writing</span>
          </div>
          </div>
           <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Category