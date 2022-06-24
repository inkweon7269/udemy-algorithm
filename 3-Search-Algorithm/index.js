/*

    검색 알고리즘

    - 선형 검색
    - 이진 검색
    - 나이브 문자열 검색 알고리즘
    - KMP 문자열 검색 알고리즘

 */


/*
    선형 검색 (Linear Search)
    - 해당 값을 찾을 때까지 계속 확인하는 것
    - 한 번에 하나의 항목을 확인하는 방식
    - indexOf(), includes(), find(), findIndex()
 */


// O(n)
function linearSearch1(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }

    return -1
}

// console.log(linearSearch1([1, 3, 2, 6, 9, 490, 13, 10], 10));


/*
    이진 검색 (Binary Search)

    - 이진 검색은 분류된 배열을 대상으로만 작동하므로 데이터가 분류되어 있어야 한다.
    - 예를 들어 문자열을 알파벳순, 숫자는 낮은 순서 등 무언가를 기준으로 분류된 상태여야 한다.
    - 기본적으로 배열을 중간점을 기준으로 두 분류로 나누어 가면서 검색하는 방식
 */


function binarySearch1(arr, val) {
    let start = 0,
        end = arr.length - 1,
        middle = Math.floor((start + end) / 2);

    while (arr[middle] !== val && start <= end) {
        console.log(start, middle, end);
        // 15 < 6
        if (val < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

        middle = Math.floor((start + end) / 2);
    }

    if (arr[middle] === val) {
        return middle;
    }

    return -1;
}

console.log(binarySearch1([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 15));


/*
    나이브 문자열 검색 (Native String Search)

    - wowomgzomg와 omg : 2개
 */


function nativeSearch(long, short) {
    var count = 0;

    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) {
                console.log('Break');
                break;
            }

            console.log(short[j], long[i + j]);
            if (j === short.length - 1) {
                count++;
            }
        }
    }

    return count;
}

console.log(nativeSearch("lorie loled", "lo"));






























