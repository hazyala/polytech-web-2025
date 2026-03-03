import React from "react";

function LogoutButton(props) {
    return (
        <button onClick={props.onClick} style={{backgroundColor: 'green', color: 'white'}}>
            로그아웃
        </button>
    );
}

export default LogoutButton;