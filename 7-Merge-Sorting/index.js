/*
    학습 목표

    - O(n제곱) -> O(n log n)으로 개선하는 방법
    - merge sort
    - quick sort
    - radix sort
*/

/*
    Merge Sort (분할 정복 알고리즘)

    - 분할, 정렬, 합병이 일어나는 조합
    - 배열을 더 작은 배열로 나누는 방식

    // 분할
    - 1단계 : [8, 3, 5, 4, 7, 6, 1, 2]
    - 2단계 : [8, 3, 5, 4] | [7, 6, 1, 2]
    - 3단계 : [8, 3] | [5, 4] | [7, 6] | [1, 2]
    - 4단계 : [8] | [3] | [5] | [4] | [7] | [6] | [1] | [2]

    // 정렬과 합병
    - 5단계 : [3, 8] | [4, 5] | [6, 7] | [1, 2];
    - 6단계 : [3, 4, 5, 8] | [1, 2, 6, 7]
    - 7단계 : [1, 2, 3, 4, 5, 6, 7, 8]


    작동 방식
    - O(n + m) 시간, O(n + m) 공간
    - n과 m은 첫 번째 배열의 크기과 두 번째 배열의 크기를 의미
*/

// 두 배열이 서로 다른 값을 취하면서 양쪽 모두 순차적으로 정렬이 되어 있는 경우
function merge1(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // arr1, arr2의 배열 길이가 다를 경우 어느 배열 안에는 데이터가 남게 된다.
    // 해당 배열 안에 남은 데이터를 삽입하는 코드
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// console.log(merge1([1, 10, 50], [2, 14, 99, 100]));
// console.log(merge1([], [1, 3]));
// console.log(merge1([100], [1, 2, 3, 4]));


// 정렬 (1)
function mergeSort1(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort1(arr.slice(0, mid));
    let right = mergeSort1(arr.slice(mid));

    return merge1(left, right);
}

console.log(mergeSort1([10, 24, 76, 73, 72, 1, 9]))



































