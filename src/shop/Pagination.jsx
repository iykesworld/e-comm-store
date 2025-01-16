import React from 'react'
import './Shop.css'

const Pagination = ({productPerPage,totalProduct,paginate,activePage}) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalProduct / productPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

  return (
    <ul className='pagination'>
        <li className='paginate-arrow'>
            <button
            disabled={activePage ===1}
              onClick={()=>{
                if(activePage > 1){
                    paginate(activePage - 1)
                }
            }}
            // aria-disabled={activePage === 1 ? 'true' : 'false'}
            >
            <i className="ri-arrow-left-s-line"></i>
            </button>
        </li>
        {
            pageNumbers.map((number)=>{
                return <li key={number} className={`pagination-list ${number===activePage ? 'pagination-bg' : ''}`}>
                    <button onClick={()=> paginate(number)}>{number}</button>
                </li>
            })
        }
        <li className='paginate-arrow'>
            <button
            disabled={activePage ===totalProduct}
              onClick={()=>{
                if(activePage < pageNumbers.length){
                    paginate(activePage + 1)
                }
            }}
            // aria-disabled={activePage === pageNumbers.length ? 'true' : 'false'}
            >
            <i className="ri-arrow-right-s-line"></i>
            </button>
        </li>
    </ul>
  )
}

export default Pagination