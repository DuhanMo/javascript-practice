// null 병합 연산자
// let height = 0;

// alert(height || 100); // 100
// alert(height ?? 100); // 0
let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// let nickName = null;


// null이나 undefined가 아닌 첫 번째 피연산자
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// null 병합 연산자 ??를 사용하면 피연산자 중 ‘값이 할당된’ 변수를 빠르게 찾을 수 있습니다.

// ??는 변수에 기본값을 할당하는 용도로 사용할 수 있습니다.

// // height가 null이나 undefined인 경우, 100을 할당
// height = height ?? 100;
// ??의 연산자 우선순위는 대다수의 연산자보다 낮고 ?와 = 보다는 높습니다.

// 괄호 없이 ??를 ||나 &&와 함께 사용하는 것은 금지되어있습니다.