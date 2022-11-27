import StyledHeader from "./StyledHeader";
import menuImg from "../../assets/imgs/menu.png";
import { NavLink } from "react-router-dom";

const Header = ()=>{
    return(
        <StyledHeader>
            <div className="research"><input placeholder="research" /></div>
            <div className="menuIcon"><img alt="menu icon" src={menuImg}/></div>
            <div className="menu">
                <ul>
                    <li>
                        <NavLink
                        to={'/'}
                        className= {({isActive}) => isActive ? "active" : ""}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to={'/communication'}
                        className= {({isActive}) => isActive ? "active" : ""}
                        >
                            Communication
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to={'/stocks'}
                        className= {({isActive}) => isActive ? "active": ""}
                        >
                            Stocks
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to={'/fabrication'}
                        className= {({isActive}) => isActive ? "active": ""}
                        >
                            Fabrication
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
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