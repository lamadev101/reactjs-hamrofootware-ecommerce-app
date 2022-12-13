import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SingleCard = ({ product }) => {
  const { id, name, image, cp, sp, brand } = product
  const discountRate = Math.floor((cp - sp) / cp * 100)

  const handlePosition = ()=>{
    window.scrollTo(0,0);
  }

  return (
    <Link to={`/details/${id}`} state={{ id: id, name: name, image: image, cp: cp, sp: sp, brand: brand, dr: discountRate }} style={{ textDecoration: "none" }}>
      <div className='card' onClick={handlePosition}>
        <img src={image} alt="" className='pImg' />
        <div className="discount">
          <div className='percentage'>{discountRate}%</div>
          <div className='off'><span>O</span>FF</div>
        </div>
        <div className="info">
          <div className="left">
            <div className='title'>{name}</div>
            <small>Men's shoes</small>
            <span className='starIcons'>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <BsStar />
            </span>
          </div>
          <div className="right">
            <small className="cp">Rs.{cp}</small>
            <div className="sp">Rs.{sp}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SingleCard