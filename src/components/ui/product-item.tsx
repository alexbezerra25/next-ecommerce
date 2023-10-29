import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDown,  StarIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ProductRating from "./product-rating";


interface ProductItemProps {
  product: ProductWithTotalPrice;
  className?: string
}
const ProductItem = ({ product, className }: ProductItemProps) => {
  const currentRating = Math.floor(Math.random() * 6)
  const numberRatings = Math.floor(Math.random() * 6000)
  return (
<Link 
href={`/product/${product.slug}`}
className={cn("flex min-w-[156px] flex-col gap-4", className)}
>

    <div className="flex w-full flex-col gap-3">
      {/* Imagem do produto */}
      <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
        <Image
          src={product?.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          alt={product.name}
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />

        {Number(product.discountPercent) > 0 && (
          <Badge className="absolute left-2 top-2">
            <ArrowDown size={14} />{" "}
            {(Number(product.discountPercent) * 100).toFixed(2)}%
          </Badge>
        )}
      </div>

      {/* Info do produto */}
      <div className="flex flex-col gap-1">
      {/* Nome do produto */}
        <p className="truncate text-sm">
          {product.name}
        </p>

        {/* Valor do produto */}
        <div className="flex gap-2">
          {Number(product.discountPercent) > 0 ? (
            <>
              <p className="truncate text-sm font-semibold lg:text-lg">
                R$ {product.totalPrice.toFixed(2)}
              </p>

              <p className="truncate text-xs line-through opacity-75 lg:text-sm">
                R$ {product.basePrice.toFixed(2)}
              </p>
            </>
          ) : (
            <p className="truncate text-sm font-semibold">
              R$ {product.basePrice.toFixed(2)}
            </p>
          )}
        </div>

        {/* Avaliações do produto */}
        <ProductRating props={{productId: product.id, currentRating, numberRatings}} />
        
      </div>
    </div>
    </Link>
  );
};

export default ProductItem;
