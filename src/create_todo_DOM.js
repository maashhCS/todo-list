import { projectArray } from "./index";

const toDoCards = document.querySelector('.todo-cards');
function createToDoDOM(title, description, dueDate, priority, checklist, id){
    const toDoCard = document.createElement('div');
    toDoCard.classList.add('.todo-card');
    toDoCard.setAttribute('dataset', `${id}`);

    
}