import { createToDo } from "./todo"

const createProject = (title) => {
    let projectToDoArray = [];
    let projectId = 0
    return {projectToDoArray, title, projectId}
}

export { createProject };