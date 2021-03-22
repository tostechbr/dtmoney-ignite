import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #fff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
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
    [disabled]{
        opacity: 0,6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);

        position: fixed; //por conta do scroll
        top:0;
        bottom:0;
        right:0;
        left:0;

        display:flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width:920px){
        .react-modal-overlay{
            display:flex;
            align-items: flex-end;
            justify-content: flex-end;
        }
    }
    
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        
    }

    @media (max-width:920px){
        .react-modal-content{
            border-radius: 16px 16px 0px 0px;
        }
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`