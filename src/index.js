import { createTask } from "./task"
import { createProject } from "./projects";
import { checkprojectArray } from "./check_project";
import { checkTaskArray } from "./check_task";
import { getLocalStorage } from "./storage_updater";

export const projectArray = [];

//listens for the window to load and checks if a project exists if not it creates a default one with a default task
window.addEventListener('load', () => {
    getLocalStorage();
    checkprojectArray();
    checkTaskArray(0);
})