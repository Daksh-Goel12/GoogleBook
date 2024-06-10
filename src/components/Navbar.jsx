function Navbar() {
  return (
    <div className="flex justify-between px-5 py-2 shadow-xl">
      <h1 className="text-xl font-bold">
        Books<span className="text-red-600">s</span>
      </h1>
      <ul className="flex gap-4 text-bold ">
        <li className="text-slate-700 hover:text-slate-950 cursor-pointer">
          Home
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
