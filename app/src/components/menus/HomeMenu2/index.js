import styled from "styled-components";
import HomeMenu1 from "../HomeMenu1";

const HomeMenu2 = styled(HomeMenu1) `
    width: 390px;
    height: 70px;
    justify-content: center;
    margin-top: 32px;
    border-top: 1px solid var(--cinza6);

    .selected::after {
        content: '';
        width: 5px;
        height: 5px;
        background-color: var(--azul);
        border-radius: 100%;
    }
`

export default HomeMenu2
