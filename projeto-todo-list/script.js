const btnCollapseLayout = document.getElementById('collpse-layout');

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

const toastLiveExample = document.getElementById('liveToast')
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

const tableBody = document.getElementById('table-body');

function fillBodyTable(list, body) {
    let statusTask = 'Concluído'; 
    body.innerHTML = ``;
    list.forEach((item, index) => {
        if (!item.status) {
            statusTask = 'Em andamento';
        }
        body.innerHTML +=`
            <tr>
                <td>${item.task}</td>
                <td>${statusTask}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteTaskModal('${item.task}', ${index})">Excluir</button>
                    <button class="btn btn-success btn-sm" ${item.status === 'on' ? 'disabled' : ''}>Concluir</button>
                </td>
            </tr>
        `
    })
}
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

    console.log(task, index);
}

function deleteTask(taskIndex) {
    const dataTaskList = localStorage.getItem('tasks');
    let taskList = JSON.parse(dataTaskList);

    taskList.splice(taskIndex, 1);

    fillBodyTable(taskList, tableBody);
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

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