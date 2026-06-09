import { Outlet } from "react-router";
import { Header } from "../shared/ui/header";
import { Button } from "../shared/ui/button";
import { Printer } from "lucide-react";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header
        title="Preview"
        rightContent={
          <Button
            text="Save PDF"
            icon={<Printer className="w-4 h-4" />}
            onClick={() => window.print()}
          />
        }
      />
      <main className="flex-1 flex">
        <Outlet />
      </main>
    </div>
  );
}
