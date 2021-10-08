/***
 * 左右指针
 */
function longestPalindrome(s: string): string {
    let res = '';
    for (let i = 0; i < s.length; i++) {
        // 寻找长度为奇数的回文子串(以当前元素向两边扩散)
        const s1 = palindrome(s, i, i);
        // 寻找长度为偶数的回文子串(以s[i],s[i + 1])向两边扩散
        const s2 = palindrome(s, i, i + 1);
        res = res.length > s1.length ? res : s1;
        res = res.length > s2.length ? res : s2;
    }
    return res;
};

function palindrome(s, l, r) {
    // 左右指针，从s[l]和s[r]向两边扩散，找到最长回文串
    while (l >= 0 && r < s.length && s[l] == s[r]) {
        l--; r++;
    }
    return s.substr(l + 1, r - l - 1);
}