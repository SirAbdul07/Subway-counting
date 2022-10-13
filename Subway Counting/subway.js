        // document.getElementById("count").innerText = 5
        // let count = 0;

// function increment(){
//         let count = o;
        
// }

// EXERCISE: creating the total of lap time the player used in the car race
/*let lap1 = 34;
let lap2 = 33;
let lap3 = 36;
function lapse(){
        let lapTime = lap1 + lap2 + lap3;
        console.log(lapTime);
}

lapse();*/

// EXERCISE: creating a function that increment the lapCOmpleted variable with 1
/*let lapCompleted = 0
function lapseCompleted(){
        let increment = lapCompleted +1;
        console.log(increment)
}

lapseCompleted();
lapseCompleted();
lapseCompleted();*/


let countPass = document.getElementById("count");
let decPass = document.getElementById("count")
let saveEl = document.getElementById("text-el");
// let clearEl = document.getElementById("text-el");
let count = 0;


function increment(){
        count += 1;
        countPass.innerText = count;
}

function decrement(){
        count -= 1
        countPass.innerText = count

}

function save(){
        let countStr = count + " - ";
        saveEl.textContent += countStr;
        countPass.innerText = 0;
        count = 0;

}

/* function clear(){
//         const clearStr = document.getElementById("text-el");
//         const parent = clearStr.parentNode;
//         parent.removeChild(clearStr);
//         // clearEl.textContent += clearStr;
//         // countPass.innerText = 0;
//         // count = 0;
}*/









