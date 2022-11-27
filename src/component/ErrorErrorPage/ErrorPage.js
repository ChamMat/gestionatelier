import { useRouteError, Link } from "react-router-dom";
import StyledErrorPage from "./StyledErrorPage";

const ErrorPage = () => {

    const error = useRouteError();

    return(
        <StyledErrorPage>
            <p className="sorry">Sorry</p>

            <div>
                <p>A error has occured:</p>
                <p className="messageError"><i>{error.statusText || error.message}</i></p>
            </div>

            <Link className="return" to={"/"}>Return Home</Link>

        </StyledErrorPage>
    )
}

export default ErrorPage;