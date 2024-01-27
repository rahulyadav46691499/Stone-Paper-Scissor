let options = document.querySelectorAll('img');
let computer_option = ['Stone','Paper','Scissor'];
let us = document.querySelector('#us');
let cs = document.querySelector('#cs');
let user_score = 0;
let computer_score = 0;
let turn = document.querySelector('#turn');

let stone = document.querySelector('#Stone');
stone.addEventListener('click',function(){
    computer_got = computer_turn()
    if (computer_got==='Paper'){
        computer_score = computer_score+1;
        cs.innerText = computer_score;
        turn.innerText = 'Computer got point \u{1F614}';
        turn.style.backgroundColor = '#EF2D56';
    }
    else if(computer_got==='Scissor'){
        user_score = user_score+1;
        us.innerText = user_score;
        turn.innerText = 'U got a point! \u{1F973}';
        turn.style.backgroundColor = '#0CCE6B';
    }
    else{
        turn.style.backgroundColor = 'Coral'
        turn.innerText = 'Draw \u{1F91D}';
    }
})

let paper = document.querySelector('#Paper');
paper.addEventListener('click',function(){
    computer_got = computer_turn()
    if (computer_got==='Scissor'){
        computer_score = computer_score+1;
        cs.innerText = computer_score;
        turn.innerText = 'Computer got point \u{1F614}';
        turn.style.backgroundColor = '#EF2D56';
    }
    else if(computer_got==='Stone'){
        user_score = user_score+1;
        us.innerText = user_score;
        turn.innerText = 'U got a point! \u{1F973}';
        turn.style.backgroundColor = '#0CCE6B';
    }
    else{
        turn.style.backgroundColor = 'Coral'
        turn.innerText = 'Draw \u{1F91D}';
    }
})

let Scissor = document.querySelector('#Scissor');
Scissor.addEventListener('click',function(){
    computer_got = computer_turn()
    if (computer_got==='Stone'){
        computer_score = computer_score+1;
        cs.innerText = computer_score;
        turn.innerText = 'Computer got point \u{1F614}';
        turn.style.backgroundColor = '#EF2D56';
    }
    else if(computer_got==='Paper'){
        user_score = user_score+1;
        us.innerText = user_score;
        turn.innerText = 'U got a point! \u{1F973}';
        turn.style.backgroundColor = '#0CCE6B';
    }
    else{
        turn.style.backgroundColor = 'Coral'
        turn.innerText = 'Draw \u{1F91D}';
    }
})

function computer_turn(){
    let index = Math.floor(Math.random()*3);
    let x = computer_option[index];
    console.log('Computer choosed',x);
    return x;
}

let new_game = document.querySelector('button');
new_game.addEventListener('click',function(){
    user_score = 0;
    computer_score = 0;
    us.innerText = '0';
    cs.innerText = '0';
    turn.innerText = 'First your turn';
    turn.style.backgroundColor = 'Coral'
})