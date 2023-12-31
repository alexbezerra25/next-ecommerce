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
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { createOrder } from "@/actions/order";
import { useSession } from "next-auth/react";

const Cart = () => {
  const { data } = useSession()
  const { products, subTotal, total, totalDiscount, productsQuantity } = useContext(CartContext);

  const handleFinishPurchaseClick = async ()=>{

      if(!data?.user){
        return;
      }

      // Server Action:
        const order = await createOrder(products, (data?.user as any).id);

        const checkout = await createCheckout(products, order.id)
        
        const stripe = await loadStripe(
            process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
        )

        stripe?.redirectToCheckout({
            sessionId: checkout.id,
        })
  }

  return (
    <Sheet>
      <SheetTrigger asChild className="relative">
        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
          {productsQuantity > 0 && (
            <Badge variant="default" className="absolute top-[-0.6rem] right-[-1rem]">{productsQuantity}</Badge> 
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className=" w-[24rem]">
        <div className="flex h-full flex-col gap-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 border-primary py-[0.375rem] text-base uppercase"
          >
            <ShoppingCartIcon size={16} />
            Carrinho
          </Badge>

          {/* RENDERIZAR OS PRODUTOS */}
          {products.length > 0 ? (
          <div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="flex h-full flex-col gap-3">
                {products.map((product) => (
                  <CartItem
                    key={product.id}
                    product={computedProductTotalPrice(product as any) as any}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>) : (
            <p>Carrinho vazio...</p>
          )}

          {products.length > 0 && (
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

            <Button className="mt-8" onClick={handleFinishPurchaseClick}>
                FINALIZAR COMPRA
            </Button>
          </div>
          )}


        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
