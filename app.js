let taskInput = document.getElementById("inp");
let taskList = document.getElementById("list");
let button = document.getElementById("btn");

button.addEventListener("click" , ajouter)

function ajouter(){
      let task = taskInput.value.trim();
      if(task !== ""){

    //create element li

         let taskItem = document.createElement("li");
         let taskText = document.createElement("div");
         taskText.textContent = task;
   
         // create edit button
         let editButton = document.createElement("button");
         // second method to fill text 
         editButton.textContent = "Edit";
         editButton.classList.add("btnEdit");

         editButton.addEventListener("click" , function(){
                                                        // drenaha bah ki nji nmodifier nlka task lkdim tmk m selectione            
            let newTask = prompt("Enter a new task .." , taskText.textContent);
            if(newTask != null){
               taskText.textContent = newTask;
            }

         }) ;
         let deleteButton = document.createElement("button");
         deleteButton.textContent = "Delete";
         deleteButton.classList.add("btnDelete");
         deleteButton.addEventListener("click" , function(){
              taskItem.remove();
         })
          // append taskText and editButton to taskItem
        taskItem.appendChild(taskText);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        // append taskItem to the list
       // listul.appendChild(taskItem);

        // clear input field after adding task
        taskInput.value = "";
   //create text dynamiue
  // first method to fill element by text
      //   var valeur = input.value;
        // var text = document.createTextNode(valeur);

   //match between
         //li.appendChild(text);
   // etape reel
         //listul.appendChild(li);
   // initialisation
         //input.value = "";

    }else {
         alert("Try to write your task")
}
}
