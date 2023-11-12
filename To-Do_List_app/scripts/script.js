
/**
 * script for todo-list app
 */

const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const addButton = document.querySelector("#add-list-button");


//Creating button function to add task to list 

function addTaskButton(){

    addButton.addEventListener("click", () => {

        const getValue = inputBox.value;
    
        if(getValue){
    
            let list = document.createElement("li")
            list.innerHTML = getValue;

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";

            list.appendChild(span);  
            listContainer.appendChild(list);

        }else{
    
            alert("Please specify an activity first");
        }

        inputBox.value = "";
        saveData();
    
    });
}

const checkedAndDelete = () => {

    listContainer.addEventListener("click", (e) =>{

        e.preventDefault();

        if(e.target.tagName === "LI"){

            e.target.classList.toggle("checked");
            saveData();

        }else if (e.target.tagName === "SPAN"){

            e.target.parentElement.remove();
            saveData();
        }

    });
}

//save the data of our todo list app when ever we refresh the browser.
const saveData = () => {

    localStorage.setItem("data", listContainer.innerHTML);

}

//display the data when ever we open the website or browser again
const showTask = () => {

    listContainer.innerHTML = localStorage.getItem("data")

}



showTask();

export { addTaskButton, checkedAndDelete, saveData, showTask }