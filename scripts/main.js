// toggle & respontive navigation 

const navSLide = () =>{
    const burger = document.querySelector(".burger")
    const navLists = documnet.querySelector("nav")

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active")
        burger.classList.toggle("toggle-burger");
    });
};

navSLide();