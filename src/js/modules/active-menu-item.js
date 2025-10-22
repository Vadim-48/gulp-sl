export function activeMenuItem() {
    const items = document.querySelectorAll(".hero__list-item");

    items.forEach(item => {
        item.addEventListener("click", () => {
            items.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        });
    });
}