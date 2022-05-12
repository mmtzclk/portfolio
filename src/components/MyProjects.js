import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Link } from "react-router-dom";

//images
import figuremarket from "../images/figuremarket.png";
import minder from "../images/minder.png";
import mehmetflix from "../images/mehmetflix.png";
import netflixclone from "../images/netflix-clone.png";

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module

import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Pagination, Autoplay]);

function MyProjects() {
  return (
    <StyledMyProjects>
      <h1>My Latest Projects</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <Link to="//figuremarket.netlify.app/" target="_blank">
            <img src={figuremarket} alt="figuremarket" />
            <h4>E-Commerce</h4>
            <h2>Figure Market</h2>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="//minderapp.netlify.app/" target="_blank">
            <img src={minder} alt="minder" />
            <h4>Social Media App</h4>
            <h2>Minder</h2>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="//mehmetflix-v2.netlify.app/" target="_blank">
            <img src={mehmetflix} alt="mehmetflix" />
            <h4>Video Sharing App</h4>
            <h2>Mehmetflix</h2>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="//mehmetflix.netlify.app/" target="_blank">
            <img src={netflixclone} alt="netflixclone" />
            <h4>API</h4>
            <h2>Netflix Clone</h2>
          </Link>
        </SwiperSlide>
      </Swiper>
    </StyledMyProjects>
  );
}

const StyledMyProjects = styled.div`
  h1 {
    margin-bottom: 5rem;
    @media screen and (max-width: 425px) {
      margin-bottom: 1rem;
    }
  }
  .swiper {
    width: 100%;
    height: 100%;
    padding: 50px 0px;
  }

  .swiper-pagination {
    margin-top: 50px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    flex-direction: column;

    h4 {
      font-size: 0.8rem;
      color: hsl(0, 0%, 40%);
      margin-top: 20px;
    }

    h2 {
      font-size: 1.875rem;
      font-family: "Amiri", serif;
      font-weight: 400;
      line-height: 1.3;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    filter: grayscale(100%);
    transition: all 0.5s;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      filter: grayscale(0);
    }

    :hover {
      filter: grayscale(0);
      transform: scale(1.1);
    }
  }
`;

export default MyProjects;
