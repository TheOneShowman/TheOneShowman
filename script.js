function filterData(event) {
  event.preventDefault();
  
  var startdate = new Date(document.getElementById("startdate").value);
  var enddate = new Date(document.getElementById("enddate").value);
  
  var table = document.getElementById("dataTable"); // Assuming your table has this ID
  var rows = table.getElementsByTagName("tr");

  for (var i = 1; i < rows.length; i++) {  // Skipping the header row
    var rowDate = new Date(rows[i].getAttribute("data-date")); // Assuming each row has a 'data-date' attribute

    if (rowDate >= startdate && rowDate <= enddate) {
      rows[i].style.display = "";  // Show row
    } else {
      rows[i].style.display = "none";  // Hide row
    }
  }
}


// Fetch data from the given URL
fetch('https://compute.samford.edu/zohauth/clients/datajson')
.then(response =>)
  // // Function to fetch data and populate the table
      async function fetchDataandPopulateTable(url) {
        try {
          const response = await fetch(url)
          if (!resonpose.ok) {
            throw new Error('Network response was not ok');
          }
        }
      }