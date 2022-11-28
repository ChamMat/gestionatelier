import StyledChanel from "./StyledChanel";

const Chanel = (props) => {

    const {
        id,
        name
    } = props;

    return(
        <StyledChanel>
            <div>{name}</div>
        </StyledChanel>
    )
}

export default Chanel;