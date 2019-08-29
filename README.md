
## Project Description 

Hangman is a popular word game in which computer will generate a random phrase, the phrase to guess is represented by a row of stars,
representing each letter of the word. The plyer(" the guesser") attempts to guess the phrase one letter at a time. If a guessed letter
appears in the word, all instances of it are revealed. If not, the guesser loses a chance. If the guesser figures out the secret word 
before he or she runs out of chances, he or she wins.


## Hightlight

## User Guess Eximation

If guessers input more than one letter, input is not a letter, or nothing input, it will prompte to input again and give corresponding error hint! <br>

If guessers input a letter that is already tested, The Used Letter will show up and remind you try a new letter!

Note: guessers would not be penalized for guessing a previously correct or incorrect guess!

## Choosing GameOver or Restart

When guessers win or fail the game, guessers could choose restart a new game or directly finished the game!

## Robot Player(Only For V4)

The guesser is a robot. The game will play the same as that version3 , showing all guesses and game feedback.
But This robot is a smart one!(I suppose)  

The robot build his/her letter libary via counting the occurencing of each letter in the targeted file! 

Each guess, robot will find the letter with Highest frequency. Next time, robot will remove the previously one to 
make sure he/she won't use same letter.


## Success Rate for Robot( Only for V4 AutoRunMultipleTime)

In this versions, just for curiously, Human can tell robot run N time! 

In the end. It would show you the Successful Time and Wrong Time and Success Rate!
