function solution(answers) {
    const result = [];
    
    const persons = [[1,2,3,4,5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    
    for(let i = 0; i < persons.length; i++) {
        let num = 0;
        for(let j = 0; j < answers.length; j++) {
            if(persons[i][j % persons[i].length] === answers[j]) {
                num += 1;
            }
        }
        result.push({personNum: i+1, value: num});
    }
    
    const maxScore = Math.max(...result.map((p) => p.value));
    
    return result.filter((p) =>p.value === maxScore).map((p) => p.personNum);
    
}