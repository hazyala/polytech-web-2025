import React, {useState} from "react";
import BoilVerdict from "./BoilVerdict";

function ConfrimBoilVerdict() {
    const [temperature, setTemperature] = useState("");
    const handleTemperature = (e) => {setTemperature(e.target.value);};

    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요</legend>
            <input type={"number"} value={temperature} onChange={handleTemperature}/>
            <BoilVerdict celcius={parseInt(temperature)} />
        </fieldset>
    )
}

export default ConfrimBoilVerdict;