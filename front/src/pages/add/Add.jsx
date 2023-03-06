import React from 'react';
import './add.scss';
const Add = () => {
  return (
    <div className='add'>
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input type="text" placeholder='e.g. I will do sothing for u' />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="ai">AI Design</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" name="img" id="img" />
            <label htmlFor="">Upload Images</label>
            <input type="file" name="im" id="im" multiple />
            <label htmlFor="">Description</label>
            <textarea name="s" id="" cols="30" rows="12" placeholder='Introduce about you and your services..'></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder='e.g. Web development'/>
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" cols="30" rows="8" placeholder='Short description about services'></textarea>
            <label htmlFor="">Delivery Time(e.g. 3 days)</label>
            <input type="number" min={1} />
            <label htmlFor="">Revision Time</label>
            <input type="number" min={1} />
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder='e.g. web design' />
            <input type="text" placeholder='e.g. web hosting' />
            <input type="text" placeholder='e.g. web development' />
            <input type="text" placeholder='e.g. music' />
            <label htmlFor="">Price</label>
            <input type="number" min={1}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add