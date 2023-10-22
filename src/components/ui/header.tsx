"use client";
import { Card } from "./card";

import Sidebar from "./sidebar";
import Cart from "./cart";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sidebar />

      <h1 className="text-lg font-semibold">
        <span className="text-primary">Next</span> E-commerce
      </h1>

      <Cart />
    </Card>
  );
};

export default Header;
