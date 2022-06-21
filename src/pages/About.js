import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import photo from "../images/instagram posts/head.jpg";

function About() {
  document.title = "About Mehmet";
  return (
    <StyledAbout>
      <Photo>
        <img src={photo} alt="avatar" />
      </Photo>
      <Info>
        <h1>Mehmet Özçelik</h1>
        <h2>WEB DEVELOPER</h2>
        <Cards>
          <Card>
            <h5>BIOGRAPHY</h5>
            <p>
              Work for money and design for love! I’m Mehmet, a Web Developer
              and Designer based in Izmir.
            </p>
          </Card>
          <Card>
            <h5>CONTACT</h5>
            <p>
              Izmir, Turkey <br /> mmtzclk@gmail.com <br /> +905413982220
            </p>
          </Card>
          <Social>
            <ul>
              <li>
                <Link to="#">
                  <FiFacebook />
                </Link>
              </li>
              <li>
                <Link to="//www.instagram.com/memolata1/" target="_blank">
                  <FiInstagram />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FiTwitter />
                </Link>
              </li>
              <li>
                <Link to="//www.linkedin.com/in/mmtzclk/" target="_blank">
                  <FiLinkedin />
                </Link>
              </li>
            </ul>
          </Social>
        </Cards>
      </Info>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  display: flex;
  margin: 60px 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Social = styled.div`
  margin-top: -60px;
  @keyframes social-key {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
  svg {
    stroke-width: 1.1;
  }
  ul {
    display: flex;
    list-style: none;
    position: relative;
    justify-content: center;
  }
  li {
    animation: ${(props) => (props.navbarOpen ? "scale-up-center" : "")} 0.4s
      cubic-bezier(0.39, 0.575, 0.565, 1) both;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    margin: 0px 10px;
    @media screen and (max-width: 1100px) {
      font-size: 24px;
    }
    :hover {
      transform: translate();
      transition: all 0.3s ease-out;
      svg {
        animation: social-key 0.5s linear;
      }
      :nth-child(1) {
        background: #1877f2;
      }
      :nth-child(2) {
        background: radial-gradient(
          circle at 30% 107%,
          #fdf497 0%,
          #fdf497 5%,
          #fd5949 45%,
          #d6249f 60%,
          #285aeb 90%
        );
      }
      :nth-child(3) {
        background: #119afb;
      }
      :nth-child(4) {
        background: #0077b7;
      }
    }
  }
  li a {
    display: flex;
    padding: 15px;

    :hover {
      color: white;
    }
  }
`;

const Info = styled.div`
  width: 50%;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  h1 {
    font-family: "Amiri", serif;
    line-height: 1.1;
    font-weight: 400;
    font-size: 2.5rem;
    @media screen and (max-width: 425px) {
      font-size: 2rem;
    }
  }
  h2 {
    color: hsl(0, 0%, 40%);
    margin-bottom: 40px;
    font-size: 1rem;
  }
`;
const Photo = styled.div`
  width: 50%;
  padding: 0 25px;
  @media screen and (max-width: 768px) {
    height: 600px;
    width: 100%;
    padding: 0;
    margin-bottom: 3rem;
  }
  @media screen and (max-width: 425px) {
    height: 400px;
  }
  img {
    width: 100%;
    height: 100%;
    max-height: 900px;
    border-radius: 3%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      border-radius: 2%;
    }
  }
`;
const Card = styled.div`
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    margin-top: 4rem;
    text-align: center;
  }
  h5 {
    color: #fa4529;
    margin-bottom: 0.75rem;
  }
  p {
    font-family: "Amiri", serif;
    font-size: 1.5rem;
  }
`;
const Cards = styled.div``;

export default About;
