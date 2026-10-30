import styled from "styled-components";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Packages from "./Components/Packages";

function Main() {
  return (
    <HomeStyle>
        <About />
        <Contact />
        <Home />
        <Packages />
    </HomeStyle>
  );
}

const HomeStyle = styled.div``;

export default Main;
