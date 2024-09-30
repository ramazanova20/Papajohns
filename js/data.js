const category =[]

fetch("http://localhost:3000/category")
.then(res => res.json())
.then(info => {
    category.push(...info)
    addMenu()
})


const menu=document.getElementById("menu")

function addMenu() {
    category.map(item =>{
        menu.innerHTML += `
        
        <li><a href="/pages/category.htm?category=${item.slug}"> ${item.category}</a></li>
        `
    })
}