import {React, useContext} from "react";
import ThemeContext from "./ThemeContext";

export default function MainContent(props) {
    //useContext hook 선언
    const {theme, toggleTheme} = useContext(ThemeContext);
    
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                boxSizing: "border-box",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white"
            }}
        >
            <p>현재 페이지는 Dark 또는 Light 테마로 변경 가능합니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    )
};