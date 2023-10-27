"use client";
import { Card } from "./card";

import Sidebar from "./sidebar";
import Cart from "./cart";
import Link from "next/link";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sidebar />

      <h1 className="text-lg font-semibold">
        <Link href={'/'}>
        <span className="text-primary">Next</span> E-commerce
        </Link>
      </h1>

      <Cart />
    </Card>
  );
};

export default Header;
