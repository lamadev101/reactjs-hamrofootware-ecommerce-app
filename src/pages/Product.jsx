import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Category from '../components/Category';
import Pagination from '../components/Pagination';
import SingleCard from '../components/SingleCard';

const Collection = () => {
  const { slug } = useParams();
  const location = useLocation();
  const products = location.state;

  const [cat, setCat] = useState();
  const [items, setProducts] = useState(products);

  // const maxItems = products.sort((max, min)=>max.sp - min.sp)
  // console.log(maxItems);


  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(9);

  const prices = [
    { id: 1, title: "Under 2K", key: "2k" },
    { id: 2, title: "2K to 3K", key: "3k" },
    { id: 3, title: "3K to 4K", key: "4k" },
    { id: 4, title: "4K to 5K", key: "5k" },
    { id: 6, title: "5K to 6K", key: "6k" },
    { id: 5, title: "Above 6K", key: "7k" },
  ]

  useEffect(() => {
    if(cat){
      setProducts(products.filter(({ category }) => category === cat));
    }else{
      setProducts(products);
    }
  }, [cat])

  // Get Current Page
  const indexOfLastItem = currentPage * itemPerPage
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change Page Number
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className='collections'>
      <div className="wrapper">
        <div>
          <div className="filter">
            <h2>{slug}'s Shoes</h2>
            <small>1-{currentItems.length} of {products.length} Products</small>
            <div className="filterBox">
              <div>
                <span className='title'>Sort By:</span>
                <select name="" id="">
                  <option value="low">Price:Low to High</option>
                  <option value="high">Price:High to Low</option>
                </select>
              </div>
              <div>
                <div className='title'>Category</div>
                <Category setCat={setCat} />
              </div>

              <div>
                <div className='title'>Price</div>
                {prices.map(price => (
                  <div key={price.id}>
                    <input type="checkbox" id={price.key} />
                    <label htmlFor={price.key}>{price.title}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {currentItems.length !== 0 ? <div>
          <div className="collection">
            {currentItems.map(product => (
              <SingleCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination paginate={paginate} totalItems={items.length} itemsPerPage={itemPerPage} />
        </div> : <div className='commingSoon'>
          <img src="https://i.gifer.com/SalN.gif" alt="" />
        </div>}
      </div>
    </div>
  )
}

export default Collection