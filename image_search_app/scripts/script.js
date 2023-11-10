
/**
 * this is where al our scripts for the 
 * image serach app wil be then we will 
 * have to export to app to use in our html file
 */



const formElement = document.querySelector("form");
const inputValue = document.querySelector("#serach-input");
const showMore = document.querySelector("#showmore");
const container = document.querySelector(".flex-container");
const errors = document.querySelector("#errors");


let page = 1;


let accessKey = "BuvfmT5X1RuL56pD5COfEJuSTwZ9pgVgbc9WiOlbNo0";



const getPhotos = async() => {

    let inputData = inputValue.value;


    let apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;


    const response = await fetch(apiUrl);
    

    const data = await response.json();

    const results = data.results; 


    if (page === 1){

        container.innerHTML = "";
    }

    results.map((result) => {

        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("flex-item");

        const imageLink = document.createElement("a");
        imageLink.href = result.links.download;
        imageLink.target = "_blank";

        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        imageLink.appendChild(image);

        imageWrapper.append(imageLink);
        container.appendChild(imageWrapper);

    });

    page++;


    
}



formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let getImage = inputValue.value;
    if (getImage){

        page = 1;

        getPhotos();

        showMore.style.display = "block";

        errors.textContent = "";
    }
    else{

        errors.innerHTML = "Your search result is empty";
    }

       

});


showMore.addEventListener("click", () => {

    getPhotos();

});




export { getPhotos }