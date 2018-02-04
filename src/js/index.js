// Generate boards
    // Length and Width of board
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

    var row =[];



    // generateAndDisplayBoard();
    // generateBoard();

    function ranInt(num){
        return Math.floor((Math.random() * num)+1);
    };

    function generateRow(h){
        var colors = ['color1','color2','color3','color4','color5','color6'];
        var row = [];
        // var h = 0;
        for(var w = 0; w < boardWidth; w++){
            row.push({
                'color': colors[ranInt(6)-1],
                // 'x':     w*50 + 100,
                // 'y':     h*50 + 100,
            });
        };
        return row;
    };

    function displayRow(){
        for(var i=0;i<row.length;i++){
            $canvas.append('<div class="box ' + row[i].color +'"></div>');
            };
    };

    function generateAndDisplayRow(){
        console.log('fn called')
        row = generateRow();
        displayRow();
    };

    $reset.on('click',generateAndDisplayRow);


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


// // // Array of drenched
// //     var drenched = [];
// //     var currentSquare = board.shift();
// //     drenched.push(currentSquare);

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




