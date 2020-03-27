function Student(id, firstName, lastName, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}

Student.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};

var students = [];
counter = 0;

function showwarning(text) {
    var alertWarningHTML = "";
    alertWarningHTML += '<div class="alert alert-dismissible alert-danger">';
    alertWarningHTML +=
        '<button type="button" class="close" data-dismiss="alert">&times;</button>';
    alertWarningHTML += '<h4 class="alert-heading">Warning!</h4>';
    alertWarningHTML += '<p class="mb-0">' + text + "</p>";
    alertWarningHTML += "</div>";

    document.getElementById("prompt").style.display = "block";
    document.getElementById("prompt").innerHTML = alertWarningHTML;
}

function validate() {
    var text = /^[A-Za-z]+$/;
    var m = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/;
    var num = /^[0-9]{1,6}$/;
    if (
        document.getElementById("firstName").value == "" ||
        document.getElementById("lastName").value == "" ||
        document.getElementById("id").value == "" ||
        document.getElementById("email").value == ""
    ) {
        showwarning("No field can be empty");
        return true;
    }
    if (
        !document.getElementById("firstName").value.match(text) ||
        !document.getElementById("lastName").value.match(text)
    ) {
        showwarning("Name fields should have only alphabets");
        return true;
    }
    if (!document.getElementById("id").value.match(num)) {
        showwarning("Id can have 1 - 999999");
        return true;
    }
    if (!document.getElementById("email").value.match(m)) {
        showwarning("Enter proper Email");
        return true;
    }
}

function already(id) {
    console.log("Inside already block" + id);
    var n = students.length;
    for (i = 0; i < n; i++) {
        if (students[i].id == id) return true;
    }
    return false;
}

function addStudent() {
    document.getElementById("prompt").style.display = "none";
    if (validate()) {
        return;
    }
    if (already(document.getElementById("id").value)) {
        showwarning("Id already present");
        return true;
    }
    let student = new Student(
        document.getElementById("id").value,
        document.getElementById("firstName").value,
        document.getElementById("lastName").value,
        document.getElementById("email").value
    );

    var table = document
        .getElementById("ordersTable")
        .getElementsByTagName("tbody")[0];
    var row = table.insertRow(table.rows.length);

    var id = row.insertCell(0);
    var firstname = row.insertCell(1);
    var lastname = row.insertCell(2);
    var email = row.insertCell(3);
    var bute = row.insertCell(4);
    var butd = row.insertCell(5);

    id.innerText = student.id;
    id.style.color = "green";
    firstname.innerText = student.firstName;
    lastname.innerText = student.lastName;
    email.innerText = student.email;
    bute.innerHTML =
        "<button class='btn btn-secondary' type='button' onClick='edit(" +
        student.id +
        ")'>Edit</button>";
    butd.innerHTML =
        "<button class='btn btn-secondary' type='button' onClick='remove(" +
        student.id +
        ")'>remove</button>";
    students.push(student);
   

    document.getElementById("id").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    students.forEach(a => {
        console.log(a);
    });
}

function edit(id) {
    var stud = students.filter(i => {
        return i.id == id;
    });
    stud.forEach(i => {
        document.getElementById("id").value = i.id;
        document.getElementById("firstName").value = i.firstName;
        document.getElementById("lastName").value = i.lastName;
        document.getElementById("email").value = i.email;
    });
}

function remove(id) {
    var i = students.findIndex(stud => {
        return stud.id == id;
    });
    students.splice(i, 1);

    students.forEach(a => {
        console.log(a);
    });
    document.getElementById("ordersTable").deleteRow(i + 1);
}

function save() {
    document.getElementById("prompt").style.display = "none";
    if (!already(document.getElementById("id").value)) {
        showwarning("Nothing to Edit!");
        return true;
    }
    if (validate()) {
        return;
    }
    let student = new Student(
        document.getElementById("id").value,
        document.getElementById("firstName").value,
        document.getElementById("lastName").value,
        document.getElementById("email").value
    );
    id = student.id;
    var i = students.findIndex(stud => {
        return stud.id == id;
    });
    console.log(id);
    students[i].id = document.getElementById("id").value;
    students[i].firstName = document.getElementById("firstName").value;
    students[i].lastName = document.getElementById("lastName").value;
    students[i].email = document.getElementById("email").value;

    students.forEach(a => {
        console.log(a);
    });

    //document.getElementById("ordersTable").deleteTBody();
    var n = document.getElementById("ordersTable").rows.length;
    console.log(n);
    n = n - 1;
    while (n != 0) {
        document.getElementById("ordersTable").deleteRow(n);
        n--;
    }

    students.forEach(i => {
        var table = document
            .getElementById("ordersTable")
            .getElementsByTagName("tbody")[0];
        var row = table.insertRow(table.rows.length);

        var id = row.insertCell(0);
        var firstname = row.insertCell(1);
        var lastname = row.insertCell(2);
        var email = row.insertCell(3);
        var bute = row.insertCell(4);
        var butd = row.insertCell(5);

        id.innerText = i.id;
        id.style.color = "green";
        firstname.innerText = i.firstName;
        lastname.innerText = i.lastName;
        email.innerText = i.email;
        bute.innerHTML =
            "<button class='btn btn-secondary' type='button' onClick='ed(" +
            i.id +
            ")'>Edit</button>";
        butd.innerHTML =
            "<button class='btn btn-secondary' type='button' onClick='dlt(" +
            i.id +
            ")'>Delete</button>";
    });
    document.getElementById("id").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
}

 