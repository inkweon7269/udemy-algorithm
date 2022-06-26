/*
    정렬 알고리즘

    - 15가지 정렬 알고리즘 : https://youtu.be/kPRA0W1kECg
    - 알고리즘 애니메이션 : https://www.toptal.com/developers/sorting-algorithms
*/


/*
    sort()
    - 자바스크립트 내장 정렬
    - 배열 안의 데이터가 문자열인 경우에는 배열의 모든 항목이 문자열로 변환되고 해당 문자열의 유니코드 값이 선택되고 그걸 기준으로 정렬이 된다.
    - 하지만 배열 안의 데이터가 숫자인 경우에는 다르게 정렬 된다.

    - 인수로 두 개의 값을 받게 되는데 편의상 a, b라고 지칭하겠다.
    - 만약 a - b 값이 음수가 나오게 되면 a가 b보다 앞에 있다고 결정한다.
    - 만약 양수가 나오게 되면 b가 a보다 앞에 있다고 결정한다.
    - 만약 0을 반환하면 a와 b일 동일한 값이다.
*/


function numberCompare(num1, num2) {
    return num1 - num2;
}

function compareByLen(str1, str2) {
    return str1.length - str2.length;
}

// console.log([23, 45, 1, 6, 12, 13].sort(numberCompare));
// console.log(["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen));


/*
    버블 정렬

    - 다루기 좋은 주제이며 알고리즘을 이해하기 좋지만 추천하지 않는다.
    - 배열을 가장 작은 숫자 -> 큰 숫자로 정렬한다면 큰 숫자가 한 번에 하나씩 뒤로 이동하는 방식이다.
    - VISUALGO : https://visualgo.net/en
*/


// Swap
function swap1(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function swap2(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}


function bubbleSort1(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// console.log(bubbleSort1([37, 45, 29, 8]));



function bubbleSort2(arr) {
    const swap2 = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i -1; j++) {
            swap2(arr, j, j + 1);
        }
    }

    return arr;
}


// console.log(bubbleSort2([37, 45, 29, 8]));





/*
    버블 정렬 최적화

    - 이미 어느정도 정렬이 된 배열 안의 데이터를 부분적으로 수정하는 경우 최적화가 필요
 */

function bubbleSort3(arr) {
    var noSwaps;

    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }

        if (noSwaps) break;
    }

    return arr;
}


// console.log(bubbleSort3([8, 1, 3, 5, 6, 7]));




/*
    버블 정렬 : 시간 복잡도

    - 일반적으로는 O(n제곱)
    - noSwap이 있는 경우에는 선형 시간에 더 가깝다. O(n)
 */









