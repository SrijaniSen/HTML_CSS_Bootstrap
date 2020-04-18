$("document").ready(function() {
    $("input").focus(function() {
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function() {
        $(this).css("background-color", "red");
    })
    $("#but").click(function() {
        alert("hi");
    });
});

var items = [];
var counter = 1;
var global = 0;

function addItem() {
    var item = {};
    item.id = counter;
    item.itemName = document.orderForm.itemName.value
    item.itemCode = document.orderForm.itemCode.value
    item.itemQty = document.orderForm.itemQty.value
    item.itemUnitPrice = document.orderForm.itemPrice.value
    item.itemNetPrice = parseInt(item.itemUnitPrice) * parseInt(item.itemQty)

    ++counter


    var table = document.getElementById("ordersTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);

    var idCell = row.insertCell(0);
    var itemNameCell = row.insertCell(1);
    var itemCodeCell = row.insertCell(2);
    var itemQtyCell = row.insertCell(3);
    var itemUnitPriceCell = row.insertCell(4);
    var itemNetPriceCell = row.insertCell(5);

    idCell.innerText = item.id;
    itemNameCell.innerText = item.itemName;
    itemCodeCell.innerText = item.itemCode;
    itemQtyCell.innerText = item.itemQty;
    itemUnitPriceCell.innerText = item.itemUnitPrice
    itemNetPriceCell.innerText = item.itemNetPrice

    items.push(item)

    totalBill()
}

function totalBill() {
    var itemCount = items.length;
    var itemAmount = 0;

    var x, i;
    for (i = 0; i < itemCount; i++) {
        x = parseInt(items[i].itemNetPrice);
        itemAmount += x;

    }
    var totalAmount = itemAmount + ((18 / 100) * itemAmount);

    document.getElementById('count').innerText = '';
    document.getElementById('cost').innerText = '';
    document.getElementById('costwithgst').innerText = '';

    document.getElementById('count').innerText = itemCount;
    document.getElementById('cost').innerText = itemAmount;
    document.getElementById('costwithgst').innerText = totalAmount;
    global = totalAmount;
}

function check() {
    var card = $("#cardno").val();
    regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

    if (card.match(regexp)) {
        alert("congo");


    } else {
        alert("wrong card number");

    }
}

function check2() {
    var str = $("#add").val();
    document.getElementById("uadd").value = str;
    document.getElementById("price").value = global + "$";
}