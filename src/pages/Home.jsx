import React, { useEffect, useState } from 'react'
import { CardList, Crousel, Featured } from '../components'
import Brands from './Brands'
import { crouselData } from '../data'

const len = crouselData.length;
console.log(len);

const Home = () => {
  const [index, setIndex] = useState(0);
  
  useEffect(()=>{
    setTimeout(() =>{
      if(index < len-1) {
        setIndex(prev => prev + 1);
      }
      if(index === len-1) {
        setIndex(0);
      }
    }, 5000)
  }, [index]);

  return (
    <div className='home'>
      <div className="hero">
        <div className='crouselFrame' style={{ transform: `translateX(${-100 * index}vw)` }}>
          {crouselData.map(data => {
            return (
              <Crousel data={data} key={data.id} />
            )
          })}
        </div>
        <div className='dots'>
          {[0,1,2].map(id=>(
            <div className={id===index ? 'dot active' : 'dot'} onClick={() => setIndex(id)} key={id} />
          ))}
        </div>
      </div>
      <Featured />
      <CardList title={"New Arraival"} start={7} end={12} />
      <Brands />
      <CardList title={"Best Seller"} start={0} end={4} />
    </div>
  )
}

export default Home