$(document).ready(function() {
    $('#mydatatable').DataTable();
});





$('#btnSort').click(function() {
    $('.card-deck .card').sort(function(a, b) {
        return $(a).find(".card-title").text() > $(b).find(".card-title").text() ? 1 : -1;
    }).appendTo(".card-deck");
})


/*
function products-filter() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("products-container");
    cards = cardContainer.getElementsByClassName("card");
    console.log("cards.length");
    for (i = 0; i < cards.length; i++) {
    	console.log(cards.length);
        title = cards[i].querySelector(".single-blog h2.product-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
*/

$('#search').keyup(function() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("products-container");
    cards = cardContainer.getElementsByClassName("product");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".single-blog h2.product-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
})