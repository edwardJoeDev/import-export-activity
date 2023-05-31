import { checkGrade } from "./passedGrade.js";

export const myInfo = (name, grade) => {
    let thisGrade = checkGrade(grade);
    let checkStatus = thisGrade.myGrade;
    let user = {
        name: name,
        grade: grade
    };
    console.log(user, checkStatus);
    return `Hello World`;
}
