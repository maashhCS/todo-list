import { projectArray } from "./index";
import { createTaskDOM, createAddButton, taskCards } from "./create_task_DOM";

export function checkTaskArray(index){
    deleteTaskElement();
    taskCards.setAttribute('dataset', `${index}`); 
    for(let i = 0; i < projectArray[index].projectTaskArray.length; i++){
        projectArray[index].projectTaskArray[i].taskId = i;
        createTaskDOM(projectArray[index].projectTaskArray[i].title,
                         projectArray[index].projectTaskArray[i].description,
                         projectArray[index].projectTaskArray[i].priority,
                         projectArray[index].projectTaskArray[i].dueDate,
                         projectArray[index].projectTaskArray[i].checklist,
                         projectArray[index].projectTaskArray[i].taskId);
        if(i === projectArray[index].projectTaskArray.length - 1){
            createAddButton();
            return;
        }
    }
    createAddButton();
}

function deleteTaskElement(){
    while (taskCards.firstChild) {
        taskCards.removeChild(projectCards.firstChild);
    }
}