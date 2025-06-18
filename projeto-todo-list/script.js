function createFakeTasks() {
    const atividades = [
        { task: "Ler e-mails", status: "on" },
        { task: "Reunião com equipe", status: "off" },
        { task: "Desenvolver nova funcionalidade", status: "on" },
        { task: "Revisar código", status: "off" },
        { task: "Planejar sprint", status: "on" },
        { task: "Atualizar documentação", status: "off" },
        { task: "Responder clientes", status: "on" },
        { task: "Corrigir bugs", status: "on" },
        { task: "Revisar pull requests", status: "off" },
        { task: "Testar sistema", status: "on" },
        { task: "Fazer backup", status: "off" },
        { task: "Escrever relatórios", status: "on" },
        { task: "Organizar arquivos", status: "off" },
    ];
    localStorage.setItem('tasks', JSON.stringify(atividades))
}
// createFakeTasks()
const btnCollapseLayout = document.getElementById('collpse-layout');
const tableBody = document.getElementById('table-body');

function fillBodyTable(list, body) {
    let statusTask = 'Concluído'; 
    body.innerHTML = ``;
    list.forEach((item, index) => {
        if (item.status === 'off') {
            statusTask = '<span class="badge alert-warning">Em andamento</span>';
        } else {
            statusTask = '<span class="badge alert-success">Concluído</span>'; 
        }
        body.innerHTML +=`
            <tr>
                <td>${item.task}</td>
                <td>
                    ${statusTask}
                </td>
                <td style="max-width: 40px">
                    <button class="btn text-danger btn-sm" onclick="deleteTaskModal('${item.task}', ${index})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 448 512"><!-- Icon from Font Awesome 5 Regular by Dave Gandy - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12M432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12"/></svg>
                    </button>
                    <button class="btn text-primary btn-sm" onclick="editTask('${item.task}', '${item.status}', ${index})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><!-- Icon from Basil by Craftwork - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M21.455 5.416a.75.75 0 0 1-.096.943l-9.193 9.192a.75.75 0 0 1-.34.195l-3.829 1a.75.75 0 0 1-.915-.915l1-3.828a.8.8 0 0 1 .161-.312L17.47 2.47a.75.75 0 0 1 1.06 0l2.829 2.828a1 1 0 0 1 .096.118m-1.687.412L18 4.061l-8.518 8.518l-.625 2.393l2.393-.625z" clip-rule="evenodd"/><path fill="currentColor" d="M19.641 17.16a44.4 44.4 0 0 0 .261-7.04a.4.4 0 0 1 .117-.3l.984-.984a.198.198 0 0 1 .338.127a46 46 0 0 1-.21 8.372c-.236 2.022-1.86 3.607-3.873 3.832a47.8 47.8 0 0 1-10.516 0c-2.012-.225-3.637-1.81-3.873-3.832a46 46 0 0 1 0-10.67c.236-2.022 1.86-3.607 3.873-3.832a48 48 0 0 1 7.989-.213a.2.2 0 0 1 .128.34l-.993.992a.4.4 0 0 1-.297.117a46 46 0 0 0-6.66.255a2.89 2.89 0 0 0-2.55 2.516a44.4 44.4 0 0 0 0 10.32a2.89 2.89 0 0 0 2.55 2.516c3.355.375 6.827.375 10.183 0a2.89 2.89 0 0 0 2.55-2.516"/></svg>
                    </button>
                    <button class="btn text-success btn-sm" onclick="finishTask('${item.task}', ${index})" ${item.status === 'on' ? 'disabled' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><!-- Icon from Basil by Craftwork - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" d="M7.483 5.26A2.486 2.486 0 0 0 5.29 7.422a39.4 39.4 0 0 0 0 9.154a2.486 2.486 0 0 0 2.193 2.163c2.977.333 6.057.333 9.034 0a2.486 2.486 0 0 0 2.192-2.163c.256-2.185.328-4.386.216-6.58a.2.2 0 0 1 .059-.152l1.038-1.04a.198.198 0 0 1 .339.125a41 41 0 0 1-.162 7.822c-.215 1.836-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.644-3.516-3.48a41 41 0 0 1 0-9.504c.214-1.837 1.69-3.275 3.516-3.48a42.5 42.5 0 0 1 9.366 0a4 4 0 0 1 1.76.64a.19.19 0 0 1 .025.295l-.803.803a.21.21 0 0 1-.25.033a2.5 2.5 0 0 0-.898-.28a41 41 0 0 0-9.034 0"/><path fill="currentColor" d="M21.03 6.03a.75.75 0 1 0-1.06-1.06l-8.47 8.47l-2.47-2.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0z"/></svg>
                    </button>
                </td>
            </tr>
        `
    })
}

