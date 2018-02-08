// Generate boards
    // Length and Width of board
    // Game preparation:
        var $canvas = $('#canvas');
        var boardLength = 14;
        var boardWidth =14;
        var $reset = $('#reset');
        var $c1 = $('#c1');
        var $c2 = $('#c2');
        var $c3 = $('#c3');
        var $c4 = $('#c4');
        var $c5 = $('#c5');
        var $c6 = $('#c6');
        var $msg = $('#message');
        var clicks = 40;

        function resetGame(){
            var row =[];
            var board = [];
            generateAndDisplayBoard();
            $msg.html(' ');
            clicks = 40;
            $('#clicksField').html('<h1>Clicks left: '+clicks+'</h1>');
            var captures = 1;
        };
        resetGame();

    // Function to randomize colors
        function ranInt(num){
            return Math.floor((Math.random() * num)+1);
        };

    function generateRow(givenh){
        var colors = ['color1','color2','color3','color4','color5','color6'];
        row = [];
        var h = givenh;
        for(var w = 0; w < boardWidth; w++){
            row.push({
                'color': colors[ranInt(6)-1],
                'x':     w*50,
                'y':     h*50,
                'captured':false
            });
        };
        return row;
    };
    function displayRow(row){
        for(var i=0;i< row.length ;i++){
            $canvas.append('<div class="box ' + row[i].color + ' ' + 'x' + row[i].x + ' ' + 'y' + row[i].y + '"></div>');
            };
    };
    //A test function for row display
        // function generateAndDisplayRow(givenrow){
        //     console.log('fn called');
        //     row = generateRow(givenrow);
        //     displayRow(givenrow);
        // };

        // $reset.on('click',generateAndDisplayRow);


        function generateBoard(){
        board = [];
        for(var h = 0; h < boardLength; h++){
            row = generateRow(h);
            board.push(row);
        };
        return board;
    };
    function displayBoard(){
        $canvas.html(' ');
        for (var h=0; h < board.length; h++){
            displayRow(board[h]);
        };
    };
    function generateAndDisplayBoard(){
        board = generateBoard();
        displayBoard();
        board[0][0].captured = true;
    }
    $reset.on('click',resetGame);

    // Through out the whole board, check all the square, if captured is true
    // then go through all 4 adjacent squares to it, if any has the same color
    // assign captured to true.

    function capture(clickedColor){
        //Going through each squares from 1,0 to 13,0
        for(var l = 1; l < boardLength; l++){
            currentSquare = board[l][0];
            if(
                (currentSquare.color == board[0][0].color)
                &&( board[l-1][0].captured == true)
            )
                {
                currentSquare.captured = true;
                }

        }
        //Going through each squares from 0,1 to 0,13
        for(var w = 1; w < boardWidth; w++){
            currentSquare = board[0][w];
            if(
                (currentSquare.color === board[0][0].color)
                &&( board[0][w-1].captured == true)
            )
                {
                currentSquare.captured = true;
                }
        }

        //Going through each squares from 1,1 to 13,13
        for(var l = 1; l < boardLength; l++){
            //Inside row going through each object
            for(var w = 1; w < boardWidth; w++){
                currentSquare = board[l][w];
                if(
                    (currentSquare.color === board[0][0].color)

                    &&(     ( board[l-1][w].captured == true)
                        ||  ( board[l][w-1].captured == true)
                )
            )
                {

                currentSquare.captured = true;

                };
            };
        };
    };

    function paint(clickedColor){
        for(var l = 0; l < boardLength; l++){
            //Inside row going through each object
            for(var w = 0; w < boardWidth; w++){
                currentSquare = board[l][w];
                if(currentSquare.captured == true){
                    currentSquare.color = clickedColor;
                }

            }
        }
    };

    function checkIfWon(){
        var captures = 1;
        for(var l = 0; l < boardLength; l++){
            //Inside row going through each object
            for(var w = 0; w < boardWidth; w++){
                currentSquare = board[l][w];
                if(currentSquare.captured == true){
                    captures += 1 ;
                };
            };
        };
        if (captures == (boardLength * boardWidth)){
            $msg.append('<div id="win"><h1>Congrats! You won!</h1><h1>Click here to play again.</h1></div>');
        };
    };

function wholedrench(clickedColor){
    capture(clickedColor);
    paint(clickedColor);
    displayBoard();
    checkIfWon();
    clicks -=1;
    $('#clicksField').html('<h1>Clicks left: '+clicks+'</h1>');
    if (clicks == 0){
        $msg.append('<div id="lose"><h1>Oops! You lost!</h1><h1>Click here to play again.</h1></div>');
    };
};



