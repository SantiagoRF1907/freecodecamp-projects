const userInput = document.getElementById("user-input");
const output = document.getElementById("results-div");

const arrayToNum = (arr) => arr.map(Number);

const checkIfArrOnlyNo = (arr) => {
  let element = arr[0];
};

const checkPhoneNo = () => {
  let phoneNoArrAsStr = userInput.value.split("");
  let phoneNoArrAsNo = arrayToNum(phoneNoArrAsStr);

  console.log("Phone as string: " + phoneNoArrAsStr);
  console.log({ phoneNoArrAsNo });

  if (userInput.value === "") {
    output.innerText = "Please eneter a phone number";
    return output.innerText;
  } else if (
    phoneNoArrAsStr.length === 14 &&
    phoneNoArrAsNo[1] === 0 &&
    phoneNoArrAsStr[5] === "-" &&
    phoneNoArrAsStr[9] === "-" &&
    phoneNoArrAsNo[0] === 1
  ) {
    output.innerText = `Valid US number: ${userInput.value}`;
  } else if (
    phoneNoArrAsStr.length === 16 &&
    phoneNoArrAsNo[0] === 1 &&
    phoneNoArrAsNo[1] === 0 &&
    phoneNoArrAsStr[2] === "(" &&
    phoneNoArrAsStr[6] === ")"
  ) {
    output.innerText = `Valid US number: ${userInput.value}`;
  } else if (phoneNoArrAsStr.length === 10) {
  }
};

const clearInput = () => {
  output.innerText = "";
};
