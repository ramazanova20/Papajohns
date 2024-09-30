const productList = document.getElementById("productList");

// async function fetchData(url) {
//     const res = await fetch(url);
//     return res.json()
// }

// let data = []

// async function datalar() {
//     data = await fetchData("https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/papajosn.json");
//     show()
// }


// function show() {
//     productList.innerHTML = '';
//     data.map(item => {
//         productList.innerHTML += `
//              <div onclick="popup('${item.img}', '${item.name}', '${item.price}', '${item.id}')" class="proInfo  my-[10px] w-[95%] mx-auto lg:mx-0 lg:w-[22%]  lg:h-[350px]  ">
//                         <div class="proPic">
//                             <img src="${item.img}" class="w-full object-cover lg:w-[100%] h-[220px] " alt="">
//                         </div>
//                         <div class="proText pt-2 flex justify-between">
//                             <span class="text-[20px] font-bold">${item.name}</span>
//                             <span class="bg-[#0F9675] cursor-pointer rounded-md text-white font-bold p-[5px]">Bunu seç</span>
//                         </div>
//                         <p class="text-[16px] pt-4">${item.composition}</p>
//                     </div>
//         `;
//     });
// }

// datalar()

const popProduct = document.getElementById("popProduct")

function popup(img, title, price, id) {
    popProduct.innerHTML = `
     
            <div class="bg-[#00000038] fixed inset-0 z-[50]" onclick="closePopup()">
            <div id="popCard" class="px-2 flex bg-[#fff] fixed inset-0 z-[100] top-[25%] lg:top-[20%] mx-auto h-[75%] flex-col items-center justify-center w-[85%] lg:w-[25%]">
                <div class="bagla flex pb-2 items-end justify-end w-[100%]">
                    <span onclick="closePopup()" class="text-[16px] font-bold">Bağla <i class="fa-solid fa-circle-xmark"></i></span>
                </div>
                <div class="card ">
                    <div class="cardPic  w-[320px] flex items-center justify-center">
                        <img src="${img}" alt="" class="w-[90%] object-cover">
                    </div>
                    <div class="cardInfo pl-4 pr-4">
                        <div class="cardName flex items-start justify-start">
                            <h1 class="text-[22px] font-bold">${title}</h1>
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
                            <p class="text-black text-[15px] font-bold">${price}₼</p>
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
                            <button onclick="addOrder('${img}', '${title}', '${price}', '${id}')"  class="bg-[#0F9675] flex items-center rounded-md font-bold justify-center text-[18px] text-white w-[40%] lg:w-[35%] uppercase text-center">Sebete at</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        =
    `;
}




function closePopup() {
    popProduct.innerHTML = "";
}

function countPro(arg) {
    const countSum = document.getElementById("countSum");
    let value = arg + Number(countSum.innerHTML);

    if (value < 1) {
        countSum.innerHTML = 1;
        document.getElementById("btnMin").disabled = true;
    } else {
        document.getElementById("btnMin").disabled = false;
        countSum.innerHTML = value;
    }
}

const order =[]

function addOrder(img, name, price, id) {
    const count = Number(document.getElementById("countSum").innerHTML);
    const total = price * count;

    const obj = {
        id,
        img,
        name,
        price,
        count,
        total
    };

    const existingItem = order.find(item => item.id === id);

    if (!existingItem) {
        order.push(obj);
    } else {
        existingItem.count += count;
        existingItem.total += total;
    }

    basketCount.innerHTML = order.length;
    console.log(order);  // For debugging
    closePopup();  // Close popup after adding item to the cart
}

// Initialize data
// datalar();