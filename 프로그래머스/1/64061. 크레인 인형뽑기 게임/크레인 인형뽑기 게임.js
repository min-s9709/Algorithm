function solution(board, moves) {
    let result = 0;
    const stack = [];
    
    const lanes = [];
    
    for(let i = 0; i < board[0].length; i++) {
        const column = [];
        for(let j = board.length-1; j>=0; j--) {
            if(board[j][i] !== 0) {
                column.push(board[j][i]);
            }
        }
        lanes.push(column);
    }
    
    for (const m of moves) {
         if(lanes[m-1].length === 0) {
            continue;
        }
        
        const item = lanes[m-1].pop();
        
        if(stack.length > 0 && stack[stack.length-1] === item ){
            stack.pop();
            result += 2;
        } else {
            stack.push(item);
        }
        
    }
    
    return result;
}