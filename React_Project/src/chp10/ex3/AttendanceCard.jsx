import React from "react";
import './AttendanceCard.css';
import img8 from './img/8.jpg'

const students=[
    {id:1, name:"김철수", grade:2, major:"인공지능소프트웨어",avatar:"https://randomuser.me/api/portraits/men/1.jpg"},
    {id:2, name:"이영희", grade:1, major:"지능형 에너지 설비",avatar:"https://randomuser.me/api/portraits/women/2.jpg"},
    {id:3, name:"박민수", grade:2, major:"클라우드컴퓨팅",avatar:"https://randomuser.me/api/portraits/men/3.jpg"},
    {id:4, name:"전지효", grade:2, major:"스마트 정보통신",avatar:"https://randomuser.me/api/portraits/women/4.jpg"},
    {id:5, name:"박현경", grade:1, major:"메타버스콘텐츠",avatar:"https://randomuser.me/api/portraits/men/5.jpg"},
    {id:6, name:"홍정민", grade:2, major:"인공지능소프트웨어",avatar:"https://randomuser.me/api/portraits/women/6.jpg"},
    {id:7, name:"방신실", grade:2, major:"스마트정보통신",avatar:"https://randomuser.me/api/portraits/men/7.jpg"},
    {id:8, name:"윤이나", grade:2, major:"기계시스템디자인",avatar:img8}
]

function AttendanceCard(props){
    return(
        <div className="attendance-container">
            <h2 className={"attendance-title"}>학생 출석부</h2>
            <div className={"card-container"}>
                {
                    students.map((student) => (
                            <div className={"student-card"} key={student.id}>
                                <img src={student.avatar} alt={student.name} className={"student-avatar"}/>
                                <div className={"student-info"}>
                                    <h3>{student.name}</h3>
                                    <p>{student.grade}학년 - {student.major}전공</p>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );

    // const sectionStyle = {border: '2px solid #6c757d', borderRadius: '10px', padding: '10px', margin: '0 0 10px 0', backgroundColor: '#f8f9fa',flexBasis: '23%',boxSizing: 'border-box'};
    // const hStyle = { color: '#0056b3', borderBottom: '2px solid #0056b3', paddingBottom: '30px' };
    // const listStyle = {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'};
    //
    // return (
    //     <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
    //         <h1 style={{ textAlign: 'center', color:"darkblue" }}>학생출석부</h1>
    //         <div style= {listStyle}>
    //             {
    //                 students.map((student )=>(
    //                     <div style={sectionStyle}>
    //                         <img src={student.avatar} alt={student.name} style={{width: '100%', borderRadius: '10px'}}/>
    //                         <div>
    //                             <h3 style={hStyle}>{student.name}</h3>
    //                             <p style={hStyle}>{student.grade}학년 - {student.major}전공</p>
    //                         </div>
    //                     </div>
    //                 ))
    //             }
    //         </div>
    //     </div>
    // )
}

export default AttendanceCard;