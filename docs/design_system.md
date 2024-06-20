Creating Tic-Tac-Toe, our first step was implementing a grid. The play area should be easily visible, simple, and intuitive. The implementation of the 3x3 grid was made using nested div's that are center adjusted and flex displayed. This allowed each box to stack on top of each other. Using thin blue lines made with HTML and CSS container borders lead us into picking our colour palette. 

### Colour
To ensure visibility, a darker purple was chosen to contrast the bright blue lines. Applying consistency throughout the project we utilized the same blue for the player indicators and the title, only using one other colour, white, to give pointer to the player. The blue and purple illicit an informal setting, which helped us in picking a font.

### Font
The font "Bangers" was used as it also compelled an informal, fun, environment which matched the tone of our colour choices. The size is large to accommodate visibility and to aesthetically fill up the negative space. Since there is not much writing, this does not comprise any aspects.

### Game
Javascript addEventListener's and getElementById's were used frequently. On clicking a div, javascript would take it's index, check the player turn, change the tile accordingly, switch the player turn and finally check for a win. Once a win was detected, the board would update and direct the user to refresh to play again.