import css from "styled-jsx/css"

import { fonts, colors, breakpoints } from "../../styles/theme"
import { addOpacityColor } from "../../styles/utils"

const backgroundColor = addOpacityColor(colors.primary, 0.3)

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 3px, #fdfdfd 3px),
      radial-gradient(${backgroundColor} 3px, #fdfdfd 3px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    font-family: ${fonts.base};
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`

export default css`
  div {
    display: grid;
    place-items: center;
    height: 100vh;
  }
  main {
    background: #fff;
    border-radius: 10px;
    height: 100vh;
    position: relative;
    width: 100%;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  }
`
