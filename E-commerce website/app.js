const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id:1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id:2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgrey",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgrey",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgrey",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "grey",
                img: "./img/hippie.png",
            },
            {
                code: "lightgrey",
                img: "./img/hippie2.png",
            },
        ],
    },

];

let chosenProduct = products[0]

const currentproductImg = document.querySelector(".productImg")
const currentproductTitle = document.querySelector(".productTitle")
const currentproductPrice = document.querySelector(".productPrice")
const currentproductColors = document.querySelectorAll(".color")
const currentproductSizes = document.querySelectorAll(".size")


menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the chosen product
        chosenProduct = products[index]

        //change texts of current product
        currentproductTitle.textContent = chosenProduct.title
        currentproductPrice.textContent = "$" + chosenProduct.price
        currentproductImg.src = chosenProduct.colors[0].img 

        //assign new colors
        currentproductColors.forEach((color,index)=>{
            color.style.backgroundColor = chosenProduct.colors[index].code
        })

    })
})