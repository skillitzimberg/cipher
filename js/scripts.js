
function getInput() {
    var userMessage = document.getElementById("inputString").value;
    var regex = /\s/gi;
    regexArrayGymnastics(userMessage, regex);
  };

function regexArrayGymnastics(userMessage, regex) {
  var stringAfterReplace = userMessage.replace(regex, '');
  display(stringAfterReplace);

  var stringAsArray = stringAfterReplace.split('');
  display(stringAsArray);

  var arrayLetters = [];
  var arrayNumbers = [];
  var arraySymbols = [];

  stringAsArray.forEach(function(character) {
    if(character >= 0) {
      arrayNumbers.push(character);
    } else if(character.search(/[A-Za-z]/) >= 0){
      arrayLetters.push(character);
    } else {
      arraySymbols.push(character);
    }
  });

}

function display(id) {
  document.getElementById('id').textContent = id;
};
