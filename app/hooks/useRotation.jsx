import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function useRotation() {
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta;
      console.log(state);
      
    }
  });
  return ref;
}
