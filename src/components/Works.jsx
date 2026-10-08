import React, { useState } from "react";
import styled from "styled-components";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import WebDesign from "./WebDesign";
import Illustration from "./illustration";
import SocialMedia1 from "./SocialMedia1";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: min(90px, 6vw);
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #57F287;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  min-width: 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 50vh;
    min-height: 320px;
  }
`;

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section id="works">
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : work === "Illustration" ? (
            <Illustration />
          ) : work === "Social Media" ? (
              <SocialMedia1 />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;