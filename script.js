// let score =56; 
// let grade;
// if(score >=90 && score <= 100){
//     grade = "A";
// }
// else if(score >=75 && score <=89){
//     grade = "B";
// }
// else if(score >=60 && score <=74){
//     grade = "C";
// }
// else if(score >=10 && score <=59){
//     grade = "D";
// }
// else if(score >=0 && score <=10){
//     grade = "F";
// }
// console.log("your grade is",grade)

// for(let i=0;i<=50;i++){
// if(i %2 != 0){
//     console.log("odd number",i)
// }

// }

// let number = 50;
// let guess = prompt("guess a number");
// console.log(guess);
// while(guess != number){
//     guess = prompt("you guess wrong number guess again");
// }
// console.log("you guessed 50 congratulations you won the game");

// let name =  prompt("enter your name without spaces");
// let str = "@"+ name + name.length;
// console.log(str);

// let marks = [95,75,65,25,78];
// let sum = 0 
// for(let value of marks){
//  sum += value ;
  
// }
// let avg = sum / marks.length;
// console.log(`the avg value of student result is ${avg}`);

// let price = [100,500,250,350,600];
// let i = 0;
// for(let val of price){
//     console.log(`value at index ${i}=${val}`)
//     let offer = val / 10;
// price[i] = price[i]- offer
// console.log(`the actual value is ${price[i]}`)
// i++;
// }
// let veggies = ["potato","apple","litchi","onion"];
// console.log(veggies);
// veggies.push("grapes")
// console.log(veggies.slice(1,2))
// console.log.apply(veggies.splice(2));

// function mul(x,y){
// console.log(x * y);
// }
// function countVovels(str){
//     let count = 0;
//    for(const char of str){
//     console.log(char)
//     if(char === "a" || char ==="e"|| char === "i"|| char === "o"|| char === "u"){
//         count++;
//     }
   
//    }
//    console.log(count);
//    countVovels("krishabhkhadse")
// }
//  let arr = [1,2,3,4,5];
//  arr.forEach(function(dets,index){
//     console.log(dets,index)
//  })
// console.log(window.document);

let box = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset");
let newGameBtn = document.getElementById("newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".winner");



let turnO = true;
const winningPatterns =  [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],];

const resetGame = function(){
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide")
}



    box.forEach(function(box){
        box.addEventListener("click",function(){
            console.log("box was clicked")
           if(turnO){
            box.innerHTML = "O"
            turnO = false;
           }else{
            box.innerHTML = "X"
            turnO = true;
           }
           box.disabled = true;
           checkwinner();
        })
    })
 
 const disableBoxes = function(){
for(let boxes of box){
    boxes.disabled = true;
}
 }
 const enableBoxes = function(){
for(let boxes of box){
    boxes.disabled = false;
    boxes.innerText = "";
}
 }

const showWinner = function(winner){

    msg.innerText = `congratulations,winner is ${winner} `
     msgcontainer.classList.remove("hide");
     disableBoxes();
}




    const checkwinner = function(){
        for(pattern of winningPatterns){
            let pos1 = box[pattern[0]].innerText;
            let pos2 = box[pattern[1]].innerText;
            let pos3 = box[pattern[2]].innerText;
            if(pos1 != "" && pos2 != "" && pos3 !=""){
                if(pos1 === pos2 && pos2 === pos3){
                    console.log("winner",pos1)
                    showWinner(pos1);
                }
            }
            
        }
    }

    resetBtn.addEventListener("click",resetGame)
    newGameBtn.addEventListener("click",resetGame)