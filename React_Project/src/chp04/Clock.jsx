import React from "react"

function Clock(props) {
    return (
        <div>
            <div className='clock'>
                현재시간 : {new Date().toLocaleTimeString()}
            </div>
        </div>
    )
}

export default Clock;