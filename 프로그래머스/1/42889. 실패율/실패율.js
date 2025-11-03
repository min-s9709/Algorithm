function solution(N, stages) {
    // 스테이지별 도전자 수
    const challenger = new Array(N+2).fill(0);
    for(const stage of stages) {
        challenger[stage] += 1; 
    }
    
    // 실패율을 저장하는 용도
    const fails = {};
    // 총 사용자 수
    let total = stages.length;
    
    // 각 스테이지를 순회하면서 실패율 계산
    for(let i = 1; i <= N; i++) {
        if(challenger[i] === 0) {
            // 도전한 사람이 없으면 실패율 0
            fails[i] = 0;
            continue;
        }
        
        // 스테이지별 실패율 
        fails[i] = challenger[i] / total;
        
        // 다음 스테이지 실패율을 구하기 위해 현재 스테이지 인원 뺌
        total -= challenger[i];
    }
    
    // 실패율이 높은 스테이지부터 내림차순 정렬
    const answer = Object.entries(fails).sort((a,b) => b[1] - a[1]);
    
    // 스테이지 번호만 반환
    return answer.map((v) => Number(v[0]));
}