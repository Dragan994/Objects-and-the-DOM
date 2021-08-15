const BUTTON = document.getElementById("see-review");
const REVIEW = document.getElementById("review");

const clickHandler = () => {
    if(REVIEW.classList.contains("d-none")){
        BUTTON.innerText = "Close Review";
        REVIEW.classList.remove("d-none");
    }
    else {
        REVIEW.classList.add("d-none");
        BUTTON.innerText = "See Review";
    }
};

 BUTTON.addEventListener("click", clickHandler);