
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

    [[1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]],

    [[1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]],

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

var compareTable = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0]];

function login() {
    let userName = document.getElementById("inputName").value;
    sessionStorage.setItem("name", userName);
    let password = document.getElementById("inputPassword").value;

    if (userName == "abcd" && password == "1234") {
        //location.replace("menu.html");
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
    location.replace("game.html");
}

function back() {
    location.replace("menu.html");
}

function menuOnLoad() {
    document.getElementById("userName").innerHTML = sessionStorage.getItem("name");
}

function gamePage() {
    
    let numOfSquaresToHide = sessionStorage.getItem("numOfSquaresToHide");
    let randomTable = Math.floor(Math.random() * (sudokuTables.length));
    let tableForThisGame = sudokuTables[randomTable];
    sessionStorage.setItem('tableForThisGame', tableForThisGame);

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
                let input = document.createElement("input");
                input.setAttribute("type", "number");
                input.setAttribute("maxlength", "1");
                input.setAttribute("min", "1");
                input.setAttribute("max", "9");


                document.getElementById(idNum).appendChild(input);
            }
            idNum = addOneOnStr(idNum);
        }
    }

}

function again() {
    let inputArr = document.getElementsByTagName('input');

    for (let i = 0; i < inputArr.length; ++i) {
        inputArr[i].value = "";
    }
}

function finish() {
    let inputArr = document.getElementsByTagName('input');
    let counter = 0;

    for (let i = 0; i < inputArr.length; ++i) {
        if (inputArr[i].value == "") {
            alert("Please fill in all the cells");
            return;
        }
    }

    for (let row = 0; row < compareTable.length; row++) {
        for (let col = 0; col < compareTable[row].length; col++) {
            if (compareTable[row][col] != 0) {
                if (inputArr[counter].value != compareTable[row][col]) {
                    alert("You are a loser!, try again next time");
                    window.location.href = "menu.html";
                    return;
                }
                ++counter;
            }
        }
    }
    alert("Congratulations king, you did it");
    window.location.href = "menu.html";
}


function addOneOnStr(str) {
    let x = parseInt(str);
    ++x;
    return x.toString();
}

