const url = window.location.search.split("=").at("-1")
console.log(url);

const DATA =[]
fetch(`http://localhost:3000/${url}`)
.then(res => res.json())
.then(pro => {
    DATA.push(...pro)
    go()
})
.catch(err => {
    alert("Axtarisiniz uzre netice tapilmadi")
})
// .finally(load => {
//     loading
// })

function go(){
    DATA.map(item => {
            productList.innerHTML += `
                <a href="/pages/details.htm?category=${item.category}&id=${item.id} class="proInfo  my-[10px] w-[95%] mx-auto lg:mx-0 lg:w-[22%]  lg:h-[350px]  ">
                    <div class="proPic">
                        <img src="${item.img}" class="w-full object-cover lg:w-[100%] h-[220px] " alt="">
                    </div>
                    <div class="proText pt-2 flex justify-between">
                        <span class="text-[20px] font-bold">${item.title}</span>
                        <span class="bg-[#0F9675] cursor-pointer rounded-md text-white font-bold p-[5px]">Bunu seç</span>
                    </div>
                    <p class="text-[16px] pt-4">${item.composition}</p>
                </a>
               `;
           })
}