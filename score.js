// Iteration 8: Making scoreboard functional

let params=new URLSearchParams(window.location.search)

let score = params.get("score")

let scoreBox=document.getElementById("score-board")
scoreBox.textContent=score

let PlayagainBtn=document.getElementById("play-again-button")
PlayagainBtn.onclick=()=>{
    window.location.href="./game.html"
}