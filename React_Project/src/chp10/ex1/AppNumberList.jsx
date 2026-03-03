import React from "react";

function AppNumberList() {
    const numbers=[1,2,3,4,5];
    return (
        <div>
            <h1>숫자 리스트</h1>
            <NumberList numbers={numbers}></NumberList>
        </div>
    )
}

function NumberList(props) {
    const numbers=props.numbers;
    const listItems=numbers.map((number)=>
    <li key={number.toString()}> {number} </li>) // key 값을 안주면, 오류는 아니지만 경고 발생 (키값 = DB 칼럼명과 유사하다고 생각해도 됨)
    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default AppNumberList;