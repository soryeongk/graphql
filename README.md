# 찌니를 위한 간단 사용 설명서

## 실행 방법
1. git clone
2. yarn
3. yarn start
4. http://localhost:3000/graphql로 접속

## 명세서

#### member 한명씩 조회
id 값을 넘겨주고, 필요한 필드값을 입력하면 됩니다.
```graphQL
{
  getGqlMember(id: "e877dbd0472163d7f268") {
    id
    name
    part
  }
}
```

#### 멤버 추가
처음에 아무것도 들어있지 않아서 멤버 추가를 먼저 해줘야 조회가 가능
```graphQL
mutation {
  addGqlMember(newInput : {
    name: "soryeongk"
    part: WEB
  }) {
    id
  }
}
```

#### 멤버 정보 수정
patch가 아닌 put으로 작동..
하나만 변경되더라도 정보를 다 넣어줘야함,,
id와 함께 변경될 새로운 정보를 전달해주면 업데이트 해줌

```graphQL
mutation {
  updateGqlMember(id: "d8eb4b78220d8b857d6d" modified : {
    name: "soryeongk"
    part: SERVER
  }) {
    id
    name
    part
  }
}
```

#### 멤버 삭제
id를 전달해주면 해당 내용 삭제됨
삭제 성공 여부와 관련없이 잘 삭제되었다는 메시지가 나오는데, 확인하려면 query 한 번 더 요청해야함

```graphQL
mutation {
  deleteX(id: "d8eb4b78220d8b857d6d")
}
```
