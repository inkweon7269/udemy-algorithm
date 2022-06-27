/*
    선택 정렬

    - 버블 정렬과 달리 최소값을 찾아 마지막 순서에 맨 앞에 배치합니다.
    - 진행하면서 가장 작은 요소, 즉 최솟값을 선택하고 맨 앞으로 배치

    - 가장 작은 요소의 인덱스를 담고 잇는 변수를 필요로 한다.

    - O(n제곱)
*/


function selectionSort1(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }

        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }

    return arr;
}

// console.log(selectionSort1([34, 22, 10, 19, 17]));


function selectionSort2(arr) {
    const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }

        if (i !== lowest) {
            swap(arr, i, lowest);
        }
    }

    return arr;
}

console.log(selectionSort2([34, 22, 10, 19, 17]));