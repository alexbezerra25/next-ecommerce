"use client";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDown, ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProductInforProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "discountPercent" | "totalPrice" | "name"
  >;
}

const ProductInfo = ({
  product: { name, basePrice, discountPercent, totalPrice, description },
}: ProductInforProps) => {
  const [quantity, setQuantify] = useState(1);
  const handleDecreaseQuantityClick = () => {
    setQuantify((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantify((prev) => prev + 1);
  };
  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg ">{name}</h2>

      <div className="flex items-center gap-1">
        <h1 className="text-xl font-bold">
          R$
          {Number(discountPercent) > 0
            ? totalPrice.toFixed(2)
            : Number(basePrice).toFixed(2)}
        </h1>

        {Number(discountPercent) > 0 && (
          <Badge className="px-2 py-[2px]">
            <ArrowDown size={14} /> {(Number(discountPercent) * 100).toFixed(2)}
            %
          </Badge>
        )}
      </div>

      {Number(discountPercent) > 0 && (
        <p className="text-sm line-through opacity-75">
          R${Number(basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handleDecreaseQuantityClick}
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handleIncreaseQuantityClick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h2 className="font-bold">Descrição</h2>
        <p className="text-sm opacity-70 text-justify">{description}</p>
      </div>

      <Button className="mt-8">Adicionar ao carrinho</Button>

      <div className="mt-5 bg-accent flex items-center px-5 py-2 justify-between rounded-lg">
        <div className="flex items-center gap-3">
            <TruckIcon size={24}/>

            <div className="flex flex-col">
                <p className="text-xs">Entrega via <span className="font-bold">Correios</span></p>
                <p className="text-xs">Envio para <span className="font-bold text-primary">todo Brasil</span></p>
            </div>
        </div>
        <div>
            <p className="font-semibold">Frete grátis</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
