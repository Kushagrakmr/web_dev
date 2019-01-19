window.setTimeout(function () {
var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do ? ");

while(input != "quit")
{
	
	if(input === "list")
		{
			console.log("***************");
			todos.forEach(function(todo,i)
					  {i + ": " + console.log(todo);});
		}
			console.log("***************")

	if(input === "new");
		{
			var newTodo = prompt("Enter new Todo");
			todos.push(newTodo);
		}
	
	input = prompt("What would you like to do");
	
}
console.log("OK, YOU QUIT THE APP");
	
},500);