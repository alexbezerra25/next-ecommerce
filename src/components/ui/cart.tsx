"use client";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computedProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";

const Cart = () => {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <div className="flex h-full flex-col gap-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 border-primary py-[0.375rem] text-base uppercase"
          >
            <ShoppingCartIcon size={16} />
            Carrinho
          </Badge>

          {/* RENDERIZAR OS PRODUTOS */}
          <div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="flex h-full flex-col gap-3">
                {products.map((product) => (
                  <CartItem
                    product={computedProductTotalPrice(product as any) as any}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="flex flex-col gap-3">
            <Separator />
            <div className="flex items-center justify-between">
              <p>Subtotal</p>
              <p>R$ {subTotal.toFixed(2)}</p>
            </div>

            <Separator />
            <div className="flex items-center justify-between">
              <p>Entrega</p>
              <p>GRÁTIS</p>
            </div>

            <Separator />
            <div className="flex items-center justify-between">
              <p>Descontos</p>
              <p>R$ {totalDiscount.toFixed(2)}</p>
            </div>

            <Separator />
            <div className="flex items-center justify-between">
              <p>Total</p>
              <p>R$ {total.toFixed(2)}</p>
            </div>

            <Button className="mt-8">
                FINALIZAR COMPRA
            </Button>
          </div>


        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
