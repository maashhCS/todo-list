import { createTask } from "./task"
import { createProject } from "./projects";
import { checkprojectArray } from "./check_project";
import { checkTaskArray } from "./check_task";

export const projectArray = [];

//listens for the window to load and checks if a project exists if not it creates a default one with a default task
window.addEventListener('load', () => {
    if(projectArray.length === 0){
        projectArray.push(createProject('Default'));
        projectArray[0].projectTaskArray.push(createTask('Title', 'Description', 'low', '2023-04-21', false));
        checkTaskArray(0);
    }
    checkprojectArray();
})