function solution(myStr) {
    const result = myStr.split(/[abc]+/).filter(Boolean);
    return result.length ? result : ["EMPTY"];
}