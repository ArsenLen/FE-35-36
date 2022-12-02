const laptops = [
    {
        id: 1,
        name: "Acer Paradise",
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
        price: 20000,
        category: "laptop"
    },
    {
        id: 2,
        name: "HP Pavillon",
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
        price: 25000,
        category: "laptop"
    },
    {
        id: 3,
        name: "Samsung X20",
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
        price: 40000,
        category: "monoblock"
    },
    {
        id: 4,
        name: "Iphone 13Pro",
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
        price: 70000,
        category: "smartphone"
    },
    {
        id: 5,
        name: "Sony TI201",
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
        price: 55000,
        category: "smartphone"
    },
    {
        id: 6,
        name: "Samsung",
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
        price: 80000,
        category: "computer"
    },
    {
        id: 7,
        name: "Acer Computer M500",
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
        price: 75000,
        category: "computer"
    },
]

/*
<div class="product">
    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true" 
        alt="" class="product-img">
    <h5 class="product-name">HP Dragon</h5>
    <p class="product-price">15000</p>
</div>
*/

const productsContainer = document.querySelector(".products")

const showProducts = (products) => {
    productsContainer.innerHTML = products.map(
        product => `
        <div class="product">
            <img 
                src="${product.img}" 
                alt="" 
                class="product-img">
            <h5 class="product-name">${product.name}</h5>
            <p class="product-price">${product.price}</p>
        </div>
        `
    ).join("")
}

showProducts(laptops)

// Повесить слушатель события на найденную картинку.
