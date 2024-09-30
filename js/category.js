const url = window.location.search.split("=").at("-1")
console.log(url);

fetch(`http://localhost:3000/${url}`)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => {
    alert("Axtarisiniz uzre netice tapilmadi")
})
.finally(load => {
    loading
})