"use client";

import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  const { data } = useSession();
  return (
    <div>
      <Image
        src="/banner-home01.png"
        height={0}
        width={0}
        className="h-auto w-full px-3"
        sizes="100vw"
        alt="55%of"
      />

      <div className="mt-8">
        <Categories />
      </div>
    </div>
  );
}
