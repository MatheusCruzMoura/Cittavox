import styled from 'styled-components'

const NomeUsuario = styled.section`
    width: calc(390px - (2 * 23px));
    margin-top: 27px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1{
        font-family: var(--roboto);
        font-weight: var(--medium);
        color: var(--azul);
        font-size: 22px;    
    }

    h2 {
        margin-top: 4px;
        font-family: var(--nunito);
        font-weight: var(--regular);
        font-size: 13px;
        color: var(--cinza4);
    }

`

export default NomeUsuario

