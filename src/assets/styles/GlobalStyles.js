import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size:62.5%;
    &::-webkit-scrollbar{
        width:0.5rem;
    }
}

`;