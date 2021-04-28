//Planning it out
//We have two players (each showing the same board with one random box highlighted)

/* ONE PLAYER VIEW */
// can click on a card and submit it for the guess
// type in chat with a question
// each round the chat window is cleared but the logged it still stored in a chat log
// if the submitted guess is correct, then game declares them the winner

var cards = document.querySelectorAll('.card');
console.log(cards);

cards.forEach(item => item.addEventListener('click', function(){
                            item.classList.toggle('is-flipped')}))  ;
// for(let i=0; i<cards.length+1; i++){
//     var card = cards[i];
//     this.addEventListener( 'click', function() {
//         this.classList.toggle('is-flipped');
//       });
// }


const chosen_word = Math.floor(Math.random()*24);

const btn_random = document.querySelector('.btn-random');
const chosen_box = document.querySelector('.chosen_word');
let is_chosen = false;

btn_random.addEventListener('click', showWord);
  
function showWord(){
  if(!is_chosen){
    console.log(cards[chosen_word]);
    cards[chosen_word].classList.add('chosen_card');
    chosen_box.innerHTML = cards[chosen_word].innerHTML;
    is_chosen = true;

  }
}



