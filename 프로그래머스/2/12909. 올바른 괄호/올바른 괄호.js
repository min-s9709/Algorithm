function solution(s){
    const arr = [];
    
    for(const c of s) {
        if(c === '(' ) {
            arr.push(c);
        } else if(c === ')' ) {
            if(arr.length === 0) {
                return false;
            }
            arr.pop();
        }
    }
    
    return arr.length === 0;
}