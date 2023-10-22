import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { CATEGORY_ICON } from "@/constants/category-icons";
import { computedProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });
  return (
    <div className="flex flex-col gap-8 p-5">
      <div className="flex items-center justify-between">
        <Badge
          variant="outline"
          className="w-fit gap-1 border-primary py-[0.375rem] text-base uppercase"
        >
          {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
          {params.slug}
        </Badge>

          <Link href="/catalogo">
            <Badge
              variant="outline"
              className="w-fit gap-1 py-[0.375rem] uppercase"
            >
              <ArrowBigLeft size={16} />
              VOLTAR
            </Badge>
          </Link>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {category?.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computedProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
