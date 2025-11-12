function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    
    for (let i = 0; i < prices.length-1; i++) {
        let time = 0;
        for(let j = i+1; j < prices.length; j++){
            time++;
            if(prices[i] > prices[j]) {
                break;
            } 
        }
        answer[i] = time;
    }
    return answer;
}