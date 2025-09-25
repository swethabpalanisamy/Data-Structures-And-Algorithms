class Solution {
    /**
     * @param {number[]} arr
     * @returns {number[]}
     */

    constructor(arr) {
        this.arr = arr;
    }
    // Function to implement selection sort
    selectionSort(arr) {
        // your code here
        for (let i = 0; i < arr.length; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[minIndex] > arr[j]) {
                    minIndex = j;
                }
            }
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        return arr;
    }

}
let arr = [4, 1, 3, 9, 7];
const selectionSortClass = new Solution(arr);
console.log(selectionSortClass.selectionSort(arr));