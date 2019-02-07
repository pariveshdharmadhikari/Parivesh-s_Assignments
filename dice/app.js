/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/




document.onload = init();
var random, currentScore = 0, totalScore = [0, 0];
var activeplayer = 0, temp = 0, winningScore;
document.querySelector('.btn-roll').addEventListener('click', numberGenerator);

function numberGenerator() {
    random = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.src = 'dice-' + random + '.png';
    if (temp === 6 && random === 6) {
        playerChange();
    }
    temp = random
    var diceDOM = document.querySelector('.dice');
    diceDOM.src = 'dice-' + random + '.png';
    if (random === 1) {
        playerChange();
    }
    else {
        currentScore += random;
        document.querySelector('#current-' + activeplayer).textContent = currentScore;
    }
}

document.querySelector('.btn-hold').addEventListener('click', scoreHolder);

function scoreHolder() {
    totalScore[activeplayer] += currentScore;
    document.querySelector('#score-' + activeplayer).textContent = totalScore[activeplayer];
    winnerChecker();
}

function playerChange() {
    document.querySelector('#current-' + activeplayer).textContent = '0';
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    currentScore = 0;
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
}

function init() {

    var formObj = getUrlVars();
    winningScore = formObj.maxScore;
    document.querySelector('#name-0').textContent = formObj.player_1;
    document.querySelector('#name-1').textContent = formObj.player_2;
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    currentScore = 0;
    totalScore = [0, 0];
    activeplayer = 0;
    var diceDOM = document.querySelector('.dice');
    diceDOM.src = 'dice-0.png';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector(".btn-roll").disabled = false;
    document.querySelector(".btn-hold").disabled = false;
}

function winnerChecker() {
    if (totalScore[activeplayer] >= winningScore) {
        document.querySelector('#name-' + activeplayer).textContent = "WINNER"
        document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
        document.querySelector(".btn-roll").disabled = true;
        document.querySelector(".btn-hold").disabled = true;
    }
    else {
        playerChange();
    }
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function initWindow()
{

    window.location.href='start.html';
}
//------------------------------------------
