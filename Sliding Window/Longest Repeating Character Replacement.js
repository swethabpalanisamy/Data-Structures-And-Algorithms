/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let left = 0
    let set = new Set(s);
    let max = 0;
    for (let char of set) {
        let count = 0;
        let l = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === char) {
                count++;
            }
            while (i - l + 1 - count > k) {
                if (s[l] === char) {
                    count--;
                }
                l++;
            }
            max = Math.max(i - l + 1, max);
        }
    }
    return max;
};