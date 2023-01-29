import styled from "styled-components";

const HomeBemVindo = styled.section `
    width: 347px;
    height: 95px;
    background-color: var(--branco1);
    margin-top: 48.5px;
    border: 1px solid var(--azul);
    border-radius: var(--botao);
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    
    section {
        display: flex;
        flex-direction: column;
        grid-row-gap: 3px;
    }

    .imagem {
        display: flex;
        position: relative;
        transform: translateY(-24.5px);
    }
`

export default HomeBemVindo
