import React from "react";
import styled from "styled-components";

//Importing Images
import photo from "../images/instagram posts/head.jpg";
import htmlImg from "../images/html.png";
import cssImg from "../images/css.png";
import reactImg from "../images/react.png";
import jsImg from "../images/js.png";
import nodeImg from "../images/node.png";
import nextjs from "../images/next-js.png";

//Importing Components
import MyProjects from "../components/MyProjects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

function Home() {
  document.title = "Welcome to Mehmet's Portfolio";
  return (
    <StyledHome>
      <Article>
        <SectionOne>
          <h1>
            Mehmet Özçelik <br />
            Web
            <span className="developer"> Developer</span> {" & "}
            <span className="designer"> Designer </span> <br /> Based In Izmir
          </h1>
        </SectionOne>
        <SectionTwo>
          <Photo>
            <h2>Kod yazıyorum gözlerim kapalı</h2>
            <img src={photo} alt="avatar" />
          </Photo>
          <LeftSide>
            <LeftCard>
              <h5>BIOGRAPHY</h5>
              <p>
                Work for money and design for love! I’m Mehmet, a React.js
                Developer based in Izmir.
              </p>
            </LeftCard>
            <LeftCard>
              <h5>CONTACT</h5>
              <p>
                Izmir, Turkey <br /> mmtzclk@gmail.com <br /> +905413982220
              </p>
            </LeftCard>
            <LeftCard>
              <h5>SERVICES</h5>
              <p>
                Website Design <br /> Responsive Web Design <br /> Web
                Development
              </p>
            </LeftCard>
          </LeftSide>
          <RightSide>
            <RightCard>
              <h5>
                YEARS OF <br /> EXPERIENCE
              </h5>
              <p>2</p>
            </RightCard>
            <RightCard>
              <h5>
                SATISFITATION <br /> CLIENTS
              </h5>
              <p>100%</p>
            </RightCard>
            <RightCard>
              <h5>CLIENTS ON WORLWIDE</h5>
              <p>+80</p>
            </RightCard>
            <RightCard>
              <h5>PROJECTS DONE</h5>
              <p>124</p>
            </RightCard>
          </RightSide>
        </SectionTwo>
        <SectionThree>
          <hr />
          <h1>My Advantages</h1>
          <MyAdvantages>
            <Advantage>
              <div>
                <img src={htmlImg} alt="html" />
                <h2>95%</h2>
              </div>
              <h6>HTML</h6>
            </Advantage>
            <Advantage>
              <div>
                <img src={cssImg} alt="css" />
                <h2>90%</h2>
              </div>
              <h6>CSS</h6>
            </Advantage>
            <Advantage>
              <div>
                <img src={jsImg} alt="javascript" />
                <h2>90%</h2>
              </div>
              <h6>JAVASCRIPT</h6>
            </Advantage>
            <Advantage>
              <div>
                <img src={reactImg} alt="react" />
                <h2>95%</h2>
              </div>
              <h6>REACT JS</h6>
            </Advantage>
            <Advantage>
              <div>
                <img src={nextjs} alt="nextjs" />
                <h2>90%</h2>
              </div>
              <h6>NEXT JS</h6>
            </Advantage>
            <Advantage>
              <div>
                <img src={nodeImg} alt="node-js" />
                <h2>80%</h2>
              </div>
              <h6>NODE JS</h6>
            </Advantage>
          </MyAdvantages>
        </SectionThree>
        <SectionFour>
          <hr />
          <h1>Education {"&"} Experiences</h1>
          <Experiences>
            <Experience>
              <Education>
                <h5>2019</h5>
                <ul>
                  <li>
                    <h4>Web Design and Coding</h4>
                    <p>Anatolian University</p>
                  </li>
                </ul>
              </Education>
              <Education>
                <h5>2018</h5>
                <ul>
                  <li>
                    <h4>Foreign Trade</h4>
                    <p>Mustafa Kemal University</p>
                  </li>
                </ul>
              </Education>
              <Education>
                <h5>2015</h5>
                <ul>
                  <li>
                    <h4>Information Technology</h4>
                    <p>Anatolian Technical High School</p>
                  </li>
                </ul>
              </Education>
            </Experience>
            <Experience>
              <Education>
                <h5>2018</h5>
                <ul>
                  <li>
                    <h4>Author</h4>
                    <p>Wordpress Personal Website</p>
                  </li>
                </ul>
              </Education>
              <Education>
                <h5>2017 - 2018</h5>
                <ul>
                  <li>
                    <h4>Computer Technician</h4>
                    <p>Dos Computer</p>
                  </li>
                </ul>
              </Education>
            </Experience>
            <Experience>
              <Education>
                <h5>2021 - PRESENT</h5>
                <ul>
                  <li>
                    <h4>Management Information Systems</h4>
                    <p>Bakircay University</p>
                  </li>
                </ul>
              </Education>
              <Education>
                <h5>2020 - Present</h5>
                <ul>
                  <li>
                    <h4>Web Developer</h4>
                    <p>Freelancer</p>
                  </li>
                </ul>
              </Education>
            </Experience>
          </Experiences>
        </SectionFour>
        <SectionFive>
          <hr />
          <MyProjects />
          <hr />
        </SectionFive>
        <SectionSix>
          <ContactMe />
        </SectionSix>
        <hr />
        <Footer />
      </Article>
    </StyledHome>
  );
}

