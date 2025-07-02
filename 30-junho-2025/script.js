const appElement = document.getElementById('app')

const userName = 'Gideão'
const userSurname = 'Ferreira'
const userFullName = 'Olá, ' + userName + ' ' + userSurname

const pName = document.createElement('p')
pName.innerText = userFullName
appElement.appendChild(pName)

// Template string
const fullName = `Olá, ${userName} ${userSurname}`
const pFullName = document.createElement('p')
pFullName.innerText = fullName
appElement.appendChild(pFullName)

// document.createElement('tag a ser criada')
const table = document.createElement('table')
table.classList.add('table')

const thead = document.createElement('thead')
const trThead = document.createElement('tr')
const thName = document.createElement('th')
const thSurname = document.createElement('th')

appElement.appendChild(table)

thName.innerText = 'Nome'
thSurname.innerText = 'Sobrenome'

trThead.appendChild(thName)
trThead.appendChild(thSurname)

thead.appendChild(trThead)
table.appendChild(thead)

const tbody = document.createElement('tbody')
table.appendChild(tbody)

// Arrays, Arrays com Objetos e Array Methods

const user = {
    name: 'Gideão',
    lastName: 'Ferreira',
    isAdmin: false
}

const users = [
    user,
    {
        name: 'Jon',
        lastName: 'Kenned',
        isAdmin: true
    }
]


users.forEach((user) => {
    const tr = document.createElement('tr')

    const tdName = document.createElement('td')
    tdName.innerText = user.name
    tr.appendChild(tdName)

    const tdLastname = document.createElement('td')
    tdLastname.innerText = user.lastName
    tr.appendChild(tdLastname)

    tbody.appendChild(tr)
})

