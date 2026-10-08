import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
import styled from "styled-components";
import DescCard from "./DescCard";

const Desc = styled(DescCard)`
  position: absolute;
  width: min(340px, calc(100vw - 48px));
  top: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Development = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Atom />
          <OrbitControls
            enableZoom={false}
            autoRotate
            touches={{ ONE: null, TWO: null }}
          />
        </Suspense>
      </Canvas>
      <Desc>
        
Progetto prodotti con una forte attenzione sia al design di livello mondiale sia alla garanzia che il tuo prodotto sia un successo di mercato.
      </Desc>
    </>
  );
};

export default Development;