'use client'

import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { LuMoon, LuSunDim } from "react-icons/lu"

/**
 * Botão toggle para mudar o tema do site
 */

export const ThemeSwitch = () => {
  const {setTheme, theme} = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button onClick={handleToggleTheme} variant='ghost' size='icon' className="absolute top-0 right-0 -translate-x-3 translate-y-3">
      {
        theme === 'light' ? (
          <LuSunDim className="size-3.5"/>
        )  : (
          <LuMoon className="size-3.5"/>
        )
      }

    </Button>
  )
}