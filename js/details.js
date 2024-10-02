const url = window.location.search.split("&")
const categor = url[0].split("=").at(-1)
const id = url[1].split("=").at(-1)

const PRODUCT = []
const popProduct = document.getElementById('popProduct')

// Fetch data from the API
fetch(`https://papajson.vercel.app/${categor}/${id}`)
    .then(ser => ser.json())
    .then(ord => {
        PRODUCT.push(ord)
        order()
    })

function order() {
    PRODUCT.map(item => {
        let eneneviVariables = '';
        let nazikVariables = '';

        if (item.category === "pros") {
            eneneviVariables = item.variables
                .filter(variable => variable.type === "Ənənəvi")
                .map(variable =>
                    `<option value="${variable.price}">${variable.size}</option>`
                ).join("");

            nazikVariables = item.variables
                .filter(variable => variable.type === "Nazik")
                .map(variable =>
                    `<option value="${variable.price}">${variable.size}</option>`
                ).join("");
        }

        popProduct.innerHTML = `
            <div id="popCard" class="px-2 mt-20 flex flex-col lg:flex-row mx-auto items-center justify-center lg:justify-around w-[25%] lg:w-[85%]">
                <div class="card flex flex-column lg:flex-row lg:w-[20%] w-[80%] items-start mt-20 lg:h-[full] justify-start">
                    <div class="cardPic  w-[90%] flex items-center justify-center">
                        <img src="${item.img}" alt="" class="w-[90%] object-cover h-full">
                    </div>
                    <div class="cardInfo pl-4 pr-4 flex flex-col">
                        <div class="cardName flex items-start justify-start">
                            <h1 class="text-[22px] font-bold">${item.title}</h1>
                        </div>
                        <div class="category flex py-2 max-w-80 flex-row w-[100%] items-center justify-center">
                            <span id="enenvili" onclick="eneveviShow()" class="bg-[#0F9675] text-black rounded-l-md flex items-center text-[15px] justify-center w-[100%] h-[30px]">Ənənəvi</span>
                            <span id="nazikli" onclick="nazikShow()" class="bg-[#F1F1F1] text-black w-[100%] h-[30px] flex items-center rounded-md text-[15px] justify-center">Nazik</span>
                        </div>
                        <div class="selectors w-[100%] py-4">
                            <select id="enenvi" style="display: block;" class="bg-[#AD0F14] outline-none text-[15px] text-white w-full h-[30px]">
                                ${eneneviVariables}
                            </select>
                            <select id="nazik" style="display: none;" class="bg-[#AD0F14] outline-none text-[15px] text-white w-full h-[30px]">
                                ${nazikVariables}
                            </select>
                        </div>
                        <div class="sum-count flex items-start lg:w-[100%] w-[100%] justify-between py-4">
                            <div class="count flex items-start w-full justify-start flex-row">
                                <button onclick="countPro(-1)" id="btnMin" class="w-[29px] h-[29px] bg-[#F1F1F1] text-black text-[19px] font-bold">-</button>
                                <span id="countSum" class="bg-[#F1F1F1] flex items-center justify-center w-[49px] h-[29px] text-black text-[19px] font-bold">1</span>
                                <button onclick="countPro(1)" id="btnPlus" class="w-[29px] h-[29px] bg-[#0F9675] text-white text-[19px] font-bold">+</button>
                            </div>
                            <p id="priceNtc" class="text-black text-[19px] font-bold " data-price="${item.price}>Price : ${item.price} ₼</p>
                        </div>
                        <div class="lastCardPart flex flex-column justify-between w-[100%] py-4">
                            <div class="flex flex-col items-center relative">
                                <i class="fa-solid fa-basket-shopping text-[30px]"></i>
                                <div class="flex">
                                    <span class="font-bold">0</span>
                                    <div>
                                        <i class="fa-solid fa-manat-sign"></i>
                                        <div class="bg-[red] px-2 rounded-[70%] absolute top-0">0</div>
                                    </div>
                                </div>
                            </div>
                            <button onclick="addOrder('${item.img}', '${item.title}', '${item.price}', '${item.id}')" class="bg-[#0F9675] cursor-pointer flex items-center rounded-md font-bold justify-center text-[12px] text-white w-[40%] lg:w-[55%] uppercase text-center">Sebete at</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

let currentPrice = 1;

function eneveviShow() {
    document.getElementById('enevevi').style.display = "block";
    document.getElementById('nazik').style.display = "none";
    document.getElementById('enenevili').style.background = '#0F9675';
    document.getElementById('enenevili').style.color = 'white';
    document.getElementById('nazikli').style.background = '#F1F1F1';
    document.getElementById('nazikli').style.color = 'black';
}

function nazikShow() {
    document.getElementById('nazik').style.display = "block";
    document.getElementById('enevevi').style.display = "none";
    document.getElementById('nazikli').style.background = '#0F9675';
    document.getElementById('nazikli').style.color = 'white';
    document.getElementById('enenevili').style.background = '#F1F1F1';
    document.getElementById('enenevili').style.color = 'black';
}

function countPro(amount) {
    const countSum = document.getElementById('countSum');
    let newCount = parseInt(countSum.innerText) + amount;
    if (newCount < 1) newCount = 1;
    countSum.innerText = newCount;
    updatePrice(newCount);
}

function updatePrice(count) {
    const priceNtc = document.getElementById('priceNtc');
    const basePrice = parseFloat(priceNtc.getAttribute('data-price'));
    const totalPrice = (basePrice * count).toFixed(2);
    priceNtc.innerText = `Price : ${totalPrice} ₼`;
}

function addOrder(img, title, price, id) {
    // Add to basket logic here
    console.log(`Added: ${title} (${price} ₼)`);
}
