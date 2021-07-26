var counter = 0;

function generateCat() {

    var container = document.getElementsByClassName("card m-2");
    var clone = container[counter].cloneNode(true);
    container[counter].after(clone);
    counter++;
}