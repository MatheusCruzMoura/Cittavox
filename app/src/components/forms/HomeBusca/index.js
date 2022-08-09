import styled from "styled-components";

const HomeBusca = styled.form `
    width: 390px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    input {
        width: 332px;
        height: 41px;
        margin-left: 19px;
        border: 1.5px solid var(--azul);
        border-radius: var(--botao);
        padding: 0;
        padding-left: 14px;
    }

    label {
        transform: translateX(-34px);
        cursor: text;
    }

    .busca {
        width: 22px;
    }

`

export default HomeBusca
