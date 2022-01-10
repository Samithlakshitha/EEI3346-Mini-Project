//-------scroll bar js-------
function scrollWin() {
    window.scrollBy(0, 500);
}

//-------------loading--------
  window.addEventListener('load',function(){
    this.document.querySelector(".loading").classList.add("hidden");
  });

  //------nav bar js----------
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  // --------PopUp Box Button Js----------
  function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.body.style.backgroundColor = "rgba(0,0,0, 0.4)";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.body.style.backgroundColor = "white";
  }


//---------arlet--------
function havenot(){
  alert("There are no beaches in this province");
}


//---------Fiter Js------------
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
  event.preventDefault();
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
  event.preventDefault();
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
  event.preventDefault();
}



