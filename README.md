# Tic Tac Toe - Mark Losty

Welcome to the Tic Tac Toe game! This JavaScript project is a fully functioning Tic Tac Toe game that allows you to play against a computer opponent. 

The game features a Header, Game Board, Game Message, and a Game Reset Button to start a new game. 

You can test your skills against the computer and enjoy a classic game of Tic Tac Toe right in your web browser. 

![Responsive Mockup](https://i.imgur.com/Dsnu5vt.png)

## Game Board 

The game board is the central element of the Tic Tac Toe game. It consists of a 3x3 grid where players can place their X or O marks to make their moves. 

The board is visually represented on the web page, and players can click on the grid to place their marks. 
As the game progresses, the board reflects the current state of the game, allowing players to track their moves and strategize their next move.

![Game Board](https://i.imgur.com/IKjaaDT.png)

## Game Message

The game message section provides real-time updates and notifications to the players during the game. 

It displays messages such as the current player's turn, Game Outcome (win, lose, draw), and prompts for the next action. 

This section enhances the user experience by providing clear and informative feedback, keeping players engaged and informed throughout the game.

![Game Message](https://i.imgur.com/97gm7CX.png)
![Game Message](https://i.imgur.com/1W5FCUt.png)

## Game Reset Button 

The game reset button is a user interface element that allows players to reset the game to its initial state. 

When clicked, it clears the game board, resets the game status, and enables players to start a new game without the need to refresh the entire web page. 

This feature provides convenience and seamless gameplay experience, allowing players to easily initiate a new round of the Tic Tac Toe game.

![Game Reset Button](https://i.imgur.com/LeGrQKs.png)

## Game Score Board

The score board section keeps track of the game's progress and displays the current score for the players. 

It provides a visual representation of the game's outcome, updating the scores for each player based on wins, losses, and draws. 

The score board enhances the competitive aspect of the game, allowing players to track their performance and compare their results with each other over multiple rounds. 
This feature adds an element of competition and motivation for players to strive for victory in the Tic Tac Toe game.

![Game Score Board](https://i.imgur.com/pQZf8fe.png)

## Game Computer

Computer Player Logic

* The computer player logic is implemented in the computerMove function.
* This function determines the computer's move by selecting an available box randomly from the game board.
* It first identifies all available boxes on the board.
* Then, it randomly selects one of these available boxes for the computer's move.
* After making its move, the function checks for a winner or a draw.
* If the computer wins, the scores are updated, and a message indicating the computer's victory is displayed.
* If the game ends in a draw, a draw message is displayed.
* This logic ensures that the computer opponent makes random moves in the TicTacToe game, providing a challenging gameplay experience for the player.

## Code Validator
- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmarklosty.github.io%2FMarkLosty-TicTacToe-CodeInstitute-Project2%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmarklosty.github.io%2FMarkLosty-TicTacToe-CodeInstitute-Project2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 9 functions in this file.
      - Function with the largest signature take 3 arguments, while the median is 1.
      - Largest function has 14 statements in it, while the median is 7.
      - The most complex function has a cyclomatic complexity value of 6 while the median is 2.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - [https://code-institute-org.github.io/love-maths/](https://marklosty.github.io/MarkLosty-TicTacToe-CodeInstitute-Project2/)

