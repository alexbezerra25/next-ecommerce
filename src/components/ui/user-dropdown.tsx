"use client"
 
import * as React from "react"
import { signIn, signOut, useSession } from "next-auth/react";
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogInIcon, LogOutIcon, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { cn } from "@/lib/utils";

const UserDropdown = ({className}: any) => {
    const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn('',className )}>
        <Button variant="outline" size="icon">
        {status === "authenticated" && data?.user ? (
            <Avatar className="rounded-md">
              <AvatarFallback>
                {data.user.name?.[0].toUpperCase()}
              </AvatarFallback>

              {data.user.image && <AvatarImage src={data.user.image} />}
            </Avatar>
        ) : (
            <User />
        )}
          <span className="sr-only">Usuário</span>
        </Button>
      </DropdownMenuTrigger>


      <DropdownMenuContent align="end">

        {status === "unauthenticated" && (
            <DropdownMenuItem
              onClick={handleLoginClick}
            >
              <LogInIcon size={16} /><span className="ms-2"> Login</span>
            </DropdownMenuItem>
          )}

          {status === "authenticated" && data.user && (
            <DropdownMenuItem
              onClick={handleLogoutClick}
            >
              <LogOutIcon size={16} /><span className="ms-2"> Sair</span>
            </DropdownMenuItem>
          )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown;