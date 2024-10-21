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


// Fetch the data from the given URL
fetch('https://compute.samford.edu/zohauth/clients/datajson')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('tableBody');
        
        // Loop through each item in the JSON data
        data.forEach(client => {
            // Create a new table row
            const row = document.createElement('tr');
            
            // Create and append table cells
            const idCell = document.createElement('td');
            idCell.textContent = client.id; // Assuming the JSON has an 'id' field
            row.appendChild(idCell);
            
            const nameCell = document.createElement('td');
            nameCell.textContent = client.name; // Assuming the JSON has a 'name' field
            row.appendChild(nameCell);
            
            const emailCell = document.createElement('td');
            emailCell.textContent = client.email; // Assuming the JSON has an 'email' field
            row.appendChild(emailCell);
            
            // Append the row to the table body
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching the data:', error));