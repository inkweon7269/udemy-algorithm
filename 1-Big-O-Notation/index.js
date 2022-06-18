/*
    1. Big O Notation 개념
    - 알고리즘의 효율성을 표기해주는 표기법이다. 쉽게 생각하면 알고리즘 스카우터라고 생각하면 된다.
    - 빅오 표기법은 알고리즘의 시간 복잡도와 공간 복잡도를 나타내는대 사용된다.
    - 시간 복잡도는 알고리즘의 시간 효율성을 의미하고, 공간 복잡도는 알고리즘의 공간 효율성을 의미한다.
    - 시간과 공간 복잡도를 나타내는 방법으로는 점근 표기법이라고 해서 빅오 외에 빅오메가, 빅세타 표기법이 있다.

    2. 측정 방법
    - 측정 기준으로는 크게 시간 복잡도와 공간 복잡도가 있다.
    - 시간 복잡도는 연산 횟수를 기준, 공간 복잡도는 차지하는 메모리 기준이다.
    - 코드가 실행될 때 걸리는 정확한 시간을 초로 측정하는 것보다는 컴퓨터가 처리해야하는 연산 갯수를 세면 된다.

    3. 시간 복잡도 시각화 위젯
    - https://rithmschool.github.io/function-timer-demo/
*/



/*
    시간 복잡도
    - 시간 복잡도란 연산 횟수를 기준으로 측정한다.
*/
// 예시 1 : NUM을 입력하면 1 ~ NUM까지 숫자를 하나씩 더하는 공식을 만들어 보시오
// 여기서 포인트는 num이 커질수록 연산의 갯수도 비례적으로 늘어난다.
// 예시에서는 =, ++, + 등 중복 포함 총 5개의 연산 작업이 들어가게 된다. 이 경우 연산  5num + 2 보다 높을 수 있다. (반복문 안에는 연산이 약 5개, 반복문 밖에는 연산이 약 2개 )
// 이를 Big O로 표기하면 O(5n)
// 빅오 표기법은 데이터 입력값(n)이 충분히 크다고 가정하고 있고, 알고리즘의 효율성 또한 데이터 입력값(n)의 크기에 따라 영향 받기 때문에 상수항 같은 사소한 부분은 무시한다.
// O(5n) -> O(n)
function addUpTo1(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
// 방법 2 : *, +, / 연산 과정이 3번만 들어간다.
// 이를 Big O로 표기하면 O(1)
// 이는 연산 횟수가 일정하다는 의미이다.
function addUpTo2(n) {
    return (n * (n + 1)) / 2
}

let num1 = 3
// console.log(addUpTo1(num1));
// console.log(addUpTo2(num1));




// O(n)
function countUpAndDown(n) {
    console.log('Going up!');
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log('At the top! Going Down...');
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log('Back down. Bye!');
}

// countUpAndDown(10)


// 중첩일 경우에는 표기 방법 O(n * n) or O(n제곱);
function printAllPairs(n) {
    for (let i =0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// printAllPairs(10)



// Big O : O(n)
// 5보다 작으면 1, 2, 3, 4, 5를 출력
function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i ++) {
        console.log(i);
    }
}

// Big O : O(1)
// 5보다 크면 1, 2, 3, 4, 5 출력
// num이 커지더라도 반복 횟수는 제한적이기 때문에 영향이 없다.
function logAtMost5(n) {
    for (let i = 1; i <= Math.min(5, n); i ++) {
        console.log(i);
    }
}

// logAtLeast5(5);
// logAtMost5(10);




/*
   공간 복잡도
   - 메모리 기준이다.
   - 불변공간 : 입력의 크기 변화가 없는 상태 (boolean, numbers, undefined, null)
   - O(n) : 문자열, 객체 배열 (문자열은 문자열의 길이)
 */


// 예시 1 : O(1)
// 입력의 크기에 상관없이 공간은 항상 일정하다. (total = 0, i = 0)
const arr1 = [1, 2, 3, 4 ,5];

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}
console.log(sum(arr1));



// 예시 2 : O(n)
// 배열의 크기는 입력된 배열의 크기에 비례해서 커진다.
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }

    return newArr;
}

console.log(double(arr1));





/*

    로그 (Logarithms)
    - 로그는 천문학에서 엄청나게 큰 숫자를 표기하기 위해 만든 것이다.
    - O(log n) 시간 복잡도 (Big-O의 로그 n이라고 읽는다)
    - 로그 시간 복잡도는 시간 복잡도가 증가하는 속도가 느리므로 매우 좋은 사례이다.
    - 참고 자료 : https://makemethink.tistory.com/110
*/



/*
    객체의 Big O
    - insertion : O(1)
    - Removal : O(1)
    - Searching : O(n)
    - Access : O(1)

    객체의 메서드
    - Keys() : O(n)
    - values : O(n)
    - entries : O(n)
    - hasOwnProperty : O(1)
*/



/*
    배열의 Big O
    - 삽입이나 삭제를 할 경우 인덱스의 위치가 조장이 되어야하기 때문에...
    - insertion : 상황에 따라
    - removal : 상황에 따라
    - searching : O(n)
    - Access : O(1)


    - push() : O(1)
    - pop() : O(1)
    - shift : O(n)
    - unshift : O(n)
    - concat : O(n)
    - slice : O(n)
    - splice : O(n)
    - sort : O(N * log N)
    - forEach/map/filter/reduce/etc... : O(n)
 */