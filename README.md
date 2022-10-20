# JS211-Hangman
<!-- 
 
 
   0) Choose a word as the solution
     0 a) make an array of words
     0 b) choose a random word from that array as the solution
 
   1) Take a letter as a guess
     1 a) Use prompt to take in a letter as an input
     1 b)

   2) Does the solution contain that letter?
     2 a) loop through the 'solution' and locate mutual letters
     2 b) find the index of the matching letter and replace the underscores in the 'hint' with those letters

   3) If it does, Change the 'hint' word to include those letters at those places

     solution: 'bread'

     hint: _ _ _ _ _


     guess: r

     let lives = 5

 
 
 
 
 
 
 
 
 
 
 
 
 
     for(let i = 0; i < solution.length; i++){
        if(guess === solution[i]){
            replace hint[i] with guess
        } else{
            lives--
            console.log(`you have ${lives} lives left`)
        }
     }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  -->