let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGame = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turn0 = true;
let Count = 0;
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.classList.add("pink-color");
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.classList.add("orange-color");
            box.innerText = "X";
            turn0 = true;
        }
        console.log(Count);
        Count += 1;
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        Count=0;
        resetBtn.classList.remove("hide-reset");
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    resetBtn.classList.add("hide-reset");
};
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;
        if (Count < 9) {
            if (pos1value != "" && pos2value != "" && pos3value != "") {
                if (pos1value === pos2value && pos2value === pos3value) {
                    console.log("Winner", pos1value);
                    showWinner(pos1value);
                }
            }
        }
        if(Count>=9){
            msg.innerText = `Match Draw`;
            msgContainer.classList.remove("hide");
            disableBoxes();
            resetBtn.classList.add("hide-reset");
        }
    }
};
newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);