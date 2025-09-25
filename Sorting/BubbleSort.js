/**
 * @param {number[]} arr
 */
class Solution {

    constructor(arr) {
        this.arr = arr;
    }
    bubbleSort(arr) {
        // code here
        for (let i = 0; i < arr.length; i++) {
            let swapped = false;
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;

                }
            }
            if (!swapped) break;
        }
        return arr;
    }
}
let arr = [4, 1, 3, 9, 7];
const bubbleSortClass = new Solution();
console.log(bubbleSortClass.bubbleSort(arr));