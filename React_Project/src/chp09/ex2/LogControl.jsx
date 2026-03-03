import React from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Greeting from "../ex1/Greeting";

function LogControl(props) {
    const[isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    let button;

    if(isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />
    }
    else{
        button = <LoginButton onClick={handleLoginClick} />
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    );
}

export default LogControl;