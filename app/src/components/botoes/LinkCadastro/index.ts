import styled from 'styled-components'

const LinkCadastro = styled.a`
    margin-top: 15px;

    display: flex;
    align-items: center;

    font-family: var(--nunito);
    font-weight: var(--medium);
    font-size: 15px;
    color: var(--preto);
    text-decoration: none;

    span {
        margin-left: 5px;
        text-decoration: underline !important;
    }

    :hover {
        color: var(--azul);
    }

    :active {
        color: var(--azul-hover);
    }

`

export default LinkCadastro

