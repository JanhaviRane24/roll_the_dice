let player1Name, player2Name;

document.getElementById('startButton').addEventListener('click', function() {
    player1Name = document.getElementById('player1Name').value.trim();
    player2Name = document.getElementById('player2Name').value.trim();

    if (player1Name && player2Name) {
    
        // Show dice roll images (before rolling)
        document.getElementById('player1Dice').src = '/roll_the_dice/images/roll.jpg';
        document.getElementById('player2Dice').src = '/roll_the_dice/images/roll.jpg';

        // Display the game sections
        document.querySelector('.name-input').style.display = 'block';
        document.querySelector('.dice-container').style.display = 'flex';
        document.getElementById('result').style.display = 'none';
    } else {
        alert('Please enter names for both players.');
    }
});

// Player 1 clicks their dice
document.getElementById('player1Div').addEventListener('click', function() {
    rollDice('player1');
});

// Player 2 clicks their dice
document.getElementById('player2Div').addEventListener('click', function() {
    rollDice('player2');
});

function rollDice(player) {
    const roll = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
    const diceImage = `/roll_the_dice/images/dice${roll}.png`; // Select dice result image (dice1.png to dice6.png)

    if (player === 'player1') {
        document.getElementById('player1Dice').src = diceImage;
        // player 1 name score message gets display
        let msg1=`${player1Name} score`;
        document.getElementById('player1msg').innerHTML=msg1;
    } else {
        document.getElementById('player2Dice').src = diceImage;
         // player 1 name score message gets display
        let msg2=`${player2Name} score`;
        document.getElementById('player2msg').innerHTML=msg2;
    }
   
    

    const player1Roll = getDiceValue('player1');
    const player2Roll = getDiceValue('player2');

    // Once both players have rolled, display result
    if (player1Roll && player2Roll) {
        let resultText = '';
        if (player1Roll > player2Roll) {
            resultText = `${player1Name} Wins!`;
        } else if (player2Roll > player1Roll) {
            resultText = `${player2Name} Wins!`;
        } else {
            resultText = 'It\'s a Tie!';
        }
        document.getElementById('result').innerText = resultText;
        document.getElementById('result').style.display = 'block';
    }
}

// Helper function to extract dice value from the image file name
function getDiceValue(player) {
    const diceImage = player === 'player1' ? document.getElementById('player1Dice').src : document.getElementById('player2Dice').src;
    return parseInt(diceImage.match(/dice(\d)/)[1]); // Extract the number from diceX.png
}
