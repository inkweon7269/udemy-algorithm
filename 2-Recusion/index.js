/*
    재귀

    - 자기 자신을 호출하는 절차
    - 한 가지 문제를 가지고, 어떤 종료점에 도달할 때까지 더 작은 부분이나 변경되는 부분에서 반복적으로 수행하는 것
    - 종료점을 종료 조건 (base case)라고 얘기함
*/


/*
    호출 스택 호출하기
    - 자바스크립트의 보이지 않는 곳에서 작동하는 정적 데이터 구조
*/
function takeShower() {
    return "Showering";
}

function eatBreakfast() {
    const meal = cookFood();
    return `Eating ${meal}`;
}

function cookFood() {
    let items = ["A", "B", "C", "D"];
    return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
    takeShower();
    eatBreakfast();
    console.log('Ok ready to go to work');
}

// debugger;
// wakeUp();






/*
    첫 번째 재귀함수

    - 기본 요소 : 종료 조건, 다른 입력값
 */

function countDown1(num) {
    if (num <= 0) {
        console.log('All done!');
        return;
    }
    console.log(num);
    num--;
    countDown1(num);
}

// debugger;
// countDown1(10);

function countDown2(num) {
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
    console.log('All done!');
}

// countDown2(10);



/*
    두 번쨰 재귀함수
*/

function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

// console.log(sumRange(10));



/*
    반복문으로 팩토리얼 구현하기
*/
function factorial1(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total;
}

// console.log(factorial1(5));


function factorial2(num) {
    if (num === 1) return 1;
    return num * factorial2(num - 1);
}

// console.log(factorial2(5));





/*
    Helper 메서드 재귀

    function outer(input) {
        let outerScopedVariable = [];

        function helper(helperInput) {
            helper(helperInput--)
        }

        helper(input)

        return outerScopedVariable;
    }
 */



function collectOddValues1(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}

// console.log(collectOddValues1([1, 2, 3, 4, 5]));




/*
    순수 재귀

    collectOddValues2 Tips
    - 배열의 경우에는 slice, spread 연산자, concat를 사용하면 배열을 변경할 필요가 없음
    - 문자열의 경우에는 slice, substr, substring을 사용해서 사본을 만들어야 한다.
    - 객체의 경우에는 Object.assign, spread 연산자를 사용하는게 유용하다.
*/

function collectOddValues2(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues2(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues2([1, 2, 3, 4, 5]));



















