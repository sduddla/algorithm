function solution(dots) {
    let xdot = dots.map(a => a[0]);
    let ydot = dots.map(a => a[1]);
    
    let width = Math.max(...xdot) - Math.min(...xdot);
    let height = Math.max(...ydot) - Math.min(...ydot);
    
    return width * height;
}