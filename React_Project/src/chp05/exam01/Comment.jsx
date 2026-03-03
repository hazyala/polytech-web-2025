import React from "react";
import UserInfo from "./UserInfo";
import "./Comment.css";

const users = [
    {
        name: "장원영",
        comment: "초긍정 마인드, 럭키비키",
        avatarUrl: "https://cdn.pixabay.com/photo/2024/08/29/13/12/music-9006995_1280.jpg"
    },
    {
        name: "안유진",
        comment:"상견례 프리패스, 모두의 호감형",
        avatarUrl: "https://cdn.pixabay.com/photo/2024/08/29/13/12/music-9006995_1280.jpg"
    },
    {
        name: "카리나",
        comment:"AI가 만든 듯한 아름다움",
        avatarUrl:"https://cdn.pixabay.com/photo/2024/08/29/13/12/music-9006995_1280.jpg"
    }
];

function Comment(props) {
    const currentDate=new Date();
    return (
        <div>
            {
                users.map((user) => {
                    return (
                        <div className="comment">
                            <UserInfo user={user} />
                            <div className="comment-text">
                                {user.comment}
                            </div>
                            <div className="comment-date">
                                {currentDate.toDateString()}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Comment;