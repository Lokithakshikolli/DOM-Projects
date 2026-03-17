const input=document.getElementById("itemInput");
const add= document.getElementById("addBtn");
const list=document.getElementById("list");

addBtn.addEventListener("click", ()=>{
//must not be empty
    if( input.value === ""){
        alert("please add something!")
        return;
    }
//creating li
  const li=document.createElement("li");
  li.textContent=input.value;
  list.appendChild(li);
  input.value="";
//editable
    li.addEventListener("click", () => {
    const currentText = li.firstChild.textContent;
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = currentText;

    li.firstChild.replaceWith(inputField);
    inputField.focus();
    inputField.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const newText = inputField.value;
            const textNode = document.createTextNode(newText);
            inputField.replaceWith(textNode);
        }
    });
    inputField.addEventListener("blur", () => {
        const newText = inputField.value;
        const textNode = document.createTextNode(newText);
        inputField.replaceWith(textNode);
    });
});
// creating deletebtn
  const deleteBtn= document.createElement("button");
  deleteBtn.innerText="delete";
  deleteBtn.classList.add("delete");
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", ()=>{
  li.remove()
  })
})