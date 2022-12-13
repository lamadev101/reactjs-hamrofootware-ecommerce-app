import React, { useState } from 'react'
import { FiHeart, FiSearch } from 'react-icons/fi'
import { BsHandbag } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { products } from '../data'
import UserAccountCard from './UserAccountCard'

const navItems = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'New & Featured', path: '/product/new-featured' },
  { id: 3, title: 'Men', path: '/product/men' },
  { id: 4, title: 'Women', path: '/product/women' },
  { id: 5, title: 'Kids', path: '/product/kid' },
  { id: 6, title: 'Brands', path: '/brands' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { totalQty } = useSelector(state => state.cart);
  const { totalWishQty } = useSelector(state => state.wishList);
  const {currentUser} = useSelector(state => state.user);

  console.log("navbar components")

  return (
    <div className="navbar" >
      <div className="wrapper">
        <div className="nav-items">
          {navItems.map(item => (
            <NavLink to={`${item.path}`} state={products} key={item.id}>{item.title}</NavLink>
          ))}
        </div>
        <div className="logo">
          <Link to="/" className='title'>Hamro Footwear</Link> <br />
          <small>The brand with an Affordable Price</small>
        </div>
        <div className="right">
          <div className='top'>
            {currentUser ? <div onClick={()=>setOpen(!open)}style={{fontWeight: "bold", cursor:"pointer"}}>Guest User's Account</div> : <NavLink to="/create-account" style={{ textDecoration: 'none', color: 'black' }}>Login/Sign Up</NavLink>}
            <Link to="/cart">
              <div className='iconBox'>
                <BsHandbag className='icon' />
                { totalQty > 0 && <span className='badge'>{totalQty}</span>}
              </div>
            </Link>

            <Link to="/wishlist">
              <div className='iconBox'>
                <FiHeart className='icon' />
                {totalWishQty > 0 && <span className='badge'>{totalWishQty}</span>}
              </div>
            </Link>
          </div>
          <div className="searchBox">
            <FiSearch className='searchIcon' />
            <input type="search" placeholder='Find something for you' />
          </div>
        </div>
      </div>
      {open && <UserAccountCard setOpen={setOpen} />}
    </div>
  )
}

export default Navbar