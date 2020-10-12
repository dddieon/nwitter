# 트위터 클론

사용 기술 : React, Firebase, React-Hooks...

```
<!-- YOU CAN START WITH... -->
npm start run
yarn start
```

## url 링크

<a href="https://dddieon.github.io/nwitter/?#/">바로 보기</a>

## 기능

<ul>
    <li>OAuth 2.0을 통한 구글로그인</li>
    <li>CRUD / Cloud Firestore에 실시간으로 저장</li>
    <li>파일을 데이터베이스의 storage에 저장하고 사진의 url 가져오기</li>
    <li>최신 게시글순으로 보여주기 (.orderBy() 사용)</li>
    <li>유저 닉네임 변경하기</li>
    <li>... 등!</li>
</ul>

<hr>

### `구글 및 깃허브 로그인`

firebase/auth 의 기능으로 구현합니다.
로그인된 유저의 계정정보를 감지합니다.

### `트윗하기`

트윗을 하고(create), 읽어오며(read), 삭제 및 편집(delete, update)할 수 있습니다.<br />
삭제와 편집은 오로지 트윗한 유저만이 할 수 있습니다.<br />
