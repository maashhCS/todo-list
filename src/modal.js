import { projectArray } from "./index";
import { createTask } from "./task"
import { checkTaskArray } from "./check_task";

const closeCreateTask = document.querySelector('#close-add-task-modal');
const addTaskConfirmButton = document.querySelector('.confirm-add-form');
const modal = document.querySelector('.modal');
const modalCreateTask = document.querySelector('.modal-create-new-task');
const addTaskTitle = document.querySelector('#form-input-task-title');
const addTaskTitleError = document.querySelector('.form-title-error');
const addTaskDescription = document.querySelector('.form-add-description');
const addTaskDueDate = document.querySelector('#form-add-dueDate');
const addTaskPriority = document.querySelector('.form-add-priority');

export function addTaskForm(){
    modal.classList.remove('hide');
    modalCreateTask.classList.remove('hide');

    modalCreateTask.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
    });

    addTaskConfirmButton.addEventListener('click', (e) =>{
        e.preventDefault();
        if(addTaskTitle.value === '' || addTaskTitle.value === null){
            addTaskTitleError.classList.remove('hide');
            addTaskTitle.classList.add('form-title-error-input');
            return;
        }
        projectArray[e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[1].children[0].attributes[1].value].projectTaskArray.push(createTask(addTaskTitle.value, addTaskDescription.value, addTaskPriority.value, addTaskDueDate.value, false));
        checkTaskArray(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[1].children[0].attributes[1].value);
        
        clearAddTaskInputFields();
    });

    closeCreateTask.addEventListener('click', () => {
        clearAddTaskInputFields();
    });

    modal.addEventListener('click', (e) => {
        clearAddTaskInputFields();
    })

    addTaskDueDate.addEventListener('click', (e) => {
        e.stopPropagation();
    })

}
const closeEditTask = document.querySelector('#close-edit-task-modal');
const editTaskConfirmButton = document.querySelector('.confirm-edit-form');
const modalEditTask = document.querySelector('.modal-edit-task');
const editTaskTitle = document.querySelector('#form-edit-input-task-title');
const editTaskTitleError = document.querySelector('.form-edit-title-error');
const editTaskDescription = document.querySelector('.form-edit-description');
const editTaskDueDate = document.querySelector('#form-edit-dueDate');
const editTaskPriority = document.querySelector('.form-edit-priority');

export function editTaskForm(projectIndex, taskIndex){
    modal.classList.remove('hide');
    modalEditTask.classList.remove('hide');

    editTaskTitle.value = projectArray[projectIndex].projectTaskArray[taskIndex].title;
    editTaskDescription.value = projectArray[projectIndex].projectTaskArray[taskIndex].description;
    editTaskDueDate.value = projectArray[projectIndex].projectTaskArray[taskIndex].dueDate;
    editTaskPriority.value = projectArray[projectIndex].projectTaskArray[taskIndex].priority;

    modalEditTask.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
    });

    editTaskConfirmButton.addEventListener('click', (e) =>{
        e.preventDefault();
        if(editTaskTitle.value === '' || addTaskTitle.value === null){
            editTaskTitleError.classList.remove('hide');
            editTaskTitle.classList.add('form-title-error-input');
            return;
        }

        projectArray[projectIndex].projectTaskArray[taskIndex].title = editTaskTitle.value;
        projectArray[projectIndex].projectTaskArray[taskIndex].description = editTaskDescription.value;
        projectArray[projectIndex].projectTaskArray[taskIndex].dueDate = editTaskDueDate.value;
        projectArray[projectIndex].projectTaskArray[taskIndex].priority = editTaskPriority.value;

        checkTaskArray(projectIndex);
        clearEditTaskInputFields();
    });

    closeEditTask.addEventListener('click', () => {
        clearEditTaskInputFields();
    });

    modal.addEventListener('click', (e) => {
        clearEditTaskInputFields();
    })
}

const showModalTask = document.querySelector('.modal-show-task');
const closeShowTask = document.querySelector('#close-task-modal-show');
const showTaskTitle = document.querySelector('.modal-content-title');
const showTaskDescription = document.querySelector('.modal-content-description');
const showTaskDueDate = document.querySelector('.modal-content-due-date');
const showTaskPriority = document.querySelector('.modal-content-priority');
const taskFinished = document.querySelector('.modal-content-task-finished');

export function showTask(projectIndex, taskIndex){
    modal.classList.remove('hide');
    showModalTask.classList.remove('hide');

    showTaskTitle.innerText = `${projectArray[projectIndex].projectTaskArray[taskIndex].title}`;
    showTaskDescription.innerText = `${projectArray[projectIndex].projectTaskArray[taskIndex].description}`;
    if(projectArray[projectIndex].projectTaskArray[taskIndex].dueDate !== ''){
        showTaskDueDate.innerText = `${projectArray[projectIndex].projectTaskArray[taskIndex].dueDate}`;
    } else {
        showTaskDueDate.innerText = 'No due date';
    }
    showTaskPriority.innerText = `${projectArray[projectIndex].projectTaskArray[taskIndex].priority}`;
    if(projectArray[projectIndex].projectTaskArray[taskIndex].checklist){
        taskFinished.innerText = `Task finished: YES`
    } else {
        taskFinished.innerText = `Task finished: NO`
    }

    closeShowTask.addEventListener('click', () => {
        clearShowTask();
    })

    showModalTask.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
    });

}

//clears the add task modal form fields 
function clearAddTaskInputFields(){
    addTaskTitle.value = '';
    addTaskDescription.value = '';
    addTaskDueDate.value = '';
    addTaskTitleError.classList.add('hide');
    modal.classList.add('hide');
    modalCreateTask.classList.add('hide');
    addTaskTitle.classList.remove('form-title-error-input');
}

//clears the edit task modal form fields 
function clearEditTaskInputFields(){
    editTaskTitle.value = '';
    editTaskDescription.value = '';
    editTaskDueDate.value = '';
    editTaskTitleError.classList.add('hide');
    modal.classList.add('hide');
    modalEditTask.classList.add('hide');
    editTaskTitle.classList.remove('form-title-error-input');
}

//clears the show task modal div text content
function clearShowTask(){
    showTaskTitle.innerText = '';
    showTaskDescription.innerText = '';
    showTaskDueDate.innerText = '';
    showTaskPriority.innerText = '';
    modal.classList.add('hide');
    showModalTask.classList.add('hide');
}