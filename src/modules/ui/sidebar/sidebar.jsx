import SidebarButton from "../button/sideBarButton";
import { BiLogOut } from "react-icons/bi";
import { items } from "./constants/items";
import { useSidebarContext } from "./contexts/useSidebarContext";
import useSidebar from "./hooks/useSidebar";

export default function Sidebar() {
  const { handleClick } = useSidebar();
  const { isOpen } = useSidebarContext();

  return (
    <aside
      className={`text-btn-text bg-background-sidebar border-r-2 border-r-divider lg:w-1/6
    h-full ${
      isOpen ? "" : "max-sm:hidden"
    } shadow-md flex flex-col justify-between`}
    >
      <nav className="flex flex-col gap-3 px-4 py-6 overflow-y-auto">
        {items.map((item) => (
          <SidebarButton
            key={item.path}
            label={item.name}
            onClick={() => handleClick(item.path)}
          />
        ))}
      </nav>
      <div className="px-4 py-6 flex items-center justify-center">
        <button
          className="flex items-center gap-2 text-red-400 hover:text-red-600 transition-colors duration-200
          text-xl"
          aria-label="Log out"
        >
          <BiLogOut className="text-center text-2xl" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}
