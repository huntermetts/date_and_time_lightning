var d = new Date();


document.getElementById("demo").innerHTML = d;

let update = document.querySelector(".getDateAndTime");

update.addEventListener("click", updateFunction)

function updateFunction(){
    var d = new Date();

    document.getElementById("demo").innerHTML = d;
}