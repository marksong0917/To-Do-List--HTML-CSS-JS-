// JavaScript - To Do List - Mark Song - 11/18/19

// When the html button, add new item is clicked, calls this function to add a new Element

function addNew() {
  // Assign newTaskValue of the value of element by id 'newTask', myList of  Master list; ul  , creating new element li and checkbox input
  var newTaskValue = document.getElementById("newTask").value;
  var myList = document.getElementById("todoList"); //li, the list
  var newTaskLi = document.createElement("li");
  var checkbox = document.createElement("input"); // create the checkbox element
  // creating elements checkbox and a delete button and assigning them a type, classname and id
  checkbox.type = "checkbox";
  checkbox.className = "checkboxes";
  var bdelete = document.createElement("button"); // delete button
  bdelete.id = "b-delete";
  //appending the checkbox and new task's value under the li element
  newTaskLi.appendChild(checkbox);
  newTaskLi.appendChild(document.createTextNode(newTaskValue));
  newTaskLi.appendChild(bdelete);
  //appending the new li element inside the master ul element and logging it to console
  myList.appendChild(newTaskLi);
  checkbox.addEventListener("click", highLight);
  bdelete.addEventListener("click", removeItem);
  console.log("Item and Checkbox Added Successfully");
}

//function removeItem
// If a delete button is clicked it will delete the parent's element
function removeItem() {
  // assigning the parent node to li and li's parent node = ul
  //remove the element display styles
  var TaskLi = this.parentNode;
  var myList = TaskLi.parentNode;
  var div = this.parentElement;
  div.style.display = "none";
  myList.removeChild(TaskLi);
}

//function highlight
// highlight the checkboxes that are checked and make them style = line through it
function highLight(event) {
  console.log("highlight event entered");
  // assigning the parent node to li and li's parent node = ul
  var TaskLi = this.parentNode;
  var myList = TaskLi.parentNode;
  // if the li's children node is CHECKED, HIGHLIGHT through css
  if (TaskLi.childNodes[0].checked == true) {
    console.log("highlight checked");
    //re appends the item to under the list
    myList.append(TaskLi);
    TaskLi.style.textDecoration = "line-through";
  }
  //if the children node is UNCHECKED. Do not highlight and do nothing
  else {
    //re append the item to the list but to the top of the list
    console.log("highlight unchecked");
    myList.prepend(TaskLi);
    TaskLi.style.textDecoration = "none";
  }
}

// TO DO LIST
// Style the delete button
// style the li
// style the ui format
//style the checkbox
