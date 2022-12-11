import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StyledChanel from "./StyledChanel";
import { setMessages } from "../../redux/messagesSlice";
import {v4} from "uuid";

const Chanel = (props) => {
    const {
        activeChanel
    }= props;

    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const messages = useSelector(state => state.messages.messages).filter(message => message.chanel === activeChanel.id)
    const usersArrays = useSelector(state => state.users.users)
    const currentUser = useSelector(state => state.currentUser);

    const users = {};

    usersArrays.forEach(user => {
        users[user.id] = user.name[0].toUpperCase() + user.name.slice(1)
    });

    const handleInputChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }

    const handleInputSubmit = (e) => {
        e.preventDefault();
        dispatch(setMessages({
            id: v4(),
            chanel: activeChanel.id,
            users: currentUser.id,
            messages:input,
            date: new Date().toISOString()
        }));
        setInput("");
    }

    return(
        <StyledChanel>
            <ul>
            {
                messages.map(message=>
                    <li key={message.id}>
                        <span className="userName">{users[message.users]}: </span>
                        {message.messages}
                    </li>
                )
            }
            </ul>
            <form className="inputWrapper" onSubmit={handleInputSubmit}>
                <input value={input} onChange={handleInputChange}/>
            </form>
        </StyledChanel>
    )
}

export default Chanel;