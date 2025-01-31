/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 lambo.gltf --transform
Author: SDC PERFORMANCE™️ (https://sketchfab.com/3Duae)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-lamborghini-centenario-lp-770-f70732dbd53c4c9daef0b9904d51dd5a
Title: ( FREE ) Lamborghini Centenario LP-770
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/lambo-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[2.53, 0, Math.PI]} scale={[1, 1.17, 1.17]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.CRBN_JANTE} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['pneu.005']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['pneu.005']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.TIRE32} />
      </group>
      <group position={[0, 0, 1.31]} rotation={[2.53, 0, Math.PI]} scale={[1, 1.17, 1.17]}>
        <mesh geometry={nodes.Object_14.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.CRBN_JANTE} />
        <mesh geometry={nodes.Object_16.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Object_17.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_18.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_19.geometry} material={materials['pneu.005']} />
        <mesh geometry={nodes.Object_20.geometry} material={materials['pneu.005']} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.TIRE32} />
      </group>
      <mesh geometry={nodes.Object_12.geometry} material={materials['Material.003']} rotation={[2.53, 0, Math.PI]} scale={[1, 1.17, 1.17]} />
      <mesh geometry={nodes.Object_23.geometry} material={materials['Material.003']} rotation={[2.53, 0, Math.PI]} scale={[1.92, 2.26, 2.26]} />
      <mesh geometry={nodes.Object_25.geometry} material={materials['Material.003']} rotation={[2.53, 0, Math.PI]} scale={[1.92, 2.26, 2.26]} />
      <mesh geometry={nodes.Object_27.geometry} material={materials.Glass} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.material_10} />
      <mesh geometry={nodes.Object_29.geometry} material={materials.GLS_AR} />
      <mesh geometry={nodes.Object_30.geometry} material={materials.material_12} />
      <mesh geometry={nodes.Object_32.geometry} material={materials.Carbon_R} />
      <mesh geometry={nodes.Object_33.geometry} material={materials.Carbon_M} />
      <mesh geometry={nodes.Object_34.geometry} material={materials.Metal_C} />
      <mesh geometry={nodes.Object_35.geometry} material={materials.Material} />
      <mesh geometry={nodes.Object_36.geometry} material={materials.LIGT_RED} />
      <mesh geometry={nodes.Object_37.geometry} material={materials.LIGT_BLC} />
      <mesh geometry={nodes.Object_38.geometry} material={materials.DTL_FER} />
      <mesh geometry={nodes.Object_39.geometry} material={materials.MIROR} />
      <mesh geometry={nodes.Object_40.geometry} material={materials.material_21} />
      <mesh geometry={nodes.Object_41.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Object_42.geometry} material={materials.CENTENARIO} />
      <mesh geometry={nodes.Object_44.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_46.geometry} material={materials.material_21} />
      <mesh geometry={nodes.Object_48.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_50.geometry} material={materials.material_0} />
    </group>
  )
}

useGLTF.preload('/lambo-transformed.glb')
