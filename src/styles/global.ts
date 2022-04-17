import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --main: #406E8E;
        --blue-light: #4d84eb;

        --text-title: #0969da;
        --text-body: #57606a;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html { 
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: #e3e3e3;

        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button { 
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`