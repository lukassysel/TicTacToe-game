const playerNameElement = document.getElementsByClassName("playerName")[0];
const playerScoreElement = document.getElementsByClassName("playerScore")[0];
const botNameElement = document.getElementsByClassName("botName")[0];
const botScoreElement = document.getElementsByClassName("botScore")[0];
const startGameButton = document.getElementsByClassName("startGame")[0];
const resetScreen = document.getElementsByClassName("reset")[0];
const whoWon = document.getElementById("whoWon");
const resetBtn = document.getElementById("resetBtn");
const width = window.innerWidth;
const height = window.innerHeight;
const s5 = document.getElementsByClassName("5s")[0];
const s8 = document.getElementsByClassName("8s")[0];
const s13 = document.getElementsByClassName("13s")[0];
const s20 = document.getElementsByClassName("20s")[0];
    
const btn1 = document.getElementsByClassName("btn-1")[0];
const btn2 = document.getElementsByClassName("btn-2")[0];
const btn3 = document.getElementsByClassName("btn-3")[0];
const btn4 = document.getElementsByClassName("btn-4")[0];
const btn5 = document.getElementsByClassName("btn-5")[0];
const btn6 = document.getElementsByClassName("btn-6")[0];
const btn7 = document.getElementsByClassName("btn-7")[0];
const btn8 = document.getElementsByClassName("btn-8")[0];
const btn9 = document.getElementsByClassName("btn-9")[0];
var toggleBotBtn = document.getElementsByClassName("toggle-input")[0];
let toggleButton = toggleBotBtn.checked;
let btnArr = [0,0,0,0,0,0,0,0,0]
let arrOfBtns = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9]
let arrOfTimes = [s5,s8,s13,s20]

const playerTimer = document.getElementsByClassName("playerTimer")[0];
const botTimer = document.getElementsByClassName("botTimer")[0];
let turn;   //0 = bot, 1 = player

let setTime = 13
let playerCountdown = setTime;
let botCountdown = setTime;
let botWaitTime = 1083;

let playerCircle = document.getElementsByClassName("playerIcon")[0];
let botCircle = document.getElementsByClassName("botIcon")[0];
let user2 = 1; //0 = bot or 1=player


//TODO
//input for player 1 and player 2 names

function chooseTime(){
    for(let i = 0; i < arrOfTimes.length; i++){
        arrOfTimes[i].addEventListener('click', function() {
            for(let j = 0; j < arrOfTimes.length; j++){
                arrOfTimes[j].style.border = "none"
            }
            arrOfTimes[i].style.border = "3px solid rgb(113, 223, 80)"
            setTime = arrOfTimes[i].innerHTML
            playerCountdown = setTime
            botCountdown = setTime
            playerTimer.innerHTML = setTime
            botTimer.innerHTML = setTime
            botWaitTime = Math.floor((arrOfTimes[i].innerHTML * 1000) / 12)
        })
    }
}
s13.style.border = "3px solid rgb(113, 223, 80)"
chooseTime()

toggleBotBtn.addEventListener('change', function() {
    toggleButton = this.checked;
    if(toggleButton == false){
        user2 = 1
        botNameElement.innerHTML = "Player 2"
    }else{
        user2 = 0
        botNameElement.innerHTML = "SHIT ON BOT"
    }
});

playerTimer.innerHTML = setTime
botTimer.innerHTML = setTime

for(let i = 0; i < arrOfBtns.length; i++){
    BtnOnOff(arrOfBtns[i], 0)
}

function BtnOnOff(button, state){ //on = 1, off = 0
    if(state == 1){
        button.disabled = false;
        button.classList.add("startGame_hover")
        button.classList.add("startGame_active")
    }else{
        button.disabled = true;
        button.classList.remove("startGame_hover")
        button.classList.remove("startGame_active")
    }
}

function randomPersonStarts(){
    let n = Math.floor(Math.random() * 2)
    if(n == 0){
        turn = 0
    } else{
        turn = 1
    }
}

