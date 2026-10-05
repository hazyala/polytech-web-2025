# E.O.M 웹 화면과 React 수업 기록

스트릿 댄서 커뮤니티 E.O.M의 정적 화면·React 구현과 HTML/React 수업 예제를 모은 저장소.

![E.O.M React 기존 화면](E.O.M_Web_React/README/1.png)

## E.O.M 두 구현

댄서로 활동했던 경험에서 출발해 공연·연습 파트너, 포트폴리오와 행사 정보를 모으는 화면을 만들었다. 원래 HTML/CSS/JavaScript 버전의 컨셉과 SHOW·CAST·HYPE·LINK 섹션을 React 페이지와 컴포넌트로 옮겼다.

| 위치 | 프로젝트 |
|---|---|
| [E.O.M_WEB](E.O.M_WEB/README.md) | 정적 홈페이지와 로그인 화면 |
| [E.O.M_Web_React](E.O.M_Web_React/README.md) | React·Router·Context·framer-motion 구현 |
| [React_Project](React_Project/README.md) | 챕터별 hook·event·form·context 수업 예제 |
| `HTML_Project/` | 날짜별 HTML/CSS/JS 실습 |

이 저장소의 E.O.M은 화면 프로토타입이다. 게시글 CRUD·DB·실제 로그인 서버는 [별도 Spring Boot 저장소](https://github.com/hazyala/e.o.m-springboot)에 있으며 이 코드와 자동 연동된 것으로 설명하지 않는다.

## 실행·배포 위치

React 버전은 해당 하위 폴더에서 `npm ci`, `npm start`를 사용한다. 정적 버전은 HTML을 열거나 로컬 HTTP 서버로 확인한다. 각 폴더 README에 실행 절차가 있다.

`.github/workflows/deploy.yml`은 `main` push 시 `E.O.M_WEB/`만 GitHub Pages artifact로 올린다. React build를 같은 workflow가 배포하는 구조가 아니다. 이전 독립 저장소 URL과 현재 통합 저장소의 배포 경로를 구분하고 가동 여부를 추정하지 않는다.
