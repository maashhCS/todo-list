import { createToDo } from "./todo"
import { createProjectDOM, createAddButton } from "./create_project_DOM"
import { createProject } from "./projects";
import { checkprojectArray } from "./check_project";

export const projectArray = [];

projectArray.push(createProject('Default'));
projectArray.push(createProject('Default2'));
projectArray.push(createProject('Default3'));
projectArray.push(createProject('Default4'));

checkprojectArray();