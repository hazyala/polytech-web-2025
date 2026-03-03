import React, {useRef, useState} from "react";

//custom hook(사용자 정의 훅):useState hook 을 사용
function useCounter(initialValue) {
    //컴포넌트가 마운트되었을 때, 업데이트 되었을 때
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => count - 1);

    return [count, increaseCount, decreaseCount]
}

export default useCounter;