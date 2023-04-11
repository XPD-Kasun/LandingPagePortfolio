import React, { useEffect, useMemo } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, FlyControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function vector(val) {
       return [val, val, val];
}

export default function WobbleSpeaker({ color }) {

       console.log(color)

       return (
              <Canvas camera={{ position: [0, 0, 30], fov: 60 }}>
                     <ambientLight intensity={1.5} />
                     <directionalLight position={[0, 0, 35]} color={color} />
                     {/* <mesh>
                            <meshBasicMaterial wireframe={true}>
                            </meshBasicMaterial>
                            <boxGeometry args={[10, 10, 10, 2, 2, 2]}/>
                     </mesh> */}
                     <OrbitControls enablePan={false} enableZoom={false} />
                     <Speaker isAnimating={true} location={[0, -10, 5]} scale={120}/>
              </Canvas>
       )

}

function Speaker({ isAnimating, location, scale }) {

       let headphone = useLoader(GLTFLoader, "./xboost/3d/bose_qc35/scene.gltf");
       let scene = useMemo(() => headphone.scene.clone(), [headphone.scene]);
       console.log(headphone);

       scene.position.set.apply(scene.position, location);
       scene.scale.setScalar(scale);
       scene.scale.y += 15;

       if (isAnimating) {
              useFrame((state) => {

                     state.camera.lookAt(0, 0, 0);
                     scene.rotation.y += 0.01;
                     // headphone.scene.rotation.x = Math.sin(headphone.scene.rotation.y);
              });
       }

       return (
              <group>
                     <primitive object={scene} />
              </group>
       );

}

