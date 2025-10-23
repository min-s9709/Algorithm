function solution(numbers) {
    const arr = [];
    for(let i = 0; i < numbers.length-1; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            const sum = numbers[i] + numbers[j];
            arr.push(sum);
        }
    }
    return [...new Set(arr)].sort((a,b) => a-b);
}