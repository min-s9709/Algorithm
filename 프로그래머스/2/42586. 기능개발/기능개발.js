function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((p, index) => Math.ceil((100-p)/speeds[index]));
    
    let count = 0;
    let maxDays = days[0];
    
    for(let i = 0; i < progresses.length; i++) {
        if(days[i] <= maxDays) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            maxDays = days[i];
        }
    }
    
    answer.push(count);
    return answer;
}