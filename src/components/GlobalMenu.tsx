'use client'

import Link from "next/link";
import { Button } from "./ui/button";
import {  Moon, PieChartIcon, Sun, Table2, UserIcon } from "lucide-react";
import { Pacifico } from 'next/font/google'
import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";


const customFont = Pacifico({ weight: '400', subsets:['latin']})


export default function GlobalMenu() {
  const { theme, setTheme } = useTheme()
  const [defaultTheme, setDefaultTheme] = useState(true)

  const toggleTheme = (b: boolean) => {
    setDefaultTheme(b)
    b ? setTheme('dark') : setTheme('light')
    window.localStorage.setItem('theme', b ? 'dark' : 'light') 
  }

  useEffect(() => {
    const currentTheme = window.localStorage.getItem('theme')
    if(currentTheme) {
      const isDark = currentTheme === 'dark'
      toggleTheme(isDark)
    }
  }, [])

  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
    <Link 
      className={cn(customFont.className, 'mr-4 text-2xl text-primary flex items-center font-semibold')}
      href="#"
    >
      Mão de Vaca
    </Link>
    <div className="ml-auto flex items-center space-x-4">
      <Button size="icon" variant="ghost">
        <Table2 className="h-4 w-4" />
        <span className="sr-only">Table</span>
      </Button>
      <Button size="icon" variant="ghost">
        <PieChartIcon className="h-4 w-4" />
        <span className="sr-only">Charts</span>
      </Button>
      <Button size="icon" variant="ghost">
        <UserIcon className="h-4 w-4" />
        <span className="sr-only">Profile</span>
      </Button>
      <div className="flex items-center gap-2 border-l pl-3">
        <Sun className="size-4 text-muted-foreground"/>
        <Switch 
          checked={defaultTheme}
          onCheckedChange={t => toggleTheme(t)}
        />
        <Moon className="size-4 text-muted-foreground" />
      </div>
    </div>
  </header>
  )
}