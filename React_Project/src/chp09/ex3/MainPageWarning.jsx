import React, {useState} from "react";
import WarningBanner from "./WarningBanner";

function MainPageWarning() {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(prevshowWarning => !prevshowWarning);
    }

    return (
        <div>
            <WarningBanner warning={showWarning}/>
            <button onClick={handleToggleClick} className={`toggle-button ${showWarning ? 'Hide' : 'Show'}`}>
                {showWarning ? 'Hide' : 'Show'}
            </button>
        </div>
    );
}


export default MainPageWarning;