btnCollapseLayout.addEventListener('click', () => {
    const navMenu = document.getElementsByTagName('nav');
    const nav = navMenu[0];

    const headerEle = document.getElementsByTagName('header');
    const header = headerEle[0];

    const mainEle = document.getElementsByTagName('main');
    const main = mainEle[0];

    nav.classList.toggle('app-collapse');
    header.classList.toggle('app-collapse');
    main.classList.toggle('app-collapse');
})

const toastLiveExample = document.getElementById('liveToastCreate')
const toastBootstrap = new bootstrap.Toast(toastLiveExample, {
    autohide: true,
    delay: 2000
})


const addTaskModal = document.getElementById('addTaskModal');
const addTaskModalInstance = new bootstrap.Modal(addTaskModal);
const btnAddTaskModal = document.getElementById('btnAddTaskModal');

btnAddTaskModal.addEventListener('click', () => {
    addTaskModalInstance.toggle();
});

const liveToastEdit = document.getElementById('liveToastEdit')
const liveToastEditInstace = new bootstrap.Toast(liveToastEdit)

const editTaskModal = document.getElementById('editTaskModal')
const editTaskModalInstance = new bootstrap.Modal(editTaskModal)
let indexTaskToEdit = null

function editTask(task, status, index) {
    indexTaskToEdit = index
    const inputTaskEdit = document.getElementById('inputTaskEdit')
    inputTaskEdit.removeAttribute('value')
    inputTaskEdit.setAttribute('value', task)
    const inputStatusEdit = document.getElementById('inputStatusEdit')

    if (status === 'on') {
        inputStatusEdit.checked = true
    }

    if (status === 'off') {
        inputStatusEdit.checked = false
    }

    editTaskModalInstance.toggle()
}

const btnEditModalTask = document.getElementById('btn-edit-modal-todo')
btnEditModalTask.addEventListener('click', () => {
    const editTodoForm = document.getElementById('edit-todo-form')
    const formData = new FormData(editTodoForm)
    const data = Object.fromEntries(formData)

    const listTasks = localStorage.getItem('tasks')
    const dataTasks = JSON.parse(listTasks)

    if (data.status === undefined) {
        data.status = 'off'
    }

    const tasks = dataTasks.map((item, index) => { 
        if (index === indexTaskToEdit) {
            item.task = data.task
            item.status = data.status
        }
        return item
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))
    editTaskModalInstance.toggle()
    liveToastEditInstace.show()
    fillBodyTable(tasks, tableBody)
})

let taskIndexToDelete = null;
const deleteTaskModalElement = document.getElementById('deleteTaskModal');
const deleteTaskModalInstace = new bootstrap.Modal(deleteTaskModalElement);

const btnDeleteTask = document.getElementById('btnDeleteModalTodo');
btnDeleteTask.addEventListener('click', () => {
    deleteTask(taskIndexToDelete);
    deleteTaskModalInstace.toggle();
});

function deleteTaskModal(task, index) {
    const h5TaskNameToDelet = document.getElementById('taskNameToDelet');
    deleteTaskModalInstace.toggle();
    
    h5TaskNameToDelet.innerText = task;
    taskIndexToDelete = index
}

