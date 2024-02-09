console.log("Welcome to tic tac toe");

const music = new Audio("music.mp3");
const audioTurn = new Audio("ting.mp3");
const gameOver = new Audio("gameover.mp3");
let Whosturn = "X";
let isGameOver = false;

// Function to change the turn
const changeTurn = () => {
    return Whosturn === "X" ? "0" : "X";
};

// Function to check for win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];

    wins.forEach((e) => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            document.querySelector(".info").innerText =
                boxtext[e[0]].innerText + " Won";
            isGameOver = true;
            document
                .querySelector(".imgbox")
                .getElementsByTagName("img")[0].style.width = "200px";
            document.querySelector(
                ".line"
            ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "20vw";
        }
    });
};

// Primary Game Logic
const boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    // text inside the box of X' and
    let boxText = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxText.innerText === "") {
            boxText.innerText = Whosturn;
            Whosturn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText =
                    "Turn for " + Whosturn;
            }
        }
    });
});

// Add onclick listener to reset button
document.getElementById("reset").addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach((element) => {
        element.innerText = "";
    });
    Whosturn = "X";
    isGameOver = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + Whosturn;
    document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "0px";
});
