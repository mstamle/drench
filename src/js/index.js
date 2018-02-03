// Generate boards
    // Length and Width of board
    var $canvas = $('#canvas');
    var boardLength = 14;
    var boardWidth =14;

    // Array of 14x14 squares

    var board;
    generateAndDisplayBoard();
    // = generateBoard();

    function ranInt(num){
        return Math.floor((Math.random() * num)+1);
    };

    function generateBoard(){
    // array board
    var board = [];
    // 6 colors
    var colors = ['color1','color2','color3','color4','color5','color6'];
    var x_s = ['100', '150', '200', '250', '300', '350', '400', '450', '500', '550', '600', '650', '700','750'];
    var y_s = ['100', '150', '200', '250', '300', '350', '400', '450', '500', '550', '600', '650', '700','750'];
            for(var w = 0; w < x_s.length; w++){
                for(var h = 0; h < y_s.length; h++){
                    board.push({
                        'color': colors[ranInt(6)-1],
                        'x':     x_s[w],
                        'y':     y_s[h],
                    });
                }
            }

    return board;
    //display board
    //     var $newdiv1 = $( "<div id='object1'></div>" ),
    //   newdiv2 = document.createElement( "div" ),
    //   existingdiv1 = document.getElementById( "foo" );

    //$( "body" ).append( $newdiv1, [ newdiv2, existingdiv1 ] );



    };

    function displayBoard() {

        for(var i=0;i<board.length;i++){
            $canvas.append('<div class="box ' + board[i].color + ' ' + 'x' + board[i].x + ' ' + 'y' + board[i].y + '"></div>');

        };
    };

    function generateAndDisplayBoard() {
        console.log('fn called')
        board = generateBoard();
        displayBoard();
    }

    $('#reset').on('click', generateAndDisplayBoard);
// Array of drenched
    var drenched = [];
    drenched.push(board[0]);



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




