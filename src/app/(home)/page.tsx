import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "../../components/ui/produtc-list";
import { prismaClient } from "@/lib/prisma";
import PromoBanner from "./components/promo-banner";
import Link from "next/link";
import SectionTitle from "@/components/ui/section-title";

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
    <>
      <div className="mx-auto max-w-[1920px]">
        <Link href="/deals">
          <PromoBanner
            src="/deals-banner.png"
            className="hidden h-auto w-full lg:block"
            alt="Até 55% de desconto esse mês!"
          />
        </Link>
      </div>

      <div className="mx-auto flex flex-col gap-8 py-8 lg:container lg:gap-10">
        <Link href="/deals">
          <PromoBanner
            src="/banner-home01.png"
            alt="55%of"
            className="px-5 lg:hidden"
          />
        </Link>

        <div className="px-5 lg:mt-2">
          <Categories />
        </div>

        <div className="flex flex-col gap-3 lg:gap-5">
          <SectionTitle className="pl-5">Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>

        <div className="flex flex-col lg:flex-row">
          <Link href="/category/mouses" className="flex flex-1">
            <PromoBanner
              src="/banner-home03.png"
              alt="Até 55% de desconto em mouses!"
              className="w-0 flex-1 px-5"
            />
          </Link>

          <Link href="/category/headphones" className="flex flex-1">
            <PromoBanner
              src="/banner-home02.png"
              alt="Até 55% de desconto em fones!"
              className="hidden w-0 flex-1 lg:block"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-3 lg:gap-5">
          <SectionTitle className="pl-5">Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>

        <div>
          <Link href="/category/headphones">
            <PromoBanner
              src="/banner-home02.png"
              alt="Até 55% de desconto em mouses!"
              className="px-5 lg:hidden"
            />
          </Link>

          <Link href="/catalogo">
            <PromoBanner
              src="/free-shipping-banner.png"
              alt="Frete grátis!"
              className="hidden px-5 lg:block"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-3 lg:gap-5">
          <SectionTitle className="pl-5">Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>
      </div>
    </>
  );
}
