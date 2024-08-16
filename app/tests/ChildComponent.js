import React from 'react';
import { useRotation } from '../hooks/useRotation';
import { Box, OrbitControls } from "@react-three/drei";

export default function ChildComponent() {
  const ref = useRotation();

  return (
    <mesh ref={ref}>
      <Box>
      <meshStandardMaterial color="blue" />
      </Box>
    </mesh>
  );
}
