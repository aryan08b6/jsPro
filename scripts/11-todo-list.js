const todoList = [
  {name: 'make dinner', dueDate: '2023-11-22'},
  {name: 'wash dishes', dueDate: '2023-11-23'},
  {name: 'watch yt', dueDate: '2023-11-24'}
];

function renderTodo(){
  let todoListHTML = '';

  for (let i = 0; i<todoList.length; i++){
    const todo = todoList[i];
    const {name, dueDate} = todo;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class = "delete-button js-del-button">Delete</button>`;
    todoListHTML += html
  }

  document.querySelector('.js-todoList').innerHTML = todoListHTML;

  document.querySelectorAll('.js-del-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', ()=>{
      todoList.splice(index, 1);
      renderTodo();
    });
  });

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