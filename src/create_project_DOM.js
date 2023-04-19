import { createProject } from "./projects";
import { projectArray } from "./index";
import { checkprojectArray} from "./check_project";

const projectCards = document.querySelector('.project-cards');
function createProjectDOM(title, id){
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.setAttribute('dataset', `${id}`);
    
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

    projectCards.appendChild(projectCard);
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(editDeleteDiv);
    editDeleteDiv.appendChild(editProjectTitle);
    editProjectTitle.appendChild(editProjectTitleSVG);
    editDeleteDiv.appendChild(deleteProject);
    deleteProject.appendChild(deleteProjectSVG);

    if(title === ''){
        const inputEditTitle = document.createElement('input');
        inputEditTitle.classList.add('edit-title-input');
        inputEditTitle.setAttribute('type', `text`);
        projectTitle.replaceWith(inputEditTitle);
        inputEditTitle.focus();

        inputEditTitle.addEventListener('keydown', (e) => {
            if(e.key === 'Enter' || e.key === 'Escape'){
                if(inputEditTitle.value === ""){
                    return;
                }
                projectTitle.innerText = inputEditTitle.value;
                title = inputEditTitle.value;
                projectArray[id].title = inputEditTitle.value;
                inputEditTitle.replaceWith(projectTitle);
            }
        })
    }

    //listenes for a click on the edit icon and replaces the title with a input field to edit the title
    editProjectTitle.addEventListener('click', () => {
        const inputEditTitle = document.createElement('input');
        inputEditTitle.classList.add('edit-title-input');
        inputEditTitle.setAttribute('type', `text`);
        inputEditTitle.setAttribute('value', `${title}`);
        projectTitle.replaceWith(inputEditTitle);

        //puts the cursor focus at the end of the text inside the input field
        inputEditTitle.focus();
        const length = inputEditTitle.value.length;
        inputEditTitle.setSelectionRange(length, length);

        //listenes for a keypress and changes the title of the project
        inputEditTitle.addEventListener('keydown', (e) => {
            if(e.key === 'Enter' || e.key === 'Escape'){
                if(inputEditTitle.value === ""){
                    return;
                }
                projectTitle.innerText = inputEditTitle.value;
                title = inputEditTitle.value;
                projectArray[id].title = inputEditTitle.value;
                inputEditTitle.replaceWith(projectTitle);
            }
        })
    })


    //deletes the project
    deleteProject.addEventListener('click', (e) =>{
        console.log(e);
        projectArray.splice(e.target.parentElement.parentElement.parentElement.attributes[1].value, 1);
        checkprojectArray();
        console.log(projectArray);
    })
}

//creates a add button and listenes for a click to create a new project
function createAddButton(){
    const addButton = document.createElement('button');
    addButton.classList.add('project-add-btn');

    const addButtonSVG = document.createElement('img');
    addButtonSVG.setAttribute('src', '../src/svg/plus-box-outline-white.svg');
    projectCards.appendChild(addButton);
    addButton.appendChild(addButtonSVG);

    addButton.addEventListener('click', () => {
        projectArray.push(createProject(''));
        checkprojectArray();
    })
}

export { createProjectDOM, createAddButton };