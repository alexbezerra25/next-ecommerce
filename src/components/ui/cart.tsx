import { ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
  } from "./sheet";

const Cart = () => {
    return ( 
        <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>

      <SheetContent>
        <h1>Cart</h1>
      </SheetContent>
      </Sheet>
     );
}
 
export default Cart;