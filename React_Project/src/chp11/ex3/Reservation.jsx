import React from "react";

// 👑 보랏빛 황실 스타일 객체 선언 (상하좌우 대칭 호버)
const styles = {
    // 💖 전체 화면을 채우는 컨테이너 (배경색/그라데이션이 꽉 찹니다.)
    fullScreenContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // 세로축 중앙 정렬 유지
        paddingTop: '0',
        paddingBottom: '0',
        paddingLeft: '0',
        paddingRight: '0',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #8A2BE2 0%, #DA70D6 50%, #ADD8E6 100%)',
        boxSizing: 'border-box',
        fontFamily: "'Noto Sans KR', sans-serif",
        color: '#333',
        overflow: 'auto',
    },
    // 💖 폼 컨테이너 (높이 Auto, 중앙 정렬)
    formContainer: {
        width: '100%',
        padding: '40px',
        border: 'none',
        borderRadius: '25px',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3), 0 5px 10px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        transition: 'transform 0.4s ease-out, box-shadow 0.4s ease-out',
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '550px',
    },
    // 폼 호버 시 효과 (작은 폼일 경우 유용)
    formHover: {
        // ⭐⭐ 폼 컨테이너도 중앙을 기준으로 살짝 커지도록 변경
        transform: 'scale(1.01)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45), 0 8px 15px rgba(0, 0, 0, 0.35)',
    },
    // 💖 각 레이블 스타일
    labelStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '25px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#555',
        padding: '12px 15px',
        borderRadius: '10px',
        backgroundColor: 'rgba(245, 240, 255, 0.5)',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e0e0e0',
        // ⭐ transition에 transform을 추가하여 부드럽게 커지도록 합니다.
        transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.3s',
        position: 'relative',
        width: '100%',
        maxWidth: '450px',
        boxSizing: 'border-box',
    },
    // 💖 레이블 호버 효과 수정: 상하좌우 대칭 커짐 (scale)
    labelHover: {
        backgroundColor: 'rgba(230, 220, 255, 0.8)',
        // ⭐⭐⭐ 핵심 수정: scale(1.02)로 변경하여 중앙을 기준으로 2% 커집니다.
        transform: 'scale(1.02)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // 그림자를 더 진하게 하여 입체감 부여
        border: '1px solid #D8BFD8',
    },
    // 💖 제출 버튼 스타일
    submitButton: {
        width: '100%', padding: '15px 20px',
        background: 'linear-gradient(45deg, #8A2BE2 0%, #9932CC 100%)', color: 'white', border: 'none',
        borderRadius: '12px', cursor: 'pointer', fontSize: '20px', fontWeight: 'bold', marginTop: '30px',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
        // ⭐ transition에 transform을 추가하여 부드럽게 커지도록 합니다.
        transition: 'all 0.3s ease-in-out',
        letterSpacing: '1px', maxWidth: '450px',
    },
    // 💖 제출 버튼 호버 스타일 수정: 상하좌우 대칭 커짐 (scale)
    submitButtonHover: {
        background: 'linear-gradient(45deg, #9932CC 0%, #8A2BE2 100%)',
        // ⭐⭐⭐ 핵심 수정: scale(1.05)로 변경하여 중앙을 기준으로 5% 커지도록 더욱 드라마틱하게 합니다.
        transform: 'scale(1.05)',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.45)', // 더 강한 그림자
    },
    // 💖 제출 버튼 클릭 시 (눌리는 느낌)
    submitButtonActive: {
        // 눌릴 때는 scale을 줄여서 들어가는 느낌을 유지합니다.
        transform: 'scale(0.98)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    }
    // ... 나머지 스타일은 동일하게 유지 ...
};