const StyledHome = styled.main`
  @keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(1000px);
      transform: translateY(0);
      opacity: 0;
    }
    25% {
      -webkit-transform: translateY(0);
      transform: translateY(10vh);
      opacity: 1;
    }
    50% {
      -webkit-transform: translateY(0);
      transform: translateY(10vh);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  hr {
    margin-bottom: 5rem;
    margin-top: 5rem;
    border-top: 2px solid #999999;
  }
`;

const Article = styled.article`
  padding: 0 45px;
`;

const SectionOne = styled.section`
  padding-top: 5rem;
  padding-bottom: 4rem;
  @media screen and (max-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 0.6rem;
  }
  h1 {
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
    font-family: "Amiri", serif;
    font-size: 4rem;
    line-height: 1.1;
    text-align: center;
    font-weight: 400;
    span.designer {
      background: linear-gradient(to right, #009fff, #ec2f4b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    span.developer {
      background: linear-gradient(to right, #ad5389, #3c1053);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    span {
      font-weight: 600;
    }
  }
`;

const SectionTwo = styled.section`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Photo = styled.div`
  width: 50%;
  margin: 0 25px;
  order: 2;
  position: relative;
  user-select: none;
  @media screen and (max-width: 768px) {
    width: 100%;
    order: 1;
    padding: 0;
    margin-top: 1rem;
  }
  img {
    width: 100%;
    max-height: 1000px;
    min-height: 900px;
    border-radius: 3%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      max-height: auto;
      min-height: auto;
      border-radius: 2%;
    }
  }

  h2 {
    position: absolute;
    top: 2rem;
    width: 100%;
    background-color: rgba(250, 69, 41, 0.6);
    text-align: center;
    color: white;
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

const LeftSide = styled.div`
  width: 25%;
  order: 1;
  @media screen and (max-width: 768px) {
    width: 50%;
    order: 2;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;
const RightSide = styled.div`
  order: 3;
  width: 25%;
  @media screen and (max-width: 768px) {
    width: 50%;
    order: 2;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const LeftCard = styled.div`
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
    max-width: 20rem;
    font-family: "Amiri", serif;
    font-size: 1.5rem;
    @media screen and (max-width: 768px) {
      max-width: 40rem;
    }
  }
`;
const RightCard = styled.div`
  margin-bottom: 5rem;
  text-align: right;
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 4rem;
  }

  h5 {
    color: #fa4529;
    margin-bottom: 0.75rem;
    @media screen and (max-width: 425px) {
      margin-bottom: -1.25rem;
    }
  }
  p {
    font-family: "Amiri", serif;
    font-size: 4.5rem;
  }
`;

const SectionThree = styled.section`
  hr {
    margin-bottom: 5rem;
    margin-top: 5rem;
    border-top: 2px solid #999999;
  }
  h1 {
    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 425px) {
      font-size: 2.5rem;
    }
    font-family: "Amiri", serif;
    font-size: 4rem;
    line-height: 1.1;
    text-align: center;
    font-weight: 400;
  }
`;

const MyAdvantages = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5rem;
`;
const Advantage = styled.div`
  width: 15%;
  text-align: center;
  cursor: pointer;
  h6 {
    margin-top: 1rem;
    font-size: 1.125rem;
  }
  h2 {
    font-size: 3rem;
  }

  @media screen and (max-width: 768px) {
    width: 30%;
    margin-bottom: 4rem;
    div {
      padding: 0 20px;
    }
  }
  @media screen and (max-width: 425px) {
    width: 45%;
    margin-bottom: 2rem;
    h2 {
      font-size: 2rem;
    }
    h6 {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  }
  @keyframes advantage-animation {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-25px);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0);
    }
  }
  :hover {
    div {
      animation: advantage-animation 0.5s both;

      img {
        filter: grayscale(0%);
        transition: all 0.3s ease-in-out;
      }
    }
  }
  div {
    padding: 20px 20px 0px 20px;
    transition: all 0.5s ease-out;
    background-color: #f2f2f2;
    border-radius: 10%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: grayscale(100%);

    @media screen and (max-width: 768px) {
      filter: grayscale(0);
    }
  }
`;

const SectionFour = styled.section`
  hr {
    margin-bottom: 5rem;
    margin-top: 5rem;
    border-top: 2px solid #999999;
  }
  h1 {
    font-family: "Amiri", serif;
    font-size: 4rem;
    line-height: 1.1;
    text-align: center;
    font-weight: 400;
    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }
`;

const Experiences = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin-top: 1rem;
  }
`;
const Experience = styled.div`
  text-align: center;
  padding: 3rem 0.1rem;
  width: 32%;
  @media screen and (max-width: 768px) {
    width: 48%;
    padding: 0;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    padding: 0;
  }
`;

const Education = styled.div`
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    margin-top: 3rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  @media screen and (max-width: 425px) {
    margin-bottom: 2rem;
  }
  ul {
    list-style-type: none;
  }
  h5 {
    color: #fa4529;
    margin-bottom: 0.75rem;
    @media screen and (max-width: 425px) {
      margin-bottom: 0;
    }
  }
  h4 {
    font-size: 1.875rem;
    font-family: "Amiri", serif;
    font-weight: 400;
    line-height: 1.3;
  }
  p {
    font-size: 0.8rem;
    color: hsl(0, 0%, 40%);
  }
`;

const SectionFive = styled.section`
  hr {
    margin-bottom: 5rem;
    margin-top: 5rem;
    border-top: 2px solid #999999;
  }
  h1 {
    font-family: "Amiri", serif;
    font-size: 4rem;
    line-height: 1.1;
    text-align: center;
    font-weight: 400;
    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }
`;

const SectionSix = styled.section``;
export default Home;
