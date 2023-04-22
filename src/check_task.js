import { projectArray } from "./index";
import { createTaskDOM, createAddButton, taskCards } from "./create_task_DOM";

export function checkTaskArray(index){
    deleteTaskElement();

    //checks if the projectTaskArray is empty if so it creates a task add button and returns nothing
    if(projectArray[index].projectTaskArray.length === 0){
        createAddButton();
        taskCards.setAttribute('dataset', `${index}`); 
        return;
    }
    //if the projectTaskArray is not empty it creates a new task div for every task in the array
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

//deletes every child inside the taskCards div
export function deleteTaskElement(){
    while (taskCards.firstChild) {
        taskCards.removeChild(taskCards.firstChild);
    }
}