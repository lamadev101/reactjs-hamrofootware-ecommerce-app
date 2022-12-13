import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { brands, products } from '../data'

const Brands = () => {
  const brandFilter = (slug)=>{
    const filtredProducts = products.filter(({brand})=>brand===slug);
    return filtredProducts;
  }

  console.log("Brand componets");

  return (
    <div className='brands'>
      <div className='wrapper'>
        <h2>Brands you loved</h2>
        <div className='brandBox'>
          {brands.map(brand=>(
            <Link to={`/product/${brand.slug}`} state={brandFilter(brand.slug)}  key={brand.id}>
              <div className='brand'>
                <img src={brand.image} alt="" className='brandImg'/>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(Brands)