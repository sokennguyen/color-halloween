
const board = {
    rows: 3,
    columns: 12
}
const caculation = {
    max: 7,  //max value allowed number set difficulty
    ansMax: 5,
    ansMin: 1
}
let answers: any = [];  // [["5-2",3]["5-4",1] etc... 
let squares: any = [];  /*(index) position caculation rightAns completed 0	'0_0'	'7-5 = 2'	2	false*/
let currentAns: number = 0;
let SetcurrentAns = (num: number) => { currentAns = num; return currentAns; }

let checkSquare = (i: number) => {
    if (squares[i].completed) return true
    else if (squares[i].answer == currentAns) {
        squares[i].completed = true;
        SetSquares(squares);
        return true 
    }
    return false 
}
let checkAll = () => {
    let AllTrue = true;
    squares.forEach((sqr: any) => { if (sqr.completed === false) AllTrue = false })
    return AllTrue;
}

function Square(pos: any, mycaculation: string, rightAnswer: any) {
    let position : string  = pos;
    let caculation : string = mycaculation;
    let answer : number = rightAnswer;
    let completed : boolean = false;
    return { position, caculation, answer, completed };

}
const SetSquares = (inputSquare: any) => {
    const stringedSquares = JSON.stringify(inputSquare);
    localStorage.setItem('Squares', stringedSquares);
    return localStorage.getItem('Squares')
}
const initState = () => {
    if (localStorage.getItem('Squares'))
        squares = JSON.parse(localStorage.getItem('Squares'))
    return localStorage
}
const wipeSessionHistory = () => {
    localStorage.clear()
    return true
}


export function initSquares() {
    wipeSessionHistory();
    initState();
    if (squares < 1) { 
    for (let i = 0; i < board.rows; i++) {
            for (let j = 0; j < board.columns; j++) {
                const { cacu, answer } = genAnswer();
                answers.push([cacu, answer]);
                let pos: string = i + "_" + j;
                let newSquare = Square(pos, cacu, answer);
                squares.push(newSquare)
            }
        }
    }
    TestLog();
}
function genAnswer() {
    let answer = getRandom(caculation.ansMin, caculation.ansMax)
    let num = getRandom(-7, -1);
    let rightNum = 0;
    let leftNum = 0;

    if ((answer - (num)) > caculation.max) {
        let reduce = answer - (num) - 7;
        num += reduce;
    }
    rightNum = num
    leftNum = answer - (num);

    //console.log(leftNum + "" + rightNum + " = " + answer)
    let cacu : string = leftNum + "" + rightNum + " = " + answer;
    return { cacu, answer }
}

function getRandom(min: any, max: any) {
    return Math.floor(Math.random() * (max - min) + min);
}

function TestLog() {
    console.group("logic.tsx");
    console.log("All done .t TestLog")
    console.table(squares);
    //console.log(answers);
    console.log("Set SetcurrentAns to 3")
    SetcurrentAns(3);
    console.log(currentAns);
    test(10,2);
    test(1000,true);

    console.group("results");
    console.log("results")
    console.table(squares);
    console.groupEnd();
    console.log("testing  checkAll see if it checs out Xd")
    console.log(checkAll())
    
}
function test(tryTimes: any, randomAnswer: any): void {
    console.group("test");
    let stringy = randomAnswer ? "random" : currentAns;
    let count = 0;
    console.log("try check " + tryTimes + " random squares if " + stringy + " is right answer ")
    for (let i = 0; i < tryTimes; i++) {
        if (randomAnswer) {
            SetcurrentAns(getRandom(1, 5));
        }
        let myInt = getRandom(0, Object.keys(squares).length);
        if (checkSquare(myInt) === true && count++  && !randomAnswer) {
            console.log(squares[myInt])
            console.log(" Did it pass or faill? " + checkSquare(myInt));
        }

    }
    console.log("Found true " + count + " times")
    console.groupEnd();

}
