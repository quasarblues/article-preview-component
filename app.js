const shareButton = document.querySelector(".share-btn");
const btn = document.querySelector('#btn');
const shareContainer = document.querySelector('.share-container');

shareButton.addEventListener('click', () => {
    shareButton.classList.toggle("dark-background");
    btn.classList.toggle("filter-white");
    shareContainer.classList.toggle("display-share-container");
})