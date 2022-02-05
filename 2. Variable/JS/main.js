//중복 선언이 가능 + 함수레벨 스코프 + 호이스팅
var varVariavle = '중복 선언 가능'

//재 할당 가능 + 블록레벨 스코프 
let letVarivalbe = '수정 가능';

//재 할당 불 가능 + 블록레벨 스코프
const constVariable = '수정 불가';

console.log(varVariavle);
console.log(letVarivalbe);
console.log(constVariable);