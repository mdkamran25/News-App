import React from 'react'
import './categories.css'
const Categories = () => {
  return (
    <div>
      <div className='col-12 borderLine'>
        <ul className='text-light p-0 mx-0 my-3 d-flex justify-content-evenly'>
            <li className='list-group-item list-group-item-action'>Business</li>
            <li className='list-group-item list-group-item-action'>Entertainment</li>
            <li className='list-group-item list-group-item-action'>Health</li>
            <li className='list-group-item list-group-item-action'>Science</li>
            <li className='list-group-item list-group-item-action'>Sports</li>
            <li className='list-group-item list-group-item-action'>Technology</li>
        </ul>
      </div>
    </div>
  )
}

export default Categories
