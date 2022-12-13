import React, { memo } from 'react'
import { features } from '../data'

const Featured = () => {
  return (
    <div className='featured'>
      {features.map(feature =>(
        <div key={feature.id} className="card">
          <img src={feature.img} alt=""/>
          <button style={{backgroundColor: feature.color }}>{feature.text}</button>
        </div>
      ))}
    </div>
  )
}

export default memo(Featured)