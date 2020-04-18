var counter = 0;
var book = {};
var books = [];




function addcart() {
    var book = {};
    alert("added to the cart");
    counter++;
    book.id = counter;
    book.name = 1984;
    book.author = "George";
    book.price = 180;

    var table = document.getElementById("book").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);
    var id = row.insertCell(0);
    var name = row.insertCell(1);
    var author = row.insertCell(2);
    var price = row.insertCell(3);
    var idBtn1 = row.insertCell(4);
    id.innerText = book.id;
    name.innerText = book.name;
    author.innerText = book.author;
    price.innerText = book.price;
    idBtn1.innerHTML = idBtn1.innerHTML + '<button type="button" class="btn btn-success" onclick="del(this,0)">REMOVE</button>'

    books.push(book);
    //console.log(books);
}

function addcart1() {
    var book = {};
    alert("added to the cart");
    counter++;
    book.id = counter;
    book.name = "The Alchemist";
    book.author = "Pulo Callho";
    book.price = 150;

    var table = document.getElementById("book").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);
    var id = row.insertCell(0);
    var name = row.insertCell(1);
    var author = row.insertCell(2);
    var price = row.insertCell(3);
    var idBtn1 = row.insertCell(4);
    id.innerText = book.id;
    name.innerText = book.name;
    author.innerText = book.author;
    price.innerText = book.price;
    idBtn1.innerHTML = idBtn1.innerHTML + '<button type="button" class="btn btn-success" onclick="del(this,1)">REMOVE</button>'
    books.push(book);
    // console.log(books);
}


function addcart2() {
    var book = {};
    alert("added to the cart");
    counter++;
    book.id = counter;
    book.name = "Do Androids Dream of Electric Sheep?";
    book.author = "Philip k.Dick";
    book.price = 450;

    var table = document.getElementById("book").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);
    var id = row.insertCell(0);
    var name = row.insertCell(1);
    var author = row.insertCell(2);
    var price = row.insertCell(3);
    var idBtn1 = row.insertCell(4);
    id.innerText = book.id;
    name.innerText = book.name;
    author.innerText = book.author;
    price.innerText = book.price;
    idBtn1.innerHTML = idBtn1.innerHTML + '<button type="button" class="btn btn-success" onclick="del(this,2)">REMOVE</button>'
    books.push(book);
}

function addcart3() {

    var book = {};
    alert("added to the cart");
    counter++;
    book.id = counter;
    book.name = "Chess Story";
    book.author = "Stephen";
    book.price = 300;

    var table = document.getElementById("book").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);
    var id = row.insertCell(0);
    var name = row.insertCell(1);
    var author = row.insertCell(2);
    var price = row.insertCell(3);
    var idBtn1 = row.insertCell(4);
    id.innerText = book.id;
    name.innerText = book.name;
    author.innerText = book.author;
    price.innerText = book.price;
    idBtn1.innerHTML = idBtn1.innerHTML + '<button type="button" class="btn btn-success" onclick="del(this,3)">REMOVE</button>'
    books.push(book);
}

function addcart4() {
    var book = {};
    alert("added to the cart");
    counter++;
    book.id = counter;
    book.name = "The Metamorphosis";
    book.author = "Franz";
    book.price = 350;

    var table = document.getElementById("book").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);
    var id = row.insertCell(0);
    var name = row.insertCell(1);
    var author = row.insertCell(2);
    var price = row.insertCell(3);
    var idBtn1 = row.insertCell(4);
    id.innerText = book.id;
    name.innerText = book.name;
    author.innerText = book.author;
    price.innerText = book.price;
    idBtn1.innerHTML = idBtn1.innerHTML + '<button type="button" class="btn btn-success" onclick="del(this,4)">REMOVE</button>'
    books.push(book);
}

function addcart5() {
    var book = {};
    alert("added to the cart");
    counter++;
    book.id = counter;
    book.name = "The Old Man and the Sea";
    book.author = "Earnest";
    book.price = 200;

    var table = document.getElementById("book").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);
    var id = row.insertCell(0);
    var name = row.insertCell(1);
    var author = row.insertCell(2);
    var price = row.insertCell(3);
    var idBtn1 = row.insertCell(4);
    id.innerText = book.id;
    name.innerText = book.name;
    author.innerText = book.author;
    price.innerText = book.price;
    idBtn1.innerHTML = idBtn1.innerHTML + '<button type="button" class="btn btn-success" onclick="del(this,5)">REMOVE</button>'
    books.push(book);
}

function addcart6() {
    var book = {};
    alert("added to the cart");
    counter++;
    book.id = counter;
    book.name = "The Hobbit There and Back Again";
    book.author = "E.R.R";
    book.price = 300;

    var table = document.getElementById("book").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);
    var id = row.insertCell(0);
    var name = row.insertCell(1);
    var author = row.insertCell(2);
    var price = row.insertCell(3);
    var idBtn1 = row.insertCell(4);
    id.innerText = book.id;
    name.innerText = book.name;
    author.innerText = book.author;
    price.innerText = book.price;
    idBtn1.innerHTML = idBtn1.innerHTML + '<button type="button" class="btn btn-success" onclick="del(this,6)">REMOVE</button>'
    books.push(book);
}

function addcart7() {
    var book = {};
    alert("added to the cart");
    counter++;
    book.id = counter;
    book.name = "The Little Prince";
    book.author = "Agatha";
    book.price = 250;

    var table = document.getElementById("book").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);
    var id = row.insertCell(0);
    var name = row.insertCell(1);
    var author = row.insertCell(2);
    var price = row.insertCell(3);
    var idBtn1 = row.insertCell(4);
    id.innerText = book.id;
    name.innerText = book.name;
    author.innerText = book.author;
    price.innerText = book.price;
    idBtn1.innerHTML = idBtn1.innerHTML + '<button type="button" class="btn btn-success" onclick="del(this,7)">REMOVE</button>'
    books.push(book);
}

function total() {
    var itemCount = books.length;
    //console.log(itemCount);
    //console.log(books);
    var itemAmount = 0;
    var x, i;
    for (i = 0; i < itemCount; i++) {
        x = parseInt(books[i].price);
        itemAmount += x;

    }
    document.getElementById('count').innerText = '';
    document.getElementById('cost').innerText = '';
    document.getElementById('count').innerText = itemCount;
    document.getElementById('cost').innerText = itemAmount;
    document.getElementById('total1').innerText = itemAmount;
    document.getElementById('cart_no').innerText = itemCount;


}

function clear1() {
    alert("THANK YOU");
    var Table = document.getElementById("body");
    Table.innerHTML = "";
    counter = 0;
}

function del(td, i) {
    if (confirm('Are you sure about delete the data?')) {
        row = td.parentElement.parentElement;
        document.getElementById("book").deleteRow(row.rowIndex);
        books.splice(i, 1);
        console.log(books);
    }
}