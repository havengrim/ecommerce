import React, { useState, useEffect } from 'react';
import { burger, logo, cart } from '@/assets';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`py-4 px-5 flex justify-between items-center sticky top-0 bg-white z-10 ${scrolled ? 'shadow-sm' : ''}`}>
        <div>
            <Sheet>
            <SheetTrigger asChild>
                <img src={burger} alt='Logo' className='w-7 sm:w-8 hover:cursor-pointer hover:shadow-sm'/>
            </SheetTrigger>
            <SheetContent side='left'>
                <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                    Make changes to your profile here. Click save when you're done.
                </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                    Name
                    </Label>
                    <Input id="name" value="Pedro Duarte" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                    Username
                    </Label>
                    <Input id="username" value="@peduarte" className="col-span-3" />
                </div>
                </div>
                <SheetFooter>
                <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                </SheetClose>
                </SheetFooter>
            </SheetContent>
            </Sheet>
        </div>
        <div>
        <img src={logo} alt='Logo' className='w-14 sm:w-20 hover:cursor-pointer hover:shadow-sm'/>
        </div>
        <div>

        <HoverCard>
            <HoverCardTrigger><img src={cart} alt='Logo' className='w-6 sm:w-8 hover:cursor-pointer hover:shadow-sm'/></HoverCardTrigger>
            <HoverCardContent>
                The React Framework – created and maintained by @vercel.
            </HoverCardContent>
        </HoverCard>
        </div>
    </div>
  )
}

export default Navbar;
