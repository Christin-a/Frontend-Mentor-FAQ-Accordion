var itemHeader = document.querySelectorAll(".item-header");

itemHeader.forEach(itemHeader => {
    itemHeader.addEventListener("click", event => {
        itemHeader.classList.toggle("active");

        var itemBody = itemHeader.nextElementSibling;
        if (itemHeader.classList.contains("active")) {
            itemBody.style.maxHeight = itemBody.scrollHeight + "px";
        } else {
            itemBody.style.maxHeight = 0;

        }

    });
});


Ï