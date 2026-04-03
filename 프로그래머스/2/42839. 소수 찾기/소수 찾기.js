function solution(numbers) {
    const nums = numbers.split("");
    const set = new Set();
    
    function permute(arr, current) {
        if(current.length > 0) {
            set.add(Number(current.join('')));
        }
        
        for(let i = 0; i < arr.length; i++) {
            const rest = [...arr.slice(0,i), ...arr.slice(i+1)];
            permute(rest, [...current, arr[i]])
        }
    }
    
    permute(nums, []);
    
    function isPrime(n) {
        if(n < 2) return false;
        for(let i = 2; i <= Math.sqrt(n); i++) {
            if(n % i === 0) return false;
        }
        return true
    }
    
    let count = 0;
    for(const num of set) {
        if(isPrime(num)) count++;
    }
    
    return count;
}