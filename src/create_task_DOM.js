import { checkTaskArray } from "./check_task";
import { projectArray } from "./index";
import { addTaskForm } from "./modal";

export const taskCards = document.querySelector('.task-cards');
function createTaskDOM(title, description, priority, dueDate, checklist, id){
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    taskCard.setAttribute('dataset', `${id}`);

    const checklistPriorityDiv = document.createElement('div');
    checklistPriorityDiv.classList.add('checklist-priority-div');

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
    taskCard.appendChild(checklistPriorityDiv);
    checklistPriorityDiv.appendChild(taskChecklist);
    checklistPriorityDiv.appendChild(taskPriority);
    taskCard.appendChild(taskTitle);
    taskCard.appendChild(taskDescription);
    taskCard.appendChild(taskDueDate);
    taskCard.appendChild(editDeleteDiv);
    editDeleteDiv.appendChild(editTask);
    editTask.appendChild(editTaskSVG);
    editDeleteDiv.appendChild(deleteTask);
    deleteTask.appendChild(deleteTaskSVG);

    //listens for a click and changes the status of task checklist from true to false and vice versa
    taskChecklist.addEventListener('click', (e) => {
        if(projectArray[e.target.parentElement.parentElement.parentElement.attributes[1].value].projectTaskArray[e.target.parentElement.parentElement.attributes[1].value].checklist === false){
            projectArray[e.target.parentElement.parentElement.parentElement.attributes[1].value].projectTaskArray[e.target.parentElement.parentElement.attributes[1].value].checklist = true;
        }else {
            projectArray[e.target.parentElement.parentElement.parentElement.attributes[1].value].projectTaskArray[e.target.parentElement.parentElement.attributes[1].value].checklist = false;
        }
    })

    //listens for a click and deletes the task
    deleteTask.addEventListener('click', (e) => {
        projectArray[e.target.parentElement.parentElement.parentElement.parentElement.attributes[1].value].projectTaskArray.splice(e.currentTarget.parentElement.parentElement.attributes[1].value, 1);
        checkTaskArray(e.target.parentElement.parentElement.parentElement.parentElement.attributes[1].value);
    })
}

//creates a add button and listens for a click to create a new task
function createAddButton(){
    const addButton = document.createElement('button');
    addButton.classList.add('project-add-btn');

    const addButtonSVG = document.createElement('img');
    addButtonSVG.setAttribute('src', '../src/svg/plus-box-outline-white.svg');
    taskCards.appendChild(addButton);
    addButton.appendChild(addButtonSVG);

    addButton.addEventListener('click', () => {
        addTaskForm();
    })
}
export { createTaskDOM, createAddButton };