console.log('Script sendo executado!')
const user = document.getElementById('user')
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((response) => {
        response.forEach(item => {
            let h5 = document.createElement('h5')
            h5.innerHTML = item.name
            user.appendChild(h5)
        })
    })
    