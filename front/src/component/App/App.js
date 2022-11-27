import StyledApp from "./StyledApp";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const App = () => {
    return(
        <StyledApp>
            <Header />
            <div className="panel">
                <Outlet />
            </div>
        </StyledApp>
    )
}

export default App;