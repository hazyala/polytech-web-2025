import React from "react";
import Card from "./Card";
import './Card.css'

export default function ProfileCard() {
    return (
        <Card title={"AI Specialist"}>
            <p>안녕하세요. 김인공입니다.</p>
            <p>저는 Fullstack 개발자가 되기 위한 공부중입니다.</p>
        </Card>
    )
}