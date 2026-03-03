import React from "react";
import {findAllByDisplayValue} from "@testing-library/dom";

const students=[
    {id:1, name:"김철수", grade:2, major:"인공지능소프트웨어"},
    {id:2, name:"이영희", grade:1, major:"지능형 에너지 설비"},
    {id:3, name:"박민수", grade:2, major:"클라우드컴퓨팅"},
    {id:4, name:"전지효", grade:2, major:"스마트 정보통신"},
    {id:5, name:"박현경", grade:1, major:"메타버스콘텐츠"}
]
function StudentAttendance () {
    return (
        <div>
            <h1>학생 출석부</h1>
            <ul>
                {
                    students.map(students =>
                        (<li key={students.id}> <b>{students.name}</b> - {students.grade}학년 , {students.major}</li>)
                    )
                }
            </ul>
        </div>
    )
}


export default StudentAttendance;