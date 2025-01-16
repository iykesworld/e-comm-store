import React from 'react'
import './Shop.css'

const ShopCategory = ({selectedCategory, filterByCategory}) => {
    const categories = ['All', 'Shoes', 'Cowgirl hat', 'Jackets', 'Cap', 'Shorts', 'Midi Dresses', 'Pants', 'Hoodies', 'Bags', 'Mini Dresses', 'Hot Right Now', 'New Arrivals', 'Latest Collections'];
  return (
    <div className='shop-category'>
        <div className='shop-category-header'>
        <h5>All Categories</h5>
        </div>
        <ul className='shopcategory-wrapper'>
            {
                categories.map((category)=>{
                    return <li 
                    key={category} 
                    className={selectedCategory === category ? 'active' : ''}
                    onClick={()=> filterByCategory(category)}>
                        {category}
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default ShopCategory