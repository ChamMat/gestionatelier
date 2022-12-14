import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StyledChanel from "./StyledChanel";
import { setMessages } from "../../redux/messagesSlice";

const Chanel = (props) => {
    const {
        activeChanel,
        socket
    }= props;

    const [input, setInput] = useState("");
    const messagesListRef = useRef(null);

    const dispatch = useDispatch();

    const messages = useSelector(state => state.messages.messages).filter(message => message.chanel === activeChanel._id)
    const usersArrays = useSelector(state => state.users.users)
    const currentUser = useSelector(state => state.currentUser);

    const users = {};

    usersArrays.forEach(user => {
        users[user._id] = user.name[0].toUpperCase() + user.name.slice(1)
    });

    const handleInputChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }

    const handleInputSubmit = (e) => {
        e.preventDefault();
        const message = {
            chanel: activeChanel._id,
            users: currentUser._id,
            messages:input,
            date: new Date().toISOString()
        };

        if (message.messages != ""){
            dispatch(setMessages(message));

            socket.emit("newMessage", message);
        }

        setInput("");
    }

    useEffect(()=>{
        const messagesListElement = messagesListRef.current;
        if (messagesListElement) {
          messagesListElement.scrollTop = messagesListElement.scrollHeight;
        }
    },[messages])

    return(
        <StyledChanel>
            <div className="chatWrapper" ref={messagesListRef}>
                <ul>
                {
                    messages.map(message=>
                        <li key={message.date}>
                            <span className="userName">{users[message.users]}: </span>
                            {message.messages}
                        </li>
                    )
                }
                </ul>
            </div>
            <form className="inputWrapper" onSubmit={handleInputSubmit}>
                <input value={input} onChange={handleInputChange}/>
            </form>
        </StyledChanel>
    )
}

export default Chanel;