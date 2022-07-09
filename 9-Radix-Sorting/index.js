/*
    지금까지 살펴본 모든 정렬들은 비교 정렬 알고리즘이라는 그룹에 속한다.

    - 주어진 시간에 시간에 비교하는 최대량

    - Radix Sorting
    - 두 개의 수를 크다, 작다와 같은 기준으로 정렬하는 것이 아닌 다른 방식으로 데이터를 정렬
    - 비교를 수행하지 않는 특별한 정렬 알고리즘이고 숫자로 작동한다.
    - 보통, 실제로 사용할 때는 이진수를 이용합니다.
    - 숫자 뿐 아니라 문자열이나 이미지를 가져와 이진 형식으로 바꿀 수도 있습니다.

    - 그리고 950이나 17과 같은 십진법으로 변환하고 숫자 크기에 대한 정보를 자릿수로 인코딩한다는 사실을 이용한다.
 */

// Radix helper

/*
    수와 위치를 가져온 다음 그 위치의 숫자를 반환합니다.
    0 번째부터 시작합니다.
 */
// getDigit(12345, 0) // 5
// getDigit(12345, 1) // 4
// getDigit(12345, 2) // 3
// getDigit(12345, 3) // 2
// getDigit(12345, 4) // 1
// getDigit(12345, 5) // 0
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// console.log(getDigit(7323, 2));



// 주어진 숫자 목록에 몇 번 실행해야 할지 알아낼 코드가 필요
// 그 기준은 가장 큰 숫자의 자릿수가 얼마나 되는지 확인
// digitCount(7323) : 4
// digitCount(28) : 2
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(7323));

// 최대 자릿수를 파악하는 코드
// mostDigits([1234, 56, 7]) : 4
// mostDigits([1, 1, 11111, 1]) : 5
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }

    return maxDigits;
}

// console.log(mostDigits([23, 567, 123412, 90]));



function radixSort1(nums) {
    let maxDigitCount = mostDigits(nums);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            const digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }

    return nums;
}

console.log(radixSort1([23, 345, 5467, 12, 2345, 9852]));




















