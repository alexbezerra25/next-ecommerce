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

const Cart = () => {
const {products} = useContext(CartContext)

    return ( 
        <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>

      <SheetContent>
        <div className="">
        <Badge
          variant="outline"
          className="w-fit gap-1 border-primary py-[0.375rem] text-base uppercase"
        >
          <ShoppingCartIcon size={16}/>
        Carrinho
        </Badge>

            {/* RENDERIZAR OS PRODUTOS */}
            {products.map(product=> <><h1>Teste</h1></>)}
        </div>
      </SheetContent>
      </Sheet>
     );
}
 
export default Cart;