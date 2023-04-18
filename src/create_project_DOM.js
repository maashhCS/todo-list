import { createProject } from "./projects";

const sidePanel = document.querySelector('.side-panel');
function createProjectDOM(title){
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('project-title');
    projectTitle.innerText = `${title}`;

    const editDeleteDiv = document.createElement('div');
    editDeleteDiv.classList.add('edit-delete-div');

    const editProjectTitle = document.createElement('button');
    editProjectTitle.classList.add('project-edit');

    const editProjectTitleSVG = document.createElement('img');
    editProjectTitleSVG.setAttribute('draggable', 'false')
    editProjectTitleSVG.setAttribute('src', '../src/svg/pencil-white.svg');

    const deleteProject = document.createElement('button');
    deleteProject.classList.add('project-delete');

    const deleteProjectSVG = document.createElement('img');
    deleteProjectSVG.setAttribute('draggable', 'false')
    deleteProjectSVG.setAttribute('src', '../src/svg/trash-can-outline-white.svg');

    sidePanel.appendChild(projectCard);
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(editDeleteDiv);
    editDeleteDiv.appendChild(editProjectTitle);
    editProjectTitle.appendChild(editProjectTitleSVG);
    editDeleteDiv.appendChild(deleteProject);
    deleteProject.appendChild(deleteProjectSVG);
}

function createAddButton(){
    const addButton = document.createElement('button');
    addButton.classList.add('project-add-btn');

    const addButtonSVG = document.createElement('img');
    addButtonSVG.setAttribute('src', '../src/svg/plus-box-outline-white.svg');
    sidePanel.appendChild(addButton);
    addButton.appendChild(addButtonSVG);
}

export { createProjectDOM, createAddButton };