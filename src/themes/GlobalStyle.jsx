import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }
    body {
        box-sizing: border-box;
    }
    *,*::after, *::before {
        margin: 0;
        padding: 0;
    }
`
