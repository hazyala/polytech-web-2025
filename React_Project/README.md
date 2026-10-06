# React 챕터별 화면 실습

컴포넌트 props, 상태·hook, 이벤트, 조건부 렌더링, 입력 폼과 Context를 작은 화면으로 실습한 CRA 프로젝트.

## 만든 화면과 코드

| 위치 | 다루는 동작 |
|---|---|
| `src/chp04`·`chp05` | 시계·버튼·댓글·책 목록, 자식 컴포넌트에 props 전달 |
| `src/chp06`·`chp07` | 알림 목록, Counter와 `useCounter` hook |
| `src/chp08`·`chp09` | toggle·입력·확인 이벤트, 로그인 상태별 버튼·경고 배너 |
| `src/chp12` | 온도 판정과 거리 변환 입력을 연결한 화면 |
| `src/chp13`·`chp14` | 공통 Card 합성, ThemeContext를 통한 테마 공유 |
| `src/chp15/Blocks.jsx` | 현재 entry가 렌더링하는 Blocks 화면 |

`src/index.js`는 `Blocks`를 `React.StrictMode` 안에 렌더링한다. 다른 챕터 화면은 해당 컴포넌트를 import하고 entry의 렌더링 대상으로 선택하는 실습 구조다.

## 실행

저장소 루트에서:

```bash
cd React_Project
npm ci
npm start
```

`npm run build`는 `build/`에 정적 파일을 만든다. 서버 API·DB는 없으며 E.O.M 화면은 [E.O.M React](../E.O.M_Web_React/README.md)에서 별도로 실행한다.
