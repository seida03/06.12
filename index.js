let containerdiv = document.querySelector(".container")
let basketbtn=document.querySelector(".basket")
const products = [
    
    {
        id: 1,
        name: "Daffodil",
        price: "3",
        img: "https://img.freepik.com/free-photo/male-hands-with-bouquet-yellow-daffodils_169016-7070.jpg?w=2000"
    },
    
    {
        id: 2,
        name: "Lilac",
        price: "3",
        img: "https://i.pinimg.com/736x/56/2f/65/562f65a159be5243470061dc016bc699.jpg"
    },
    
    {
        id: 3,
        name: "Pink rose",
        price: "3",
        img: "https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1643777813/vendor/2045/catalog/product/2/0/20200116114051_file_5e20f48347cfc_5e20f506592d8.jpg"
    }
]

JSON.stringify(products)
window.localStorage.setItem("product",JSON.stringify(products) )
let count=0;

const basket=[]

function createcard(product) {
    let card = document.createElement("div")
    card.style.width = "18rem"
    let img = document.createElement("img")
    img.setAttribute("src", product.img)
    img.className = "card-img-top"
    card.appendChild(img)
    containerdiv.appendChild(card)
    let cardbody = document.createElement("div")
    cardbody.className = "card-body"
    let head = document.createElement("h5")
    head.className = "card-title"
    head.innerHTML = product.name
    let parag = document.createElement("p")
    parag.className = "card-text"
    let btn = document.createElement("a")
    btn.className = "btn btn-primary"
    btn.innerText="Add to basket"
    cardbody.appendChild(head)
    cardbody.appendChild(parag)
    cardbody.appendChild(btn)
    card.appendChild(cardbody)
    containerdiv.appendChild(card)
    
    // let btns=document.querySelectorAll("btn")
    btn.addEventListener("click", function(){
        
     

            count++;
    
            let sup=document.querySelector(".count")
            sup.innerText=count
    
            basket.push({img:this.parentElement.parentElement.firstElementChild.src,Count:count})
            window.localStorage.setItem("basket", JSON.stringify(basket))
       
    })

}
products.forEach(element=> createcard(element))

