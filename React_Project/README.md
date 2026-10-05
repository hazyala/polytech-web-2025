# React 챕터별 실습

컴포넌트·props·state·hook·event·조건부 렌더링·목록·form·context를 챕터별로 정리한 Create React App 프로젝트.

`src/chp02`부터 `src/chp15`까지 예제를 보관한다. 현재 실제 entry인 `src/index.js`는 `chp15/Blocks`를 렌더링한다. 기본 `App.js` 템플릿 화면이나 모든 챕터를 한꺼번에 제공하는 메뉴가 아니다.

```bash
cd React_Project
npm ci
npm start
```

저장소 루트 기준이다. package.json의 react-scripts가 개발 서버·빌드·테스트를 실행한다. `npm run build`는 정적 build를 만든다. 수업 중 다른 예제를 볼 때 index.js의 선택 컴포넌트를 바꾸던 구조다.

이 프로젝트에는 REST API·DB·독립 서비스 배포가 없다. E.O.M 화면은 [별도 하위 프로젝트](../E.O.M_Web_React/README.md)에서 확인한다.
