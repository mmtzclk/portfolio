import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { FiInstagram } from "react-icons/fi";
import { MdCallMade } from "react-icons/md";

import post1 from "../images/instagram posts/post7.jpg";
import post2 from "../images/instagram posts/post2.jpg";
import post3 from "../images/instagram posts/post3.jpg";
import post4 from "../images/instagram posts/post4.jpg";
import post5 from "../images/instagram posts/post5.jpg";
import post6 from "../images/instagram posts/post6.jpg";

function ContactMe() {
  return (
    <div>
      <InstagramPosts>
        <h1>
          <Link to="//www.instagram.com/memolata1/" target="_blank">
            @memolata1
          </Link>
        </h1>

        <Posts>
          <Post>
            <img src={post1} alt="foto" />
            <FiInstagram />
          </Post>
          <Post>
            <img src={post2} alt="foto" />
            <FiInstagram />
          </Post>
          <Post>
            <img src={post3} alt="foto" />
            <FiInstagram />
          </Post>
          <Post>
            <img src={post4} alt="foto" />
            <FiInstagram />
          </Post>
          <Post>
            <img src={post5} alt="foto" />
            <FiInstagram />
          </Post>
          <Post>
            <img src={post6} alt="foto" />
            <FiInstagram />
          </Post>
        </Posts>
        <Contact>
          <Link to="/contact">
            <div>
              <h5>Describe your project</h5>
              <h2>
                Call
                <br /> Mehmet <br />
                <MdCallMade />
              </h2>
            </div>
          </Link>
        </Contact>
      </InstagramPosts>
    </div>
  );
}

const InstagramPosts = styled.div`
  a:hover {
    color: #fa4529;
    transition: color 0.5s ease;
  }
  h1 {
    font-size: 3rem;
    text-align: center;
    font-family: "Amiri", serif;
    font-weight: lighter;
  }
`;

const Posts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Post = styled.div`
  position: relative;
  width: 33.33%;

  :hover {
    transition: all 1s ease;
    img {
      filter: brightness(70%);
    }
    svg {
      display: block;
    }
  }
  @media screen and (max-width: 425px) {
    width: 50%;
    svg {
      font-size: 1rem;
    }
  }
  img {
    width: 95%;
    height: 450px;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      height: 300px;
    }
    @media screen and (max-width: 425px) {
      height: 175px;
    }
  }
  svg {
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    stroke-width: 1;
    display: none;
  }
`;
const Contact = styled.div`
  margin-top: 80px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  @keyframes vibrate-1 {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }
  div {
    width: 300px;
    padding: 30px;
    text-align: center;
    border-radius: 30px;
    border: 2px dashed #fa4529;
    :hover {
      animation: vibrate-1 0.3s linear infinite both;
      color: #fa4529;
      transition: color 0.5s ease;
    }
    h5 {
      color: hsl(0, 0%, 40%);
    }
    h2 {
      font-size: 3rem;
      font-family: "Amiri", serif;
      font-weight: 400;
      line-height: 1.3;
    }
  }
`;

export default ContactMe;
