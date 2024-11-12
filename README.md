# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

##Review 
The recurrence relation I had was 3T(n/3) + n and then my time complexity is O(n log n) and I got a runtime of 4s in the succesful test, this is similar to the time complexity of merge sort. The reason for this complexity is that while the array is split into three sub-arrays instead of two, the total work done at each level of recursion is still linear ( O(n) ), and the depth of the recursion tree is logarithmic, resulting in  O(n log n)  overall. When you are asking about the work being done, it is when I am summing the 3 parts in my code, it is a constant time of O(1) since it is just the sum of 3 numbers. The +n copmes from the dividing of the of the array into three sub arrays. 

The Sources I used was the Github co-pilot when my first test failed and it mentioned recursion and my base cases needed looked at. I also looked at a stackflow example to get a idea of the code. https://stackoverflow.com/questions/26344144/divide-and-conquer-algorithm-for-sum-of-integer-array 

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
