# Priject
간단한 블록체인 만들기
- VS Code로 개발
- JavaScript 사용
- TypeScript 사용
- Node.JS 사용
- 인터페이스를 통해 블록 틀 형성
- 이전 해쉬, 길이, 데이터로 해시 값 생성
- 모든 블록을 새 배열로 반환

---

# Tech Stack
| Tech         | Content                                                                                                                                                                                                                     |
| :----------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Language**  | ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) |
|**Framework**|![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=flat&logo=node.js&logoColor=white) |
| **IDE**       | ![VScode](https://img.shields.io/badge/VScode-blue?logo=vscode&logoColor=white)  |
|   **Tools**   | ![Notion](https://img.shields.io/badge/-Notion-000000?logo=notion&logoColor=white) ![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white)              |

---

![image](https://github.com/user-attachments/assets/2f293c32-3228-459d-9797-57e1aff30c6f)

---

# TypeScript 기본 문법

 ### 데이터 타입

 - 명시적으로 알려주기
   - number : 정수
   - string : 문자열
   - boolean : 참 거짓
   - array : 배열
 - Optional 속성
   - `변수 명?` // 없을 수도 있음
 - 별칭 타입
```
Type Player = {
	name: string,
	age?: number
}

const min : Player = {
	name: "min"
}

const soo : Player = {
	name: "soo",
	age : 30
}
```
 - return
     - 객체 리터럴 축약 문법 : 키와 값이 같은 이름을 가질 때 축약 가능
 - readonly
   - readonly 변수 명 // 읽기만 가능하고 수정은 불가능 함 
 - Tuple
   - array를 생성할 수 있고 최소한의 길이가 있고 특정 위치에 특정 타입이어야만 함 
 - Null/Undefined
    - 선택적 타입(?)은 undefined이 될 수 있음
```
let a : undefined = undefined
let b : null = null
```
 - any
   - TS에서 빠져나올 때 쓰는 타입 = 모든 것을 비활성화시킴 
 - void
   - 아무것도  return하지 않음
   - 함수 안에 return이 없으면 :void를 붙어지 않아도 TS가 void로 처리함
 - never
    - 절대 return하지 않을 때 사용 
 - unknown
    - 타입 확인이 필요함

### 함수
- 명시적 타입 지정
```
  function add(a:number, b:number) {
	return a+b // number 타입을 return
}
```
- 화살표 함수
```
const add = (a:number, b:number) => a+b
```

- Function Signature
  - 함수 함수 위에 마우스를 올리면 보이는 것 : 함수를 어떻게 호출하는지,  return 타입도 알려줌
- 오버로딩
  - 함수가 서로 다른 여러 개의 Function Signature를 가지고 있을 때 발생
- 다형성
  - 다양한 타입의 배열을 처리할 수 있도록 구현
- 제네릭
  - 인자의 타입을 정확히 모를 때 사용
  - 함수가 처리할 배열의 타입을 동적으로 지정 가능
 
### 클래스
- private : 클래스 외부에서 접근할 수 없음
- public  :  기본 접근 제어자이며, 클래스 외부에서도 접근할 수 있음
- 추상 클래스 : 인스턴스를 생성할 수 없으며, 다른 클래스에서 상속받아 사용해야 함
- 추상 메서드 : - 추상 클래스 내에 선언, 상속받는 클래스에서 반드시 구현해야 함

### 인터페이스
- 오브젝트(객체)의 모양을 특정해주는 것 = 객체의 형태를 정의하는 데 사용
- 확장
    - 다른 인터페이스를 상속받거나 확장할 수 있음
- 합병
    - 여러 개의 인터페이스를 정의하고 이를 자동으로 병합할 수 있음
    - 같은 이름의 인터페이스가 여러 번 정의되면 TS는 이를 하나로 합침
