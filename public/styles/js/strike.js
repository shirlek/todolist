document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(element => {
        element.addEventListener("change", () => {
            const todoItem = element.parentNode;
            const strikeItem = todoItem.querySelector("p");
            strikeItem.classList.toggle("strike")       
        } )
    });
})