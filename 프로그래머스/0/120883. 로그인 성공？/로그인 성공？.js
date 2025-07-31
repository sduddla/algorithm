function solution(id_pw, db) {
   // const id_pw = ['meosseugi', '1234'];
   // const db = [["rardss", "123"], ['meosseugi', '1234']];
    
    for(let i=0; i<db.length; i++) {
        const user = db[i];
        
        // user[0] 아이디
        // user[1] 비번
        
        if(user[0] === id_pw[0]) {
            if(user[1] === id_pw[1]) {
                return 'login';
            } else {
                return 'wrong pw';
            }
        }
    }
    return 'fail';
}