import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import './App.css';
import { Suspense, useRef } from 'react';
import Model from './components/Model';
function App() {
  const camera = useRef();
  return (
    <div className="App">
     <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5,5,5]}/>

        <PerspectiveCamera
        ref={camera}
        makeDefault
        position={[300,300,300]}
        fov={75}
      />
      <OrbitControls camera={camera.current} />
      <Model url={"/1.stl"}/>
      </Suspense>
     </Canvas>
    </div>
  );
}

export default App;
