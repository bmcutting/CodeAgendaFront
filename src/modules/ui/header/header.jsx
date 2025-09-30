import { BiBell, BiSearch } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import Sidebar from "../sidebar/sidebar";

export default function Header() {
  return (
    <div
      className="bg-background-header text-text-heading border-b-divider gap-2 
      border-b-2 h-1/10 grid grid-cols-3 text-xl"
    >
      <div className="flex items-center justify-start ml-5 gap-2">
        <button className="sm:hidden">
          <MdMenu className="text-2xl" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <p className="">CodeAgenda</p>
      </div>
      <div className="text-2xl flex gap-4 justify-between mx-5 items-center ">
        <button>
          <BiSearch />
        </button>
        <button>
          <BiBell />
        </button>
        <input className="max-[600px]:hidden w-1/2" placeholder="Buscar"></input>
      </div>
    </div>
  );
}
