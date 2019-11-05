//using get Element by ID assign to them to the corresponding variables
var todoList = document.getElementById("todoList");
var newItem = document.getElementById("newItem");
newItem.addEventListener("click", addNew);
// Using the event listener function, going to listen for a click, if clicked going to use this function called addNew
// which is going to add new to do item to the to do list using
// Text is the value of what the user is typing
// List is the ul list
// newToDo is the li inside the list, the new item that gets added.
// This function uses appendChild and create Text Node to create a element under ul, li to create a to do item.
function addNew(event) {
  var text = document.getElementById("newInput").value;
  var list = document.getElementById("todoList");
  var newToDo = document.createElement("li");
  newToDo.appendChild(document.createTextNode(text));
  list.appendChild(newToDo);
  console.log("Item Added Successfully");
}
