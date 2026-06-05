import { Outlet } from "react-router";
import { Header } from "../shared/ui/header";
import { Footer } from "../shared/ui/footer";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Preview" rightContent={<div>Right content</div>} />
      <main className="flex-1 flex items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
