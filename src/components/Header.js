import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { GrMenu, GrClose } from "react-icons/gr";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <StyledHeader>
      <Nav navbarOpen={navbarOpen}>
        <button onClick={handleToggle}>
          {navbarOpen ? (
            <GrClose
              className="close"
              style={{ color: "white", width: "30px", height: "30px" }}
            />
          ) : (
            <GrMenu
              className="open"
              style={{ color: "white", width: "30px", height: "30px" }}
            />
          )}
        </button>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#fa4529" : "",
                  borderBottom: isActive ? "3px solid #fa4529" : "",
                };
              }}
              to="/"
              onClick={() => closeMenu()}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#fa4529" : "",
                  borderBottom: isActive ? "3px solid #fa4529" : "",
                };
              }}
              to="/about"
              onClick={() => closeMenu()}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#fa4529" : "",
                  borderBottom: isActive ? "3px solid #fa4529" : "",
                };
              }}
              to="/contact"
              onClick={() => closeMenu()}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </Nav>
      <Logo navbarOpen={navbarOpen}>
        <Link onClick={handleToggle} to="/">
          <h1>&#60; memolata / &#62;</h1>
        </Link>
      </Logo>
      <Social navbarOpen={navbarOpen}>
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
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  padding: 0 50px;
  font-size: 18px;
  letter-spacing: -0.025em;
  background-color: white;
  @media screen and (max-width: 1100px) {
    font-size: 14px;
    padding: 0 25px;
  }
`;

const Nav = styled.nav`
  font-weight: 600;
  position: relative;

  button {
    display: none;
    background: transparent;
    border: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  @media screen and (max-width: 900px) {
    button {
      display: block;
      position: ${(props) => (props.navbarOpen ? "fixed" : "")};
      left: 25px;
      top: 20px;
      z-index: 10;
      cursor: pointer;
      @keyframes flip-in-hor-top {
        0% {
          -webkit-transform: rotateX(-80deg);
          transform: rotateX(-80deg);
          opacity: 0;
        }
        100% {
          -webkit-transform: rotateX(0);
          transform: rotateX(0);
          opacity: 1;
        }
      }
      @keyframes flip-in-hor-top2 {
        0% {
          -webkit-transform: rotateX(-80deg);
          transform: rotateX(-80deg);
          opacity: 0;
        }
        100% {
          -webkit-transform: rotateX(0);
          transform: rotateX(0);
          opacity: 1;
        }
      }
      animation: ${(props) =>
          props.navbarOpen ? "flip-in-hor-top" : "flip-in-hor-top2"}
        0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    ul {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      overflow-y: scroll;
      list-style: none;
      position: fixed;
      background: whitesmoke;
      left: 0;
      bottom: 0;
      height: 100vh;
      width: 0;
      overflow: hidden;
      max-width: 100%;
      z-index: 9;
      width: ${(props) => (props.navbarOpen ? "100%" : "")};

      li {
        margin-bottom: 30px;
        font-size: 2.5rem;
      }
    }
  }

  li {
    margin-right: 20px;
    padding: 5px 10px;
    @keyframes scale-up-center {
      0% {
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }

    animation: ${(props) => (props.navbarOpen ? "scale-up-center" : "")} 0.4s
      cubic-bezier(0.39, 0.575, 0.565, 1) both;
    @media screen and (max-width: 1100px) {
      margin-right: 10px;
      padding: 2px 5px;
      a {
      }
    }

    a {
      transition: all 0.25s linear;
      position: relative;
    }
    a::before {
      content: "";
      display: block;
      width: 100%;
      height: 3px;
      background-color: #fa4529;
      position: absolute;
      left: 0;
      bottom: -3px;
      transform-origin: left;
      transform: scale(0);
      transition: 0.25s linear;
    }
    a:hover::before {
      transform: scale(1);
    }
  }
`;

const Logo = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  cursor: pointer;
  padding: 10px 20px;
  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(100px);
    }
    100% {
      -webkit-transform: translateX(-100px);
      transform: translateX(0);
    }
  }

  animation: ${(props) => (props.navbarOpen ? "slide-left" : "")} 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @media screen and (max-width: 900px) {
    position: ${(props) => (props.navbarOpen ? "fixed" : "")};
    font-size: 0.9rem;
    right: 40px;
    z-index: 10;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.5rem;
  }
  @media screen and (max-width: 425px) {
    position: ${(props) => (props.navbarOpen ? "" : "absolute")};
    right: 0;
    top: -3px;
    font-size: 0.8rem;
  }
  a:hover {
    color: #fa4529;
    transition: color 0.5s ease;
  }
`;
const Social = styled.div`
  @media screen and (max-width: 900px) {
    z-index: 12;
    position: ${(props) => (props.navbarOpen ? "fixed" : "")};
    display: ${(props) => (props.navbarOpen ? "block" : "none")};
    bottom: 4%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes social-key {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
  svg {
    stroke-width: 1.25;
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
    font-size: 32px;
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

export default Header;
