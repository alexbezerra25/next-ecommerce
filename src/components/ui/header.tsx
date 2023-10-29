"use client";
import Sidebar from "./sidebar";
import Cart from "./cart";
import Link from "next/link";
import { Separator } from "./separator";
import UserDropdown from "./user-dropdown";
import { ModeToggle } from "./toggle-theme";

const Header = () => {
  return (
    <div className="flex border-b-1 border-solid border-current items-center justify-between p-5 lg:container">
      <Sidebar />

      <h1 className="text-lg font-semibold">
        <Link href={"/"}>
          <span className="text-primary">Next</span> E-commerce
        </Link>
      </h1>

      <div className="hidden gap-3 lg:flex">
        <Link href="/">Início</Link>

        <Separator orientation="vertical" className="h-[1.5rem]"/>

        <Link href="/catalogo">Catálogo</Link>

        <Separator orientation="vertical" className="h-[1.5rem]" />

        <Link href="/deals">Ofertas</Link>
      </div>

      <div className="flex gap-3">
        <ModeToggle  className="hidden lg:inline-flex"/>
        <UserDropdown  className={"hidden lg:inline-flex"}/>
        <Cart />
      </div>
    </div>
  );
};

export default Header;
