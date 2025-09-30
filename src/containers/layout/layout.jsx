import Header from "../../modules/ui/header/header";
import { SidebarProvider } from "../../modules/ui/sidebar/contexts/sidebarContext";
import Sidebar from "../../modules/ui/sidebar/sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="h-screen w-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 bg-background-surface">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
