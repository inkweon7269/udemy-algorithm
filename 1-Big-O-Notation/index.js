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
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// printAllPairs(10)


// Big O : O(n)
// 5보다 작으면 1, 2, 3, 4, 5를 출력
function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

// Big O : O(1)
// 5보다 크면 1, 2, 3, 4, 5 출력
// num이 커지더라도 반복 횟수는 제한적이기 때문에 영향이 없다.
function logAtMost5(n) {
    for (let i = 1; i <= Math.min(5, n); i++) {
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
const arr1 = [1, 2, 3, 4, 5];

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

// console.log(sum(arr1));


// 예시 2 : O(n)
// 배열의 크기는 입력된 배열의 크기에 비례해서 커진다.
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }

    return newArr;
}

// console.log(double(arr1));


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


/*
    문제 해결 방법

    1. 알고리즘
    - 특정 작업을 달성하기 위한 과정이나 일련의 단계를 의미
    - 특정 문제를 해결하기 위한 기초적인 단계

    - 문제해결을 위한 계획 수립 및 세분화
    - 일반적인 문제 해결 패턴 확인


    2. 문제 해결 과정
    - 문제 이해
    - 구체적인 예시 확인
    - 문제를 세분화
    - 문제를 해결하고 이를 단순화
    - 문제를 복습하고 재구성
*/


/*
    문제 이해
    - 자신만의 방식으로 바꿔서 질문이 무엇인지를 이해하는 단계
    - 문제가 어떤 입력값을 담고 있는가?
    - 어떤 출력값이 나와야 하는가?
    - 입력값이 출력값을 결정할 수 있는가?
    - 문제의 일부인 중요한 데이터의 라벨을 어떻게 지정해야 하는가?
 */


/*
    구체적인 예시
    - 간단한 예시로 시작
    - 점점 복잡한 예시로 진행
    - 유효하지 않은 입력값이 주어진 상황을 고려

    charCount("aaaaa");   // { a: 5 };
    charCount("hello");  // { h: 1, e: 1, l: 2, o: 1 };
 */


/*
    문제 세분화
*/

function charCount1(str) {
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string
    // values should be the counts for those characters
}

function charCount2(str) {
    // make object to return at end
    // loop over string, for each character...
    // if the char is a number/letter AND is a key in object, add one to count
    // if the char is a number/letter AND not in object, add it to object and set value to 1
    // if character is something else (space, period, etc.) don't do anything

    // return object at end
}


/*
    문제를 해결하고 단순화
    - 세분화한 문제별로 해결책을 제시
*/
function charCount3(str) {
    // make object to return at end
    let result = {};

    // loop over string, for each character...
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        // if the char is a number/letter AND is a key in object, add one to count
        if (result[char] > 0) {
            result[char]++;

            // if the char is a number/letter AND not in object, add it to object and set value to 1
        } else {
            result[char] = 1;
        }
    }


    // if character is something else (space, period, etc.) don't do anything
    // return object at end

    return result;
}

// console.log(charCount3('hello111!'));


/*
    문제를 복습하고 재구성
*/
function charCount4(str) {
    let result = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }

    return result;
}

// console.log(charCount4('Hello'));

function charCount5(str) {
    let result = {};

    for (let char of str) {
        char = char.toLowerCase();

        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }

    return result;
}

// console.log(charCount5('Hello'));


function charCount6(str) {
    let result = {};

    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            result[char] = ++result[char] || 1
        }
    }

    return result;
}

// console.log(charCount6('Hello'));


function charCount7(str) {
    let result = {};

    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1
        }
    }

    return result;
}

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);

    if (!(code > 47 && code < 58) &&   // 숫자 (0-9)
        !(code > 64 && code < 91) &&   // 대문자
        !(code > 96 && code < 123)) {  // 소문자
        return false;
    }

    return true;
}

// console.log(charCount7('Hello'));


/*
    일반적인 문제 해결 패턴
*/
/*
    Frequency Counter : 빈도 카운터 패턴

    - 빈도 카운터는 보통 객체를 사용한다.
    - 객체를 사용하여 프로파일을 구성하는 것은 배열이나 문자열의 내용을 분석하는 방법으로 보통 배열이나 문자열과 같은 선형 구조를 구성하는 것이다.
    - 그러면 해당 분석을 문자열이나 배열에서 생성된 다른 객체의 형태와 신속하게 비교할 수 있다.
*/


/*
    예시 문제 1
    - 첫 번째 배열 안에 있는 값의 제곱이 두 번째 배열 안에 담겨있는가?
    - 이 때 각 배열의 길이는 동일해야한다.

    - same([1, 2, 3], [4, 1, 9]) true
    - same([1, 2, 3], [1, 9]) false
    - same([1, 2, 1], [4, 4, 1]) false
 */

// O(n제곱)
function same1(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        // indexOf() 기능이 중첩된 루프이다.
        const correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }

    return true;
}

