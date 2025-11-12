function solution(skill, skill_trees) {
    // skill 문자열을 배열로 변환
    // skill_tress 문자열에서 skill에 포함되는 문자만 뽑아서 순서대로 나열
    // 나열된 문자가 skill 앞부분과 같은 지 비교
    
    const skillArr = skill.split('');
    const filteredTrees = skill_trees.filter((tree) => {
        const filtered = tree.split('').filter((ch) => skillArr.includes(ch)).join('');
        return skill.startsWith(filtered);
    })
    return filteredTrees.length;
}