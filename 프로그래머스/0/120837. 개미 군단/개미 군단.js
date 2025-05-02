function solution(hp) {
    const warlord = Math.floor(hp/5);
    const solider = Math.floor((hp-warlord*5)/3);
    const worker = hp-(warlord*5)-(solider*3);
    return(warlord + solider + worker);
}