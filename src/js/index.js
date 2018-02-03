// Generate boards
    // Length and Width of board
    var boardLength = 14;
    var boardWidth =14;

    // Array of 14x14 squares
    var board = generateBoard();

    function ranInt(num){
        return Math.floor((Math.random() * num)+1);
    };

    function generateBoard(){
    // array board
    var board = []
    // 6 colors
    var colors = ['red','green','blue','brown','gray','black'];
    var x_s = ['100', '150', '200', '250', '300', '350', '400', '450', '500', '550', '600', '650', '700','750'];
    var y_s = ['100', '150', '200', '250', '300', '350', '400', '450', '500', '550', '600', '650', '700','750'];
            for(var w = 0; w < x_s.length; w++){
                for(var h = 0; h < y_s.length; h++){
                    board.push({
                        'color': colors[ranInt(5)],
                        'x':     x_s[w],
                        'y':     y_s[h],
                    });
                }
            }
    return board;
    };

    $('reset').on('click',generateBoard);
// Array of drenched



// Button event

    // Change all the drenched
    // Check around all the drenched
    // All all same colored squares to drenched array
    // Check if game is won

        // if yes, cheer and click to restart: generate and array of drenched

        // if no,Check if clicks are left
            // if no, "you lose " and restart: generate and array of drenched

    //(When game not win, clicks left, do nothing, wait for button -
    // going back to the point of listening to button click)

    //(This will loop until win or lose and game will end)




function shuffleDeck(deck) {
    var counter = deck.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random indexx§
        var index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        var temp = deck[counter];
        deck[counter] = deck[index];
        deck[index] = temp;
    }

    return deck;
}