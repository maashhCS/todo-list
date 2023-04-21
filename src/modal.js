import { projectArray } from "./index";
import { createTask } from "./task"
import { checkTaskArray } from "./check_task";

const closeCreateTask = document.querySelector('#close-add-task-modal');
const addTaskConfirmButton = document.querySelector('.confirm-add-form');
const modal = document.querySelector('.modal');
const modalCreateTask = document.querySelector('.modal-create-new-task');
const addTaskTitle = document.querySelector('#form-input-task-title');
const addTaskTitleError = document.querySelector('.form-title-error ');
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
    })

    addTaskConfirmButton.addEventListener('click', (e) =>{
        e.preventDefault();
        if(addTaskTitle.value === '' || addTaskTitle.value === null){
            addTaskTitleError.classList.remove('hide');
            addTaskTitle.classList.add('form-title-error-input');
            return;
        }
        projectArray[e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[1].children[0].attributes[1].value].projectTaskArray.push(createTask(addTaskTitle.value, addTaskDescription.value, addTaskPriority.value, addTaskDueDate.value, false));
        clearTaskInputFields();
        checkTaskArray(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[1].children[0].attributes[1].value);
    })

    closeCreateTask.addEventListener('click', () => {
        clearTaskInputFields();
    });

    modal.addEventListener('click', (e) => {
        clearTaskInputFields();
    })

}

function clearTaskInputFields(){
    addTaskTitle.value = '';
    addTaskDescription.value = '';
    addTaskDueDate.value = '';
    addTaskTitleError.classList.add('hide');
    modal.classList.add('hide');
    modalCreateTask.classList.add('hide');
}