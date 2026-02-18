// question No:01
let btn = document.getElementById("changeButton");
btn.addEventListener("click",()=>{
let  para = document.getElementById("myParagraph");
para.innerText = "This Paragraph is Successfully Change!"
     
})


// question No: 02:
let div = document.querySelector("div");
let btn2 = document.getElementById("hide");
let visibility  = "hidden";

btn2.addEventListener("click",()=>{
    if(visibility === "hidden"){
       visibility = "visible";
       div.classList.add("show");
       div.classList.remove("hide");
    }else{
        visibility = "hidden";
        div.classList.add("hide");
        div.classList.remove("show");
    }
    console.log(visibility);
    
});

// question No: 03
let btn3 = document.getElementById("Change");
let img = document.getElementById("img");
btn3.addEventListener("click", ()=>{
    img.src = "../image/02.jfif";
    
});
// question No: 04
let input = document.getElementById("inputItem")
let para = document.getElementById("myPara");
input.addEventListener("input", ()=>{
    para.innerText = input.value;
});


// question No: 05
let area = document.getElementById("textArea");
let count = document.getElementById("count");
area.addEventListener("input",()=>{
    let TextLength = area.value.length;
    count.innerText ="Charactor:" + TextLength;
    if(TextLength < 10){
        count.style.color = "green";
    }else if(TextLength > 10 && TextLength <=20){
        count.style.color = "yellow";
        }else{
            count.style.color ="red";
        }
});

// quesiton No: 06
let togle = document.getElementById("toggle");
let body = document.querySelector("body");
let mode = "light";

togle.addEventListener("click", ()=>{
if(mode === "light"){
    mode = "dark";
body.classList.add("dark");
body.classList.remove("light");
}else{
    mode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
}
console.log("mode");


});


// quesiton No: 07
let inputs = document.getElementById("inputData");
let btn4 = document.getElementById("add");
let list = document.getElementById("ul_list");

btn4.addEventListener("click", ()=>{
let li = document.createElement("li");
li.innerText = inputs.value;
ul_list.appendChild(li);

});

// quesiton No: 08
let text = document.getElementById("inputDetaile");
let added = document.getElementById("added");
let ul = document.getElementById("unorder");
 added.addEventListener("click", ()=>{
    let li = document.createElement("li");
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    li.innerText = text.value;
    ul.appendChild(li);
    li.appendChild(delbtn);

    delbtn.addEventListener("click",()=>{
        ul.removeChild(li);
    })
    text.value = "";
 })