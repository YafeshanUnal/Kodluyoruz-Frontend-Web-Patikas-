let input = document.querySelector("div>input#input")
let add = document.querySelector("div>button#add");
let del = document.querySelector("i#delete");




add.onclick = function () {
    let tr = document.getElementById("tr");
    let td = document.createElement("td");
    let i = document.createElement("i");

    i.id = "del";


    localStorage.setItem("input", input.value);

    td.textContent = localStorage.getItem("input");
    td.style.cssText="height:35px"

    i.style.cssText = "margin-right:273px";
    i.className = "bi bi-x-square position-absolute end-0 "


    td.appendChild(i);
    tr.appendChild(td);

    input.value ="";

}


del.onclick = function () {
    alert("gwe");

}