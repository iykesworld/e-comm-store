import React from 'react'
import './Shop.css'
import { Link } from 'react-router-dom'
import popular_img1 from '../assets/blog-card04.png'
import popular_img2 from '../assets/blog-card05.png'
import popular_img3 from '../assets/blog-card06.png'
import popular_img4 from '../assets/blog-card07.png'

const blogList = [
    {
        id: 1,
        imgurl: popular_img1,
        imgAlt: 'blog image',
        title: 'People share their experience with the Iphone 16 Apple Launch',
    },
    {
        id: 2,
        imgurl: popular_img2,
        imgAlt: 'blog image',
        title: 'Unemployment Looms in Africa and across the world',
    },
    {
        id: 3,
        imgurl: popular_img3,
        imgAlt: 'blog image',
        title: 'People share their experience with the Iphone 16 Apple Launch',
    },
    {
        id: 4,
        imgurl: popular_img4,
        imgAlt: 'blog image',
        title: 'Unemployment Looms in Africa and across the world',
    },
]

const PopularPost = () => {
  return (
    <div className='popular-blog'>
        <div className="popular-blog-header">
            <h5>Most Popular Post</h5>
        </div>
        <ul className='popular-post-container'>
            {
                blogList.map((blog,i)=>{
                    return <li key={i}>
                        <Link className='popular-post-link' to={`/blog/${blog.id}`} >
                        <img src={blog.imgurl} alt={blog.imgAlt} />
                        </Link>
                        <div>
                            <Link to={`/blog/${blog.id}`} className='popular-post-text'>
                            <p className='popular-post-title'>{blog.title}</p>
                            <p className='popular-post-date'>October 20<sup>th</sup>, 2024</p>
                            </Link>
                        </div>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default PopularPost