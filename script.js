let box=document.getElementById("box");
let person= ["Rohan","Kancha","Anik","Prangshu"]
let box2=document.getElementById("box2");
box.addEventListener("click",function(){
    let selectedPerson1=person[Math.floor(Math.random()*person.length)];
    let selectedPerson2=person[Math.floor(Math.random()*person.length)];
    while(selectedPerson1===selectedPerson2){
        selectedPerson2=person[Math.floor(Math.random()*person.length)];
    }
    box2.textContent=selectedPerson1 +" Weds "+selectedPerson2
})