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
    <Button onClick={handleToggleTheme}>
      {
        theme === 'light' ? (
          <LuSunDim/>
        )  : (
          <LuMoon/>
        )
      }

    </Button>
  )
}