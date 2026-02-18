// // toggle mode
// // click events 
// let button= document.querySelector("#btn");
// let body = document.querySelector("body");

// let mode = "light";

// button.addEventListener("click", ()=>{
//     if(mode === "light"){
//     mode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
//     }else{
//         mode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// });


// // Mouseover Events
// let div = document.querySelector("div");
// div.addEventListener("mouseover", ()=>{
//     console.log("YOU ARE INSIDE DIV");
    
// });

//=======================================chatGPT QUESITON    ===============================//



// Quesiton No: 01
let btn1 = document.querySelector("button");
let para = document.querySelector("p");
btn1.addEventListener("click", ()=>{
    para.innerText ="Text successfully Changed";
    para.style.color = "red";
});



// Quesiton No: 02
// when we click on div the div will hide & when we double click the div will show
// classlist toggle
let btn2 = document.getElementById("hide-div")
let div = document.getElementById("hide")
let showDive = "block";
btn2.addEventListener("click", ()=>{
    if(showDive === "block"){
        showDive = "hidden";
        div.classList.add("hide");
        div.classList.remove("show");
    }else{
        showDive = "block";
        div.classList.add("show");
        div.classList.remove("hide");
    }
    console.log(showDive);
    
})

// Quesiton No: 03
// change the image src
change.addEventListener("click", ()=>{
let img = document.getElementById("img");
img.src = "../image/02.jfif";
})


// Quesiton No: 04
// real-time show input value to paragraph
let input = document.getElementById("inputData")
input.addEventListener("input",()=>{
document.getElementById("output").innerText = input.value;
})

// Quesiton No: 05

let area = document.getElementById("area");
let count = document.getElementById("count");

area.addEventListener("input", ()=>{
    let textLength = area.value.length;
    count.innerText = "Charactor:" + textLength;
    if(textLength <=10){
        count.style.color = "black";
    }else if (textLength >10 && textLength <20) {
        count.style.color = "orange";
        } else {
        count.style.color = "red";
    }
})


// Quesiton No: 06
// toggle mode
let button= document.querySelector("#btn");
let body = document.querySelector("body");

let mode = "light";

button.addEventListener("click", ()=>{
    if(mode === "light"){
    mode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    }else{
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});


// Quesiton No: 06
// create elementing // 
let inputs = document.getElementById("itemInput");
let btn = document.getElementById("addBtn");
let ul = document.getElementById("itemList");


btn.addEventListener("click",()=>{
    let li = document.createElement("li");
    li.innerText = inputs.value;
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";

    li.appendChild(delbtn);
    ul.appendChild(li);

    delbtn.addEventListener("click", ()=>{
        ul.removeChild(li);
    });
    inputs.value = "";
});







