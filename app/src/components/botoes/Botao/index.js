import styled from 'styled-components'

const Butao = styled.button`
    width: 278px;
    height: 42px;
    background-color: var(--azul);
    border-radius: var(--botao);
    margin-top: calc(137/16 * 1rem);

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: var(--roboto);
    font-weight: var(--extrabold);
    font-size: 20px;
    color: var(--branco2);
    text-decoration: none;

    transition-timing-function: ease-in-out;
    transition: 500ms;

    :hover {
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
        background-color: var(--azul-hover);
    }

    :active {
        background-color: var(--azul-active);
        transition-timing-function: ease;
        transition: 0ms;
    }
`

export default Butao

