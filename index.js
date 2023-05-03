document.querySelector("#add").addEventListener("click", myFun);

let Array = JSON.parse(localStorage.getItem("Data")) || [];
let count = Array.length;
Display(Array);

function myFun() {
  let value;
  if (document.querySelector("input").value == "") {
    alert("Please insert your data!!");
    return;
  } else {
    value = document.querySelector("input").value;
  }

  let obj = {
    Data: value,
  };

  Array.push(obj);

  localStorage.setItem("Data", JSON.stringify(Array));
  Display(Array);
}

function Display() {

  document.querySelector("#opt").innerHTML = "";

  Array.forEach(function (elem, index) {
    count = Array.length;
    document.querySelector("#count").innerText = count;

    let div = document.createElement("div");
    div.setAttribute("class", "change");



    div.addEventListener("dblclick", function () {
      div.style.backgroundColor = "rgb(250, 247, 247)";
      div.style.color = "black";
      div.style.borderRadius = "10px";
      div.style.textDecoration = 'none'
    });

    let innerDiv = document.createElement("div");
    let i = document.createElement("i");
    i.setAttribute("class", "fa-regular fa-circle fa-xl");

    innerDiv.addEventListener("click", function () {
      div.style.backgroundColor = "teal";
      div.style.color = "white";
      div.style.borderRadius = "10px";
      div.style.textDecoration = 'line-through'

    });
    innerDiv.append(i);

    let h = document.createElement("h3");
    h.innerText = elem.Data;

    let deleteDiv = document.createElement("div");
    let cross = document.createElement("i");
    cross.setAttribute("class", "fa-sharp fa-regular fa-circle-xmark fa-xl");


    cross.addEventListener("click", function () {
      remove(elem, index);
      document.querySelector("#opt").removeChild(div);
      // div.inputMode = location.reload();
      // div.remove();
      // elem.parentElement.style.display = "none";
    });

    deleteDiv.append(cross);
    div.append(innerDiv, h, deleteDiv);
    document.querySelector("#opt").append(div);
    document.querySelector("input").value = "";
  });
}

function remove(elem, index) {
  Array.splice(index, 1);
  count = Array.length;
  localStorage.setItem("Data", JSON.stringify(Array));
  document.querySelector("#count").innerText = count;
}








