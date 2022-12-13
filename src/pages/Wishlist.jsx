import React, { useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import { add } from '../features/cartSlice'
import { removeWishItem } from '../features/wishlistSlice'
import Empty from '../components/Empty'
import AlertCard from '../components/AlertCard'
import Toster from '../components/Toster'
import { toast } from 'react-toastify'
import { CardList } from '../components'

const Wishlist = () => {
  const { wishList, totalWishQty } = useSelector(state => state.wishList);
  const dispatch = useDispatch();
  const [remove, setRemove] = useState(false);

  const notify = (msg)=>{
    toast.success(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className='wishList'>
      {totalWishQty !== 0 ? <div className="container">
        <div className='title'>My WishList <FiHeart /> </div>
        <div className="items">
          {wishList.map(item => (
            <div className="wishCard" key={item.id}>
              <AiOutlineCloseSquare className='delIcon' onClick={()=>setRemove(true)} />
              <div className="image">
                <img src={item.img} alt="" />
                <div>{item.name}</div>
              </div>
              <div className="info">
                <span><small>Brand:</small> {item.brand}</span>
                <span><small>Size:</small> {item.size}</span>
                <span><small>Width:</small> {item.width}</span>
                <span><small>Color:</small> {item.color}</span>
              </div>
              <div className="price">
                <div className="sp">NRs.{item.sp}</div>
                <div className='subPrice'>
                  <small className='cp'>NRs.{item.cp}</small>
                  <small className='rate'>{item.dr}% off</small>
                </div>
              </div>
              <button className='addBtn' onClick={()=>{dispatch(
                add({
                id: item.id,
                img: item.img,
                sp: item.sp,
                cp:item.cp,
                qty: item.qty,
                name: item.name,
                brand: item.brand,
                width: item.width,
                size: item.size,
                color: item.color,
                dr: item.dr,
              }),
              dispatch(removeWishItem(item.id)),
              notify("Product move into cart")
              )}}>Move to cart <BsHandbag /></button>
              {remove && <AlertCard title={"wishlist"} id={item.id} setRemove={setRemove} />}
            </div>
          ))}
        </div>
      </div> : <Empty title={"Wish List"} btnVal={"Visit Shop"} />}
      <Toster/>
      <CardList title={"Just for you"} start={3} end={8} />
    </div>
  )
}

export default Wishlist