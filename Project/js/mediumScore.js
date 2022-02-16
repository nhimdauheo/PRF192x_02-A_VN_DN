var i = 1;
var testScore = {
  fullName: "",
  markMath: 0,
  markPhysical: 0,
  markChemistry: 0,
}

function add() {
  testScore.fullName = document.getElementById('fullName').value;
  testScore.markMath = document.getElementById('markMath').value;
  testScore.markPhysical = document.getElementById('markPhysical').value;
  testScore.markChemistry = document.getElementById('markChemistry').value;

  document.getElementById("fullName").value = "";
  document.getElementById("markMath").value = "";
  document.getElementById("markPhysical").value = "";
  document.getElementById("markChemistry").value = "";
  console.log(testScore);

  var table = document.getElementById("myTable");

  //Create an empty <tr> element and add it to the 1st position of the table
  var row = table.insertRow();

  //Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);

  //Add some text to the new cells
  cell1.innerHTML = i++;
  cell2.innerHTML = testScore.fullName;
  cell3.innerHTML = testScore.markMath;
  cell4.innerHTML = testScore.markPhysical;
  cell5.innerHTML = testScore.markChemistry;
  cell6.innerHTML = "?";

}

function avger() {
  var table = document.getElementById("myTable")
  for (var o = 1; o < table.rows.length; o++) {
    const markMath = table.rows[o].cells[2].innerHTML;
    const markPhysical = table.rows[o].cells[3].innerHTML;
    const markChemistry = table.rows[o].cells[4].innerHTML;
    var avg = (parseFloat(markMath) + parseFloat(markPhysical) + parseFloat(markChemistry)) / 3;
    table.rows[o].cells[5].innerHTML = avg.toFixed(1);
  }
}

function rank(){
  var table = document.getElementById("myTable")
  for ( let m = 1; m < table.rows.length; m++ ){
    const avg = table.rows[m].cells[5].innerHTML;
    if (parseFloat(avg)>=8){
      for(let n = 0; n <6; n++ ){
        table.rows[m].cells[n].style.color="blue"
      }
    }
  }
}

//Hiện thị thêm chức năng xóa
function more(){
  var a = document.getElementById("inputDel");
    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
}

//Chức năng xóa
function dele(){
  var table = document.getElementById("myTable")
  var b = document.getElementById("delee").value;
  document.getElementById("myTable").deleteRow(b);
  document.getElementById("delee").value = "";
}
