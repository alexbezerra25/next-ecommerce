import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDown,  StarIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[170px] flex-col gap-3">
      {/* Imagem do produto */}
      <div className="relative flex h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product?.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          alt={product.name}
          className="h-[90px] max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />

        {Number(product.discountPercent) > 0 && (
          <Badge className="absolute left-2 top-2">
            <ArrowDown size={14} />{" "}
            {(Number(product.discountPercent) * 100).toFixed(2)}%
          </Badge>
        )}
      </div>

      {/* Info do produto */}
      <div className="">
      {/* Nome do produto */}
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        {/* Valor do produto */}
        <div className="flex gap-2 mt-1">
          {Number(product.discountPercent) > 0 ? (
            <>
              <p className="text-sm font-semibold">
                R${product.totalPrice.toFixed(2)}
              </p>

              <p className="text-xs line-through opacity-75">
                R${product.basePrice.toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-sm font-semibold">
              R${product.basePrice.toFixed(2)}
            </p>
          )}
        </div>

        {/* Avaliações do produto */}
        <div className="flex gap-1 items-center">
          <StarIcon size={14} className="text-primary"/>
          <StarIcon size={14} className="text-primary"/>
          <StarIcon size={14} className="text-primary"/>
          <StarIcon size={14} className="text-primary"/>
          <StarIcon size={14} className="text-primary"/>

          <p className="text-xs opacity-50">(42)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
