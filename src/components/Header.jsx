import { Link } from "react-router-dom";
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between bg-white/50 p-4 backdrop-blur">
      <Link to="/">
        <p className="select-none font-dynaPuff text-2xl font-medium">
          vSohbet
        </p>
      </Link>
      <div className="flex items-center space-x-6">
        <Link to="/new" className="flex items-center">
          <PlusIcon className="h-6 w-6 cursor-pointer" />
          <span className="text-base font-medium ml-1">Gönder</span>
        </Link>

        {/* Ayracı (|) eklenen kısım */}
        <span className="text-slate-400 mx-2">|</span>

        <Link to="/search" className="flex items-center">
          <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" />
          <span className="text-base font-medium ml-1">Ara</span>
        </Link>
      </div>
    </header>
  );
}
