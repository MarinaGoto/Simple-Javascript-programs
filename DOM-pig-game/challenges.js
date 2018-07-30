/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/


/*New rules
1) A player loses his entire score when he rolls two six in a row. After that it's the next player's turn.
(Hint: Always save the previous dice roll in the separate variable)
2) Add an input field to the HTML where the players can, by themselves, set the winning score. And so they can change the predefined score of 100.
(Hint: You can read that value with the .value property in Javascript. Use Google :) )
3) Add a second dice to the game and in this scenario, the player loses his current score when only one of them is an one.
(Hint: You need some CSS and of course, HTML to position the second dice)
*/


var scores, roundScore, activePlayer, gamePlaying;

init();

var previousDice;

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        //1.Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        //2.Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        //3.Update the round score IF the roller number was not a 1 AND there are two six in a row.
        if (dice === 6 && previousDice === 6){
            //Player losses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1){
            //Add score
            roundScore = dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
        previousDice = dice;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //Check if player won the game
        if (scores[activePlayer] >= 20){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        }else{
            //Next Player
            nextPlayer();
        }
    }
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');





};