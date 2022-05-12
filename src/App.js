import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import styled from "styled-components";

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  @media screen and (min-width: 1440px) {
    margin: 0 50px;
  }
  @media screen and (min-width: 1975px) {
    margin: 0 450px;
  }
  @media screen and (max-width: 1080px) {
    margin: 0;
  }
`;
export default App;
