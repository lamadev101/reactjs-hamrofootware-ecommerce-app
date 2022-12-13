import React from 'react'

const Pagination = ({paginate, itemsPerPage, totalItems}) => {

  const pageNumbers = []
  for(let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(p=>(
          <li key={p} className="pageNumber" onClick={()=>paginate(p)}>{p}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination