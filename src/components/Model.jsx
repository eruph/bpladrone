import { useLoader } from "@react-three/fiber"
import {STLLoader} from "three/examples/jsm/loaders/STLLoader";
import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
const Model = ({url}) => {
    const stl = useLoader(STLLoader, url);
    const ref = useRef();
    const {camera} = useThree();
    useEffect(() => {
        camera.lookAt(ref.current.position);
    });
    return (
        <>
            <mesh ref={ref} rotation={[Math.PI/2,0,0]}>
                <primitive object={stl} />
                <meshStandardMaterial color={"white"}/>
            </mesh>
        </>
    )
}
export default Model;