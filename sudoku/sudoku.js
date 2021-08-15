var sudokuTables = [
    [[9, 5, 7, 6, 1, 3, 2, 8, 4],
    [4, 8, 3, 2, 5, 7, 1, 9, 6],
    [6, 1, 2, 8, 4, 9, 5, 3, 7],
    [1, 7, 8, 3, 6, 4, 9, 5, 2],
    [5, 2, 4, 9, 7, 1, 3, 6, 8],
    [3, 6, 9, 5, 2, 8, 7, 4, 1],
    [8, 4, 5, 7, 9, 2, 6, 1, 3],
    [2, 9, 1, 4, 3, 6, 8, 7, 5],
    [7, 3, 6, 1, 8, 5, 4, 2, 9]],

    [[5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]],

    [[1, 9, 6, 8, 4, 5, 3, 2, 7],
    [8, 5, 7, 2, 3, 1, 4, 6, 9],
    [3, 4, 2, 7, 6, 9, 5, 1, 8],
    [6, 8, 3, 5, 9, 4, 1, 7, 2],
    [5, 7, 1, 3, 2, 6, 8, 9, 4],
    [9, 2, 4, 1, 8, 7, 6, 5, 3],
    [7, 3, 8, 6, 5, 2, 9, 4, 1],
    [4, 1, 5, 9, 7, 8, 2, 3, 6],
    [2, 6, 9, 4, 1, 3, 7, 8, 5]],

    [[1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]]
];

var compareTable = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];


function login() {
    let userName = document.getElementById("inputName").value;
    let password = document.getElementById("inputPassword").value;
    sessionStorage.setItem("name", userName);

    if (userName == "abcd" && password == "1234") {
        window.location.href = "menu.html";
    }
    else {
        document.getElementById("message").innerHTML = "wrong name or password";
    }
}

function logout() {
    userName = "";
    location.replace("login.html");
}

function setLevel(percentToClean) {
    let numOfSquaresToHide = Math.floor(81 * percentToClean);
    sessionStorage.setItem("numOfSquaresToHide", numOfSquaresToHide);

    switch (percentToClean) {
        case 0.25:
            sessionStorage.setItem("level", "Easy");
            break;
        case 0.50:
            sessionStorage.setItem("level", "Medium");
            break;
        case 0.75:
            sessionStorage.setItem("level", "Hard");
            break;
        default:
            sessionStorage.setItem("level", "Error");
    }

    location.replace("game.html");
}

function back() {
    location.replace("menu.html");
}

function menuPageOnLoad() {
    document.getElementById("userName").innerHTML = sessionStorage.getItem("name");
}

function gamePageOnLoad() {
    document.getElementById("levelId").innerHTML = sessionStorage.getItem("level");
    StartTimer();
    createTableForGame();
    createAnswersArr();
}

function createTableForGame() {
    let numOfSquaresToHide = sessionStorage.getItem("numOfSquaresToHide");
    let randomTableNum = Math.floor(Math.random() * (sudokuTables.length));
    let tableForThisGame = sudokuTables[randomTableNum];

    let randomrowToHide = 0;
    let randomColToHide = 0;
    let counter = 0;
    while (counter < numOfSquaresToHide) {
        randomrowToHide = Math.floor(Math.random() * (9 - 0));
        randomColToHide = Math.floor(Math.random() * (9 - 0));

        if (tableForThisGame[randomrowToHide][randomColToHide] != "") {
            compareTable[randomrowToHide][randomColToHide] = tableForThisGame[randomrowToHide][randomColToHide];
            tableForThisGame[randomrowToHide][randomColToHide] = "";
            ++counter;
        }
    }

    let idNum = "1";
    for (let row = 0; row < tableForThisGame.length; row++) {
        for (let col = 0; col < tableForThisGame[row].length; col++) {
            if (tableForThisGame[row][col] != "") {
                document.getElementById(idNum).innerHTML = tableForThisGame[row][col];
            }
            else {
                let input = createNumInput();
                document.getElementById(idNum).appendChild(input);
            }
            idNum = addOneOnStr(idNum);
        }
    }
}

