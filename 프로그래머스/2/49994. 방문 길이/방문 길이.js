function updatePosition(x, y, dir) {
    switch(dir) {
        case 'U':
            return [x, y+1];
        case 'D':
            return [x, y-1];
        case 'R': 
            return [x+1, y];
        case 'L': 
            return [x-1, y];
    }
}

function solution(dirs) {
    let x = 0;
    let y = 0;
    
    const visited = new Set();
    
    for (const dir of dirs) {
        const [nx, ny] = updatePosition(x, y, dir);
        
        if (nx < -5 || nx >5 || ny > 5 || ny <-5 ) {
            continue;
        }
    
        visited.add(`${x}${y}${nx}${ny}`);
        visited.add(`${nx}${ny}${x}${y}`);
        
        x = nx;
        y = ny;
    }
    
    return visited.size / 2;
}