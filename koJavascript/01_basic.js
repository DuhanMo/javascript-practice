/*변수 가지고 놀기
중요도: 2
admin과 name이라는 변수를 선언하세요.
name에 값으로 "John"을 할당해 보세요.
name의 값을 admin에 복사해 보세요.
admin의 값을 alert 창에 띄워보세요. "John"이 출력되어야 합니다.
해답
*/
let admin;
let name = 'John';
admin = name;
alert(admin);
/*
올바른 이름 선택하기
중요도: 3
현재 우리가 살고있는 행성(planet)의 이름을 값으로 가진 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
웹사이트를 개발 중이라고 가정하고, 현재 접속 중인 사용자(user)의 이름(name)을 저장하는 변수를 만들어보세요. 
변수 이름은 어떻게 지어야 할까요?
해답
*/
let outPlanet = 'Earth';
let currentUserName = 'John';
/*
대문자 상수 올바로 사용하기
중요도: 4
아래 코드를 평가해 보시기 바랍니다.

const birthday = '18.04.1982';

const age = someCode(birthday);
위 코드의 상수 birthday는 태어난 날짜 정보를 담고 있습니다. age라는 상수는 나이에 관한 값을 담고 있는데 
birthday를 조작하여 그 값을 도출합니다(생일을 이용하여 나이를 도출하는 코드는 간결성을 위해 여기선 언급하지 않겠습니다. 
이 문제에서 해당 코드가 중요한 역할을 하지 않기도 합니다).

이런 상황에서 birthday를 대문자 상수로 바꾸는 것이 적절할까요? age 역시 대문자 상수로 바꾸는 것이 괜찮은 선택일까요?

const BIRTHDAY = '18.04.1982'; // 대문자 상수로 바꿔도 괜찮을까요?

const AGE = someCode(BIRTHDAY); // 대문자 상수로 바꿔도 괜찮을까요?
*/
