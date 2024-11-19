""" 
You are given a 0-indexed array of unique strings words.

A palindrome pair is a pair of integers (i, j) such that:

0 <= i, j < words.length,
i != j, and
words[i] + words[j] (the concatenation of the two strings) is a 
palindrome
.
Return an array of all the palindrome pairs of words.

You must write an algorithm with O(sum of words[i].length) runtime complexity.

 

Example 1:

Input: words = ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are ["abcddcba","dcbaabcd","slls","llssssll"]
Example 2:

Input: words = ["bat","tab","cat"]
Output: [[0,1],[1,0]]
Explanation: The palindromes are ["battab","tabbat"]
Example 3:

Input: words = ["a",""]
Output: [[0,1],[1,0]]
Explanation: The palindromes are ["a","a"]
 

Constraints:

1 <= words.length <= 5000
0 <= words[i].length <= 300
words[i] consists of lowercase English letters.
"""

class Solution:
    def palindromePairs(self, words: List[str]) -> List[List[int]]:
        def isPal(w, st, end):
            while st < end:
                if (w[st] != w[end]): return False
                st += 1
                end -= 1
            return True

        N = len(words)
        output = []
        lookup = { w:i for i, w in enumerate(words) }

        for i in range(N):
            w = words[i]

            if w == "":
                for j in range(N):
                    if i != j and isPal(words[j], 0, len(words[j]) - 1):
                        output.append([i, j])
                        output.append([j, i])
                continue

            bw = w[::-1]
            if bw in lookup and lookup[bw] != i:
                output.append([i, lookup[bw]])

            for k in range(1, len(w)):
                if isPal(w, 0, k - 1) and w[k:][::-1] in lookup:
                    output.append([lookup[w[k:][::-1]], i])
                if isPal(w, k , len(w) - 1) and w[:k][::-1] in lookup:
                    output.append([i, lookup[w[:k][::-1]]])

        return output