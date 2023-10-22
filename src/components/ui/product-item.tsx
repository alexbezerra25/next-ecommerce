import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="bg-accent rounded-lg h=[170px] w-[156px] items-center justify-center">
            <Image
                src={product?.imageUrls[0]}
                width={0}
                height={0}
                sizes='100vw'
                alt={product.name}
                className="h-[90px] w-auto"
                style={{
                    objectFit: 'contain'
                }}
            />
      </div>

      <div className=""></div>
    </div>
  );
};

export default ProductItem;