// console.log(same1([1, 2, 3], [1, 4, 9]));

// O(n)
function same2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}


// same2([1, 2, 3], [4, 10, 9]);


/*
* 예시 문제 2
* 아나그램
*
* - validAnagram('', '') // true
* - validAnagram('aaz', 'zza') // false
* - validAnagram('anagram', 'nagaram') // false
* */

function validAnagram1(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of str1) {
        if (isAlphaNumeric(val)) {
            const result = val.toLowerCase();
            frequencyCounter1[result] = (frequencyCounter1[result] || 0) + 1
        }
    }

    for (let val of str2) {
        if (isAlphaNumeric(val)) {
            const result = val.toLowerCase();
            frequencyCounter2[result] = (frequencyCounter2[result] || 0) + 1
        }
    }

    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }

    return true;
}

// console.log(validAnagram1('abc', 'edb'));

function validAnagram2(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const lookup = {};
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    console.log(lookup);

    return true;
}

// console.log(validAnagram2('abc', 'bca'));


/*
    다중 포인터
    - 인덱스나 위치에 해당하는 포인터나 값을 만든 다음 특정 조건에 따라 중간 지점에서부터 시작 지점이나 끝 지점이나 양쪽 지점을 향해 이동시키는 것입니다.
 */

/*
    예시 문제 1
    - 정렬된 배열을 취하는 함수를 작성
    - 정렬된 배열이어야 하며 오름 차순이어야 한다.
    - 한 숫자를 가져와 다른 숫자와 더하면 0이 되는 쌍을 찾는다.
    - 최초 값만 반환한다.

    sumZero([-3, -2, -1, 0, 1, 2, 3])  // [-3, 3]
    sumZero([-2, 0, 1, 3])  // undefined
    sumZero([1, 2, 3])  // undefined
*/

// O(n제곱)
function sumZero1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3, 4]));


function sumZero2(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// console.log(sumZero2([-3, -2, 0, 1, 4]));


/*
    예시 문제 2

    - 다중 포인터나 투 포인터 패턴을 사용
    - 정렬된 배열은 전달하면 고유한 값의 개수를 반환하는 것

    countUniqueValues([1, 1, 1, 2])  // 2
    countUniqueValues([])  // 0
    countUniqueValues([-2, -1, -1, 0, 1])  // 4
 */

function countUniqueValues1(arr) {
    if (!arr.length) {
        return 0;
    }

    const result = new Set(arr);
    return result.size;
}

// console.log(countUniqueValues1([-1, 1, 1, 1, 2]));


function countUniqueValues2(arr) {
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }

        console.log(i, j);
    }

    return i + 1;
}

// console.log(countUniqueValues2([1, 1, 1, 3]));


/*
    기준점 간 이동 배열 패턴 (슬라이딩 윈도우)
    - 배열이나 문자열과 같은 일련의 데이터를 입력하거나 특정 방식으로 연속적인 해당 데이터의 하위 집합을 찾는 경우에 유용
    - 중복이 없는 가장 긴 문자
    "hellothere" -> lother


    - 서로 마주한 두 숫자의 가장 큰 합계를 찾는 것
    maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)  // 10

    // 서로 마주한 4 숫자의 가장 큰 합계
    maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)  // 17
    maxSubarraySum([4, 2, 1, 6], 1)     // 6
    maxSubarraySum([4, 2, 1, 6, 2], 4)  // 13
 */


function maxSubarraySum1(arr, num) {
    if (num > arr.length) {
        return null;
    }

    let max = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;

        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }

    return max;
}

// console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 4))


function maxSubarraySum2(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) {
        return null;
    }

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
        console.log(maxSum);
    }

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

// console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4))


/*
    분할과 정복 패턴 (Divide and Conquer)

    - 정렬된 배열을 취한다는 가정에서 두 번째 인수로 전달한 값의 좌표를 표기
    - 값이 없으면 -1 반환

    - search([1, 2, 3, 4, 5, 6], 4)  // 3
    - search([1, 2, 3, 4, 5, 6], 6)  // 5,
    - search([1, 2, 3, 4, 5, 6], 11) // -1
 */

function search1(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }

    return -1;
}

// console.log(search1([1, 2, 3, 4, 5, 6], 4));
// console.log(search1([1, 2, 3, 4, 5, 6], 11));


function search2(arr, val) {
    let min = 0; // 3, 5
    let max = arr.length - 1;  // 5


    while (min <= max) {
        let middle = Math.floor((min + max) / 2);  // 0 + 5 / 2 -> 3 + 5 / 2, / 5 + 5 / 2
        let currentElement = arr[middle];  // 2, 4, 5

        if (currentElement < val) {
            min = middle + 1;
        } else if (currentElement > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}


console.log(search2([1, 2, 3, 4, 5, 6], 4));
console.log(search2([1, 2, 3, 4, 5, 6], 11));

















