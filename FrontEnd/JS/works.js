let works;
let category;
const filterButtons = document.querySelectorAll('.btnFilter input[type="radio"]');
let selectedFilter;
const gallery = document.querySelector(".gallery");


// Fonction qui crée le tableau des travaux
function createArray(works) {
    for (i = 0; i < works.length; i++) {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figCaption = document.createElement("figCaption");

        img.src = works[i].imageUrl;
        img.alt = works[i].title
        figCaption.textContent = works[i].title;

        figure.appendChild(img);
        figure.appendChild(figCaption);
        gallery.appendChild(figure);
    }}

// Fonction qui permet de filtrer les travaux
function filterCategory(filterButtons) {
    filterButtons.forEach(button => {
        button.addEventListener('change', () => {
            const selectedFilter = button.id;
            gallery.innerHTML = '';
            filterContent(selectedFilter);
            console.log(selectedFilter)
        });
    })};
    
// Refaire le tableau en fonction du filtre
function filterContent(selectedFilter) {
    if (selectedFilter === "objets") {
        const filteredWorks = works.filter(work => work.categoryId === 1);
        console.log(filteredWorks);
        createArray(filteredWorks);
    }
    if (selectedFilter === "appartements") {
        const filteredWorks = works.filter(work => work.categoryId === 2);
        console.log(filteredWorks);
        createArray(filteredWorks);
    }
    if (selectedFilter === "hotel") {
        const filteredWorks = works.filter(work => work.categoryId === 3);
        console.log(filteredWorks);
        createArray(filteredWorks);
    }
    if (selectedFilter === "tous") {
        createArray(works)
    }
}


fetch("http://localhost:5678/api/works")
    .then(response => response.json())
    .then(data => {
        works = data;
        
        createArray(works)
        filterCategory(filterButtons);
        filterContent(selectedFilter);
    })