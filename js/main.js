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


// slider



const homeSection=document.querySelectorAll('content')



console.log(homeSection)

















// 


fetch('https://api.sampleapis.com/coffee/hot')
.then(res=>res.json())
.then(json=>console.log(json))

