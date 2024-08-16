import React from 'react'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Image } from '@react-three/drei'
import { easing } from 'maath'
import "@/app/utils"


export default function ImageScreen({ url, ...props }) {
    const ref = useRef()
    const [hovered, hover] = useState(false)
    const pointerOver = (e) => (e.stopPropagation(), hover(true))
    const pointerOut = () => hover(false)
    let blinkTimer = 0.1
    let blink = 0.7
  
    
    
    useFrame((state, delta) => {
      //easing.damp3(ref.current.scale, hovered ? 1 : 0.5, 0.1, delta)
      //easing.damp(ref.current.material, 'radius', hovered ? 0 : 0, 0.2, delta)
      //easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta)
      easing.dampC(ref.current.material.color, hovered ? [1, 1, 1] : [blink, blink, blink], 0.85, delta);
      // easing.damp(ref.current.material.color,'r' , blink, delta);
      // easing.damp(ref.current.material.color,'g' , blink, delta);
      // easing.damp(ref.current.material.color,'b' , blink, delta);
      blinkTimer += delta;      
      if (blinkTimer >= 1) {

        if (blink == 0.7){
          blink =  0.2;
        }
        else{
          blink = 0.7;
        }    
        
        blinkTimer=0;
      }

    })
    return (
      <Image ref={ref} url={url} transparent side={THREE.DoubleSide}  onPointerOver={pointerOver} onPointerOut={pointerOut} {...props}>
        {/* <bentPlaneGeometry args={[0.15, 1, 1, 20, 20]} /> */}
      </Image>
    )
}

