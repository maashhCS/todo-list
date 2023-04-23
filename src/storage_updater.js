import { projectArray } from "./index";
import { createProject } from "./projects";
import { createTask } from "./task";

export function updateLocalStorage(){
    localStorage.setItem("projects", JSON.stringify(projectArray));
}

export function getLocalStorage(){
    if (!localStorage.getItem('projects')) {
        projectArray.push(createProject('Default'));
        projectArray[0].projectTaskArray.push(createTask('Title', 'Description', 'low', '2023-04-21', false));
    } else {
        const projectsLocalStorage = JSON.parse(localStorage.getItem('projects'));
        projectsLocalStorage.forEach((project) => {
        projectArray.push(project);
        });
    }
    updateLocalStorage();
}