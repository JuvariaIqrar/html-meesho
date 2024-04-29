// hold footer
let foot=document.getElementsByClassName("subfoot")[0];
let btn =document.getElementsByClassName("bx-chevron-down")[17];
let p =document.getElementsByClassName("title_data")[0];
// 
let btnf =document.getElementsByClassName("bx-chevron-down")[2];
let item =document.getElementsByClassName("itemrelevat")[0];

// Gender
let Genderbtn =document.getElementsByClassName("bx-chevron-down")[4];
let genderdata=document.getElementById("genderlist");

// hold part
btn.addEventListener("click",handel)
p.style.display="block"
function handel(){
    if(p.style.display=="block")
    {
        p.style.display="none"
        btn.style.rotate="180deg"
    }
    else{
        p.style.display="block"
        btn.style.rotate="360deg"
    }
}

// Relevance
Genderbtn.addEventListener("click",Genderdata)
p.style.display="block"
function Genderdata(){

    if(genderdata.style.display=="block")
    {
        Genderbtn.style.rotate="180deg"
        genderdata.style.display="none"
    }
    else{
        genderdata.style.display="block"
        Genderbtn.style.rotate="360deg"
    }
}

// Gender
btnf.addEventListener("click",handelItem)
p.style.display="block"
function handelItem(){

    if(item.style.display=="block")
    {
        btnf.style.rotate="180deg"
        item.style.display="none"
    }
    else{
        item.style.display="block"
        btnf.style.rotate="360deg"
    }
}