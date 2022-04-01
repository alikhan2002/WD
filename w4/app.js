const inputBox = document.querySelector(".ToDo input");
const addBtn = document.querySelector(".ToDo button");
const todo = document.querySelector(".tasks")

addBtn.onclick = ()=>{
    let userData = inputBox.value;
    let locStorage = localStorage.getItem("New ToDo");
    if(userData != ''){
        if(locStorage == null) {
            listArr = [];
        }else{
            listArr = JSON.parse(locStorage);
        }
        listArr.push(userData);
        localStorage.setItem("New ToDo", JSON.stringify(listArr));
    }else{
        alert("Write something")
    }
    showTasks();

}
showTasks();

function showTasks(){
    let locStorage = localStorage.getItem("New ToDo");
    if(locStorage == null) {
        listArr = [];
    }else{
        listArr = JSON.parse(locStorage);
    }
    let newTag = '';
    listArr.forEach((element,index) => {
        newTag += `<li><input type="checkbox"><label class="strikethrough">  ${element}</label><span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`
    });
    todo.innerHTML = newTag;
    inputBox.value="";
}

function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("New ToDo");
    listArr = JSON.parse(getLocalStorageData);
    listArr.splice(index, 1); 
    localStorage.setItem("New ToDo", JSON.stringify(listArr));
    showTasks(); 
  }
