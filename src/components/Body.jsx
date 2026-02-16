import { Outlet } from "react-router-dom";

export default function Body() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <Outlet  />
    </main>
  );
}