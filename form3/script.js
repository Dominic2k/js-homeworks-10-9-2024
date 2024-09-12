var id = 0;
var total = 0;
function addProcess() {

    id++;
    var productName = document.getElementById("pro-name").value;
    var productQty = document.getElementById("pro-qty").value;
    var productPrice = document.getElementById("pro-pri").value;
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