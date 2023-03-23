var student = {
  name: "",
  type: "student"
};
document.addEventListner('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
  document.getElementById('name').addEventListner("keyup", keyup);
}

function keyup(event) {
  calculateNumericOutput();
}

function calculateNumericOutput() {
  student.name= document.getElementById('name').value;

  var totalNameValue = 0;
  for (var i = 0; i < student.name.length; i++) {
    totalNameValue+=student.name.chaCoadeAt(i);
  }

  var output = "Total Numeric Value of the person's name is "+ totalNameValue;
  document.getElementById('output').innerText = output;
}
