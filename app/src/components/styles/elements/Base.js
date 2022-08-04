import {createGlobalStyle} from 'styled-components'

const Base = createGlobalStyle `
    
    :root {
        /* paleta de cores */
        --preto: #3F464D;
        --azul: #2486C4;
        --azul-claro: #7ECEFC;
        --branco: #FFF6E6;
        --cinza: #848484;

        /* fontes */
        --nunito: 'Nunito', sans-serif;
        --roboto: 'Roboto Flex', sans-serif;
        --inter: 'Inter', sans-serif;

        /* font-weight */
        --regular: 400;
        --medium: 500;
        --semibold: 600;
        --bold: 700;
        --extrabold: 800;
    }
`

export default Base;
