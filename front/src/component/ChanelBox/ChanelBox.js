import StyledChanelBox from "./StyledChanelBox";

const ChanelBox = (props) => {

    const {
        id,
        name
    } = props;



    return(
        <StyledChanelBox className="chanelBox">
            <div>{name}</div>
        </StyledChanelBox>
    )
}

export default ChanelBox;