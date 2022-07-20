let ranNumber = Math.floor(Math.random()*20);
console.log(ranNumber)
document.querySelector('.two').addEventListener("click",() =>{
    let userGuess = Number(document.querySelector(".one").value);
    let result = document.querySelector(".divResult") ;
    if(userGuess){
        if(userGuess > ranNumber){
            result.innerHTML   = "too big"
            document.querySelector("body").style.backgroundColor = "red"
        }else if(userGuess < ranNumber){
            result.textContent = "too short"
            document.querySelector("body").style.backgroundColor = "blue"
        }else{
            result.textContent = "your smart!"
            document.querySelector("body").style.backgroundColor = "gold"
            document.querySelector(".one").disabled = true ;

        }
    }
})

document.querySelector(".reload").addEventListener("click",()=>{
    document.querySelector(".reloadTwo").innerHTML ="play again"
    window.location.reload()
    
})