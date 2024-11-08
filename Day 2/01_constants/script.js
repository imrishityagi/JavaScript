// const = a varaible that can't be changed once we assign them

const pi = 3.14159
let radius;
let circumference;

// pi = 456.98; <- it will not work because we can't assign to constant var 

// radius = window.prompt("Enter the radius of the circle");
// console.log(circumference);

document.getElementById("submit").onclick = function() {
  radius = document.getElementById("myInp").value;
  radius = Number(radius);
  circumference = 2 * pi * radius;
  document.getElementById("myh3").textContent = circumference + "cm";
}