function cipher() {
  var userMessage = getUserMessage();
  var firstLast = firstAndLastLetters(userMessage);
  var upperCase = makeUpperCase(firstLast);
  var reversed = reverseString(upperCase);
  var joined = joinStrings(userMessage, upperCase);
  var middleChar= findMiddleChar(joined);

  display(joinStrings(middleChar, joined));
};

function getUserMessage() {
  var userMessage =
    prompt("Enter your message to be scrambled.");

  return userMessage;
};

function display(displayMessage) {
  document.getElementById('displayResults').innerHTML =
    displayMessage;
};

function firstAndLastLetters(anyString) {
  var firstLast =
      anyString.charAt(0) +
      anyString.charAt(anyString.length-1);

  return firstLast;
};

function makeUpperCase(anyString) {
  var upperCase = anyString.toUpperCase();

  return upperCase;
};

function reverseString(anyString) {
  var reversed = anyString.split("").reverse().join("");

  return reversed;
};

function joinStrings(string1, string2) {
  var joinedStrings = string1 + string2;

  return joinedStrings;
};

function findMiddleChar(anyString) {
  var stringLength = anyString.length;

  return anyString.charAt(stringLength/2);
};

cipher();
