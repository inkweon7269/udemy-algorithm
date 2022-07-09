/*
    퀵 정렬
*/
// 퀵 정렬 헬퍼
function pivot1(arr, start = 0, end = arr.length - 1) {
    function swap1(array, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap1(arr, swapIdx, i);
        }
    }
    swap1(arr, start, swapIdx);
    return swapIdx;
}

// pivot1([4, 8, 2, 1, 5, 7, 6, 3])
// console.log(pivot1([4, 8, 2, 1, 5, 7, 6, 3]));


function quickSort1(arr, left = 0, right = arr.length - 1) {
    if (left <right) {
        let pivotIndex = pivot1(arr, left, right);

        // left
        quickSort1(arr, left, pivotIndex - 1);

        // right
        quickSort1(arr, pivotIndex + 1, right);
    }

    return arr;
}

console.log(quickSort1([100, -10, 4, 6, 9, 1, 2, 5, 3]));

















