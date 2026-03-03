import React from "react";

function InputTest() {

    const[inputValue, setInputValue] = React.useState("");

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    //const handelChange2 = (event) => {setInputValue(event.target.value);}

    return (
        <div style={{textAlign:'center'}}>
            <h1 style={{whiteSpace:'nowrap'}}>입력하면 알림창에 입력 내용이 반영됩니다.</h1>
            <input type = "text" onChange={handleChange} placeholder={"입력하세요."}/>
            <h2 id={"result"} style={{whiteSpace:'nowrap'}}> 입력된 내용:{inputValue} </h2>
        </div>
    );
}

export default InputTest;