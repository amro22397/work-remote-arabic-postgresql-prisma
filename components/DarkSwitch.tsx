'use client'

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";


export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, []);

    useEffect(() => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
        document.documentElement.classList.toggle("dark", storedTheme === "dark");
      }
    }, []);

    const toggleTheme = () => {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      localStorage.setItem("theme", newTheme);
    };

    if (!mounted) return (
        <Image
        src="/empty.png"
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle" />
    )

    if (theme === 'dark') {
        return <FiSun className="text-white ml-1 cursor-pointer hover:text-white/85 active:scale-95" size={25}
        onClick={toggleTheme} />
    } else {
      return <FiMoon className="text-black ml-1 cursor-pointer hover:text-black/85 active:scale-95" size={25}
         onClick={toggleTheme} />
    }

    // if (theme === 'light') {
        
    // }
}