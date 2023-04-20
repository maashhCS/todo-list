import { createTask, createToDo } from "./task"
import { createProject } from "./projects";
import { checkprojectArray } from "./check_project";
import { checkTaskArray } from "./check_task";

export const projectArray = [];

projectArray.push(createProject('Default'));
projectArray.push(createProject('Default2'));

checkprojectArray();

projectArray[0].projectTaskArray.push(createTask('TITLE', 'Description', 'low', '21.04.2023', false));

checkTaskArray(0);