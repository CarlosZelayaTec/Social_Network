let dataUser = []

async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    dataUser = data;
}

fetchUser();

export default dataUser