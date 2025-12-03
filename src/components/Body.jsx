import { Outlet } from "react-router-dom";

export default function Body({ setClientInfo, modelUrl }) {
  return (
    <main className="flex-1 w-full flex flex-col">
      <Outlet context={{ setClientInfo }} />
    </main>
  );
}