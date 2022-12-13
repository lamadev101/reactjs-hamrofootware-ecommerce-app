import React from 'react'

const Category = ({setCat}) => {
  const categories = [
    {id: 1, title: "Boat Shoes", key: "boat"},
    {id: 2, title: "Boots", key: "boot"},
    {id: 3, title: "Clog and Mules", key: "clog"},
    {id: 4, title: "Loafers and Oxfords", key: "loafer"},
    {id: 5, title: "Sandals", key: "sandal"},
    {id: 6, title: "Sneakers and Athletic", key: "sneaker"},
    {id: 7, title: "Slippers", key: "slipper"},
    {id: 8, title: "Work and Safety", key: "safety"},
  ]

  return (
    <ul>
      {categories.map((cat) => (
        <li key={cat.id} onClick={()=>setCat(cat.key)}>{cat.title}</li>
      ))}
    </ul>
  )
}

export default Category