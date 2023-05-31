export const checkGrade = (grade) => {
    let statusGrade = {myGrade: null};
    (grade >= 75) ? statusGrade.myGrade = 'Passed!' : statusGrade.myGrade = 'Failed!';
    return statusGrade;
;}

// console.log(checkGrade(60));