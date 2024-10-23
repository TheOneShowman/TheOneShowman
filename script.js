function filterData(event) { 
  event.preventDefault();

  var startdate = new Date(document.getElementById("startdate").value);
  var enddate = new Date(document.getElementById("enddate").value);
  
  // Ensure the dates are valid
  if (isNaN(startdate) || isNaN(enddate)) {
    alert("Please enter valid dates.");
    return;
  }
  
  var table = document.getElementById("dataTable");
  var rows = table.getElementsByTagName("tr");

  for (var i = 1; i < rows.length; i++) {  
    var rowDate = new Date(rows[i].getAttribute("data-date")); 

    // Check if rowDate is valid before comparing
    if (!isNaN(rowDate)) {
      if (rowDate >= startdate && rowDate <= enddate) {
        rows[i].style.display = "";  // Show row
      } else {
        rows[i].style.display = "none";  // Hide row
      }
    } else {
      console.error(`Row ${i} has an invalid date.`);
    }
  }
}