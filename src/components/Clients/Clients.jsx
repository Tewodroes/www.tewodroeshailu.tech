import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name : "MIU",
        position : "MSc in Computer Science",
        img_url : "https://res.cloudinary.com/dw4mmejgp/image/upload/v1679264567/miu_naucl8.jpg",
        //stars : 3,
        disc : `I am currently pursuing a Master's degree in Computer Science, 
        where I am focusing on mastering the latest and most innovative technologies in the field.`
    },
    {
        name : "AAU",
        position : "BSc in Software Engineering",
        img_url : "https://res.cloudinary.com/dw4mmejgp/image/upload/v1679264964/aau_uietdp.png",
        //stars : 4,
        disc : `I am BSc Software Engineering graduate from Addis Ababa University with a comprehensive understanding of software development and skills to excel.`
    },
    {
        name : "ALX",
        position : "12 Month Program",
        img_url : "https://res.cloudinary.com/dw4mmejgp/image/upload/v1679265476/alx_a5jiz4.jpg",
        stars : 5,
        disc : `I took ALX, a 12-month software engineering program that provides hands-on training in software development, preparing me for a career as a software engineer.`
    },
    {
        name : "Udemy",
        position : "Crash Courses",
        img_url : "https://res.cloudinary.com/dw4mmejgp/image/upload/v1679267036/udemy_y1nsbl.png",
        //stars : 3,
        disc : `I have completed professional courses on AWS and Java programming on Udemy, acquiring valuable skills in cloud computing and software development.`
    },
   
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">Education</span>
            <h1>where I study</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`