const liveToastDeleteBs = document.getElementById('liveToastDelete')
const liveToastDelete = new bootstrap.Toast(liveToastDeleteBs)

function deleteTask(taskIndex) {
    const dataTaskList = localStorage.getItem('tasks');
    let taskList = JSON.parse(dataTaskList);

    taskList.splice(taskIndex, 1);

    fillBodyTable(taskList, tableBody);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    liveToastDelete.show()
}

const liveToastFinish = document.getElementById('liveToastFinish')
const liveToastFinishInstance = new bootstrap.Toast(liveToastFinish)
const doneTaskModal = document.getElementById('doneTaskModal')
const doneTaskModalInstance = new bootstrap.Modal(doneTaskModal)
let indexTaskToFinish = null

function finishTask(task, index) {
    const taskNameToDone = document.getElementById('taskNameToDone')
    taskNameToDone.innerHTML = task
    indexTaskToFinish = index
    doneTaskModalInstance.toggle()
}

const btnFinishModalTodo = document.getElementById('btnFinishModalTodo')
btnFinishModalTodo.addEventListener('click', () => {
    const dataTaskList = localStorage.getItem('tasks')
    const dataTasks = JSON.parse(dataTaskList)

    const updatedTasks = dataTasks.map((item, index) => {
        if (index === indexTaskToFinish) {
            item.status = 'on'
        }

        return item
    })

    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    fillBodyTable(updatedTasks, tableBody)

    doneTaskModalInstance.toggle()
    liveToastFinishInstance.show()
})

const btnModalTodo = document.getElementById('btn-modal-todo');
if (btnModalTodo) {
    // Pega todas as tarefas do localStorage
    const dataTaskList = localStorage.getItem('tasks');

    // // Crio um array de tarefas
    let taskList = [];

    // // Se já existir tarefas no localStorage, converto de string para array
    if (dataTaskList) {
        taskList = JSON.parse(dataTaskList);
    }

    fillBodyTable(taskList, tableBody);

    btnModalTodo.addEventListener('click', () => {
        const todoForm = document.getElementById('todo-form');
        const dataForm = new FormData(todoForm);
        const dataTask = Object.fromEntries(dataForm);
        
        if (dataTask.status === undefined) {
            dataTask.status = 'off'
        }
        
        const tableBody = document.getElementById('table-body');
    
        // Pega todas as tarefas do localStorage
        const dataTaskList = localStorage.getItem('tasks');

        // Crio um array de tarefas
        let taskList = [];

        // Se já existir tarefas no localStorage, converto de string para array
        if (dataTaskList) {
            taskList = JSON.parse(dataTaskList);
        }

        // Adiciono a nova tarefa ao array
        taskList.push(dataTask)

        // Adiciono as tarefas ao localStorage
        localStorage.setItem('tasks', JSON.stringify(taskList));
        
        fillBodyTable(taskList, tableBody);
        todoForm.reset();
        addTaskModalInstance.toggle();
        toastBootstrap.show()
    }); 
}

const btnAddUser = document.getElementById('add-user')

if (btnAddUser) {
    btnAddUser.addEventListener('click', () => {
        const userForm = document.getElementById('user-form')
        const formData = new FormData(userForm)
        const userData = Object.fromEntries(formData)

        let tableBody = document.getElementById('table-body')

        if (userData.name && userData.lastname && userData.email && userData.phoneNumber) {
            tableBody.innerHTML += `
                <tr>
                    <td>${userData.name}</td>
                    <td>${userData.lastname}</td>
                    <td>${userData.email}</td>
                    <td>${userData.phoneNumber}</td>
                    <td>
                        <button class="btn btn-danger btn-sm">Excluir</button>
                        <button class="btn btn-success btn-sm">Editar</button>
                        <button class="btn btn-primary btn-sm">Detalhes</button>
                    </td>
                </tr>
            `
        }
    })
}