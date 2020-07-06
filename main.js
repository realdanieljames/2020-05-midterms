
const capitalizeSentences =  function(paragraph){
  let result = '';
  
  for (let i = 0; i < paragraph.length; i++){
    if(paragraph[i -2] === '.' || i === 0) {
      result = result + paragraph[i].toUpperCase();
    }
    else {
      result = result + paragraph[i].toLowerCase();
    }
  }
  return result;
}



const isValidPassword =  function(password) {
  if (password.length < 12) {
    return false;
  }

  for (let i = 0; i < password.length; i ++) {
    if (password[i] === ' ' ){
      return false;
    }
  }
  return true
}


const makeHalfSquares = function(nums) {
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    results.push(nums[i] ** 2 / 2);
  }
  return results; 
}





const countAs = function(grades) {
  let count = 0;
  for (let i = 0; i < grades.length; i ++) {
    if (grades[i] >= 90) {
      count = count + 1;
    }
  }
  return count;
}




const deleteMiddleLetters = function(str) {
  let result = '';
  const middle  = Math.floor(str.length / 2);
  for (let i = 0; i < str.length; i ++) {
    if (str.length % 2 === 1 && i !== middle) {
      result = result + str[i];
    } else if (str.length % 2 === 0 && i !== middle && i !== middle - 1) {
      result = result + str[i]
    }
  }
  return result;
}


const lastIndexOfSpace =  function(str) {
  for (let i = str.length - 1; i >= 0; i --) {
    if (str[i] === ' ') {
      return i;
    }
  }
  return -1
}




const hyphenateName = function(name) {
  let result = '';
  for(let i = 0; i < name.length; i ++){
    if (i === name.lastIndexOf(' ')) {
      result =  result + '-';
    } else {
      result = result + name[i];
    }
  }
  return result;
}












//__________________________________________________________________//
//__________________________________________________________________//



if (typeof capitalizeSentences === 'undefined') {
  capitalizeSentences = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof makeHalfSquares === 'undefined') {
  makeHalfSquares = undefined;
}

if (typeof countAs === 'undefined') {
  countAs = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof lastIndexOfSpace === 'undefined') {
  lastIndexOfSpace = undefined;
}

if (typeof hyphenateName === 'undefined') {
  hyphenateName = undefined;
}


module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
}
