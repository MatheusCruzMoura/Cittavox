import styled from "styled-components";

const HomeBusca = styled.form `
    width: 346px;
    height: 44px;
    display: flex;
    align-items: center;
    margin-top: 20px;

    input {
        width: 100%;
        height: 100%;
        border: 1.5px solid var(--azul);
        border-radius: var(--botao);
        padding: 0;
        padding-left: 14px;
    }

    .busca {
        width: 22px;
        height: 22px;
        position: absolute;
        transform: translate(-49px, -11px);
        cursor: text;
    }

`

export default HomeBusca
