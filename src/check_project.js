import { projectArray } from "./index";
import { createProjectDOM, createAddButton } from "./create_project_DOM"

export function checkprojectArray(){
    deleteProjectElement(); 
    for(let i = 0; i < projectArray.length; i++){
        projectArray[i].projectId = i;
        createProjectDOM(projectArray[i].title, projectArray[i].projectId);
        if(i === projectArray.length - 1){
            createAddButton();
            return;
        }
    }
    createAddButton();
}

const projectCards = document.querySelector('.project-cards');
function deleteProjectElement(){
    while (projectCards.firstChild) {
        projectCards.removeChild(projectCards.firstChild);
    }
}