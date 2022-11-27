import styled from "styled-components";
import loupe from "../../assets/imgs/loupe.png";

const StyledHeader = styled.header`

    display: flex;
    justify-content: space-between;
    padding: 1em;
    border-bottom: 1px solid #7A7979;
    background-color: #F7F7F7;

    .menu, .footer{
        display: none;
    }

    .menuIcon{
        border: solid 1px #B2B2B2;
        padding: 7px 10px 5px 10px;
        border-radius: 5px;
        &:hover{
            border-color: #7A7979;
        }
        img{
            width: 20px;
            height: 20px;
        }
    }

    .research{
        input{
            height: 32px;
            width: 60vw;
            background-image: url(${loupe});
            background-repeat: no-repeat;
            background-size: 32px;
            text-indent: 35px;
            border:solid 1px #B2B2B2;
            border-radius: 5px;

            &:hover{
                border: #7A7979 solid 1px;
            }
        }
    }

    a{
        color: black;
        text-decoration: none;
    }

    @media screen and (width > 850px){

        flex-direction: column;
        width: 300px;
        border-right: 1px solid #7A7979;
        border-bottom: none;
        height: 100vh;
        padding: 0;
        justify-content: unset;

        .menu, .footer{
            display: flex;
        }

        .research{
            border-bottom: 1px solid #7A7979;
            padding: 20px 20px 20px 20px;

            input{
                width: 250px;
            }
        }

        .menu{
            padding: 20px 20px 20px 20px;
            border-bottom: #7A7979 solid 1px;
            height: 65vh;

            ul{
                margin-left: 5px;
                li{
                    margin-bottom: 2em;
                    a{
                        display: block;
                        width: 100%;
                        padding: 10px 20px 10px 20px;
                        border-radius: 5px;

                        &:hover{
                            background-color: #E3E3E3;
                            cursor: pointer;
                        }
                    }
                }
            }
        }

        .footer{
            padding: 20px 20px 20px 20px;
        }

        .menuIcon{
            display: none;
        }

        .active {
            font-weight: bold;
            margin-left: 15px;
        }
    }
`;

export default StyledHeader;