import React, { useEffect, useState } from 'react'
import './Shop.css'
import Pageheader from '../components/pageheader/Pageheader'
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Searched from './Searched';
import { useFetchAllProductsQuery } from '../redux/feature/products/productsApi';

const ShopPage = () => {
    const [gridList, setGridList] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage] = useState(16);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState('');

    // query for fetching products
    const {data, isLoading, error} = useFetchAllProductsQuery({
        category: selectedCategory ==='ALL' ? '' : selectedCategory,
        page: currentPage,
        limit: productPerPage,
        search: searchTerm,
    });

    // destructure API response
    const products = data?.products || [];
    const totalProduct = data?.totalProduct || 0;
    const totalPage = data?.totalPage || 0;

    // handle pagination
    const paginate = (pageNumber) =>{
        if (pageNumber !== currentPage) {
            setCurrentPage(pageNumber);
        }
    };

    // handle category filtering 
    const filterByCategory = (category) => {
        if (category !== selectedCategory) {
            setSelectedCategory(category);
            setCurrentPage(1); // Only reset to page 1 if the category actually changes
        }
    };

    // handle search iput
    const handleSearch = (search)=>{
        if (search !== searchTerm) {
            setSearchTerm(search);
            setCurrentPage(1); // Only reset to page 1 if a new search term is entered
        }
    }


    const upDateGrid = (id)=>{
        setGridList(id)
    }

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [currentPage]) //scroll to top when page changes

    if (isLoading) return <div className="loading-spinner">Loading...</div>;
    if (error) return <div className="error-message">Error loading products. Please try again later.</div>;
    if (products.length === 0) return <div className="no-products">No products found.</div>;

    const startIndex = (currentPage - 1) * productPerPage + 1;
    const endIndex = Math.min(currentPage * productPerPage, totalProduct);
  return (
    <>
    <Pageheader title='Shop Page' currentPage = 'Shop' />
    <div className="shoppage">
        <div className="shoppage-left">
            <article>
                <div className="shoppage-header">
                    <p>Showing {startIndex} - {endIndex} of {totalProduct} Results</p>
                    <div className="shoppage-header-viewtoggle">
                        <a  className={gridList ===1 ? "grid-active" : "list-active"} onClick={()=> upDateGrid(1)}>
                        <i className="ri-grid-fill"></i>
                        </a>
                        <a  className={gridList ===2 ? "grid-active" : "list-active"} onClick={()=> upDateGrid(2)}>
                        <i className="ri-list-check-3"></i>
                        </a>
                    </div>
                </div>
                <div className="shoppage-productcard">
                    <ProductCard key={currentPage} gridList = {gridList} products = {products} />
                </div>
                <Pagination 
                productPerPage = {productPerPage}
                totalProduct = {totalProduct}
                paginate = {paginate}
                activePage = {currentPage}
                />
            </article>
        </div>
            <aside className="shoppage-right">
                <Searched onSearch = {handleSearch} />
                <ShopCategory 
                selectedCategory={selectedCategory}
                filterByCategory={filterByCategory}
                />
                <PopularPost/>
            </aside>
    </div>
    </>
  )
}

export default ShopPage