    const narration = document.querySelector('#narration p');
    const score = document.querySelector('#score');
    score.textContent ="";
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

    // function game(){
    //     let playerSelection;
    //     let computerSelection;
    //     let results;
    //     let playerScore = 0;
    //     let computerScore = 0;
       

    //     for(i=1; i<6; i++){
    //         playerSelection = prompt('What is your choice?');
    //         computerSelection = computerPlay();
    //         console.log(`Round ${i} -` + playRound(playerSelection, computerSelection));
    //         result =playRound(playerSelection, computerSelection);
    //         if(result.indexOf('win') > 0){
    //             playerScore += 1;
    //             console.log(`Round ${i} -` + `Player Score: ${playerScore} Computer Score: ${computerScore}`);
    //         }
    //         else if(result.indexOf('lose') > 0){
    //             computerScore += 1;
    //             console.log(`Round ${i} -` + `Player Score: ${playerScore} Computer Score: ${computerScore}`);
    //         }
    //         else if(result.indexOf('tie)'>0)){
    //             console.log(`Round ${i} -` + `Player Score: ${playerScore} Computer Score: ${computerScore}`);
    //         }
    //         else{
    //             console.log('INVALID ROUND')
    //         }
    //     }
        
    //         if(playerScore>computerScore){
    //             console.log(`You won the game!`);
    //         }
    //         else if(computerScore>playerScore){
    //             console.log(`You lost the game!`);
    //         }
    //         else{
    //             console.log(`Tie!`);
    //         }
    // }

    function game2(e){

        if (playerScore === 5 || computerScore ===5){
            narration.setAttribute('style', 'font-size: 16px');
            score.textContent="";
            narration.textContent="";
            let message = (playerScore>computerScore) ? 'You win. ' : (playerScore===computerScore) ? 'It\'s a tie! ' : 'You lose. ';
            alert(message + ' Game will restart');
            i =0;
            playerScore = 0;
            computerScore = 0;
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
        narration.textContent += result + "\r\n";
        
        if(result.indexOf('win') > 0){
            playerScore += 1;
            score.textContent+=`Round ${i} -` + `Player Score: ${playerScore} Computer Score: ${computerScore}` + "\r\n";
        }
        else if(result.indexOf('lose') > 0){
            computerScore += 1;
            score.textContent+=`Round ${i} -` + `Player Score: ${playerScore} Computer Score: ${computerScore}` + "\r\n";
        }
        else if(result.indexOf('tie)'>0)){
            score.textContent+=`Round ${i} -` + `Player Score: ${playerScore} Computer Score: ${computerScore}` + "\r\n";
        }

        if(playerScore === 5 && playerScore>computerScore){
            narration.textContent ="";
            narration.setAttribute('style', 'font-size: 100px');
            narration.textContent +=`You won the game!`;
        }
        else if(computerScore === 5 && computerScore>playerScore){
            narration.textContent ="";
            narration.setAttribute('style', 'font-size: 100px');
            narration.textContent +=`You lost the game!`;
        }
        else if (playerScore === 5 && computerScore=== 5){
            narration.textContent ="";
            narration.setAttribute('style', 'font-size: 100px');
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

    // game();