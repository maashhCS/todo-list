import { createTask } from "./task"
import { projectArray } from "./index";

const createProject = (title) => {
    let projectTaskArray = [];
    let projectId = projectArray.length;
    return {projectTaskArray, title, projectId}
}

export { createProject };