"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/Button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <div className="flex items-center gap-x-4">
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black",
              route.active ? "text-black" : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        ))}

        <Link
          href={'/contact'}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            pathname === "/contact" ? "text-black" : "text-neutral-500"
          )}
        >
          Contact
        </Link>

        <Link
          href={'/about'}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            pathname === "/about" ? "text-black" : "text-neutral-500"
          )}
        >
          About Us
        </Link>
      </nav>
      
      {/* Mobile Nav */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="text-xl font-bold">Categories</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-black",
                    route.active ? "text-black" : "text-neutral-500"
                  )}
                >
                  {route.label}
                </Link>
              ))}

              <Link

                href={'/contact'}
                className={cn(
                  "text-base font-medium transition-colors hover:text-black",
                  pathname === "/contact" ? "text-black" : "text-neutral-500"
                )}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MainNav;
