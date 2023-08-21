# Countify

- Countify display&apos;s the number of characters present and it&apos;s occurence in the string input [FirstName & LastName].

## Logic of the application :

```
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
  };
```

## To replicate the program in the system , perform the following steps :

> git clone git@github.com:Devkant21/Countify.git