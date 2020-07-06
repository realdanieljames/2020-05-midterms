
function capitalizeSentences(sentence) {
  let result = ''
  let lower = sentence.toLowerCase()
  let space = ' '
  let period = '.'
  for (let i = 0; i < sentence.length; i++) {
    if (lower[i] === period) {
      let upThisCharacter  = i + 2
      upThisCharacter = upThisCharacter.toUpperCase()
    }
  }
  return (upThisCharacter)
}


// const word = capitalizeSentences('Binge-watching is the best. why would you pause. when you can just. keep. going.')




function isValidPassword(password) {
  properPassword = '';
  
}
return password
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
