import { BiErrorCircle } from "react-icons/bi";

export default function ErrorAlert({ message }) {
  return (
    <div className="flex justify-center">
      <div
      
        className="flex items-center gap-3 border border-red-300 bg-red-50 text-red-700 
      rounded-md shadow-sm px-4 py-2 mt-3 text-sm md:text-base"
      >
        <BiErrorCircle className="text-red-600 text-xl md:text-2xl" />
        <span className="flex-1">{message}</span>
      </div>
    </div>
  );
}
