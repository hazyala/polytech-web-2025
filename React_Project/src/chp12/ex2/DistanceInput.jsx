import React from "react";

const unitNames ={
    km:"킬로미터",
    mile:"마일"
};

export function DistanceInput(props){
    const handleChange = (event) => {
        props.onDistanceChange(event.target.value);
    }
    return (
        <div className="distance-input-container">
            <legend className="input-label">
                {unitNames[props.unit]} 입력
            </legend>
            <input
                type="text"
                value={props.value}
                placeholder={`${unitNames[props.unit]}를 입력하세요`}
                onChange={handleChange}
                className="input-field"
            />
        </div>
    )
}

