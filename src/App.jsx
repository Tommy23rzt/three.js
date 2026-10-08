import styled, { createGlobalStyle } from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import { asset } from "./assets";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  canvas {
    touch-action: pan-y !important;
  }
`;

const Container = styled.div`
  height: 100vh;
  height: 100dvh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("${asset("img/bg.jpeg")}");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;