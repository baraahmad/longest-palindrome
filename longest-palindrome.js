//First we need to create a function to check if the string has palindromic sub string
function isPalindromic(str){
  let revStr= str.split("").reverse().join("");
  return(str==revStr);
}

//Now we need to check for the longest palindrome

function longestPalindrome(str){
  let maxLength = 0;
  let maxPalStr;
  
  for(let i=0; i<str.length; i++){
    let sub= str.substr(i, str.length);
    
    for(j=sub.length; j>=0; j--){
      let sub_sub= sub.substr(0,j);
      if(sub_sub <=1)
        continue;
      if(isPalindromic(sub_sub)){
         if(sub_sub.length > maxLength){
        maxLength=sub_sub.length;
        maxPalStr= sub_sub;
      }
     }
    }
  }
return maxPalStr;
}

console.log(longestPalindrome("forgeeksskeegfor"));