// ... GlobalStyle 코드는 동일하게 유지 ...
const GlobalStyle = () => (
    <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');
        html, body, #root { height: 100%; width: 100%; margin: 0; padding: 0; } 
        body { margin: 0; padding: 0; box-sizing: border-box; }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        `}
    </style>
);


function Reservation() {
    const [haveBreakfast, setHaveBreakfast] = React.useState(true);
    const [numberOfGuest, setNumberOfGuest] = React.useState(2);

    // ⭐ 각 요소별 호버/포커스 상태 관리 (동일하게 유지)
    const [isFormHovered, setIsFormHovered] = React.useState(false);
    const [isBreakfastLabelHovered, setIsBreakfastLabelHovered] = React.useState(false);
    const [isGuestLabelHovered, setIsGuestLabelHovered] = React.useState(false);
    const [isGuestInputFocused, setIsGuestInputFocused] = React.useState(false);
    const [isSubmitButtonHovered, setIsSubmitButtonHovered] = React.useState(false);
    const [isSubmitButtonPressed, setIsSubmitButtonPressed] = React.useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`아침식사 여부 : ${haveBreakfast ? '포함' : '미포함'}, 방문객 수 : ${numberOfGuest}`);
    }

    // ⭐ 최종 스타일 결정 (isFormHovered 로직 재활용)
    const formFinalStyle = {
        ...styles.formContainer,
        ...(isFormHovered ? styles.formHover : {}),
    };

    const breakfastLabelFinalStyle = {
        ...styles.labelStyle,
        ...(isBreakfastLabelHovered ? styles.labelHover : {}),
    };

    const guestLabelFinalStyle = {
        ...styles.labelStyle,
        ...(isGuestLabelHovered ? styles.labelHover : {}),
    };

    const guestInputFinalStyle = {
        ...styles.inputNumber,
        ...(isGuestInputFocused ? styles.inputNumberFocus : {}),
    };

    const submitButtonFinalStyle = {
        ...styles.submitButton,
        ...(isSubmitButtonHovered ? styles.submitButtonHover : {}),
        ...(isSubmitButtonPressed ? styles.submitButtonActive : {}),
    };

    return (
        <div style={styles.fullScreenContainer}>
            <GlobalStyle />
            <form
                onSubmit={handleSubmit}
                style={formFinalStyle}
                // 폼 컨테이너 호버 이벤트 유지
                onMouseEnter={() => setIsFormHovered(true)}
                onMouseLeave={() => setIsFormHovered(false)}
            >
                <label
                    style={breakfastLabelFinalStyle}
                    onMouseEnter={() => setIsBreakfastLabelHovered(true)}
                    onMouseLeave={() => setIsBreakfastLabelHovered(false)}
                >
                    <span>아침식사 여부 :</span>
                    <input
                        type={"checkbox"}
                        checked={haveBreakfast}
                        onChange={(event) => {setHaveBreakfast(event.target.checked)}}
                        style={styles.checkboxInput}
                    />
                </label>
                <label
                    style={guestLabelFinalStyle}
                    onMouseEnter={() => setIsGuestLabelHovered(true)}
                    onMouseLeave={() => setIsGuestLabelHovered(false)}
                >
                    <span>방문객 수 :</span>
                    <input
                        type={"number"}
                        value={numberOfGuest}
                        onChange={(event) => {setNumberOfGuest(parseInt(event.target.value) || 0)}}
                        style={guestInputFinalStyle}
                        onFocus={() => setIsGuestInputFocused(true)}
                        onBlur={() => setIsGuestInputFocused(false)}
                    />
                </label>
                <button
                    type={"submit"}
                    style={submitButtonFinalStyle}
                    onMouseEnter={() => setIsSubmitButtonHovered(true)}
                    onMouseLeave={() => {
                        setIsSubmitButtonHovered(false);
                        setIsSubmitButtonPressed(false);
                    }}
                    onMouseDown={() => setIsSubmitButtonPressed(true)}
                    onMouseUp={() => setIsSubmitButtonPressed(false)}
                >
                    제출하기
                </button>
            </form>
        </div>
    )
}

export default Reservation;