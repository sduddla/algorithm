function solution(common) {
    if(common[1] - common[0] === common[2] - common[1]) {
        const d = common[1] - common[0];
        return common.at(-1) + d;
    } else {
        const r = common[1] / common[0]
        return common.at(-1) * r;
    }
}