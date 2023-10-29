import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PackageSearchIcon,
  PercentIcon,
} from "lucide-react";
import { Button } from "./button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { ModeToggle } from "./toggle-theme";

const Sidebar = () => {
  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogoutClick = async () => {
    await signOut();
  };

  const { status, data } = useSession();
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="h-full flex flex-col w-[20rem]">
        <SheetHeader className="text-left text-lg font-semibold">
          Menu
        </SheetHeader>

        {status === "authenticated" && data?.user && (
          <div className="my-3 flex items-center gap-2">
            <Avatar>
              <AvatarFallback>
                {data.user.name?.[0].toUpperCase()}
              </AvatarFallback>

              {data.user.image && <AvatarImage src={data.user.image} />}
            </Avatar>

            <p className="font-medium">{data.user.name}</p>
          </div>
        )}

        <Separator />

        <div className="mt-3 flex flex-col gap-2">
          {status === "unauthenticated" && (
            <Button
              onClick={handleLoginClick}
              variant="outline"
              className="w-full justify-start gap-2"
            >
              <LogInIcon size={16} /> Fazer login
            </Button>
          )}

          {status === "authenticated" && data.user && (
            <Button
              onClick={handleLogoutClick}
              variant="outline"
              className="w-full justify-start gap-2"
            >
              <LogOutIcon size={16} /> Sair
            </Button>
          )}

          <SheetClose asChild>
            <Link href="/">
              <Button variant="outline" className="w-full justify-start gap-2">
                <HomeIcon size={16} /> Início
              </Button>
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/orders">
              <Button variant="outline" className="w-full justify-start gap-2">
                <PackageSearchIcon size={16} />
                Meus Pedidos
              </Button>
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/deals">
              <Button variant="outline" className="w-full justify-start gap-2">
                <PercentIcon size={16} /> Ofertas
              </Button>
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/catalogo">
              <Button variant="outline" className="w-full justify-start gap-2">
                <ListOrderedIcon size={16} /> Catálogo
              </Button>
            </Link>
          </SheetClose>
        </div>

        <div className="mt-auto">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
