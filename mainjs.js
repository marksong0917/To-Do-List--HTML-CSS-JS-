// When the html button, add new item is clicked, calls this function to add a new Element
function addNew() {
  // Assign newTaskValue of the value of element by id 'newTask', myList of  Master list; ul  , creating new element li and checkbox input
  var newTaskValue = document.getElementById("newTask").value;
  var myList = document.getElementById("todoList"); //li, the list
  var newTaskLi = document.createElement("li");
  var checkbox = document.createElement("input"); // create the checkbox element
  // giving the checkbox a type of checkbox and a class name of checkboxes
  checkbox.type = "checkbox";
  checkbox.className = "checkboxes";
  //appending the checkbox and new task's value under the li element
  newTaskLi.appendChild(checkbox);
  newTaskLi.appendChild(document.createTextNode(newTaskValue));
  //appending the new li element inside the master ul element and logging it to console
  myList.appendChild(newTaskLi);
  console.log("Item and Checkbox Added Successfully");
}
// above code no error

//Doesn't work
// Selecting every element inside the li element
// declaring a for loop starting from 0 to the length of myList (li)
//creating a complete button and assigning them a classname of b-delete and adding a textnode of X
//Appending a delete button to every element of li
var myList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myList.length; i++) {
  var completeButton = document.createElement("button");
  var deleteText = document.createTextNode("X");
  completeButton.className = "b-delete";
  completeButton.addEventListener("click", removeItem);
  completeButton.appendChild(deleteText);
  myList[i].appendChild(completeButton);
}

////Doesn't work
// If a delete button is clicked it will delete the parent's element
function removeItem() {
  var deleteTask = document.getElementsByClassName("b-delete");
  var i;
  for (i = 0; i < deleteTask.length; i++) {
    deleteTask[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

//selecting every checkbox under the classname of "checkboxes"
//if checkboxes isn't empty, listen for a event listen click and highlight them
var myList = document.getElementsByTagName("li");
var j;
for (j = 0; j < myList.length; j++) {
  var checkboxes = document.getElementsByClassName("checkboxes");
  if (checkboxes != null) {
    console.log("checkbox is null??");
    console.log(checkboxes);
    checkboxes[j].addEventListener("click", highLight);
  }
}

// highlight the checkboxes that are checked and make them style = line through it
function highLight(event) {
  console.log("highlight event entered");
  if (checkboxes[j].checked) {
    var list = document.getElementById("todoList"); //li, the list
    list.style.textDecoration = "through";
    console.log("Detected Check!");
  } else {
    var list = document.getElementById("todoList"); //li, the list
    list.style.textDecoration = "none";
  }
}
