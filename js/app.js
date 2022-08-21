
const addTask = document.querySelector('.btn-add');
const removeTask = document.querySelector('.btn-remove');
const toggleList = document.querySelector('.btn-toggle');
const input = document.querySelector('.input-main');
const list = document.querySelector('ul');
const listContainer = document.querySelector('.list-container');
const lastItem = document.querySelector('li:last-child');

addTask.addEventListener('click', () => {
  list.insertAdjacentHTML("afterbegin", `<li class="task-item">${input.value}</li>`);
  input.value = '';
  let checkedTask = document.querySelector('.task-item');
  checkedTask.addEventListener('click', () => {
    checkedTask.classList.add('checked-off-task');
  });
})

toggleList.addEventListener('click', () => {
  if(listContainer.style.display === 'none') {
    toggleList.textContent = 'Hide List';
    listContainer.removeAttribute('style');
  } else {
    toggleList.textContent = 'Show List';
    listContainer.style.display = 'none';
  }
})

removeTask.addEventListener('click', () => {
  const lastItem = document.querySelector('li:last-child');
  if (lastItem) {
    lastItem.remove();
  }
})
