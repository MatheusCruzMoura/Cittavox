import styled from 'styled-components'

const Body2 = styled.body`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

button {
    width: 349px;
    height: 41px;
    left: 21px;
    top: 766px;

    border: none;
    margin-top: 13px;
    cursor: pointer;

    background-color: var(--azul);
    border-radius: 5px;    

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: var(--roboto);
    font-weight: var(--extrabold);
    font-size: 20px;
    color: var(--branco2);
    text-decoration: underline var(--azul);

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
}

`

export default Body2
