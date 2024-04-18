const playerNameElement = document.getElementsByClassName("playerName")[0];
const playerScoreElement = document.getElementsByClassName("playerScore")[0];
const botScoreElement = document.getElementsByClassName("botScore")[0];
const startGameButton = document.getElementsByClassName("startGame")[0];
const resetScreen = document.getElementsByClassName("reset")[0];
const whoWon = document.getElementById("whoWon");
const resetBtn = document.getElementById("resetBtn");
    
const btn1 = document.getElementsByClassName("btn-1")[0];
const btn2 = document.getElementsByClassName("btn-2")[0];
const btn3 = document.getElementsByClassName("btn-3")[0];
const btn4 = document.getElementsByClassName("btn-4")[0];
const btn5 = document.getElementsByClassName("btn-5")[0];
const btn6 = document.getElementsByClassName("btn-6")[0];
const btn7 = document.getElementsByClassName("btn-7")[0];
const btn8 = document.getElementsByClassName("btn-8")[0];
const btn9 = document.getElementsByClassName("btn-9")[0];

btnArr = [0,0,0,0,0,0,0,0,0]
arrOfBtns = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9]

const playerTimer = document.getElementsByClassName("playerTimer")[0];
const botTimer = document.getElementsByClassName("botTimer")[0];
let turn;   //0 = bot, 1 = player
let playerCountdown = 10 
let botCountdown = 10
let firstStart = 1
let playerCircle = document.getElementsByClassName("playerIcon")[0];
let botCircle = document.getElementsByClassName("botIcon")[0];
let setTime = 10

//TODO

//input for player 1 and player 2 names
//input for time (3, 5, 7, 10, 20)

playerTimer.innerHTML = setTime
botTimer.innerHTML = setTime

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
    
}
function whichPlayer(person){
    if(person == 0){
        botCircle.style.border = "8px solid #18BC9C"
        playerCircle.style.border = "2px solid #18BC9C"
    } else if(person == 1){
        playerCircle.style.border = "8px solid #18BC9C"
        botCircle.style.border = "2px solid #18BC9C"
    }
}
function btn1Place(person){
    if(person == 0 && btn1.innerHTML !== "X" && btn1.innerHTML !== "O"){
        btn1.innerHTML = "O"
        turn = 1
        btnArr[0] = -4
        startPlayerCountdown()
    }else if(person == 1 && btn1.innerHTML !== "O" && btn1.innerHTML !== "X"){
        btn1.innerHTML = "X"
        turn = 0
        btnArr[0] = 4
        startBotCountdown()
    }else {
        console.log("turn is undefined or btn is already filled")
    }
}

btn1.addEventListener("click", function() {
    btn1Place(turn)
})
function btn2Place(person){
    if(person == 0 && btn2.innerHTML !== "X" && btn2.innerHTML !== "O"){
        btn2.innerHTML = "O"
        turn = 1
        btnArr[1] = -9
        startPlayerCountdown()
    }else if(person == 1 && btn2.innerHTML !== "O" && btn2.innerHTML !== "X"){
        btn2.innerHTML = "X"
        turn = 0
        btnArr[1] = 9
        startBotCountdown()
    }else {
        console.log("turn is undefined or btn is already filled")
    }
}

btn2.addEventListener("click", function() {
    btn2Place(turn)
})
function btn3Place(person){
    if(person == 0 && btn3.innerHTML !== "X" && btn3.innerHTML !== "O"){
        btn3.innerHTML = "O"
        turn = 1
        btnArr[2] = -2
        startPlayerCountdown()
    }else if(person == 1 && btn3.innerHTML !== "O" && btn3.innerHTML !== "X"){
        btn3.innerHTML = "X"
        turn = 0
        btnArr[2] = 2
        startBotCountdown()
    }else {
        console.log("turn is undefined or btn is already filled")
    }
}

btn3.addEventListener("click", function() {
    btn3Place(turn)
})
function btn4Place(person){
    if(person == 0 && btn4.innerHTML !== "X" && btn4.innerHTML !== "O"){
        btn4.innerHTML = "O"
        turn = 1
        btnArr[3] = -3
        startPlayerCountdown()
    }else if(person == 1 && btn4.innerHTML !== "O" && btn4.innerHTML !== "X"){
        btn4.innerHTML = "X"
        turn = 0
        btnArr[3] = 3
        startBotCountdown()
    }else {
        console.log("turn is undefined or btn is already filled")
    }
}

