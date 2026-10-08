import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lambo from "./Lambo";
import styled from "styled-components";
import DescCard from "./DescCard";
import { asset } from "../assets";

const Desc = styled(DescCard)`
  position: absolute;
  width: min(340px, calc(100vw - 48px));
  bottom: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment={{ files: asset("potsdamer_platz_1k.hdr") }} intensity={0.6}>
            <Lambo />
          </Stage>
          <OrbitControls
            enableZoom={false}
            autoRotate
            touches={{ ONE: null, TWO: null }}
          />
        </Suspense>
      </Canvas>
      <Desc>
      Progetto prodotti con una forte attenzione sia al design di livello mondiale
      sia alla garanzia che il tuo prodotto sia un successo di mercato.        
      </Desc>
    </>
  );
};

export default ProductDesign;