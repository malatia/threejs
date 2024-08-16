"use client";

import React from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
      <ChildComponent />
    </mesh>
  );
}
