
function getInput() {
    var userMessage = document.getElementById("inputString").value;
    var regex = /\s/gi;
    regexArrayGymnastics(userMessage, regex);
  };

function regexArrayGymnastics(userMessage, regex) {
  var stringAfterReplace = userMessage.replace(regex, '');
  console.log(stringAfterReplace);

  var stringAsArray = stringAfterReplace.split('');
  console.log(stringAsArray);

  var arrayLetters = [];
  var arrayNumbers = [];
  var arrayOperators = [];
  var arraySymbols = [];

  stringAsArray.forEach(function(character) {
    if(character >= 0) {
      arrayNumbers.push(character);
    } else if(character.search(/[A-Za-z]/) >= 0) {
      arrayLetters.push(character);
    } else if(character.search(/[%*+-/]/) >= 0) {
      arrayOperators.push(character);
    } else {
      arraySymbols.push(character);
    }
  });
  console.log(stringAsArray);
  console.log(arrayLetters);
  console.log(arrayNumbers);
  console.log(arrayOperators);
  console.log(arraySymbols);
}

// function display(id) {
//   document.getElementById('id').textContent = id;
// };