$c1.on('click',function (clickedColor){
    clickedColor = $c1.html();
    wholedrench(clickedColor);
});
$c2.on('click',function (clickedColor){
    clickedColor = $c2.html();
    wholedrench(clickedColor);
});
$c3.on('click',function (clickedColor){
    clickedColor = $c3.html();
    wholedrench(clickedColor);
});
$c4.on('click',function (clickedColor){
    clickedColor = $c4.html();
    wholedrench(clickedColor);
});
$c5.on('click',function (clickedColor){
    clickedColor = $c5.html();
    wholedrench(clickedColor);
});
$c6.on('click',function (clickedColor){
    clickedColor = $c6.html();
    wholedrench(clickedColor);
});
$msg.on('click',resetGame);
















//draft

    // Turn the first object of the first array in board to drenched

    // function firstdrench(clickedColor){
    //     console.log(clickedColor);
    //     var currentSquare = board[0].shift();
    //     currentSquare.color = clickedColor;
    //     currentSquare.x = 0;
    //     currentSquare.y = 0;
    //     currentSquare.captured = true;
    //     drenched.push(currentSquare);
    //     // board[0].unshift(currentSquare);
    // };





        // // Array of drenched, I keep this to check drenched.length, if equal
        // // to boardlength * boardwidth then game is won.
        //     var drenched = initiateDrenched();

        //     function initiateDrenched(){
        //         var drenched = [];
        //         drenched.push(board[0].[0]);
        //     };

        //     function displayDrenched(){
        //         for(var i=0; i<drenched.length; i++){
        //             $canvas.append('<div class="box ' + drenched[i].color + ' ' + 'x' + drenched[i].x + ' ' + 'y' + drenched[i].y + '"></div>');
        //         }
        //     };







    //     function generateBoard(){
    //     // array board
    //     // 6 colors
    //     // asolute positions of the objects
    //     // var x_s = ['100', '150', '200', '250', '300', '350', '400', '450', '500', '550', '600', '650', '700','750'];
    //     // var y_s = ['100', '150', '200', '250', '300', '350', '400', '450', '500', '550', '600', '650', '700','750'];
    //     // generate rows
    //     // generate board
    //     var board = [];
    //     for(var h = 0; h < boardLength; h++){
    //         var row = generateRow(h);
    //         board.push(row[h]);
    //         }
    //     }

    //     // Array of 14x14 squares
    //     // var colors = ['color1','color2','color3','color4','color5','color6'];
    //     // var x_s = ['100', '150', '200', '250', '300', '350', '400', '450', '500', '550', '600', '650', '700','750'];
    //     // var y_s = ['100', '150', '200', '250', '300', '350', '400', '450', '500', '550', '600', '650', '700','750'];
    //     //         for(var w = 0; w < x_s.length; w++){
    //     //             for(var h = 0; h < y_s.length; h++){
    //     //                 board.push({
    //     //                     'color': colors[ranInt(6)-1],
    //     //                     'x':     x_s[w],
    //     //                     'y':     y_s[h],
    //     //                 });
    //     //             }
    //     //         }

    //     return board;
    //     };

    //     // function displayBoard() {

    //     //     for(var i=0;i<board.length;i++){
    //     //         $canvas.append('<div class="box ' + board[i].color + ' ' + 'x' + board[i].x + ' ' + 'y' + board[i].y + '"></div>');

    //     //     };
    //     // };

    //     // function generateAndDisplayBoard() {
    //     //     console.log('fn called')
    //     //     board = generateBoard();
    //     //     displayBoard();
    //     // }

    //     // $reset.on('click', generateAndDisplayBoard);



    // // Button event

    // function drench(color){
    //     // Change all the drenched squares to clicked color
    //     for(var i = 0; i< drenched.length; i++){
    //         drenched[i].color = color;
    //     };
    //     // Check around all the drenched
    //     // Add all same colored squares to drenched array

    //     capture();

    //     // Check if game is won

    //         // if yes, cheer and click to restart: generate and array of drenched

    //         // if no,Check if clicks are left
    //             // if no, "you lose " and restart: generate and array of drenched

    //     //(When game not win, clicks left, do nothing, wait for button -
    //     // going back to the point of listening to button click)

    //     //(This will loop until win or lose and game will end)

    //     };

    //     $c1.on('click',function(){
    //         drench('color1');
    //     });



    //     function capture(){
    //         // check if all drenched elements have any surrounding elements to be marked as drenched
    //         for(var i = 0; i< drenched.length; i++){
    //             // 1. top
    //             var topx = drenched[i].x;
    //             var topy = drenched[i].y - 50;

    // // board = [ro1arr, row2arr, row3arr]
    // // row1arr = [{x,y,color}, {}]

    // // bottomRow = board[1]
    // // bottom = botomrow[0]

    // //             botomRow = rows[1]
    // //             bottomElement = bottomRow[0]


    //             // WHAT COLOR HAS THE TOP ELEMENT?

    //             // for(var z = 0; z<board.length; z++) {
    //             //     if ()
    //             // }


    //         };
    //     };




