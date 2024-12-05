const textInputElement = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
const ignore = [" ", "_", ",", ".", ";", ":"];

function checkForPalindrome() {
  let originalText = textInputElement.value;

  if (originalText === "") {
    alert("Please input a value");
    return;
  } else {
    let text = originalText.toLowerCase().split("");
    text = text.filter((character) => character !== ignore.forEach((i) => i));
    console.log(`Original text: ${text}`);

    const reversedText = text.reverse().join();
    text = text.join();
    console.log({ text });
    console.log({ reversedText });

    const isPalindrome =
      reversedText === text
        ? `${originalText} is a Palindrome`
        : `${originalText} is not a Palindrome`;

    console.log(isPalindrome);

    resultDiv.innerText = isPalindrome;
    return isPalindrome;
  }
}