btn4.addEventListener("click", function() {
    btn4Place(turn)
})
function btn5Place(person){
    if(person == 0 && btn5.innerHTML !== "X" && btn5.innerHTML !== "O"){
        btn5.innerHTML = "O"
        turn = 1
        btnArr[4] = -5
        startPlayerCountdown()
    }else if(person == 1 && btn5.innerHTML !== "O" && btn5.innerHTML !== "X"){
        btn5.innerHTML = "X"
        turn = 0
        btnArr[4] = 5
        startBotCountdown()
    }else {
        console.log("turn is undefined or btn is already filled")
    }
}

btn5.addEventListener("click", function() {
    btn5Place(turn)
})
function btn6Place(person){
    if(person == 0 && btn6.innerHTML !== "X" && btn6.innerHTML !== "O"){
        btn6.innerHTML = "O"
        turn = 1
        btnArr[5] = -7
        startPlayerCountdown()
    }else if(person == 1 && btn6.innerHTML !== "O" && btn6.innerHTML !== "X"){
        btn6.innerHTML = "X"
        turn = 0
        btnArr[5] = 7
        startBotCountdown()
    }else {
        console.log("turn is undefined or btn is already filled")
    }
}

btn6.addEventListener("click", function() {
    btn6Place(turn)
})

function btn7Place(person){
    if(person == 0 && btn7.innerHTML !== "X" && btn7.innerHTML !== "O"){
        btn7.innerHTML = "O"
        turn = 1
        btnArr[6] = -8
        startPlayerCountdown()
    }else if(person == 1 && btn7.innerHTML !== "O" && btn7.innerHTML !== "X"){
        btn7.innerHTML = "X"
        turn = 0
        btnArr[6] = 8
        startBotCountdown()
    }else {
        console.log("turn is undefined or btn is already filled")
    }
}

btn7.addEventListener("click", function() {
    btn7Place(turn)
})
function btn8Place(person){
    if(person == 0 && btn8.innerHTML !== "X" && btn8.innerHTML !== "O"){
        btn8.innerHTML = "O"
        turn = 1
        btnArr[7] = -1
        startPlayerCountdown()
    }else if(person == 1 && btn8.innerHTML !== "O" && btn8.innerHTML !== "X"){
        btn8.innerHTML = "X"
        turn = 0
        btnArr[7] = 1
        startBotCountdown()
    }else {
        console.log("turn is undefined or btn is already filled")
    }
}

btn8.addEventListener("click", function() {
    btn8Place(turn)
})
function btn9Place(person){
    if(person == 0 && btn9.innerHTML !== "X" && btn9.innerHTML !== "O"){
        btn9.innerHTML = "O"
        turn = 1
        btnArr[8] = -6
        startPlayerCountdown()
    }else if(person == 1 && btn9.innerHTML !== "O" && btn9.innerHTML !== "X"){
        btn9.innerHTML = "X"
        turn = 0
        btnArr[8] = 6
        startBotCountdown()
    }else {
        console.log("turn is undefined or btn is already filled")
    }
}

btn9.addEventListener("click", function() {
    btn9Place(turn)
})

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
    disableGameStartBtn()
    resetScreen.style.display = "flex"
}
function disableGameStartBtn(){
    startGameButton.disabled = true
    startGameButton.classList.remove("startGame_hover")
    startGameButton.classList.remove("startGame_active")
}
function activateGameStartBtn(){
    startGameButton.disabled = false
    startGameButton.classList.add("startGame_hover")
    startGameButton.classList.add("startGame_active")
}
function resetGame(){
    for(let i = 0; i < btnArr.length; i++){
        btnArr[i] = 0
        arrOfBtns[i].innerHTML = ""
    }
    playerCountdown = setTime
    botCountdown = setTime
    resetScreen.style.display = "none"
    startLoop()
}
resetBtn.addEventListener("click", function() {
    resetGame()
})

