// Code your solutions in this file
const cards = writeCards(["Guadalupe", "Ollie", "Aki"]);

function writeCards(names) {
    const cards = names.map((name) => `Thank you, ${name}, for the wonderful surprise gift!`
    );
    return cards;
  }
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  function countDownLog(number) {
    for (let i = number; i >= 0; i--) {
      console.log(`Counting down: ${i}`);
    }
  }