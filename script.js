    const narration = document.querySelector('#narration p');
    const playerScoreBox = document.querySelector('#scoreKyungsoo');
    const computerScoreBox = document.querySelector('#scoreJinyoung');
    const playerBox = document.querySelector('#playerScore .scoreBox');
    const computerBox = document.querySelector('#computerScore .scoreBox');
    narration.textContent = "";
    let playerScore = 0;
    let computerScore = 0;
    let i =0;
    
    function computerPlay(){
        let computerChoice = ["rock", "paper", "scissors"];
        return computerChoice[Math.floor(Math.random()*computerChoice.length)];

    }
    function playRound(playerSelection, computerSelection){
            if (playerSelection === computerSelection){
                return `It's a tie`;
            }
            else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')){
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }
            else if ((playerSelection=== 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection=== 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')){
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }
    }


    function game2(e){

        if (playerScore === 5 || computerScore ===5){
            narration.setAttribute('style', 'font-size: 16px');
            narration.textContent="";
            playerScoreBox.textContent="";
            computerScoreBox.textContent="";
            let message = (playerScore>computerScore) ? 'You win. ' : (playerScore===computerScore) ? 'It\'s a tie! ' : 'You lose. ';
            alert(message + ' Game will restart');
            i =0;
            playerScore = 0;
            computerScore = 0;
            playerBox.classList.remove('win');
            computerBox.classList.remove('win');
            return;
        }

        i++;
        let playerSelection = e.target.getAttribute("data-play");
        let computerSelection = computerPlay();

        const playerFigGet = document.querySelector(`#kyungsoo figure[data-play="${playerSelection}"]`);
        playerFigGet.classList.add('selected');

        const computerFigGet = document.querySelector(`#jinyoung figure[data-play="${computerSelection}"]`);
        computerFigGet.classList.add('selected');

        let result = playRound(playerSelection, computerSelection);
        narration.textContent = `ROUND ${i} - ` + result + "\r\n" + narration.textContent;
        
        if(result.indexOf('win') > 0){
            playerScore += 1;
            playerScoreBox.textContent = playerScore;
            computerScoreBox.textContent = computerScore;
        }
        else if(result.indexOf('lose') > 0){
            computerScore += 1;
            playerScoreBox.textContent = playerScore;
            computerScoreBox.textContent = computerScore;
        }
        else if(result.indexOf('tie)'>0)){
            
        }

        if(playerScore === 5 && playerScore>computerScore){
            narration.textContent ="";
            narration.setAttribute('style', 'font-size: 40px');
            narration.textContent +=`You win!!`;
            playerBox.classList.add('win');
        }
        else if(computerScore === 5 && computerScore>playerScore){
            narration.textContent ="";
            narration.setAttribute('style', 'font-size: 40px');
            narration.textContent +=`You lose!`;
            computerBox.classList.add('win');
        }
        else if (playerScore === 5 && computerScore=== 5){
            narration.textContent ="";
            narration.setAttribute('style', 'font-size: 40px');
            narration.textContent +=`Tie!`;
        }
        

    }

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('selected');
      }

    let players = Array.from(document.querySelectorAll('.playerChoice'));
    players.forEach(player => player.addEventListener('click', game2));
    players.forEach(player => player.addEventListener('transitionend', removeTransition));

    let computers = Array.from(document.querySelectorAll('.computerChoice'));
    computers.forEach(computer => computer.addEventListener('transitionend', removeTransition));
