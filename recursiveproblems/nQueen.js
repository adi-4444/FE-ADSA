let n = 6; // num
let grid = [];
for(let i = 0; i < n; i++) {
    let temp = Array(n).fill('');
    grid.push(temp);
}
function canWePlaceQueen(row, col, n) {
    // not implemented, all we have to do is check vertical and diagnol attacks
    // check vertical
    for(let i = row - 1; i >= 0; i--) {
        if(grid[i][col] == 'Q') {
            // we found a queen sitting vertically above, i.e. current cell is unsafe
            return false;
        }
    }
    // check right diagnol
    for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if(grid[i][j] == 'Q') {
            // we found a queen sitting on the right diagnol, i.e. current cell is unsafe
            return false;
        }
    }
    // check left diagnol
    for(let i = row - 1, j = col-1; i >= 0 && j >= 0; i--, j--) {
        if(grid[i][j] == 'Q') {
            // we found a queen sitting on the left diagnol, i.e. current cell is unsafe
            return false;
        }
    }
    // current cell is safe
    return true;
}

function f(r, n) {
    if(r == n) {
        // we will reach r == n when we have successfully placed the last queen on the last row
        // which means we found one possible way
        console.log(grid);
        return 1;
    }
    // We will try to safely place the current queen on the rth row
    // we will go to every column of the current row and check if we can place the queen
    let ans = 0;
    for(let col = 0; col < n; col++) {
        if(canWePlaceQueen(r, col, n)) {
            grid[r][col] = 'Q'; // place the queen
            ans += f(r+1, n);
            grid[r][col] = ''; // remove the queen
        }
    }
    return ans;
}

console.log(f(0, n));








// OR


// 	N = 4;
  
// 	function print(chessboard)
// 	{
//   arrText='';
// 	for (let i = 0; i < N; i++) {
// 			for (let j = 0; j < N; j++){
//         arrText+=chessboard[i][j]+' ';   
//       }
//       console.log(arrText);
//       arrText = '';
// 		}
		
// 	}
// ​
// 	function isSafe(chessboard, row, col)
// 	{
// 		var i = 0;
// 		var j = 0;
		
// 		for (i = 0; i < col; i++)
// 		{
// 			if (chessboard[row][i] == 1)
// 			{
// 				return false;
// 			}
// 		}
		
// 		for (i = row, j = col; i >= 0 && j >= 0; i--, j--)
// 		{
// 			if (chessboard[i][j] == 1)
// 			{
// 				return false;
// 			}
// 		}
		
// 		for (i = row, j = col; j >= 0 && i < N; i++, j--)
// 		{
// 			if (chessboard[i][j] == 1)
// 			{
// 				return false;
// 			}
// 		}
// 		return true;
// 	}
	
// 	function solveNQueenUtil(chessboard, col)
// 	{
		
// 		if (col >= N)
// 		{
// 			return true;
// 		}
	
// 		for (var i = 0; i < N; i++)
// 		{
			
// 			if (isSafe(chessboard, i, col))
// 			{
			
// 				chessboard[i][col] = 1;
				
// 				if (solveNQueenUtil(chessboard, col + 1) == true)
// 				{
// 					return true;
// 				}
				
// 				chessboard[i][col] = 0;
// 			}
// 		}
// 		return false;
// 	}
// ​
// 	function solveNQueen()
// 	{
// 		var chessboard = [
// 			[0, 0, 0, 0],
// 			[0, 0, 0, 0],
// 			[0, 0, 0, 0],
// 			[0, 0, 0, 0]
// 		];
// 		if (solveNQueenUtil(chessboard, 0) == false)
// 		{
// 			console.log("Solution does not exist");
// 			return false;
// 		}
// 		print(chessboard);
// 		return true;
// 	}
	
// 	solveNQueen();



// OR


// let N = 4;
// function isSafe(board, row, col) {
//     var i =0;
//     var j = 0;
//     //left side 
//     for(i=0;i<col;i++) {
//         if(board[row][i] == 1) {
//             return false;
//         }
//     }
//     for(i=row, j=col; i>=0, j>=0; i--, j--) {
//         if(board[i][j] == 1) {
//             return false
//         }
//     }
//     for(i=row, j=col; i<N, j>=0; i++, j--) {
//         if(board[i][j] == 1) {
//             return false
//         }
//     }
//     return true;
// }
// ​
// ​
// function nqueenSolution(board, col) {
//     if(col >= N) {
//         return true;
//     }
//     for(var i=0;i<N;i++) {
//         if(isSafe(board, i,col)) {
//             board[i][col] = 1
//             if(nqueenSolution(board, col+1) == true) {
//                 return true;
//             }
//             board[i][col] = 0;
//         }
//     }
//     return false;
// }
// ​
// function Solve() {
//     let chessbaords = new Array(N).fill(new Array(N).fill(0));
//     console.log(nqueenSolution(chessbaords, 0))
//     console.log(chessbaords)
// }
// ​
// Solve()