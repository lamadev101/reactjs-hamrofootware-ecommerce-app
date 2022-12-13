import React, { useState } from 'react'
import { BsStarFill, BsStarHalf, BsStar, BsFillHeartFill, BsHeart } from 'react-icons/bs'
import { AiOutlineCheck, AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom';
import { CardList } from '../components';
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../features/cartSlice';
import { toast } from 'react-toastify';
import Toster from '../components/Toster';
import { addWishItem } from '../features/wishlistSlice';
import AlertCard from '../components/AlertCard';

const Details = () => {
  const location = useLocation();
  const [width, setWidth] = useState("medium");
  const [size, setSize] = useState(8);
  const [itemColor, setItemColor] = useState("black");
  const [qty, setQty] = useState(1);
  const [remove, setRemove] = useState(false);
  const [deg, setDeg] = useState();
  const navigate = useNavigate()

  const { id, name, sp, cp, dr, image, brand } = location.state;
  const sizes = [5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0]
  const colors = ["black", "white", "gray", "red"]
  const images = [40, 80, -20, -80]

  const dispatch = useDispatch()
  const { wishList } = useSelector(state => state.wishList);
  const { cartItems } = useSelector(state => state.cart);
  const { currentUser } = useSelector(state => state.user);

  const product = {
    id: id,
    img: image,
    sp: sp,
    cp: cp,
    qty: qty,
    name: name,
    brand: brand,
    width: width,
    size: size,
    color: itemColor,
    dr: dr,
  }
  const notify = (msg) => {
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
  const addToCart = () => {
    if(!currentUser){
      return navigate("/create-account");
    }
    dispatch(add(product));
    notify("Successfully product added into cart");
  }
  const addToWishList = () => {
    if(!currentUser){
      return navigate("/create-account");
    }
    dispatch(addWishItem(product));
    notify("Successfully product added into wish list");
  }


  return (
    <div className='details'>
      <div className="wrapper">
        <div className="top">
          <div className="left">
            <img src={image} alt="" className="pImg" style={{transform: deg?`rotate(${deg}deg)`:""}} />
            <div className='varient'>
              {images.map(deg=>(
                <img src={image} alt="" onMouseOver={()=>setDeg(deg)} className="smallImg" key={deg} />
              ))}
            </div>
          </div>
          <div className="right">
            <div className='path'>Home/Product-Details/{brand}/{id}</div>
            <div className="wishlistIcon">
              {wishList.some(item => item.id === id) ? <BsFillHeartFill className='icon' /> : <BsHeart className='icon' onClick={addToWishList} />}
            </div>
            <h1>{name}</h1>
            <div>Men's Shoes  <span className='brand'>{brand}</span></div>
            <div className='like'>
              <span className='starIcons'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
              </span>
              <span>4.9 (340)</span>
              <span className='heart'>12.5K <BsFillHeartFill className='icon' /></span>
              <span>120 Comments</span>
            </div>
            
            <div className='stock'>In Stock</div>
            <div className="price">NRs. <span>{sp}</span> <small>({dr}% off)</small></div>
            <hr />
            <div className='sizes'>
              <span>Size:</span>
              <span className='sizeList'>
                {sizes.map(item => (
                  <div className={'item'} style={{ background: item === size ? "#ee9898" : "" }} key={item} onClick={() => setSize(item)}>{item}</div>
                ))}
              </span>
            </div>
            <div className='width'>
              <span>Width:</span>
              <select onChange={e => setWidth(e.target.value)}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
            <div className='colors'>
              <span>Color:</span>
              {colors.map(color => (
                <span key={color} className={color} onClick={() => setItemColor(color)}>
                  {color === itemColor ? <AiOutlineCheck className='icon' /> : ""}
                </span>
              ))}

            </div>
            <div className="qty">
              <span>Pair(s): </span>
              <AiOutlineMinusSquare className="icon" style={{pointerEvents:qty<=1?"none":""}} onClick={() => setQty(prev => prev - 1)} />
              <span className='item'>{qty}</span>
              <AiOutlinePlusSquare className='icon' style={{pointerEvents:qty>=5?"none":""}} onClick={() => setQty(prev => prev + 1)} />
            </div>
            <div className="btns">
              {cartItems.some(item => item.id === id) ? <button className='removeBtn' onClick={() => setRemove(true)}>Remove cart item</button> : <button onClick={addToCart} className="addBtn">Add to cart</button>}
              <button className='buyNowBtn'>buy now</button>
            </div>

          </div>
        </div>
        <div className="middle">
          <h3>Product Details</h3>
          <p>Get old-school style in the Men's Nike Court Vision Mid Sneaker.</p>
          <ul>
            <li>Leather upper in a high-top lifestyle sneaker style</li>
            <li>Lace-up closure</li>
            <li>Padded collar and tongue for increased comfort</li>
            <li>For some styles the leather upper has been replaced with recycled and synthetic materials that keep the soul of the original style</li>
            <li>Soft lining with cushioned insole</li>
            <li>Durable rubber outsole</li>
            <li>Some styles made with at least 20% recycled material by weight</li>
          </ul>
        </div>
        <div className="bottom">
          <CardList title="We Think You May Like" start={4} end={9} />
          <CardList title="Customers Also Bought" start={10} end={13} />
        </div>
      </div>
      <Toster />
      {remove && <AlertCard title={"cart"} id={id} setRemove={setRemove} />}
    </div>
  )
}

export default Details