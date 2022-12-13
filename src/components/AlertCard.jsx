import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { remove } from '../features/cartSlice';
import { removeWishItem } from '../features/wishlistSlice';

const AlertCard = ({title, id, setRemove}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {currentUser} = useSelector(state => state.user);

  const removeItem = () => {
    if(!currentUser){
      return navigate("/create-account");
    }
    title==="cart" ? dispatch(remove(id)) : dispatch(removeWishItem(id));
    setRemove(false);
  }

  return (
    <div className='alertBox'>
      <div className="wrapper">
        <h2>Remove from {title}</h2>
        <p>Are you sure you want to delete this item?</p>
        <div className="btns">
          <button onClick={removeItem}>Remove</button>
          <button onClick={()=>setRemove(false)} >Cancle</button>
        </div>
      </div>
    </div>
  )
}

export default AlertCard