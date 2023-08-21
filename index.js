document.addEventListener("DOMContentLoaded", function () {
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("surName");
  const countButton = document.getElementById("countButton");
  const resultElement = document.getElementById("result");

  countButton.addEventListener("click", function () {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    const firstNameFrequency = countLetterFrequency(firstName);
    const lastNameFrequency = countLetterFrequency(lastName);

    displayFrequency(firstNameFrequency, "First Name", resultElement);
    displayFrequency(lastNameFrequency, "Last Name", resultElement);

    // Clear the input fields after submitting
    firstNameInput.value = "";
    lastNameInput.value = "";
  });

  function countLetterFrequency(text) {
    text = text.toLowerCase();
    const fname = text.split("");
    const hashMap = {};

    for (let i = 0; i < fname.length; i++) {
      if (!hashMap[fname[i]]) {
        hashMap[fname[i]] = 1;
      } else {
        hashMap[fname[i]] += 1;
      }
    }

    return hashMap;
  }

  function displayFrequency(letterFrequency, title, containerElement) {
    const sortedLetters = Object.keys(letterFrequency).sort();

    const titleElement = document.createElement("h2");
    titleElement.textContent = `${title} Letter Frequency:`;
    containerElement.appendChild(titleElement);

    for (let letter of sortedLetters) {
      const count = letterFrequency[letter];
      const letterCountElement = document.createElement("p");
      letterCountElement.textContent = `${letter}: ${count} time(s)`;
      containerElement.appendChild(letterCountElement);
    }
  }
});
