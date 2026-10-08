import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  scroll-snap-align: center;
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 1024px) {
    font-size: 48px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #57F287;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  background-color: #57F287;
  color: white;
  font-weight: 500;
  font-size: 18px;
  min-width: 170px;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Who = () => {
  return (
    <Section id="studio">
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls
                enableZoom={false}
                autoRotate
                touches={{ ONE: null, TWO: null }}
              />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Chi Sono</Subtitle>
          </WhatWeDo>
          <Desc>
            Progetto prodotti con una forte attenzione sia al design di livello mondiale
            sia alla garanzia che il tuo prodotto sia un successo di mercato.            
          </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;