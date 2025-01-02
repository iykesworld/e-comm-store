import React, { useRef } from 'react'
import './Home.css'
import collectionone from '../assets/latest-collection.png'
import collectiontwo from '../assets/latest-collection2.png'
import collectionthree from '../assets/latest-collection3.png'
import collectionfour from '../assets/latest-collection4.png'
import { Link } from "react-router-dom";
// my swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';


const Collections = () => {
    const SlideRef = useRef();

    const handleNext = ()=>{
        SlideRef.current.swiper.slideNext();
    }
    const handlePrev = ()=>{
        SlideRef.current.swiper.slidePrev();
    }
  return (
    <div className='collections'>
        <h1>LATEST COLLECTIONS</h1>
        <p>Embrace the essence of effortless style and unmatched comfort
        with our collection</p>
        <div className="arrows collection-arrows">
        <i className= "ri-arrow-right-line collection-arrows"  onClick={handleNext}></i>
        <i className="ri-arrow-left-line collection-arrows" onClick={handlePrev}></i>
      </div>
      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        ref={SlideRef}
      >
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <div className="link-image">
        <img src={collectionone} alt="" />
        <div className="image-content">
            <h5>MIDI DRESS</h5>
            
            <Link to="/shop" className='collection-image-button' >Shop Now</Link>
      
        </div>
        </div>
        <p>LARA Fluted Sleeve Rose Button Mini Dress $120.00</p>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <div className="link-image">
        <img src={collectiontwo} alt="" />
        <div className="image-content">
            <h5>MIDI DRESS</h5>
    
            <Link to="/shop" className='collection-image-button' >Shop Now</Link>
      
        </div>
        </div>
        <p>LARA Fluted Sleeve Rose Button Mini Dress $120.00</p>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <div className="link-image">
        <img src={collectionthree} alt="" />
        <div className="image-content">
            <h5>MIDI DRESS</h5>
          
            <Link to="/shop" className='collection-image-button' >Shop Now</Link>
      
        </div>
        </div>
        <p>LARA Fluted Sleeve Rose Button Mini Dress $120.00</p>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <div className="link-image">
        <img src={collectionfour} alt="" />
        <div className="image-content">
            <h5>MIDI DRESS</h5>
          
            <Link to="/shop" className='collection-image-button' >Shop Now</Link>
        
        </div>
        </div>
        <p>LARA Fluted Sleeve Rose Button Mini Dress $120.00</p>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <div className="link-image">
        <img src={collectionone} alt="" />
        <div className="image-content">
            <h5>MIDI DRESS</h5>
            
            <Link to="/shop" className='collection-image-button' >Shop Now</Link>
        
        </div>
        </div>
        <p>LARA Fluted Sleeve Rose Button Mini Dress $120.00</p>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <div className="link-image">
        <img src={collectiontwo} alt="" />
        <div className="image-content">
            <h5>MIDI DRESS</h5>
          
            <Link to="/shop" className='collection-image-button' >Shop Now</Link>
      
        </div>
        </div>
        <p>LARA Fluted Sleeve Rose Button Mini Dress $120.00</p>
        </Link>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Collections