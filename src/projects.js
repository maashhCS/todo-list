import { createToDo } from "./todo"
import { projectArray } from "./index";

const createProject = (title) => {
    let projectToDoArray = [];
    let projectId = projectArray.length;
    return {projectToDoArray, title, projectId}
}

export { createProject };