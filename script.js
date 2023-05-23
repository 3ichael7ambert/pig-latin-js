function convert() {
      var conversionType = document.getElementById("conversionType").value;
      var inputText = document.getElementById("inputText1").value;
      var result = "";

      if (conversionType === "englishToPigLatin") {
        result = convertEnglishToPigLatin(inputText);
      } else if (conversionType === "pigLatinToEnglish") {
        result = convertPigLatinToEnglish(inputText);
      }

      document.getElementById("result").textContent = result;
    }

    function convertEnglishToPigLatin(text) {
      var words = text.toLowerCase().split(" ");
      var convertedWords = [];

      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var pigLatinWord = "";

        if (isVowel(word[0])) {
          pigLatinWord = word + "-yay";
        } else {
          var consonantCluster = "";
          var j = 0;

          while (j < word.length && !isVowel(word[j])) {
            consonantCluster += word[j];
            j++;
          }

          pigLatinWord = word.substring(j) + "-" + consonantCluster + "ay";
        }

        convertedWords.push(pigLatinWord);
      }

      return convertedWords.join(" ");
    }

    function convertPigLatinToEnglish(text) {
      var words = text.toLowerCase().split(" ");
      var convertedWords = [];

      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var englishWord = "";

        if (word.endsWith("-yay")) {
          englishWord = word.substring(0, word.length - 4);
        } else {
          var hyphenIndex = word.lastIndexOf("-");
          var consonantCluster = word.substring(hyphenIndex + 1, word.length - 2);
          var remainingLetters = word.substring(0, hyphenIndex);

          englishWord = consonantCluster + remainingLetters;
        }

        convertedWords.push(englishWord);
      }

      return convertedWords.join(" ");
    }

    function isVowel(letter) {
      return /[aeiou]/.test(letter);
    }