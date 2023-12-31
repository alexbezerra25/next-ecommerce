import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { computedProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";

const DealsPage = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 p-5 lg:container">
      <Badge variant="heading">
        <PercentIcon size={16} />
        Ofertas
      </Badge>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
        {deals.map((product) => (
          <ProductItem
            key={product.id}
            product={computedProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default DealsPage;
