function countLetters(input) {
  var noSpaces = input.split(" ").join("").toLowerCase();
  var letterCount = {};

  for (var i = 0; i < noSpaces.length; i++) {
    if (letterCount[noSpaces[i]]) { // does curr letter exist in obj
      letterCount[noSpaces[i]]++ // exists, add 1 to value of current letter (which is the key of the object)
    } else { // if it doesnt exist, create new key (current letter) in obj
      letterCount[noSpaces[i]] = 1
    }
  }

  return letterCount;
}

console.log(countLetters("lighthouse in the house"));
