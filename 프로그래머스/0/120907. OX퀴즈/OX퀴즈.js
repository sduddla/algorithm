function solution(quiz) {
    const a = quiz.map((v) => v.replace("=", "=="));
    return a.map((v) => eval(v) ? "O" : "X");
}