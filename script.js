let box=document.getElementById("box");
let person= ["Rohan","Kancha","Anik","Prangshu"]
box.addEventListener("click",function(){
    let selectedPerson1=person[Math.floor(Math.random()*person.length)];
    let selectedPerson2=person[Math.floor(Math.random()*person.length)];
    while(selectedPerson1===selectedPerson2){
        selectedPerson2=person[Math.floor(Math.random()*person.length)];
    }
    alert(selectedPerson1+" Weds "+selectedPerson2);
})