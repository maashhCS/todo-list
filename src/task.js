import { projectArray } from "./index";

const createTask = (title, description, priority, dueDate, checklist) => {
    let taskId = 0;
    return { title, description, dueDate, priority, checklist, taskId};
}

export { createTask };