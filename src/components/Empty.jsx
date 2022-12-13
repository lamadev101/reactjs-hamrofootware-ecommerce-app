import React from 'react'
import { Link } from 'react-router-dom'

const Empty = ({title, btnVal}) => {
  return (
    <div className="emptyCart">
      <h2>Your {title} is Empty</h2>
      <img src="https://hakimitr.com/assets/website/images/empty-cart.gif" alt="" /><br />
      <Link to="/">
        <button>{btnVal}</button>
      </Link>
    </div>
  )
}

export default Empty