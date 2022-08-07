import {createGlobalStyle} from 'styled-components'

const Base = createGlobalStyle `
    
    :root {
        /* paleta de cores */
        --preto: #3F464D;
        --preto2: #2B2B2B;
        
        --azul: #2486C4;
        --azul-active: #0e68a1;
        --azul-hover: #26a2f0;

        --azul-claro: #7ECEFC;
        --branco1: #FFF6E6;
        --branco2: #FFFFFF;
        --cinza: #848484;
        --cinza2: #6A6A6A;
        --cinza3: #EFEFEF;
        --cinza4: #BEBEBE;

        /* fontes */
        --nunito: 'Nunito', sans-serif;
        --roboto: 'Roboto Flex', sans-serif;
        --inter: 'Inter', sans-serif;
        --fredoka: 'Fredoka One', cursive;

        /* font-weight */
        --regular: 400;
        --medium: 500;
        --semibold: 600;
        --bold: 700;
        --extrabold: 800;

        /* border-radius */
        --botao: 10px;
    }
`

export default Base;
