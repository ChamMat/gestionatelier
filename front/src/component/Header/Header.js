import { useState } from "react";
import StyledHeader from "./StyledHeader";
import menuImg from "../../assets/imgs/menu.png";
import { NavLink } from "react-router-dom";

const Header = ()=>{

    const [menuTopDown, setMenuTopDown] = useState("diseable");

    let menuTopDownClassName = "menu diseable";

    const handleMenuTopDown = (e) => {
        if (menuTopDown === "diseable"){
            setMenuTopDown("");
        }else{
            setMenuTopDown("diseable");
        }
    }

    const closeMenuTopDown = (e) => {
        setMenuTopDown("diseable");
    }

    return(
        <StyledHeader>
            <div className="research"><input placeholder="research" /></div>
            <div className="menuIcon" onClick={handleMenuTopDown}><img alt="menu icon" src={menuImg}/></div>
            <div className={`menu ${menuTopDown}`}>
                <ul>
                    <li>
                        <NavLink
                        onClick={closeMenuTopDown}
                        to={'/'}
                        className= {({isActive}) => isActive ? "active" : ""}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        onClick={closeMenuTopDown}
                        to={'/communication'}
                        className= {({isActive}) => isActive ? "active" : ""}
                        >
                            Communication
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        onClick={closeMenuTopDown}
                        to={'/stocks'}
                        className= {({isActive}) => isActive ? "active": ""}
                        >
                            Stocks
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        onClick={closeMenuTopDown}
                        to={'/fabrication'}
                        className= {({isActive}) => isActive ? "active": ""}
                        >
                            Fabrication
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        onClick={closeMenuTopDown}
                        to={'/paramettres'}
                        className= {({isActive}) => isActive ? "active": ""}
                        >
                            Paramettres
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="footer">About this App</div>
        </StyledHeader>
    )
}

export default Header;