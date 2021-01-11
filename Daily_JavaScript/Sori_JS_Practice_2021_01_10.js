/* 

Practice JavaScript everyday.

https://coderbyte.com/editor/Codeland%20Username%20Validation:JavaScript

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.
  


If the username is valid then your program should return the string true, 
otherwise return the string false.

New Concepts:

regex: /^[0-9a-zA-Z \-'_]+$/,
  Can be used to compare string values and specify what we are 'filtering'.

.match
  I think it loops the string/array to see fi it matches the values in argument. (regex)

if...else statement that is backwards.
  Since this question has a lot of things it needs to pass,
  we stop the loop if one of the conditions reach false.
  So instead of putting the 'true' at top, we put it at the bottom.
  So all the falses needed to be verified first to be passed down. 
*/

function CodelandUsernameValidation(str) { 

//if the Username is <4 or >25, it won't work and return false.
if (str.length <4 || str.length > 25) {
  return false;
  //if the first character is NOT a letter, it cannot be a username.
} else if (!str[0].match(/^[a-zA-Z]+$/)){
  return false; 
}
//if the username contains anything other than numbers, letters, or _ it returns false.
  if (!str.match(/^[0-9a-zA-Z_]+$/)) {
    return false;
}// last character of string cannot be _
  if ((str[str.length - 1]) === '_') {
    return false;
  } // if none of the above is 'true' (actually false qualifies for name)
  //user can use the name as a username.
  return true;
}
console.log(CodelandUsernameValidation(readline()));



//Advanced method(s)

function CodelandUsernameValidation(str) {
  // 'regex' holds the condition of [0]=a-zA-Z
  // and holds condition of all values = letters/numbers/_
  //and the last character cannot be _
  //does *[^_] mean.. cannot be for last character?
  // what does the /g mean? something global?
  const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g
  // if the length is >=4 AND <= 25 AND .test(str) is true?
  return str.length >= 4 && str.length <= 25 && regex.test(str)