startGameButton.addEventListener("click", function() {
    startLoop()
})

function uptadePlayerCountdown() {
    playerTimer.innerHTML = playerCountdown
}
function startPlayerCountdown() {
    const playerCountDownInterval = setInterval(() => {
        if(turn == 1) {
            playerCountdown--;
            uptadePlayerCountdown()
            checkTime()
            whichPlayer(1)
            checkWiner()
            for(let i = 0; i < arrOfBtns.length; i++){
                if(btnArr[i] == 0){
                    BtnOnOff(arrOfBtns[i], 1)
                }else{
                    BtnOnOff(arrOfBtns[i], 0)
                }
            }
        } else{
            clearInterval(playerCountDownInterval)
        }
    }, 1000);
}
function uptadeBotCountdown() {
    botTimer.innerHTML = botCountdown
}
function startBotCountdown() {
    const botCountDownInterval = setInterval(() => {
        if(turn == 0) {
            botCountdown--;
            uptadeBotCountdown()
            checkTime()
            whichPlayer(0)
            checkWiner()
            if(user2 == 1){
                for(let i = 0; i < arrOfBtns.length; i++){
                    if(btnArr[i] == 0){
                        BtnOnOff(arrOfBtns[i], 1)
                    }else{
                        BtnOnOff(arrOfBtns[i], 0)
                    }
                } 
            }else{
                for(let i = 0; i < arrOfBtns.length; i++){
                    BtnOnOff(arrOfBtns[i], 0)
                }
            }
            const botMove = setTimeout(() => {
                bot()
            }, botWaitTime);
        } else{
            clearInterval(botCountDownInterval)
        }
    }, 1000);
}
function checkTime(){
    if(turn == 1 && playerCountdown == 0){
        return(1)
    } else if(turn == 0 && botCountdown == 0){
        return(0)
    }
}

function startLoop(){
    playerTimer.innerHTML = setTime
    botTimer.innerHTML = setTime
    randomPersonStarts()
    startPlayerCountdown()
    startBotCountdown()
    BtnOnOff(startGameButton, 0)
    BtnOnOff(toggleBotBtn, 0)
}
function whichPlayer(person){
    if(width <= 768){
        if(person == 0){
            botCircle.style.border = "4px solid #18BC9C"
            playerCircle.style.border = "1px solid #18BC9C"
        } else if(person == 1){
            playerCircle.style.border = "4px solid #18BC9C"
            botCircle.style.border = "1px solid #18BC9C"
        }
    }else{
        if(person == 0){
            botCircle.style.border = "8px solid #18BC9C"
            playerCircle.style.border = "2px solid #18BC9C"
        } else if(person == 1){
            playerCircle.style.border = "8px solid #18BC9C"
            botCircle.style.border = "2px solid #18BC9C"
        }
    }
}

function btnPlace(btn, position){
    if(turn == 0 && btn.innerHTML !== "X" && btn.innerHTML !== "O"){
        btn.innerHTML = "O"
        turn = 1
        btnArr[position] = magicCube[position] * -1
        startPlayerCountdown()
    }else if(turn == 1 && btn.innerHTML !== "O" && btn.innerHTML !== "X"){
        btn.innerHTML = "X"
        turn = 0
        btnArr[position] = magicCube[position]
        startBotCountdown()
    }else{
        console.log("Button on position " + position + " is already filled")
    }
}
for(let i = 0; i < arrOfBtns.length; i++){
    arrOfBtns[i].addEventListener("click", function() {
        btnPlace(arrOfBtns[i], i)
    })
}


