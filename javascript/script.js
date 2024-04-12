//#region 
const products = document.querySelector("#products");
const solution = document.querySelector("#solutions");
const resources = document.querySelector("#resources");
const community = document.querySelector("#community");
const learn = document.querySelector("#learn");
const support = document.querySelector("#support");

const btnPrice = document.querySelector("#btn-price");
const unityIcon = document.querySelector("#unity-icon");
const cardContainer = document.querySelector(".hidden-cards");

const productsCard = document.querySelector("#product-card");
const solutionCard = document.querySelector("#solution-card");
const resourcesCard = document.querySelector("#resource-card");
const communityCard = document.querySelector("#community-card");
const learnCard = document.querySelector("#learn-card");
const supportCard = document.querySelector("#support-card");
//#endregion

//#region
function hideCards()
{
    productsCard.classList.add("hidden");
    solutionCard.classList.add("hidden");
    resourcesCard.classList.add("hidden");
    communityCard.classList.add("hidden");
    learnCard.classList.add("hidden");
    supportCard.classList.add("hidden");
    cardContainer.style.padding = "0px";
}

products.addEventListener("mouseenter", () => {
    hideCards();
    productsCard.classList.remove("hidden");
    cardContainer.style.padding = "35px 0px 30px 0px";
})
solution.addEventListener("mouseenter", () => {
    hideCards();
    solutionCard.classList.remove("hidden");
    cardContainer.style.padding = "35px 0px 30px 0px";
})
resources.addEventListener("mouseenter", () => {
    hideCards();
    resourcesCard.classList.remove("hidden");
    cardContainer.style.padding = "35px 0px 30px 0px";
})
community.addEventListener("mouseenter", () => {
    hideCards();
    communityCard.classList.remove("hidden");
    cardContainer.style.padding = "35px 0px 30px 0px";
})
learn.addEventListener("mouseenter", () => {
    hideCards();
    learnCard.classList.remove("hidden");
    cardContainer.style.padding = "35px 0px 30px 0px";
})
support.addEventListener("mouseenter", () => {
    hideCards();
    supportCard.classList.remove("hidden");
    cardContainer.style.padding = "35px 0px 30px 0px";
})
cardContainer.addEventListener("mouseleave", () => {
    hideCards();
})
btnPrice.addEventListener("mouseenter", () => {
    hideCards();
})
unityIcon.addEventListener("mouseenter", () => {
    hideCards();
})
//#endregion