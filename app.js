let boxmatrix=document.querySelectorAll(".box");
let turnX=true;
let msg_container=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let reset=document.querySelector(".reset");
let count=0;

for(let i=0;i<boxmatrix.length;i++){
    // console.log(boxmatrix[i].innerHTML);
    boxmatrix[i].addEventListener("click", ()=>{
        if(turnX){
            boxmatrix[i].innerHTML="X";
            turnX=false;
            
        }
        else{
            boxmatrix[i].innerHTML="O";
            boxmatrix[i].style.color="blue";
            turnX=true;
        }
        boxmatrix[i].disabled=true;
        count++;
        showWinner();
       
        
    })
}

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const showWinner=()=>{
    for(let i=0;i<winPatterns.length;i++){
        let pos1=boxmatrix[winPatterns[i][0]].innerText;
        let pos2=boxmatrix[winPatterns[i][1]].innerText;
        let pos3=boxmatrix[winPatterns[i][2]].innerText;
        // console.log(winPatterns[i][0],winPatterns[i][1],winPatterns[i][2]);
        if(pos1 !="" && pos2!="" && pos3!="" && pos1===pos2 && pos2===pos3){
            // console.log(`Congratulation, Winner is ${pos1}`)
            DisplayWinner(pos1);
        }
    }
    // console.log("count ",count);
    if(count==9){
        DisplayWinner("Draw")
    }
}
const DisplayWinner=(winner)=>{
    if(winner==="Draw"){
        msg.innerText="Match is Draw";
        msg_container.classList.remove("hide");
    }
    else{
        msg.innerText=`Congratulations, Winner is ${winner}`;
        msg_container.classList.remove("hide");
    }
}

reset.addEventListener("click", ()=>{
    for(let i=0;i<boxmatrix.length;i++){
        // console.log(boxmatrix[i].innerHTML);
        boxmatrix[i].innerText="";
        msg_container.classList.add("hide");
        boxmatrix[i].disabled=false;
    }
});