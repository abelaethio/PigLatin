function pigLatinTranslator(input) {
  // Convert the input to lowercase for easier comparison
  input = input.toLowerCase();

  // Check if the input is empty or a single-letter word
  if (input.length === 0 || input.length === 1) {
    document.getElementById('translation').textContent = "Input can't be translated.";
    return;
  }

  // Split the input into an array of words
  const words = input.split(' ');

  // Define an array to store the translated words
  const translatedWords = [];

  // Iterate over each word
  for (let word of words) {
    let translatedWord = '';

    // Check if the word starts with a vowel
    if (isVowel(word[0])) {
      translatedWord = word + 'way';
    }
    // Check if the word starts with a consonant
    else if (isConsonant(word[0])) {
      // Check if the word starts with two consonants
      if (isConsonant(word[1])) {
        translatedWord = word.slice(2) + word.slice(0, 2) + 'ay';
      } else {
        translatedWord = word.slice(1) + word[0] + 'ay';
      }
    }

    // Add the translated word to the array
    translatedWords.push(translatedWord);
  }

  // Join the translated words back into a sentence
  const translatedSentence = translatedWords.join(' ');

  // Display the translated sentence
  document.getElementById('translation').textContent = translatedSentence;
}

// Helper function to check if a character is a vowel
function isVowel(character) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(character);
}

// Helper function to check if a character is a consonant
function isConsonant(character) {
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  return consonants.includes(character);
}

function translate() {
  const input = document.getElementById('input').value;
  pigLatinTranslator(input);
}

