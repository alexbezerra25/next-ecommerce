"use client";
import { CartContext, CartProduct } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
    const {increaseProductQuantity, decreaseProductQuantity} = useContext(CartContext)

  return (
    <div className="flex items-center justify-between">
      {/* Parte esquerda */}
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-[77px] max-h-[70%] w-[77px] max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>

          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">
              R$ {product.totalPrice.toFixed(2)}
            </p>
            {Number(product.discountPercent) > 0 && (
              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice)}
              </p>
            )}
          </div>

          <div className="mt-1 flex items-center gap-2">
            <Button variant={"outline"} size={"icon"} className="h-8 w-8" onClick={()=>{decreaseProductQuantity(product.id)}}>
              <ArrowLeftIcon size={16} />
            </Button>

            <span className="text-sm">{product.quantity}</span>

            <Button variant={"outline"} size={"icon"} className="h-8 w-8" onClick={()=>{increaseProductQuantity(product.id)}}>
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Parte direita */}
      <div className="flex items-center justify-center">
        <Button variant={"outline"}>
          <TrashIcon size={16} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
