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
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteTaskModal('${item.task}', ${index})">Excluir</button>
                    <button class="btn btn-primary btn-sm" onclick="editTask('${item.task}', '${item.status}', ${index})">Editar</button>
                    <button class="btn btn-success btn-sm" onclick="finishTask('${item.task}', ${index})" ${item.status === 'on' ? 'disabled' : ''}>Concluir</button>
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

    if (nav.classList.contains('collapse')) {
        btnCollapseLayout.innerText = '>>';
    }

    if (!nav.classList.contains('collapse')) {
        btnCollapseLayout.innerText = '<<';
    }
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