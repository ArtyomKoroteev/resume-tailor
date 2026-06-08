import { Outlet } from "react-router";
import { Header } from "../shared/ui/header";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Preview" />
      <main className="flex-1 flex">
        <Outlet />
      </main>
    </div>
  );
}
