import React from 'react'
import './Shop.css'
import { Link } from 'react-router-dom'
import Ratings from '../components/ratings/Ratings'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/feature/cart/cartSlice'

const ProductCard = ({gridList, products, currentPage}) => {
    const dispatch = useDispatch();
    const handleAddToCardt = (product) =>{
        dispatch(addToCart(product))
    }
    if (!products || products.length === 0) {
        return <div>No products available.</div>;
      }
  return (
    <>
    <div className={gridList === 1? "shoppage-product-wrap-gridview" : "inactive"}>
        {
            products.map((product)=>{
                return <div key={product._id} className="shoppage-product-details">
                        <div className="shoppage-image-container">
                        <img src={product.image} alt="" />
                        <div className="product-action-link">
                        <Link className='product-action-link-wrapper' to={`/shop/${product._id}`}><i className="ri-link"></i></Link>
                        <button 
                        onClick={(e)=>{
                            e.stopPropagation();
                            handleAddToCardt(product)}} className='product-action-link-wrapper'>
                            <i className="ri-shopping-cart-2-line"></i>
                            </button>
                        </div>
                        </div>
                        <div className="product-content">
                            <h5>
                                <Link className='product-name' to={`/shop/${product._id}`}>{product.name}</Link>
                            </h5>
                            <p>
                                <Ratings rating={product.rating}/>
                            </p>
                            <h6>${product.price}</h6>
                        </div>
                    </div>
            })
        }
    </div>
    <div className={gridList === 2? "shoppage-product-wrap-ListView" : "inactive"}>
        {
            products.map((product, index)=>{
                return <div key={index}>
                    <div className="shoppage-product-details-listview">
                        <div className="shoppage-image-container">
                        <img src={product.image} alt="" />
                        <div className="product-action-link">
                        <Link className='product-action-link-wrapper' to={`/shop/${product._id}`}><i className="ri-link"></i></Link>
                        <button 
                        onClick={(e)=>{
                            e.stopPropagation();
                            handleAddToCardt(product)}} className='product-action-link-wrapper'>
                            <i className="ri-shopping-cart-2-line"></i>
                            </button>
                        </div>
                        </div>
                        <div className="product-content-listview">
                            <h5>
                                <Link className='product-name' to={`/shop/${product._id}`}>{product.name}</Link>
                            </h5>
                            <p>
                                <Ratings rating={product?.rating}/>
                            </p>
                            <h6>${product.price}</h6>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
    </>
  )
}

export default ProductCard