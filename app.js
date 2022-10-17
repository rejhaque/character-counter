
     // This is a small but amazingly needful;

const textArea = document.getElementById("textarea");
const totalCounter= document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

textArea.addEventListener("keyup", ()=>{
     // console.log("key is pressed");
     updateCounter();
});

function updateCounter(){
     totalCounter.innerText = textArea.value.length;
     remainingCounter.innerText = textArea.getAttribute("maxlength") - textArea.value.length;
}