import React, {useState} from "react";

// ===========================================
// 👑 Global CSS (부드러운 흐름 애니메이션 및 기본 여백 제거)
// 이 스타일은 <style> 태그로 렌더링되어 전체 페이지에 적용됩니다.
const GlobalStyle = () => (
    <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');
        
        /* 브라우저 기본 여백 제거 및 화면 꽉 채우기 보장 */
        html, body, #root { height: 100%; width: 100%; margin: 0; padding: 0; } 
        body { margin: 0; padding: 0; box-sizing: border-box; }
        
        /* 배경 그라데이션이 느리게 흐르도록 하는 키프레임 */
        @keyframes flowGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        /* BoilVerdict 메시지 등장 애니메이션 */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        `}
    </style>
);


// ===========================================
// 👑 스타일 객체 정의
const styles = {
    // 💖 전체 화면 컨테이너 (움직이는 배경)
    fullScreenContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        minHeight: '100vh',

        backgroundSize: '4000% 4000%',
        animation: 'flowGradient 60s linear infinite',
        background: 'linear-gradient(135deg, #8A2BE2 0%, #DA70D6 50%, #ADD8E6 100%)',

        boxSizing: 'border-box',
        fontFamily: "'Noto Sans KR', sans-serif",
        color: '#333',
        overflow: 'auto',
    },

    // 💖 Fieldset 컨테이너 스타일
    fieldsetContainer: {
        width: '100%',
        maxWidth: '500px',
        margin: '20px',
        padding: '50px',
        border: 'none',
        borderRadius: '15px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        position: 'relative',
        zIndex: 10,
    },

    // 💖 Legend 스타일 (제목)
    legendStyle: {
        fontSize: '22px',
        fontWeight: 'bold',
        backgroundColor: 'white',
        color: '#8A2BE2',
        padding: '5px 15px',
        marginBottom: '20px',
        borderBottom: '3px solid #DA70D6',
        borderRadius: '10px',
        textAlign: 'center',
        width: 'auto',
    },

    // 💖 입력 필드 스타일
    inputStyle: {
        width: 'calc(100% - 20px)',
        padding: '15px 10px',
        borderRadius: '10px',
        border: '2px solid #ccc',
        fontSize: '20px',
        textAlign: 'center',
        color: '#444',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        boxSizing: 'border-box',
    },

    // 💖 입력 필드 포커스 스타일
    inputFocus: {
        borderColor: '#8A2BE2',
        boxShadow: '0 0 10px rgba(138, 43, 226, 0.5)',
        outline: 'none',
    },

    // 💖 BoilVerdict 결과 메시지 스타일
    verdictMessage: {
        marginTop: '25px',
        padding: '15px',
        borderRadius: '10px',
        fontWeight: 'bold',
        fontSize: '18px',
        textAlign: 'center',
        animation: 'fadeIn 0.5s ease-out forwards', // 등장 애니메이션 적용
    },

    // 물이 끓을 때 (긍정/빨간색 계열)
    verdictBoil: {
        backgroundColor: 'rgba(255, 99, 71, 0.15)',
        color: '#FF6347',
        border: '1px solid #FF6347',
    },

    // 물이 끓지 않을 때 (부정/파란색 계열)
    verdictNotBoil: {
        backgroundColor: 'rgba(70, 130, 180, 0.15)',
        color: '#4682B4',
        border: '1px solid #4682B4',
    }
};


// ===========================================
// 👑 BoilVerdict 컴포넌트 (스타일 적용)
const fadeInKeyframes = {
    animation: 'fadeIn 0.5s ease-out forwards',
};

function BoilVerdict(props) {
    // ⭐ 논리 흐름은 이미 공주마마의 코드를 따르고 있으며, style만 적용합니다.
    if (props.celcius >= 100) {
        return (
            <p
                style={{
                    ...styles.verdictMessage,
                    ...styles.verdictBoil,
                    ...fadeInKeyframes
                }}
            >
                물이 끓습니다.
            </p>
        );
    }

    return (
        <p
            // className={"not-boiling"} 대신 스타일 객체 적용
            style={{
                ...styles.verdictMessage,
                ...styles.verdictNotBoil,
                ...fadeInKeyframes
            }}
        >
            물이 끓지 않습니다.
        </p>
    );
}

// ===========================================
// 👑 ConfrimBoilVerdict 컴포넌트 (메인)
function ConfrimBoilVerdict() {
    const [temperature, setTemperature] = useState("");
    const [isInputFocused, setIsInputFocused] = useState(false); // 포커스 상태 추가

    const handleTemperature = (e) => {
        // 입력이 숫자가 아닌 다른 문자가 들어오면 무시
        const value = e.target.value;
        if (/^\d*$/.test(value) || value === "") {
            setTemperature(value);
        }
    };

    const inputFinalStyle = {
        ...styles.inputStyle,
        ...(isInputFocused ? styles.inputFocus : {}),
    };

    return (
        <div style={styles.fullScreenContainer}>
            <GlobalStyle />
            <fieldset style={styles.fieldsetContainer}>
                <legend style={styles.legendStyle}>섭씨 온도를 입력하세요</legend>
                <input
                    type={"number"}
                    value={temperature}
                    onChange={handleTemperature}
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                    style={inputFinalStyle}
                />

                {/* 숫자로 변환된 temperature를 BoilVerdict에 전달 */}
                <BoilVerdict celcius={parseInt(temperature)} />
            </fieldset>
        </div>
    )
}

export default ConfrimBoilVerdict;