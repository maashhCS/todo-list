import { projectArray } from "./index";

export const taskCards = document.querySelector('.task-cards');
function createTaskDOM(title, description, priority, dueDate, checklist, id){
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    taskCard.setAttribute('dataset', `${id}`);

    const taskChecklist = document.createElement('input');
    taskChecklist.classList.add('task-checklist');
    taskChecklist.setAttribute('type', 'checkbox');
    taskChecklist.setAttribute('id', `checkbox-${id}`);
    if(checklist === true){
        taskChecklist.setAttribute('checked', `true`);
    }

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title');
    taskTitle.innerText = `${title}`;
    
    const taskDescription = document.createElement('div');
    taskDescription.classList.add('task-description');
    taskDescription.innerText = `${description}`;

    const taskPriority = document.createElement('div');
    if(priority === 'low'){
        taskPriority.classList.add('task-priority-low');
    } else if(priority === 'mid'){
        taskPriority.classList.add('task-priority-mid');
    } else {
        taskPriority.classList.add('task-priority-high');
    }

    const taskDueDate = document.createElement('div');
    taskDueDate.classList.add('task-due-date');
    taskDueDate.innerText = `${dueDate}`;

    const editDeleteDiv = document.createElement('div');
    editDeleteDiv.classList.add('edit-delete-div');

    const editTask = document.createElement('button');
    editTask.classList.add('task-edit');

    const editTaskSVG = document.createElement('img');
    editTaskSVG.setAttribute('draggable', 'false')
    editTaskSVG.setAttribute('src', '../src/svg/pencil-white.svg');

    const deleteTask = document.createElement('button');
    deleteTask.classList.add('task-delete');

    const deleteTaskSVG = document.createElement('img');
    deleteTaskSVG.setAttribute('draggable', 'false')
    deleteTaskSVG.setAttribute('src', '../src/svg/trash-can-outline-white.svg');

    taskCards.appendChild(taskCard);
    taskCard.appendChild(taskChecklist);
    taskCard.appendChild(taskPriority);
    taskCard.appendChild(taskTitle);
    taskCard.appendChild(taskDescription);
    taskCard.appendChild(taskDueDate);
    taskCard.appendChild(editDeleteDiv);
    editDeleteDiv.appendChild(editTask);
    editTask.appendChild(editTaskSVG);
    editDeleteDiv.appendChild(deleteTask);
    deleteTask.appendChild(deleteTaskSVG);
}

//creates a add button and listenes for a click to create a new project
function createAddButton(){
    const addButton = document.createElement('button');
    addButton.classList.add('project-add-btn');

    const addButtonSVG = document.createElement('img');
    addButtonSVG.setAttribute('src', '../src/svg/plus-box-outline-white.svg');
    taskCards.appendChild(addButton);
    addButton.appendChild(addButtonSVG);

    addButton.addEventListener('click', () => {
        console.log('task');
    })
}
export { createTaskDOM, createAddButton };