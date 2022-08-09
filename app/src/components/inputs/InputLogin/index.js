import styled from 'styled-components'

const InputLogin = styled.div `
    width: 325px;
    height: 29px;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--cinza3);
    border-radius: var(--botao);

    img {
        width: 29px;
        height: 29px;
        display: flex;
    }

    section {
        height: max-content;
        display: flex;
        flex-direction: column;
    }
    
    label {
        width: max-content;
        height: max-content;
        font-family: var(--roboto);
        font-weight: var(--medium);
        font-size: 11px;
        margin-left: 15px;
        color: var(--azul);
    }
    
    input {
        font-family: var(--roboto);
        font-weight: var(--medium);
        font-size: 13px;
        width: 281px;
        height: max-content;
        padding: 0;
        margin-left: 15px;
        background-color: var(--cinza3);
        border: none;
        outline: none;
    }

    input[type=checkbox] {
        display: flex;
        position: absolute;
        visibility: hidden;
    }

    .mostrar {
        display: flex;
        position: absolute;
        cursor: pointer;
        transform: translateX(250px);
    }

`

export default InputLogin

