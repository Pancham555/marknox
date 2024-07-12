import { AlignJustify, File, Moon, Search, Sun } from "lucide-react";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useTheme } from "./theme-provider";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const data = ["About", "Project", "Socials"];

  return (
    <div className="flex justify-center">
      <div className="max-w-[88rem] fixed w-full bg-white dark:bg-gray-950 border-b py-2 lg:px-8 md:px-5 px-2 flex justify-between z-50">
        <div className="flex gap-5 items-center justify-between">
          <div className="mr-12">
            <Button variant="ghost" className="rounded-full">
              P
            </Button>

            {/* <Link href="/">
              P
            </Link> */}
          </div>
          <div className="lg:hidden md:flex hidden gap-5">
            <Button variant="ghost">About</Button>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>More</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4">
                    {data
                      .filter((x) => x !== data[0])
                      .map((data, i) => {
                        return (
                          <NavigationMenuLink>
                            <Button key={i} variant="ghost" className="w-full">
                              {data}
                            </Button>
                          </NavigationMenuLink>
                        );
                      })}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="lg:flex items-center gap-5 md:hidden hidden">
            {data.map((data, i) => {
              return (
                <Button key={i} variant="ghost">
                  {data}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="flex gap-3.5 items-center">
          {/* Search */}

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpenSearch(!openSearch)}
          >
            <Search />
          </Button>

          <CommandDialog open={openSearch} onOpenChange={setOpenSearch}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions" className="">
                {data.map((data, i) => {
                  return (
                    <CommandItem
                      key={i}
                      onClick={() => {
                        // setOpenSearch(false);
                        // any other ocde
                      }}
                    >
                      <File className="mr-2 h-4 w-4" />
                      <span>{data}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </CommandDialog>

          {/* Search */}

          <ThemeButton />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <AlignJustify />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="mt-5">
                  <SheetTitle className="flex gap-5">P</SheetTitle>
                </SheetHeader>
                <SheetDescription className="flex flex-col gap-5 mt-5">
                  {data.map((data, i) => {
                    return (
                      <div className="">
                        <Button
                          key={i}
                          variant="ghost"
                          className="w-full text-left"
                        >
                          {data}
                        </Button>
                      </div>
                    );
                  })}
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThemeButton = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 duration-200" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-200" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default Navbar;
