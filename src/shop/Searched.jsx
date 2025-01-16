import React, { useEffect, useState } from 'react'
import './Shop.css'
import { Link } from 'react-router-dom';
import { useFetchAllProductsQuery } from '../redux/feature/products/productsApi';

const Searched = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [debounceTerm, setDebounceTerm] = useState("searchTerm");

    // Debounce search input to avoid frequent API calls

    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setDebounceTerm(searchTerm);
            if (onSearch) onSearch(searchTerm);
        }, 500); //Delay search by 500ms
        return ()=> clearTimeout(timeoutId);
    }, [searchTerm, onSearch]);

    // fetch products based on the search term
    const { data, isLoading } = useFetchAllProductsQuery({
        search: debounceTerm,
        page: 1,
        limit: 16,
    });

    const filteredProducts = data? data.products : [];
  return (
    <div className='searched'>
        <form className='search-form' onSubmit={(e) => e.preventDefault()}>
            <input type="text" name='search' id='search' placeholder='search...' value={searchTerm} 
            onChange={(e)=> setSearchTerm(e.target.value)}
            />
            <button type='submit'>
            <i className="ri-search-line"></i>
            </button>
        </form>
        <div className='product-image-container'>
        {isLoading && <p>Loading...</p>}
            {
                searchTerm && !isLoading && filteredProducts.map((product)=>{
                    return <Link key={product.id} to={`/shop/${product.id}`} className='filtered-link-wrapper' >
                        <div className='product-image-wrapper'>
                            <img src={product.image} alt="product image" />
                        </div>
                        <div>
                            <p>
                                <Link to={`/shop/${product.id}`} className='link-p' >{product.name}</Link>
                            </p>
                            <h5>${product.price}</h5>
                        </div>
                    </Link>
                })
            }
        </div>
    </div>
  )
}

export default Searched