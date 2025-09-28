import { BiErrorCircle } from "react-icons/bi";

export default function ErrorAlert({ message }) {
  return (
    <div className="flex justify-center">
      <div
        className="inline-flex items-center gap-2 border border-red-300 bg-red-50 text-red-700 
      rounded-md shadow-sm px-1 py-1 mt-3 text-sm"
      >
        <BiErrorCircle className="text-red-600 text-lg" />
        <span>{message}</span>
      </div>
    </div>
  );
}
