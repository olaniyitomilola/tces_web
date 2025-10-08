import { Canvas } from "@react-three/fiber";
import React, { useCallback, useMemo, useRef, useState, Suspense } from "react";

import { OrbitControls, useGLTF, Html, Environment, Bounds, AdaptiveDpr, AdaptiveEvents, useProgress } from "@react-three/drei";


function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="rounded-2xl px-4 py-2 bg-white/90 shadow text-sm">
        Loading model… {progress.toFixed(0)}%
      </div>
    </Html>
  );
}
function Model({ url }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url, true, true);
  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}



export default function ThreeDViewer({fileInfo}) {
        useGLTF.preload(fileInfo)

    return (
        <>
            {fileInfo && (
                <div className="px-6 md:px-8 pb-8 space-y-4">
                    <div className="h-[65vh] w-full rounded-2xl overflow-hidden bg-white shadow">
                        <Canvas camera={{ position: [0, 10, 0], fov: 50 }} dpr={[1, 2]}>
                            <Suspense fallback={<Loader />}> 
                                <color attach="background" args={["#f8fafc"]} />
                                <ambientLight intensity={0.4} />
                                <directionalLight intensity={1.0} position={[5, 5, 5]} />
                                <Environment preset="city" />
                                <Bounds fit clip observe margin={1.2}>
                                    <Model url={fileInfo} />
                                </Bounds>
                                <OrbitControls makeDefault enableDamping dampingFactor={0.08} />
                                <AdaptiveDpr pixelated />
                                <AdaptiveEvents />
                            </Suspense>
                        </Canvas>
                    </div>

                    <details className="bg-white rounded-2xl p-4 shadow-sm">
                        <summary className="cursor-pointer font-medium">Notes</summary>
                        <ul className="mt-2 text-sm text-neutral-700 list-disc pl-5 space-y-1">
                            {/* <li>This MVP renders GLB or self-contained GLTF. For GLTF with external textures, export as GLB from Blender, Maya, or your DCC.</li> */}
                            {/* <li>Lighting uses an HDRI environment and a key light. Use OrbitControls to inspect.</li>
                            <li>Next features Anim playback, turntable, screenshot, annotation pins, measurement, and drag-and-drop re-center.</li> */}
                        </ul>
                    </details>
                </div>
            )}
        </>

        
    )

}