const url = window.location.search.split("&")
// console.log(url);
const categor = url[0].split("=").at(-1)
const id = url[1].split("=").at(-1)
console.log(categor, id);

const PRODUCT= []
fetch(`https://papajson.vercel.app/${categor}/${id}`)
    .then(ser => ser.json())
    .then(ord => {
        PRODUCT.push(ord)
        order()
    })
const popProduct = document.getElementById('popProduct')
function order() {
    PRODUCT.map(item =>{ 

        popProduct.innerHTML += `
     
            <a href="/pages/details.htm?category=${item.category}&id=${item.id}" >
            <div id="popCard" class="px-2 mt-20 flex flex-col lg:flex-row mx-auto items-center justify-center lg:justify-around w-[25%] lg:w-[85%]">
                <div class="card flex flex-column lg:flex-row lg:w-[20%] w-[80%] items-start mt-20 lg:h-[full] justify-start">
                    <div class="cardPic  lg:w-[30%] w-[90%] flex items-center justify-center">
                        <img src="${item.img}" alt="" class="w-[90%] object-cover">
                    </div>
                    <div class="cardInfo pl-4 pr-4">
                        <div class="cardName flex items-start justify-start">
                            <h1 class="text-[22px] font-bold">${item.title}</h1>
                        </div>
                        <div class="category flex py-2 max-w-80 flex-row w-[100%] items-center justify-center">    
                            <span class="bg-[#0F9675] text-black rounded-l-md flex items-center text-[15px] justify-center w-[100%] h-[30px]">Enenevi</span>
                            <span class="bg-[#F1F1F1] text-black w-[100%] h-[30px] flex items-center rounded-md text-[15px] justify-center">Nazik</span>    
                        </div>
                        <div class="selectors w-[100%] py-4">
                            <select style="display: block;" class="bg-[#AD0F14] outline-none text-[15px] text-white w-full h-[30px]">
                                <option value="5.5">Mini pizza, 15 sm - 5.5 M</option>
                                <option value="11">Kiçik, 23 sm - 11 M</option>
                                <option value="17">Orta, 30 sm - 17 M</option>
                                <option value="21">Böyük, 35 sm - 21 M</option>
                            </select>
                            <select style="display: none;" class="bg-[#AD0F14] outline-none text-[15px] text-white w-full h-[30px]">
                                <option value="11">Kiçik, 23 sm - 11 M</option>
                                <option value="17">Orta, 30 sm - 17 M</option>
                                <option value="21">Böyük, 35 sm - 21 M</option>
                            </select>
                        </div>
                        <div class="sum-count flex items-start lg:w-[100%] w-[100%] justify-between py-4">
                            <div class="count flex items-start w-full justify-start flex-row">
                                <button onclick="countPro(-1) id="btnMin" class="w-[29px] h-[29px] bg-[#F1F1F1] text-black text-[19px] font-bold">-</button>
                                <span id="countSum" class="bg-[#F1F1F1] flex items-center justify-center w-[49px] h-[29px] text-black text-[19px] font-bold">1</span>
                                <button  onclick="countPro(1) class="w-[29px] h-[29px] bg-[#0F9675] text-white text-[19px] font-bold">+</button>
                            </div>
                            <p class="text-black text-[15px] font-bold">${item.price}₼</p>
                        </div>
                        <div class="lastCardPart flex justify-between w-[100%] py-4">
                            <div  class=" flex flex-col items-center relative">
                                <i class="fa-solid fa-basket-shopping text-[30px]"></i>
                                <div class="flex ">
                                    <span class="font-bold">0</span>
                                    <div>
                                        <i class="fa-solid fa-manat-sign"></i>
                                        <div class="bg-[red] px-2 rounded-[70%] absolute top-0">0</div>
                                    </div>
                                </div>
                            </div>
                            <button onclick="addOrder('${item.img}', '${item.title}', '${item.price}', '${item.id}')"  class="bg-[#0F9675] flex items-center rounded-md font-bold justify-center text-[18px] text-white w-[40%] lg:w-[35%] uppercase text-center">Sebete at</button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        =
    `;
    })
}