// icon elements
let navEL=document.querySelector('.header .navbar');

const navBtn=document.querySelector('#menu-btn')

const shopBasket=document.querySelector('.header .cart-items-container')

const cartBtn=document.querySelector('#cart-btn')

const searchBox=document.querySelector('.header .search-form ')
const searchBtn=document.querySelector('#search-btn')


// action icons
navBtn.addEventListener('click',()=>{
    navEL.classList.toggle('active')
    searchBox.classList.remove('actives')
    shopBasket.classList.remove('active')
   
})


cartBtn.addEventListener('click',()=>{
    shopBasket.classList.toggle('active')
    searchBox.classList.remove('actives')
    navEL.classList.remove('active')    
})

searchBtn.addEventListener('click',()=>{
    searchBox.classList.toggle('actives')
    shopBasket.classList.remove('active')
    navEL.classList.remove('active')
   
})
window.addEventListener('scroll',()=>{
    searchBox.classList.remove('actives')
    shopBasket.classList.remove('active')
    navEL.classList.remove('active')
})





// 


// slider and interval



const preBtn=document.querySelector('.pre')
const nextBtn=document.querySelector('.next')
const imgEl=document.querySelectorAll('.slider img ')
 
let activeSlice=0

const sliderFunc=()=>{
imgEl[activeSlice].classList.remove('swipe')
activeSlice++

if(activeSlice===imgEl.length)activeSlice=0
imgEl[activeSlice].classList.add('swipe')

}

setInterval(sliderFunc,4000)




// show slider

const sliderBtn=document.querySelector('.show-slider')
const sliderBody=document.querySelector('.slider')
sliderBtn.addEventListener('click',()=>{
    sliderBody.classList.toggle('.active-slider')
})










// // 


// fetch('https://api.sampleapis.com/coffee/hot')





const cartSpace=document.querySelector('#fetch-cart')




fetch('https://fakestoreapi.com/products/')
.then(res=>res.json())
.then(json=>{
json.map((e)=>{
    cartSpace.innerHTML+=` 
    
    <div class="cart-item">
    <span class="fas fa-times">${e.title}</span>

    <img src=${e.image} alt="">


    <div class="content">
        <h3> cart item ${e}</h3>

        <div class="price">${e.price}/-</div>

    </div>

</div>
    
    
    
    
  
    
    `
})
})




// show nav

const navBody=document.querySelector('.header')


function showNav(){
    navBody.classList.add('show-nav')
}
setTimeout(showNav
    
, 1000);