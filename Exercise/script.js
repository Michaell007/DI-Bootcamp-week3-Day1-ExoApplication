let values = [];
let saisie = document.getElementById("choice");


function show() {
    values.push(saisie.value);
    let para = document.getElementById("paragraphe");
    para.textContent = values.toString();
}