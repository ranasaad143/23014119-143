// 1. Say Hello
function sayHello() {
    alert("Hello, welcome to Panda Zone!");
  }
  
  // 2. Add Two Numbers
  function addNumbers(a = 3, b = 5) {
    alert("Sum is: " + (a + b));
  }
  
  // 3. Multiply Two Numbers
  function multiplyNumbers(a = 4, b = 6) {
    alert("Product is: " + (a * b));
  }
  
  // 4. Change Text
  function changeText() {
    document.getElementById("text").innerText = "Text changed!";
  }
  
  // 5. Show Current Date
  function showDate() {
    document.getElementById("date").innerText = new Date().toLocaleString();
  }
  
  // 6. Toggle Visibility
  function toggleVisibility() {
    const elem = document.getElementById("toggle");
    elem.style.display = (elem.style.display === "none") ? "block" : "none";
  }
  
  // 7. Convert Input to Uppercase
  function convertToUpper() {
    const input = document.getElementById("upper");
    alert(input.value.toUpperCase());
  }
  
  // 8. Calculate Square
  function calculateSquare() {
    const num = document.getElementById("square").value;
    alert("Square is: " + (num * num));
  }
  
  // 9. Change Background Color
  function changeBackgroundColor() {
    document.body.style.backgroundColor = "#fdf6e3";
  }
  
  // 10. Display Length of Input
  function displayLength() {
    const str = document.getElementById("length").value;
    alert("Length: " + str.length);
  }  