function createNumInput() {
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("maxlength", "1");
    input.setAttribute("min", "1");
    input.setAttribute("max", "9");

    return input;
}

function again() {
    hintCounter = 0;
    createAnswersArr();

    let inputArr = document.getElementsByTagName('input');

    for (let i = 0; i < inputArr.length; ++i) {
        inputArr[i].value = "";
    }
}

function finish() {
    if (isInputsEmpties()) {
        alert("Please fill in all the cells");
    }
    else if (isAnswersTrue()) {
        //addRecordToTable(); 
        alert("Congratulations king, you did it");
        window.location.href = "menu.html";
    }
    else {
        alert("You are a loser!, try again next time");
        window.location.href = "menu.html";
    }
}

function isInputsEmpties() {
    let inputArr = document.getElementsByTagName('input');

    for (let i = 0; i < inputArr.length; ++i) {
        if (inputArr[i].value == "") {
            return true;
        }
    }
    return false;
}

function isAnswersTrue() {
    let inputArr = document.getElementsByTagName('input');

    for (let i = 0; i < answersArr.length; ++i) {
        if (answersArr[i] != inputArr[i].value) {
            return false;
        }
    }

    return true;
}

function addOneOnStr(str) {
    let x = parseInt(str);
    ++x;
    return x.toString();
}

var audio = new Audio('music.mp3');
function musicPlay(is) {
    if (is) {
        audio.play();
    }
    else {
        audio.pause();
    }
}

function backgroundColor(str) {
    document.body.style.backgroundColor = str;
}

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
function StartTimer() {
    setInterval(setTime, 1000);
}

function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
    let valString = val + "";

    if (valString.length < 2) {
        return "0" + valString;
    }
    else {
        return valString;
    }
}

var answersArr = [];
var hintAnswersArr = [];
function createAnswersArr() {
    answersArr = [];
    hintAnswersArr = [];

    for (let row = 0; row < compareTable.length; row++) {
        for (let col = 0; col < compareTable[row].length; col++) {
            if (compareTable[row][col] != 0) {
                answersArr.push(compareTable[row][col]);
                hintAnswersArr.push(compareTable[row][col]);
            }
        }
    }
}

var hintCounter = 0;
function hint() {
    if (hintAnswersArr.length > 0) {
        let inputArr = document.getElementsByTagName('input');
        inputArr[hintCounter].value = hintAnswersArr.shift();
        ++hintCounter;
    }
}

var adCounter = 1;
function adFun() {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(document.getElementById('adBtn'));

    switch (adCounter) {
        case 1:
            document.getElementById('adDiv2').appendChild(fragment)
            ++adCounter;
            break;
        case 2:
            document.getElementById('adDiv3').appendChild(fragment)
            ++adCounter;
            break;
        case 3:
            document.getElementById('adDiv4').appendChild(fragment)
            ++adCounter;
            break;
        case 4:
            document.getElementById('adDiv1').appendChild(fragment)
            adCounter = 1;
            break;
        default:
    }
}

/*
var recordsLabel = document.getElementById("recordsL");
function records() {
    window.location.href = "records.html";
}

function recordsPageOnLoad() {
    recordsArr = JSON.parse(localStorage.getItem("recordsArr"));
    recordsLabel.innerHTML = recordsArr;
    for (i = 0; i < recordsArr.length; i++) {
        alert(recordsArr[i]);
    }
}

var recordsArr = [];
localStorage.setItem("recordsArr", JSON.stringify(recordsArr));
function addRecordToTable() {
    recordsArr = JSON.parse(localStorage.getItem("recordsArr"));
    recordsArr.push(totalSeconds);
    localStorage.setItem("recordsArr", JSON.stringify(recordsArr));
}*/