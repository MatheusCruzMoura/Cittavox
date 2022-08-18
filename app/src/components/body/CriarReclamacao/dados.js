import styled from 'styled-components'
import Body from '../Inicio'

const Dados = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 349px;

    input {
        margin: 7px 0px 17px 0px;

        height: 31px;
        left: 20px;
        top: 429px;
        width: 348px;

        border: none;

        background: #EFEFEF;
        border-radius: 5px;
    }

    .Enviarimagem {
        margin: 7px 0px 17px 0px;

        width: 347px;
        height: 65px;
        left: 20px;
        top: 691px;

        display: flex;
        justify-content: center;
        align-items: center;
        
        background: #EFEFEF;
        border: 2px dashed #2486C4;
        border-radius: 5px;
    }

    .Enviarimagem input[type="file"] {
        appearence: none;
        display: none;
        visibility: hidden;
        opacity: 0;
    }
    
`

export default Dados

