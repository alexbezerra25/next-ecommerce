import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "../../components/ui/produtc-list";
import { prismaClient } from "@/lib/prisma";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="py-8">
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
        <p className="mb-3 pl-4 font-bold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <Image
        src="/banner-home03.png"
        height={0}
        width={0}
        className="h-auto w-full px-3 mt-5"
        sizes="100vw"
        alt="55%of"
      />

      <div className="mt-8">
        <p className="mb-3 pl-4 font-bold uppercase">Teclados</p>
        <ProductList products={keyboards} />
      </div>


      <Image
        src="/banner-home02.png"
        height={0}
        width={0}
        className="h-auto w-full px-3 mt-5"
        sizes="100vw"
        alt="55%of"
      />


      <div className="mt-8">
        <p className="mb-3 pl-4 font-bold uppercase">Mouses</p>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
