import styled from "styled-components";

const StyledChanel = styled.div`
    margin: 1em;

    .inputWrapper{
        position: absolute;
        bottom: 2em;
        width: 100%;
        input{
            width: 90%;
            height: 2em;
        }
    }

    ul {
        li{
            margin: 0.5em;
        }
    }
    .userName{
        font-weight: bold;
    }

    @media screen and (width > 850px){
        .inputWrapper{
            input{
                width: 67%;
            }
        }
    }
`;

export default StyledChanel;