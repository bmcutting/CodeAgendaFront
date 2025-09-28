import Header from "../../modules/ui/header/header";
import Sidebar from "../../modules/ui/sidebar/sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 bg-gray-50 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
