import React from "react";
import {DistanceInput} from "./DistanceInput";
import './Distance.css';

function toKilometers(miles){
    return miles * 1.60934;
}

function toMiles(km){
    return km / 1.60934; // = km * 0.621
}

function tryConvert(distance,convert){
    const input = parseFloat(distance);
    if(isNaN(input)){
        return "";
    }
    const output = Math.round(convert(input)*1000)/1000;
    return output.toString();
}

export function DistanceConverter() {
    const [distance,setDistance] = React.useState("");
    const [unit,setUnit] = React.useState("km");

    const handleKilometerChange = (distance) => {
        setDistance(distance);
        setUnit("km");
    };

    const handleMileChange = (distance) => {
        setDistance(distance);
        setUnit("mile");
    };

    // const kilometers = unit === "mile" ? toKilometers(parseFloat(distance)) : distance;
    // const miles = unit === "km" ? toMiles(parseFloat(distance)) : distance;

    // const kilometers = unit === "mile" ? Math.round(toKilometers(parseFloat(distance))*1000)/1000 : distance;
    // const miles = unit === "km" ? Math.round(toMiles(parseFloat(distance))*1000)/1000 : distance;

    const kilometers = unit === "mile" ? tryConvert(distance, toKilometers) : distance;
    const miles = unit === "km" ? tryConvert(distance, toMiles) : distance;

    return (
        <div className="converter-container">
            <h1 className="converter-title">거리 단위 변환기</h1>
            <div className="input-group">
                <DistanceInput
                    unit={"km"}
                    distance={Math.round(kilometers*1000)/1000}
                    onDistanceChange={handleKilometerChange}
                />
                <DistanceInput
                    unit={"mile"}
                    distance={Math.round(miles*1000)/1000}
                    onDistanceChange={handleMileChange}
                />
            </div>
            <div className="result-box">
                <p>
                    {kilometers}km는 {miles}마일입니다.
                </p>
            </div>
        </div>
    )
}

