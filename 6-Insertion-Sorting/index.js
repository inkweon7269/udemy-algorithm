/*

    삽입 정렬

    - 한 번에 하나의 항목을 올바른 위치에 삽입해서 배열의 정렬된 부분을 점진적으로 구축하는 것
    - 첫 번째 요소를 정렬된 부분으로 간주하기 때문에 배열에서 두 번째 요소를 선택하여 시작한다.
    - 두 번째 값을 취해서 앞에 있는 값과 비교한 후 필요하다면 위치를 변경
    - 이후 옆의 요소로 이동하여 계속하여 올바른 위치에 있는지 확인


*/


function insertionSort1(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];

        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currentVal;
        console.log(arr);
    }

    return arr;
}

console.log(insertionSort1([2, 1, 9, 76, 4]));