 import React, { useCallback, useMemo, useRef, useState, Suspense } from "react";

 
 const [fileInfo, setFileInfo] = useState(""); // { name, size, url, type }
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


export default function Uploader() {
    return (
        <div className="px-6 md:px-8 pb-6">
          <div
            onDragEnter={prevent}
            onDragOver={prevent}
            onDrop={onDrop}
            className="border-2 border-dashed border-neutral-300 rounded-2xl bg-white shadow-sm p-8 md:p-12 flex flex-col items-center justify-center gap-4 text-center"
          >
            <div className="text-lg">Drop a .glb or .gltf here</div>
            <div className="text-neutral-600">or</div>
            <label className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-black text-white shadow cursor-pointer">
              <input type="file" accept=".glb,.gltf" className="hidden" onChange={handleInput} />
              Choose file
            </label>
            {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
            <ul className="text-xs text-neutral-500 mt-4 space-y-1">
              <li>Tip Export GLB with embedded textures for a single-file upload.</li>
              <li>Scale and orientation are preserved from your DCC app.</li>
            </ul>
          </div>
        </div>
    )
}