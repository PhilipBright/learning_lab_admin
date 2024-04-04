import Link from "next/link"
import {
  Bell,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
  CreditCard,
  BookOpen
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { navLink } from "@/constant/data";
import React from "react";


const Navigation = () => {
  const icons = {
    HomeIcon: <LineChart className="h-4 w-4" />,
    UsersIcon: <Users className="h-4 w-4" />,
    PackageIcon: <Package className="h-4 w-4" />,
    ShoppingCartIcon: <ShoppingCart className="h-4 w-4" />,
    RepeatIcon: <CreditCard className="h-4 w-4" />,
    TeacherIcon: <BookOpen className="h-4 w-4" />
  }
  return (
   
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Learning Lab</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navLink.map((item, index) => (
                <Link key={index} href={item.href} className="flex items-center gap-3 rounded-lg px-3 py-4  transition-all hover:bg-slate-200">
                
                  {icons[item.icon as keyof typeof icons]}
                  {item.name}
                </Link>
              ))}
            
            </nav>
          </div>
          
        </div>
      </div>
    
  )
}
export default Navigation;