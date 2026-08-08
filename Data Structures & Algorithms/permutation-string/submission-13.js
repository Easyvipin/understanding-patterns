class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const freq = new Map();

        // Build frequency map
        for (const ch of s1) {
            freq.set(ch, (freq.get(ch) || 0) + 1);
        }

        let left = 0;

        for (let right = 0; right < s2.length; right++) {
            // Character enters the window
            if (freq.has(s2[right])) {
                freq.set(s2[right], freq.get(s2[right]) - 1);
            }

            // Keep window size equal to s1.length
            if (right - left + 1 > s1.length) {
                if (freq.has(s2[left])) {
                    freq.set(s2[left], freq.get(s2[left]) + 1);
                }
                left++;
            }

            // Check current window
            if (
                right - left + 1 === s1.length &&
                [...freq.values()].every(v => v === 0)
            ) {
                return true;
            }
        }

        return false;
    }
}