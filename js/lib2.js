/*Viết mã Javascript*/
 /*const productItem = {
    name: "Hoa cúc Indo",
    price: 2500000,
    decsription: "Cúc Indo (còn gọi là Cúc Nữ Hoàng, tên khoa học: Verbena tenera) là loài cây thân thảo dạng bụi nhỏ. Cây có thân mảnh, cành thường bò ngang, phân nhiều nhánh và rủ xuống rất thích hợp trồng chậu treo.",
    link: "chi-tiet-hon",
    image: "../assets/image/cucindo.img",
}*/

const products =[
    {
    name: "Hoa hương dương",
    price: 1500000,
    description: "hoa hương dương (tên khoa học: Canna indica) là một loài thực vật có hoa trong họ Cannaceae. Loài này được L. mô tả khoa học đầu tiên năm 1753.",
    link: "chi-tiet-hon",
    image: "../assets/img/hoaHD.jpg",
    },
    {
    name: "Hoa bỉ ngạn",
    price: 2000000,
    description: "Hoa bỉ ngạn (tên khoa học: Lycoris radiata) là một loài thực vật có hoa trong họ Amaryllidaceae. Loài này được (L'Hér.) Herb. mô tả khoa học đầu tiên năm 1826.",
    link: "chi-tiet-hon",
    image: "../assets/images/bignan.jpg",
    }
    {
    name: "Hoa mai",
    price: 1000000,
    description: "hoa mai (tên khoa học: Ochna integerrima) là một loài thực vật có hoa trong họ Ochnaceae. Loài này được (Lour.) Merr. mô tả khoa học đầu tiên năm 1917.",
    link: "chi-tiet-hon",
    image: "../assets/images/mai.jpg",
    },
    {
    name: "Hoa dâm bụt",
    price: 2000000,
    description: "Hoa dâm bụt (tên khoa học: Dianthus caryophyllus) là một loài thực vật có hoa trong họ Caryophyllaceae. Loài này được (L.) Kuntze mô tả khoa học đầu tiên năm 1895.",
    link: "chi-tiet-hon",
    image: "../assets/images/dambut.jpg",
    }

]
function printBCC(n)
{
    let result = "";

    let i = 1;
    while(i<=10)
    {
        result += `${n} x ${i} = ${n*i} <br>`; 
        i++;
    }
    //Đưa kết quả vào thẻ div có id là "result"
    document.getElementById("result").innerHTML = result;
}


function createItemV2(obj)
{ 
    const productList = document.getElementById("product-list");
    productList.innerHTML +=`
    <div class="col text-center">
            <div class="card product-item h-100 d-flex flex-column">
                <div class="ratio ratio-1x1 product-image">
                    <img src="${obj.image}" alt="${obj.name}" class="card-img-top">
                </div>  
                <div class="card-body product-info d-flex flex-column">
                    <h4 class="card-title text-danger">${obj.name}</h4>
                    <h5 class="text-danger">Giá: ${obj.price}</h5>
                    <p style="text-align: justify;">${obj.description}</p>
                    <!-- mt-auto giúp thẳng hàng, w-50 mx-auto giúp nút to bằng nhau và căn giữa -->
                    <a href="${obj.link}" class="btn btn-info text-white mt-auto w-50 mx-auto">Xem chi tiết</a>
                </div>
            </div>   
        </div>
        `;
}
 function loadAllProducts(objArray)
 {
    let i=0;
    while(i<objArray.length)
    {
        createItemV2(objArray[i]);
        i++;
    }
 }
 loadAllProducts(products);