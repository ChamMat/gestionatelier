import styled from "styled-components";

const StyledChat = styled.div`

    .chanelList{
        padding: 20px 15px 15px 15px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        border-bottom: solid 1px #7A7979;

        .active {
            .chanelBox{
                border: solid 1px #3584E4;
                font-weight: bold;
            }
        }

        a{
            text-decoration: none;
            color:black;
        }
    }
`;

export default StyledChat