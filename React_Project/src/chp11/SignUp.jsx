import React from "react";

// 👑 Global CSS (부드러운 흐름 애니메이션 및 기본 여백 제거)
const GlobalStyle = () => (
    <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');
        
        html, body, #root { height: 100%; width: 100%; margin: 0; padding: 0; } 
        body { margin: 0; padding: 0; box-sizing: border-box; }
        
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* ⭐ 핵심: 배경 그라데이션이 느리게 흐르도록 하는 키프레임 ⭐ */
        @keyframes flowGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        `}
    </style>
);


// 👑 보랏빛 황실 스타일 객체 선언
const styles = {
    // 💖 전체 화면 컨테이너 (움직이는 배경)
    fullScreenContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        minHeight: '100vh',

        // ⭐ 배경이 부드럽게 흐르도록 설정
        backgroundSize: '4000% 4000%',
        animation: 'flowGradient 60s linear infinite',
        background: 'linear-gradient(135deg, #8A2BE2 0%, #DA70D6 50%, #ADD8E6 100%)',

        boxSizing: 'border-box',
        fontFamily: "'Noto Sans KR', sans-serif",
        color: '#333',
        overflow: 'auto',
    },

    // 💖 폼 컨테이너
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
        animation: 'fadeInUp 1s ease-out forwards', // 등장 애니메이션
    },
    formHover: {
        transform: 'scale(1.01)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45), 0 8px 15px rgba(0, 0, 0, 0.35)',
    },

    // 💖 폼 제목 (h2) 스타일
    formTitle: {
        color: '#8A2BE2', // 보랏빛
        marginBottom: '30px',
        fontSize: '28px',
        borderBottom: '3px solid #DA70D6', // 핑크색 밑줄
        paddingBottom: '10px',
    },

    // 💖 각 레이블 기본 스타일
    labelStyle: {
        display: 'flex',
        flexDirection: 'column', // 세로로 배치
        alignItems: 'flex-start', // 왼쪽 정렬
        marginBottom: '20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#555',
        padding: '10px 15px',
        borderRadius: '10px',
        backgroundColor: 'rgba(245, 240, 255, 0.5)',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e0e0e0',
        transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.3s, color 0.3s',
        position: 'relative',
        width: '100%',
        maxWidth: '450px',
        boxSizing: 'border-box',
        cursor: 'pointer',
    },
    // 💖 레이블 호버 효과: 상하좌우 커짐 (scale)
    labelHover: {
        backgroundColor: 'rgba(230, 220, 255, 0.8)',
        transform: 'scale(1.02)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        border: '1px solid #D8BFD8',
    },

    // 💖 입력 필드 (input, select, textarea 공통)
    inputField: {
        width: 'calc(100% - 20px)', // 내부 패딩 고려
        padding: '10px',
        marginTop: '8px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '16px',
        color: '#444',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        boxSizing: 'border-box',
        resize: 'vertical', // textarea에만 적용됨
    },
    inputFocus: {
        borderColor: '#8A2BE2', // 보랏빛 강조
        boxShadow: '0 0 8px rgba(138, 43, 226, 0.4)',
        outline: 'none',
    },

    // 💖 제출 버튼 스타일
    submitButton: {
        width: '100%', padding: '15px 20px',
        background: 'linear-gradient(45deg, #8A2BE2 0%, #9932CC 100%)', color: 'white', border: 'none',
        borderRadius: '12px', cursor: 'pointer', fontSize: '20px', fontWeight: 'bold', marginTop: '30px',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease-in-out',
        letterSpacing: '1px', maxWidth: '450px',
    },
    submitButtonHover: {
        background: 'linear-gradient(45deg, #9932CC 0%, #8A2BE2 100%)',
        transform: 'scale(1.05)',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.45)',
    },
    submitButtonActive: {
        transform: 'scale(0.98)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    }
};


function SignUp() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [gender, setGender] = React.useState("여성");
    const [interest, setInterest] = React.useState("");

    // ⭐ 상태 관리를 위한 State 추가
    const [isFormHovered, setIsFormHovered] = React.useState(false);
    const [isSubmitButtonHovered, setIsSubmitButtonHovered] = React.useState(false);
    const [isSubmitButtonPressed, setIsSubmitButtonPressed] = React.useState(false);
    const [focusedInput, setFocusedInput] = React.useState(null); // 어떤 input이 포커스되었는지

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`
           성명 : ${name}
           이메일 : ${email}
           성별 : ${gender}
           관심사 : ${interest}         
       `);
    }

    // ⭐ 최종 스타일 결정 함수
    const getLabelStyle = (field) => ({
        ...styles.labelStyle,
        ...(styles[`is${field}Hovered`] ? styles.labelHover : {}),
    });

    const getFieldStyle = (field) => ({
        ...styles.inputField,
        ...(focusedInput === field ? styles.inputFocus : {}),
    });

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
                style={{...styles.formContainer, ...(isFormHovered ? styles.formHover : {})}}
                onMouseEnter={() => setIsFormHovered(true)}
                onMouseLeave={() => setIsFormHovered(false)}
            >
                <h2 style={styles.formTitle}>회원가입</h2>

                {/* 성명 */}
                <label style={getLabelStyle('Name')}>
                    성명
                    <input
                        type={"text"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setFocusedInput('Name')}
                        onBlur={() => setFocusedInput(null)}
                        style={getFieldStyle('Name')}
                    />
                </label>

                {/* 이메일 */}
                <label style={getLabelStyle('Email')}>
                    이메일
                    <input
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocusedInput('Email')}
                        onBlur={() => setFocusedInput(null)}
                        style={getFieldStyle('Email')}
                    />
                </label>

                {/* 비밀번호 */}
                <label style={getLabelStyle('Password')}>
                    비밀번호
                    <input
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setFocusedInput('Password')}
                        onBlur={() => setFocusedInput(null)}
                        style={getFieldStyle('Password')}
                    />
                </label>

                {/* 성별 (Select는 호버 효과 제외) */}
                <label style={getLabelStyle('Gender')}>
                    성별
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        onFocus={() => setFocusedInput('Gender')}
                        onBlur={() => setFocusedInput(null)}
                        style={getFieldStyle('Gender')}
                    >
                        <option value={"남성"}>남성</option>
                        <option value={"여성"}>여성</option>
                        <option value={"기타"}>기타</option>
                    </select>
                </label>

                {/* 관심사 (Textarea) */}
                <label style={getLabelStyle('Interest')}>
                    관심사
                    <textarea
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        onFocus={() => setFocusedInput('Interest')}
                        onBlur={() => setFocusedInput(null)}
                        style={getFieldStyle('Interest')}
                    ></textarea>
                </label>

                {/* 제출 버튼 */}
                <button
                    type="submit"
                    style={submitButtonFinalStyle}
                    onMouseEnter={() => setIsSubmitButtonHovered(true)}
                    onMouseLeave={() => {
                        setIsSubmitButtonHovered(false);
                        setIsSubmitButtonPressed(false);
                    }}
                    onMouseDown={() => setIsSubmitButtonPressed(true)}
                    onMouseUp={() => setIsSubmitButtonPressed(false)}
                >
                    가입하기
                </button>
            </form>
        </div>
    )
}

export default SignUp;