function checkWithoutDraw(){ //returns 0=bot wins, returns 1=player wins
    switch (btnArr[0] + btnArr[1] + btnArr[2]){
        case 15:
            return(1)
            break;
        case -15:
            return(0)
            break;
    }
    switch (btnArr[3] + btnArr[4] + btnArr[5]){
        case 15:
            return(1)
            break;
        case -15:
            return(0)
            break;
    }
    switch (btnArr[6] + btnArr[7] + btnArr[8]){
        case 15:
            return(1)
            break;
        case -15:
            return(0)
            break;
    }
    switch (btnArr[0] + btnArr[3] + btnArr[6]){
        case 15:
            return(1)
            break;
        case -15:
            return(0)
            break;
    }
    switch (btnArr[1] + btnArr[4] + btnArr[7]){
        case 15:
            return(1)
            break;
        case -15:
            return(0)
            break;
    }
    switch (btnArr[2] + btnArr[5] + btnArr[8]){
        case 15:
            return(1)
            break;
        case -15:
            return(0)
            break;
    }
    switch (btnArr[0] + btnArr[4] + btnArr[8]){
        case 15:
            return(1)
            break;
        case -15:
            return(0)
            break;
    }
    switch (btnArr[2] + btnArr[4] + btnArr[6]){
        case 15:
            return(1)
            break;
        case -15:
            return(0)
            break;
    }
}
function checkWiner(){
    if(checkWithoutDraw() == undefined && zeroCheck() == false){
        console.log("draw")
        whoWon.innerHTML = "DRAW!"
        gameEnd()
    }else if(checkWithoutDraw() == 1 || checkTime() == 0){
        console.log("player 1 wins")
        whoWon.innerHTML = "PLAYER 1 WINS!"
        gameEnd()
    }else if(checkWithoutDraw() == 0 || checkTime() == 1){
        console.log("player 2 wins")
        whoWon.innerHTML = "PLAYER 2 WINS!"
        gameEnd()
    }
}
function zeroCheck(){
    if(btnArr.includes(0)){
        return(true)
    }else{
        return(false)
    }
}
function gameEnd(){
    turn = 2
    playerCircle.style.border = "2px solid #18BC9C"
    botCircle.style.border = "2px solid #18BC9C"
    BtnOnOff(startGameButton, 0)
    BtnOnOff(toggleBotBtn, 1)
    resetScreen.style.display = "flex"
}
function disableGameStartBtn(){
    startGameButton.disabled = true
    startGameButton.classList.remove("startGame_hover")
    startGameButton.classList.remove("startGame_active")
}

function resetGame(){
    for(let i = 0; i < btnArr.length; i++){
        btnArr[i] = 0
        arrOfBtns[i].innerHTML = ""
    }
    playerCountdown = setTime
    botCountdown = setTime
    resetScreen.style.display = "none"
    for(let i = 0; i < arrOfBtns.length; i++){
        BtnOnOff(arrOfBtns[i], 0)
    }
    startLoop()
}
resetBtn.addEventListener("click", function() {
    resetGame()
})


let magicCube = [4,9,2,
                 3,5,7,
                 8,1,6]

function botWin() {
    if(turn == 0){
        for (let i = 0; i < btnArr.length; i++) {
            if (btnArr[i] == 0) {
                btnArr[i] = magicCube[i] * -1;
                if (checkWithoutDraw() == 0) {
                    arrOfBtns[i].innerHTML = "O";
                    checkWiner()
                    return(true);
                } else{
                    btnArr[i] = 0
                }
            }
        }
    }
}
function botBlock() {
    if(turn == 0){
        for (let i = 0; i < btnArr.length; i++) {
            if (btnArr[i] == 0) {
                btnArr[i] = magicCube[i];
                if (checkWithoutDraw() == 1) {
                    btnPlace(arrOfBtns[i], i);
                    return(true);
                } else{
                    btnArr[i] = 0
                }
            }
        }
    }
}
function botRandom() {
    listOfI = []
    for(let i = 0; i < btnArr.length; i++){
        if(btnArr[i] == 0){
            listOfI.push(i)
        }
    }
    let n = Math.floor(Math.random() * listOfI.length)
    btnPlace(arrOfBtns[listOfI[n]], listOfI[n])
    checkWiner()
}
function bot(){
    if(user2 == 0){
        botWin()
        if(turn == 0){
            botBlock() 
        }
        if(turn == 0){
            botRandom()
        }
    }  
}

bot()
