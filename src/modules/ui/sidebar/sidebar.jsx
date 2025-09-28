export default function Sidebar() {
  return (
    <div className="bg-navy w-1/6 max-sm:hidden">
      <div className="flex flex-col gap-4 text-white px-2 h-1/2">
        <button className="button">Projects</button>
        <button className="button">Assignments</button>
        <button className="button">Notes</button>
        <button className="button">Profile</button>
        <button className="button">Configuration</button>
      </div>
      <div className="h-1/2 flex items-end justify-center px-5">
        <button className="button-out ">Log out</button>
      </div>
    </div>
  );
}
