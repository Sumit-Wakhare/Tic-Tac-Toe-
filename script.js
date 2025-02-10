// access section

let boxes=document.querySelectorAll(".box");
let ternX=document.querySelector("#ternX");
let ternO=document.querySelector("#ternO");
let msgWin=document.querySelector("#msgWin");
let hide=document.querySelector(".msgContainer");
let newgamebtn=document.querySelector("#newGameBtn");
let resetbtn=document.querySelector("#resetBtn");

//tern define section
let userChoice=true;// X,O 

  const winPattens=[
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,3,6], 
    [1,4,7], 
    [2,5,8], 
    [0,4,8], 
    [2,6,4], 
  ];

// new game and reset button section

newGameBtn.addEventListener("click",()=>{
    resetBtn();
});
resetbtn.addEventListener("click",()=>{
     resetBtn();
});

// new game and reset button function

const resetBtn=()=>{
  boxes.forEach((box)=>{
    box.innerText="";
  box.disabled=false;
  hide.classList.add("hide");
  box.style.backgroundColor="#ffffc7";
  }) 
};

// O, X display section
ternX.classList.add("play1");
 boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
     console.log("box clicked")
     if(userChoice){
       box.innerText="X";
       userChoice=false;
       ternO.classList.add("play1")
       ternX.classList.remove("play1")
     }
     else{
       box.innerText="O";
       userChoice=true;
       ternX.classList.add("play1")
       ternO.classList.remove("play1")
     }
     box.disabled=true;
     checkWinner();
   })
 })
 
 // show winner
 
 const showWin = (win) => {
  msgWin.innerText=`Congratulations, Winner is ${win}`
  hide.classList.remove("hide")
}

// check winner section

 const checkWinner = ()=>{
   for(pattern of winPattens){
  let pos1 = boxes[pattern[0]].innerText;
  let pos2 = boxes[pattern[1]].innerText;
  let pos3 = boxes[pattern[2]].innerText;
 if(pos1 !== "" && pos2 !== ""&& pos3 !== ""){
     if(pos1===pos2 && pos2===pos3){
        showWin(pos3);
     }
    }
   }
 }
 
 