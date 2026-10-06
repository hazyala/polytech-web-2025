# Echo of Movement — 정적 웹 버전

[웹 데모](https://hazyala.github.io/polytech-web-2025/)

댄서 활동 경험에서 출발한 스트릿 댄서 커뮤니티 홈페이지. 공연·연습 파트너 구인, 포트폴리오 공유, 이벤트 정보를 SHOW·CAST·HYPE·LINK 섹션으로 표현한다.

`index.html`은 홈, `login.html`은 로그인 화면이며 CSS·JavaScript와 기존 이미지로 구성한다. 사용자 DB·API backend 없이 동작하는 정적 화면이다.

저장소 루트에서 로컬 서버를 연다.

```bash
python3 -m http.server 8000 --directory E.O.M_WEB
```

localhost:8000에 접속한다. npm 빌드가 필요한 프로젝트는 아니다. root의 GitHub Actions는 이 폴더를 Pages artifact로 배포하도록 설정되어 있다. 공개 주소는 현재 통합 저장소의 Pages URL을 사용한다.

React로 옮긴 구현은 [React Edition](../E.O.M_Web_React/README.md)에 있다.
