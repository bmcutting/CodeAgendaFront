import { BiBell, BiSearch } from "react-icons/bi";


export default function Header() {
  return (
    <div className="bg-agenda gap-4 border-b-2 border-b-graphite h-1/10 p-4 grid grid-cols-3">
      <div className="flex gap-3 items-center text-lg text-paper text-center font-mono font-thin">
        <img src="vite.svg" alt="Ícono de usario" />
        <span>Usuario</span>
      </div>
      <div>
        <p className="text-3xl text-paper text-center font-mono font-thin">
          CodeAgenda
        </p>
      </div>
      <div className="flex justify-end p-2 gap-1">
        <button><BiBell className="text-3xl text-paper cursor-pointer"/></button>
        <button><BiSearch className="text-3xl text-paper cursor-pointer"/></button>
        <input
          className="bg-blue-300 border-2 border-blue-900 w-1/2 text-paper"
          placeholder="Buscar"
        ></input>
      </div>
    </div>
  );
}
