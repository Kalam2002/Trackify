let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
let inputBtn = document.getElementById("input-btn")
let deleteBtn = document.getElementById("delete-btn")
let deleteOldestBtn = document.getElementById("delete-oldest-btn")
let tabBtn = document.getElementById("input-btn2")

greetUser()
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render()
}

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render()
});

function render() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li><a  target='_blankd' href='"+ inputs[i] +"'>"+inputs[i]+"</a></li>"
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
        </li>
        
        `
    }
    ulEl.innerHTML = listItems
}
deleteOldestBtn.addEventListener("click", deleteOldest)
deleteBtn.addEventListener("click", deleteAll)
tabBtn.addEventListener("click", saveTab)

function deleteAll() {
    myLeads = []
    localStorage.clear()
    render()
}
function deleteOldest() {
    myLeads.shift()
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render()
}
function greetUser() {
    document.getElementById("greet").textContent="Welcome Back User!"
}
function saveTab() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render()
    });
}