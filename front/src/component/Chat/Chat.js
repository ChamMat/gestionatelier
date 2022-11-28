import { useEffect, useState } from "react";
import Chanel from "../Chanel/Chanel";
import StyledChat from "./StyledChat";

const Chat = () => {

    const [chanels, setChanels] = useState([]);

    useEffect(()=>{
        fetch('./fakeDatas/chanels.json')
        .then((response) => response.json())
        .then((data) => setChanels(data))
        .catch(function(error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
          });
    })

    return(
        <StyledChat>
            <div className='chanelList'>
                {
                    chanels.map((chanel)=>(
                        <Chanel
                            className="chanel"
                            key={chanel.id}
                            id={chanel.id}
                            name={chanel.name}
                        />
                    ))
                }
            </div>
        </StyledChat>
    )
};

export default Chat;