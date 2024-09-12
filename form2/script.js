var id = 0;
var total = 0;
function Process() {

    id++;
    var productName = document.getElementById("product-name").value;
    var productQty = document.getElementById("product-qty").value;
    var productPrice = document.getElementById("product-price").value;
    var subTotal = productQty * productPrice;
    total += subTotal;

    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + productName + "</td>";
    row += "<td>" + productQty + "</td>";
    row += "<td>" + productPrice + "</td>";
    row += "<td>" + subTotal + "</td>";
    row += "</tr>";

    document.getElementById("t-body").innerHTML += row;
    document.getElementById("total").innerHTML = total;
}