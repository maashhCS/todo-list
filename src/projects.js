import { createToDo } from "./todo"

const createProject = (title) => {
    projectToDoArray = [];
    projectId = 0
    return {projectToDoArray, title, projectId}
}

export { createProject };