import styled from "styled-components";

const StyledErrorPage = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div{
        text-align: center;
    }

    .sorry{
        font-size: 1.5em;
        margin-top: 2em;
    }

    .messageError{
        margin-top: 1em;
        font-size: .9em;
        font-style: italic;
        color: #999;
    }

    .return{
        color: black;
    }
`;

export default StyledErrorPage;