


document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('add-btn');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');
  const todocontent = document.getElementById('content');

  // Add new task
  addBtn.addEventListener('click', () => {
      const taskText = todoInput.value.trim();
      if (taskText !== "" && todocontent!=='') {
          addTask(taskText,todocontent);
          todoInput.value = ""; // clear input
      }
  });

  // Add task to list
  function addTask(task,todoContent) {
      const listItem = document.createElement('li');
      listItem.classList.add('todo-item');
      
      const taskText = document.createElement('span');
      taskText.innerHTML = `<b>${task}</b> | ${todoContent.value}`;
      listItem.appendChild(taskText);
      
      const editBtn = document.createElement('button');
      editBtn.innerText = 'Edit';
      editBtn.classList.add('edit-btn');
      listItem.appendChild(editBtn);

      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      listItem.appendChild(deleteBtn);

      todoList.appendChild(listItem);

      // Delete task
      deleteBtn.addEventListener('click', () => {
          todoList.removeChild(listItem);
      });

      // Edit task
      editBtn.addEventListener('click', () => {
          const newTask = prompt("Edit task:", todoContent.value);
           todoContent.value=newTask
          if (newTask !== null && newTask.trim() !== "") {
              taskText.innerHTML = `<b>${task}</b> | ${newTask}`;
          }
      });
  }
});


//show Data using Api
var val;
const getdatafromAPI=()=>{
  const URL="https://66dafe98f47a05d55be6b95e.mockapi.io/api/todo";
  async function getdata(){
        let data =await fetch(URL)
        val= await data.json();
      let ul=  document.createElement('table');
       
        for(let i=0;i<val.length;i++){
           let li=document.createElement("tr")
           li.innerHTML=` <td>${val[i].id}</td> <td>${val[i].createdAt} </td> <td> ${val[i].todo}</td>`
           ul.appendChild(li);
          

        }
       
     document.body.appendChild(ul);
     
     
 }
   getdata()
} 
document.querySelector(".show").addEventListener('click',getdatafromAPI)


//serching impliment using Filter
document.querySelector(".search-button").addEventListener("click",()=>{
          let serchval=document.getElementsByClassName("search-input");
          let valInput=serchval[0].value.trim();
          
             
          const URL="https://66dafe98f47a05d55be6b95e.mockapi.io/api/todo";
          async function getdata(){
                let data =await fetch(URL)
                val= await data.json();
               let searchdata=val.filter((el)=>el.todo===valInput)
               let ul=  document.createElement('table');
               ul.setAttribute('border','1');
               let li=document.createElement("tr")
               li.innerHTML=` <td>${searchdata[0].id}</td> <td>${searchdata[0].createdAt} </td> <td> ${searchdata[0].todo}</td>`
               console.log(searchdata);
               
               ul.appendChild(li);
                document.body.appendChild(ul)
         }
           getdata()
})


