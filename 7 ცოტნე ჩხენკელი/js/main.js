const burgerMenu = document.querySelector(".burger");
const burgerNavMenu = document.querySelector(".burger-nav-menu");
const searchButton = document.querySelector(".search-sm")
const searchOnSmallDevices = document.querySelector(".search-small");
const searchSmallOverlay = document.querySelector('.search-small-overlay')


searchButton.addEventListener('click',(e)=>{
    searchOnSmallDevices.classList.toggle('hidden');
    searchSmallOverlay.classList.toggle('hidden');
})

burgerMenu.addEventListener("click",(e)=>{
    burgerNavMenu?.classList.toggle("hidden");
})

searchSmallOverlay.addEventListener("click",(e)=>{

    searchOnSmallDevices.classList.add("hidden");
    searchSmallOverlay.classList.add('hidden');
})