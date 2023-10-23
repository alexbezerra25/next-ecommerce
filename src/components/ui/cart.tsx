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

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <div className="flex flex-col gap-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 border-primary py-[0.375rem] text-base uppercase"
          >
            <ShoppingCartIcon size={16} />
            Carrinho
          </Badge>

          {/* RENDERIZAR OS PRODUTOS */}
          <div className="flex flex-col gap-3">
            {products.map((product) => (
              <CartItem
                product={computedProductTotalPrice(product as any) as any}
              />
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
