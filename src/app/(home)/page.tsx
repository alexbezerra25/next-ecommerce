import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/produtc-list";
import { prismaClient } from "@/lib/prisma";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where:{
      discountPercent: {
        gt: 0,
      }
    }
  })

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

      <div className="mt-8">
        <ProductList products={deals}/>
      </div>
    </div>
  );
}
