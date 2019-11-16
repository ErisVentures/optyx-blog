import Typography from "typography"
import GitHub from "typography-theme-github"
GitHub.headerFontFamily = ["Raleway", "sans-serif"]
const typography = new Typography(GitHub)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
