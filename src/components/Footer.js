import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <StyledFooter>
      <h4>© 2022 Memolata. All Rights Reserved.</h4>
      <a href="mailto:mmtzclk@gmail.com">
        <h3>MMTZCLK@GMAIL.COM</h3>
      </a>
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
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
  margin-top: -40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  h4 {
    font-weight: normal;
    font-size: 0.9rem;
    @media screen and (max-width: 768px) {
      margin-bottom: 10px;
    }
  }

  h3 {
    font-weight: normal;
    font-size: 0.9rem;
    :hover {
      color: #fa4529;
      transition: color 0.5s ease;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 10px;
    }
  }
`;

const Social = styled.div`
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
  }
  li {
    animation: ${(props) => (props.navbarOpen ? "scale-up-center" : "")} 0.4s
      cubic-bezier(0.39, 0.575, 0.565, 1) both;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    margin: 0px 10px;
    @media screen and (max-width: 1100px) {
      font-size: 18px;
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

export default Footer;
