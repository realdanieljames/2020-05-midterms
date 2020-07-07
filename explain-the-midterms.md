# Explain the midterms

## Template
1. do this
2. another thing first
3. then this
4. then this
5. if not done, go back to 3
6. return the result
<hr>
<hr>

## capitalizedSentences


1. make a new area to copy a paragraph into
2. checking each character in the paragraph given(iteration)
3.  if the paragraph's character , 2 spaces back is a period(.), first character of paragraph

4. Add to the result string the character at our current index, but uppercased.
5. Otherwise:
6. Add the lowercase version instead.
7. Return the result

<hr>
<hr>
<br>
<br>



## isValidPassword

1. check to see if the password inputted into the function is less than 12 characters long.
2. if the length of password is found to be less than 12 characters long, return a false value.
3. set an iteration value to 0. while the iteration is less than the length of the password given, continue to to count up by 1 each time until the iteration value, which was set to '0', is now equal to the length of the given password's length.
4. check to see if there is a space ' ' found in the password, while iterating over each character .
5. if there was a space ' ' found while iterating through the password. return false immediately.
6. if there is no space ' ', and if the number of characters in the password is more than 12 characters long, return the value 'true'.

<hr>
<hr>
<br>
<br>



## makeHalfSquares

1. create a place where i can store values. right now it is empty.
2. set a counter to 0, to give a starting point of where to increment from. We will increment +1 each time pass through each character in the given nums parameter. We will only stop the incrementation after our increment counter is the same as the number of characters in the given nums parameter
3. for every incremented character,(numbers in this case), we will square that character(number) by 2, and then divide it by 2, and place the result of each incremented calculation, in the place where we store our new values.
4. after incrementing, calculating and placing the results in the storage area. Show the storage area and its components.

<hr>
<hr>
<br>
<br>


## countAs

1. set a count equal to '0'
2. set an iteration value to '0' also, and use this iteration value to match each character's home address, whether it be '0', '1', '2', '3' ...etc... We will continue to increase the value of the iteration by +1 as long as the iteration's value is less than that of the number of characters in the given grades parameter. 
3. while iterating through the values on the given parameter, check to see if the value of the character(numbers in this case), is greater than 90, or 90 inclusive.
4. if a number is greater than 90, or 90, add +1 to the count value we made earlier. This should keep adding one to count as long as a current value found in the iteration is equal to, or greater than 90.

<hr>
<hr>
<br>
<br>


## deleteMiddleLetters

1. create a place to store values. Call this place 'result'.
2. create a calculation and store it in a place, called middle. This calculation will divide the total number of characters in any word by 2 .
3. set an iteration counter to start at '0', we will continue to add + 1 to the iteration counter and move up 1 space  each time as long as the last character in that word is not met. Iterating through every character in the word.
4. check each value to see if the number of characters in the word is not evenly divided by 2 and our iteration counter 'i' is not equal to our 'middle' calculation where each number is evenly divided by 2.
5. if both the iteration counter 'i' and number of characters in the word is not evenly divided by 2, immediately Add those values to the storage area we made earlier, called 'result'.
6. Otherwise, check if the number of characters in the word IS evenly divided by 2, and our iteration counter, at the same time is not the same as the number of characters divided by 2
7. if both iteration is not equal to our 'middle' calculation and the number of characters in the word is evenly divided by 2, then immediately add that value to our 'result' storage area.
8. after all the looping(iteration) has ceased, show me the contents of the storage area 'result'


<hr>
<hr>
<br>
<br>

## lastIndexOfSpace

1. set an iteration counter to the total number characters in the word passed through the function, this iteration will reduce by 1 decrement as long as the iteration counter is not '0'
2. if the value of the current decrement is equal to a space ' ' immediately return that decrements number.
3. Otherwise, return the value '-1'

<hr>
<hr>
<br>
<br>


## hyphenateName

1. create a storage area named 'result', in order to store values that we may need later.
2. set an incrementing value 'i', to equal '0', to match the the first character in the given name's place value which is also '0'. this incrementation by + 1 will continue until the end of the name is reached.
3. search the given name for the last occurrence of a space value ' ' using the method 'lastIndexOf()'  
4. If a space was found as a result of step 4's search, add a hyphen '-' to represent that space ' ' in the new storage area named 'result'.
5. otherwise:
6. if there is no space ' ' indicated in that place's value, add that value to the storage area named 'result'.
7. when lopping through each character is complete and the iteration ceases, return to me the 'result' storage area and contents within it.
