const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");


// Show Note Saved in local Storage
function shownotes(){
    notescontainer.innerHTML = localStorage.getItem("notes")
}
shownotes();

// Store data in local storage
function updatestorage(){
    localStorage.setItem("notes" , notescontainer.innerHTML)
}

// Create new notes on click 
createbtn.addEventListener("click" , () =>{
   let inputbox = document.createElement("p");
   let img = document.createElement("img");
   inputbox.className = "input-box";
   inputbox.setAttribute("contenteditable" , "true");
   img.src = "images/delete.png";
   notescontainer.appendChild(inputbox).appendChild(img); 
})

notescontainer.addEventListener("click" , function(e){
if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updatestorage();
}else if(e.target.tagName === "p"){
notes = document.querySelectorAll(".input-box");
notes.forEach(nt => {
    nt.onkeyup = function(){
        updatestorage();

    }
})
}
})

// Create LineBreak when Enter is pressed
document.addEventListener("keydown" , event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
