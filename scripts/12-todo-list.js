const todoList = [
  {name: 'make dinner', dueDate: '2023-11-22'},
  {name: 'wash dishes', dueDate: '2023-11-23'},
  {name: 'watch yt', dueDate: '2023-11-24'}
];

function renderTodo(){
  let todoListHTML = '';

  todoList.forEach(function (val, index){
    const todo = val;
    const {name, dueDate} = todo;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class = "delete-button" onclick = "
        todoList.splice(${index}, 1);
        renderTodo();
      ">Delete</button>`;
    todoListHTML += html
  });


  document.querySelector('.js-todoList').innerHTML = todoListHTML;

}

renderTodo();

function addTodo(){
  const inputEle = document.querySelector('.js-name-input');
  const name = inputEle.value;

  const inputDate = document.querySelector('.js-date-input')
  const dueDate = inputDate.value;

  todoList.push({name, dueDate});

  inputEle.value = '';
  inputDate.value = '';

  

  for (let i = 0; i < todoList.length; i++){
    console.log(todoList[i]);
  }

  renderTodo();
}