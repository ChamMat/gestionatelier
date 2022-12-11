import { useEffect, useState } from "react";
import ChanelBox from "../ChanelBox/ChanelBox";
import StyledChat from "./StyledChat";
import { useDispatch, useSelector} from "react-redux";
import { fetchChannels } from "../../redux/chanelsSlice";
import { fetchMessages } from "../../redux/messagesSlice";
import { fetchUsers } from "../../redux/usersSlice";
import { NavLink } from "react-router-dom";
import Chanel from "../Chanel/Chanel";


const Chat = () => {

    const [activeChanel, setActiveChanel] = useState("");

    const dispatch = useDispatch();

    const chanelsStatus = useSelector(state => state.chanels.status);
    const messagesStatus = useSelector(state => state.messages.status);
    const usersStatus = useSelector(state => state.users.status);

    const chanels = useSelector(state => state.chanels.chanels)

    const handleClickChanelBox = (evt) => {
        setActiveChanel(evt.target.innerText)
    }

    useEffect(()=>{
        if (chanelsStatus === 'idle') {
            dispatch(fetchChannels())
        }

        if (messagesStatus === "idle") {
            dispatch(fetchMessages());
        }

        if (usersStatus === "idle") {
            dispatch(fetchUsers());
        }

    }, [chanelsStatus, dispatch])

    return(
        <StyledChat>
            <div className='chanelList'>
                {
                    chanels.map((chanel)=>(
                        <NavLink
                            to={`/communication/${chanel.name}`}
                            key={chanel.id}
                            onClick={handleClickChanelBox}
                        >
                            <ChanelBox
                                className="chanel"
                                key={chanel.id}
                                id={chanel.id}
                                name={chanel.name}
                            />
                        </NavLink>
                    ))
                }
            </div>
                {
                    chanels.map(chanel => 
                      chanel.name === activeChanel ?
                        <Chanel
                            key={chanel.id}
                            activeChanel={chanel}
                        />:
                        ""
                    )
                }
        </StyledChat>
    )
};

export default Chat;