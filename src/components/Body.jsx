import { Outlet } from "react-router-dom";

export default function Body({ setClientInfo, modelUrl }) {
  return (
    <main className="w-full h-full">
      <Outlet context={{ setClientInfo }} />
    </main>
  );
}