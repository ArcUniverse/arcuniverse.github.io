const wordsToReplace = ['Heroes', 'Bugs', 'Existentialism', 'Heartbreak', 'Resolve', 'Zombies', 'Capes', 'Siblings', 'Dads'
, 'Heavy-handed Symbolism', 'Circles', 'Small Town America' , 'Public Transportation', 'Arches', 'The Minimum Wage', 'Theology', 
'Shakes & Fries', 'Werewolves', 'Scarabs', 'Homecoming' ];
let wordIndex = 0;

function updateWord() {
  const additionalWord = document.getElementById("additionalWord");
  additionalWord.textContent = wordsToReplace[wordIndex];
  wordIndex = (wordIndex + 1) % wordsToReplace.length;
}

setInterval(updateWord, 1000);