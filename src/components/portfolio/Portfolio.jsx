import React from "react";
import './portfolio.css';  
import img1 from '../../assets/personal-react-portfolio.png'
import img3 from '../../assets/pizza-delivery.png'

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        id: 1,
        image: img1,
        title: 'Personal React Portfolio',
        description: 'Created my personal react portfolio using HTML, CSS, JavaScript and React.js',
        github: 'https://github.com/zhenyong25/personal-react-portfolio',
        demo: 'https://zhenyong-react-portfolio.netlify.app/'
    },
    {
        id: 2,
        image: img1,
        title: 'InTouch - Final Year Project',
        description: '',
        github: 'https://github.com/zhenyong25',
        demo: 'https://github.com/zhenyong25'
    },
    {
        id: 3,
        image: img3,
        title: 'Connectus - Pizza Delivery',
        description: '',
        github: 'https://github.com/zhenyong25',
        demo: 'https://github.com/zhenyong25'
    },
    {
        id: 4,
        image: img1,
        title: 'LemmaTree POCathon',
        description: '',
        github: 'https://github.com/zhenyong25',
        demo: 'https://github.com/zhenyong25'
    },
]


const Portfolio = () => {
    return(
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <Swiper className="container portfolio__container"
             modules={[Navigation, Pagination, Scrollbar, A11y]}
             spaceBetween={40}
             slidesPerView={3}
             navigation
             pagination={{ clickable: true }}
             scrollbar={{ draggable: true }}
             onSwiper={(swiper) => console.log(swiper)}
             onSlideChange={() => console.log('slide change')}>

                {
                    data.map(({id, image, title, github, demo})=>{
                        return (
                            <SwiperSlide key={id} className='portfolio__item'>

                                <div className="portfolio__item-image">
                                    <img src={image} alt="" className="fit-image"/>
                                </div>

                                <h4>{title}</h4>

                                <div className="tech__stack">
                                </div>
                
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn'>Github</a>
                                    <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                                </div>
                            </SwiperSlide>    
                        )
                    })
                }
            
            </Swiper>
        </section>
    )
}

export default Portfolio;