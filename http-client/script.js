const tbody = document.querySelector('tbody');

//resquet
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((response) => {
        response.forEach((user) => {
            const tr = document.createElement('tr')

            const idTd = document.createElement('td')
            idTd.innerText = user.id
            tr.appendChild(idTd)

            const nameTd = document.createElement('td')
            nameTd.innerText = user.name
            tr.appendChild(nameTd)

            const usernameTd = document.createElement('td')
            usernameTd.innerText = user.username
            tr.appendChild(usernameTd)

            const emailTd = document.createElement('td')
            emailTd.innerText = user.email
            tr.appendChild(emailTd)


            const phoneTd = document.createElement('td')
            phoneTd.innerText = user.phone
            tr.appendChild(phoneTd)

            tbody.appendChild(tr)
        })
    })