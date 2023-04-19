const createToDo = (title, description, dueDate, priority, checklist) => {
    let toDoId = 0;
    return { title, description, dueDate, priority, checklist, toDoId};
}

export { createToDo };