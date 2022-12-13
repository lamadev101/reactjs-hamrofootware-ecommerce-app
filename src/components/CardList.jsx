import React, { memo } from 'react'
import SingleCard from './SingleCard'
import { products } from '../data';

const CardList = ({title, start, end}) => {
  console.log("Child Components");
  return (
    <div className='cardList'>
      <h1>{title}</h1>
      <div className="wrapper">
        {products.slice(start, end).map((product) =>{
          return (
            <SingleCard key={product.id} product={product}/>
          )
          })}
      </div>
    </div>
  )
}

export default memo(CardList)