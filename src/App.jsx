import React, { useCallback, useMemo, useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, Environment, Bounds, AdaptiveDpr, AdaptiveEvents, useProgress } from "@react-three/drei";
import logo from "./assets/logo.svg"; // adjust path if necessary
import AppRoutes from "./routes/AppRoutes";
import './index.css'






// --- 3D Model wrapper
function Model({ url }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url, true, true);
  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

const imag = "https://pub-e80a3de0c14a485bbd89f7a1513341ba.r2.dev/anotherCastle.glb"

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

export default function App() {
  const [fileInfo, setFileInfo] = useState(imag); // { name, size, url, type }
  const [error, setError] = useState("");

  const onFiles = useCallback((files) => {
    setError("");
    const file = files?.[0];
    if (!file) return;
    const ok = ["model/gltf-binary", "model/gltf+json", "application/octet-stream"].includes(file.type) ||
               file.name.toLowerCase().endsWith(".glb") || file.name.toLowerCase().endsWith(".gltf");
    if (!ok) {
      setError("Please upload a .glb or .gltf file. For best results, export a single-file GLB.");
      return;
    }
    const url = URL.createObjectURL(file);
    setFileInfo({ name: file.name, size: file.size, url, type: file.type });
  }, []);

  const handleInput = useCallback((e) => onFiles(e.target.files), [onFiles]);

  const prevent = (e) => { e.preventDefault(); e.stopPropagation(); };
  const onDrop = useCallback((e) => { prevent(e); onFiles(e.dataTransfer.files); }, [onFiles]);

  const clear = useCallback(() => {
    if (fileInfo?.url) URL.revokeObjectURL(fileInfo.url);
    setFileInfo(null);
  }, [fileInfo]);

  return (
    // <div className="min-h-screen w-full bg-neutral-50 text-neutral-900 flex flex-col">
    //   {/* Header */}
    //  <header className="p-6 md:p-8 flex items-center justify-between">
    //     <div className="flex items-center gap-4">
    //       <img src={logo} alt="Logo" className="h-10 w-auto" />
    //     </div>
    //     <div className="text-right">
    //       <h1 className="text-xl md:text-3xl font-semibold tracking-tight">Moorfield Site</h1>
    //       <p className="text-neutral-600 mt-1">TCES</p>
    //     </div>
    //   </header>

    //   {/* Uploader */}
    //   {!fileInfo && (
    //     <div className="px-6 md:px-8 pb-6">
    //       <div
    //         onDragEnter={prevent}
    //         onDragOver={prevent}
    //         onDrop={onDrop}
    //         className="border-2 border-dashed border-neutral-300 rounded-2xl bg-white shadow-sm p-8 md:p-12 flex flex-col items-center justify-center gap-4 text-center"
    //       >
    //         <div className="text-lg">Drop a .glb or .gltf here</div>
    //         <div className="text-neutral-600">or</div>
    //         <label className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-black text-white shadow cursor-pointer">
    //           <input type="file" accept=".glb,.gltf" className="hidden" onChange={handleInput} />
    //           Choose file
    //         </label>
    //         {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
    //         <ul className="text-xs text-neutral-500 mt-4 space-y-1">
    //           <li>Tip Export GLB with embedded textures for a single-file upload.</li>
    //           <li>Scale and orientation are preserved from your DCC app.</li>
    //         </ul>
    //       </div>
    //     </div>
    //   )}

    //   {/* Viewer */}
    //   {fileInfo && (
    //     <div className="px-6 md:px-8 pb-8 space-y-4">
         

    //       <div className="h-[65vh] w-full rounded-2xl overflow-hidden bg-white shadow">
    //         <Canvas camera={{ position: [0, 10, 0], fov: 50 }} dpr={[1, 2]}>
    //           <Suspense fallback={<Loader />}> 
    //             <color attach="background" args={["#f8fafc"]} />
    //             <ambientLight intensity={0.4} />
    //             <directionalLight intensity={0} position={[3, 3, 3]} />
    //             <Environment preset="city" />
    //             <Bounds fit clip observe margin={1.2}>
    //               <Model url={fileInfo} />
    //             </Bounds>
    //             <OrbitControls makeDefault enableDamping dampingFactor={0.08} />
    //             <AdaptiveDpr pixelated />
    //             <AdaptiveEvents />
    //           </Suspense>
    //         </Canvas>
    //       </div>

    //       <details className="bg-white rounded-2xl p-4 shadow-sm">
    //         <summary className="cursor-pointer font-medium">Notes</summary>
    //         <ul className="mt-2 text-sm text-neutral-700 list-disc pl-5 space-y-1">
    //           {/* <li>This MVP renders GLB or self-contained GLTF. For GLTF with external textures, export as GLB from Blender, Maya, or your DCC.</li> */}
    //           {/* <li>Lighting uses an HDRI environment and a key light. Use OrbitControls to inspect.</li>
    //           <li>Next features Anim playback, turntable, screenshot, annotation pins, measurement, and drag-and-drop re-center.</li> */}
    //         </ul>
    //       </details>
    //     </div>
    //   )}

    // </div>
    <AppRoutes/>
  );
}

// drei will attempt to cache models. Let R3F dispose when switching files
useGLTF.preload(imag)
