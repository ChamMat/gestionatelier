import { createBrowserRouter } from "react-router-dom";

import App from "./component/App/App";
import ErrorPage from "./component/ErrorErrorPage/ErrorPage";
import Chat from "./component/Chat/Chat";
import Accueil from "./component/Accueil/Accueil";
import Stock from "./component/Stock/Stock";
import Fabrication from "./component/Fabrication/Fabrication";
import Paramettres from "./component/Paramettres/Paramettres";
import Chanel from "./component/Chanel/Chanel";


const router = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            path:"/",
            element: <Accueil />
        },
        {
            path: "/communication",
            element: <Chat />,
            children: [
                {
                    path:"/communication/:chanelName",
                    element:
                        <Chanel />
                }
            ]
        },
        {
            path: "/stocks",
            element: <Stock />
        },
        {
            path: "/fabrication",
            element: <Fabrication />
        },
        {
            path: "/paramettres",
            element: <Paramettres />
        }
    ]
    }
]
)

export default router;