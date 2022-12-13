import React from 'react'

const Crousel = ({data}) => {
  console.log("crousel")
  return (
    <div className='crousel'>
      <div className="wrapper">
        <div className="desc">
          <h1>{data.title}</h1>
          <p>Created for the hardwood but taken to the  streets, the '80s b-ball icon returns with perfectly sheened overlays and original university colors. With its classic hoops design.</p>
          <div className="price">
            <span>NRs. {data.sp} <small>NRs. {data.cp}</small></span>
          </div>
          <button>Buy Now</button>
        </div>
        <div className="img">
          <div className="circle"></div>
          <img src={data.img} alt="" className='productImg' />
        </div>
      </div>
    </div>
  )
}

export default Crousel