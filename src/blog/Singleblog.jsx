import React, { useEffect, useState } from 'react'
import './Blog.css'
import Pageheader from '../components/pageheader/Pageheader'
import blogdata from '../data/blogdata'
import { Link, useParams } from 'react-router-dom'
import popularBlog_img1 from '../assets/blog-image1c.png'
import popularBlog_img2 from '../assets/blog-image2c.png'
import popularBlog_img3 from '../assets/blog-image3c.png'
import popularBlog_img4 from '../assets/blog-image4c.png'


const blogList = [
    {
        id: 1,
        imgurl: popularBlog_img1,
        imgAlt: 'blog image',
        title: 'People share their experience with the Iphone 16 Apple Launch',
    },
    {
        id: 2,
        imgurl: popularBlog_img2,
        imgAlt: 'blog image',
        title: 'Unemployment Looms in Africa and across the world',
    },
    {
        id: 3,
        imgurl: popularBlog_img3,
        imgAlt: 'blog image',
        title: 'People share their experience with the Iphone 16 Apple Launch',
    },
    {
        id: 4,
        imgurl: popularBlog_img4,
        imgAlt: 'blog image',
        title: 'Unemployment Looms in Africa and across the world',
    },
]

const Singleblog = () => {
    const [blog, setBlog]= useState(blogdata);
    const {id} = useParams();
    const result= blog.filter((b)=>b.id===Number(id));

    useEffect(()=>{
        window.scrollTo(0,0)
    })
  return (
    <>
    <Pageheader title= "Single Blog" currentPage="Single Blog Post" />
    <div className="blog">
        <div className="blog-post">
            {
                result.map((item, index)=>{
                    return <div key={index} className="blog-singlepost">
                        <div className="blog-single-post-image-wrapper">
                            <img src={item.imgUrl} alt={item.imgAlt} />
                        </div>
                        <h2>{item.title}</h2>
                        <div className="blog-single-name-date">
                            <div className='blog-single-name'>
                            <i className="ri-account-circle-line"></i>
                            <span>{item.name}</span>
                            </div>
                            <div className="blog-single-date">
                            <i className="ri-calendar-line"></i>
                            <span>{item.date}</span>
                            </div>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat non proident, sunt in culpa qui 
                        officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="blog-single-blockquote">
                        <blockquote>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt 
                                </p>
                            </blockquote>
                        </div>
                            
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum.
                            </p>
                            <div className="blog-single-post-image-wrapper second-image">
                                <img src={item.imgUrl2} alt={item.imgAlt} />
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderi
                            t in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident
                            , sunt in culpa qui officia deserunt mollit anim id est 
                            laborum.
                            </p>
                            <div className="single-blog-youtube-wrapper">
                                <a href="https://youtu.be/7eD4FttDpWg?si=FnJ0F4TVFXhYPnYd" target="_blank">
                                <img src={item.imgUrl3} alt={item.imgAlt} />
                                <div className="youtube-play">
                                <i className="ri-arrow-right-s-fill"></i>
                                </div>
                                </a>
                                
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore 
                             magna aliqua. Ut enim ad minim veniam, quis nostrud 
                             exercitation ullamco laboris nisi ut aliquip ex ea 
                             commodo consequat. Duis aute irure dolor in reprehender
                             it in voluptate velit esse cillum dolore eu fugiat null
                             a pariatur. Excepteur sint occaecat cupidatat non proid
                             ent, sunt in culpa qui officia deserunt mollit anim id 
                             est laborum.
                            </p>
                            <div className='single-blog-footer'>
                                <div className="single-blog-agency">
                                <span>Agency</span>
                                <span>Business</span>
                                <span>Proposal</span>
                                </div>
                                <div className="single-blog-socials">
                                    <a href=""><i className="ri-facebook-fill"></i></a>
                                    <a href=""><i className="ri-instagram-line"></i></a>
                                    <a href=""><i className="ri-twitter-x-line"></i></a>
                                    <a href=""><i className="ri-tiktok-line"></i></a>
                                    <a href=""><i className="ri-pinterest-line"></i></a>
                                </div>
                                
                            </div>
                    </div>
                })
            }
        </div>
        <div>
        <aside>
        <div className='single-popular-blog'>
        <div className="single-popular-header">
            <h5>Most Popular Post</h5>
        </div>
        <ul className='single-popular-container'>
            {
                blogList.map((blog,i)=>{
                    return <li key={i}>
                        <Link className='single-popular-link' to={`/blog/${blog.id}`} >
                        <img src={blog.imgurl} alt={blog.imgAlt} />
                        </Link>
                        <div>
                            <Link to={`/blog/${blog.id}`} className='popular-post-text'>
                            <p className='single-popular-title'>{blog.title}</p>
                            <p className='single-popular-date'>October 20<sup>th</sup>, 2024</p>
                            </Link>
                        </div>
                    </li>
                })
            }
        </ul>
    </div>
            </aside>
        </div>
            
    </div>
    </>
  )
}

export default Singleblog