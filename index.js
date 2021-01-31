$(".new-employee").click(function() {
  $(".new-employee").addClass("hidden");
  $(".upper-section").removeClass("hidden");
  if (!$(".table").hasClass("hidden")) {
    $(".table").addClass("hidden");
  }
});

var employees = new Array();
var employeeNumber = 0;

var btnClear = $(".btn-right");
var inputs = $("input");

function EmployeeCreate(name, id, department, email, doj) {
  this.name = name;
  this.id = id;
  this.department = department;
  this.email = email;
  this.doj = doj;
}

$(".close-form").click(function() {
  $(".new-employee").removeClass("hidden");
  $(".upper-section").addClass("hidden");
  $(".table").removeClass("hidden");
});

$("#btn-right").click(function() {
  $(".form").trigger('reset');
  return false;
});


$(".btn-left").click(function() {
  var name = $("input[name='name']").val();
  var id = $("input[name='employeeId']").val();
  var department = $("select").children(":selected").text();
  var email = $("input[name='email']").val();
  var doj = $("input[name='dateOfJoining']").val();

  if (name === '' || id === '' || department === '--choose Department--' || department === '' || email === '' || !doj) {
    alert("please fill the whole form before submitting");
    return false;
  }


  const employee = new EmployeeCreate(name, id, department, email, doj);
  employees.push(employee);
  for (var i = employeeNumber; i < employees.length; i++) {
    var strOfData = "<tr><td><button type='button' class='close'>X</button></td><td>" + employees[i].name + "</td><td>" + employees[i].id + "</td><td>" + employees[i].department + "</td><td>" + employees[i].email + "</td><td>" + employees[i].doj + "</td></tr>";

    $("#table-1").append(strOfData);
  }
  employeeNumber++;

  $(".new-employee").removeClass("hidden");
  $(".upper-section").addClass("hidden");
  $(".table").removeClass("hidden");

  $(".close").click(function() {
    $(this).closest("tr").remove();
  });

  return false;
});