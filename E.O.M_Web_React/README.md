# Echo of Movement — React 화면

React 버전의 공개 배포 주소는 아직 확인되지 않았다. [원본 정적 화면 데모](https://hazyala.github.io/polytech-web-2025/)와 [React 실행 안내](#실행)를 확인할 수 있다.

“움직임이 곧 브랜드가 되는 순간”을 홈페이지로 옮긴 E.O.M의 React 버전.

댄서 포트폴리오·모집·행사·연습 파트너를 SHOW·CAST·HYPE·LINK 섹션으로 구성한다. 기존 정적 버전의 디자인과 컨셉을 페이지·공통 컴포넌트·custom hook으로 나눴다. 성능 개선 수치를 측정한 프로젝트로 소개하지 않는다.

![홈 화면](README/1.png)

## 화면을 구성하는 코드

`App.jsx`는 ThemeProvider와 BrowserRouter 안에 공통 Header/Footer, `/` Home과 `/login` Login route를 둔다. `ThemeContext`는 localStorage의 theme을 읽고 HTML data-theme과 저장 값을 갱신한다. `UseTypewriter`는 Hero의 타이핑 효과, framer-motion은 섹션·폼 전환에 사용한다.

Login은 입력값과 alert를 처리하는 UI다. 서버 인증·토큰·사용자 DB는 없으므로 로그인 완료 alert를 실제 가입·인증 결과로 보지 않는다.

| 역할 | 기술 |
|---|---|
| 화면 | React 19, React DOM |
| route | react-router-dom 7, BrowserRouter |
| 상태 | Context, useState/useEffect, localStorage |
| 애니메이션 | framer-motion 12, custom hook |
| 빌드 | Create React App / react-scripts 5 |

```text
src/
├── components/   공통 버튼·Header·Footer
├── context/      전역 테마
├── hooks/        테마 접근·타이핑 효과
├── pages/home/   Hero·Show·Cast·Hype·Link
├── pages/login/  로그인·회원가입 화면
└── styles/       전역 스타일·애니메이션
```

## 실행

저장소 루트에서 이동한다. Node.js와 npm이 필요하며 고정 runtime 버전 파일은 없다.

```bash
cd E.O.M_Web_React
npm ci
npm start
```

기본 개발 주소는 localhost:3000이다. `npm run build`는 이 폴더의 build를 생성한다. package.json의 homepage는 이전 독립 저장소 `/E.O.M_Web_React` 경로이며 BrowserRouter는 PUBLIC_URL을 basename으로 사용한다. 해당 기존 주소는 현재 404다. 공개 React 데모를 만들려면 별도 배포와 homepage/PUBLIC_URL 경로 설정이 필요하다. 통합 저장소 root workflow는 정적 폴더만 배포한다.

## 기존 화면 기록

[화면 2](README/2.png) · [화면 3](README/3.png) · [화면 4](README/4.png) · [화면 5](README/5.png) · [화면 6](README/6.png) · [화면 7](README/7.png)

“We don’t just move. We echo.”라는 기존 컨셉은 유지한다. 게시글 서비스·실제 인증은 이 frontend에 포함되어 있지 않다.
