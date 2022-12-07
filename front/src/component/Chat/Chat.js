import { useEffect, useState } from "react";
import ChanelBox from "../ChanelBox/ChanelBox";
import StyledChat from "./StyledChat";
import { useDispatch, useSelector} from "react-redux";
import { fetchChannels, selectAllChannels } from "../../redux/chanelsSlice";
import { NavLink, Outlet } from "react-router-dom";


const Chat = () => {

    const dispatch = useDispatch();

    const chanelsStatus = useSelector(state => state.chanels.status);
    const chanels = useSelector(state => state.chanels.chanels)

    useEffect(()=>{
        if (chanelsStatus === 'idle') {
            dispatch(fetchChannels())
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
            <Outlet />
        </StyledChat>
    )
};

export default Chat;