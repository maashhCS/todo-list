import { projectArray } from "./index";

const closeCreateTask = document.querySelector('#close-add-task-modal')
const addTaskConfirmButton = document.querySelector('.confirm-add-form');
const modal = document.querySelector('.modal');
const modalCreateTask = document.querySelector('.modal-create-new-task');
export function addTaskForm(){
    modal.classList.remove('hide');
    modalCreateTask.classList.remove('hide');

    addTaskConfirmButton.addEventListener('click', (e) =>{
        e.preventDefault();
        
    })
}