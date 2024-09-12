var id = 0;
function sellProcess() {
    id++;
    var productName = document.getElementById("product-name").value;
    var productQty = document.getElementById("product-qty").value;
    var productPrice = document.getElementById("product-unit-price").value;
    var productDiscount = document.getElementById("product-discount").value;
    var subTotal = productQty * productPrice * (1 - productDiscount / 100);

    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + productName + "</td>";
    row += "<td>" + productQty + "</td>";
    row += "<td>" + productPrice + "</td>";
    row += "<td>" + productDiscount + "</td>";
    row += "<td>" + subTotal + "</td>";
    row += "</tr>";

    document.getElementById("table").innerHTML += row;
}