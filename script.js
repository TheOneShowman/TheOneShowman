function downloadData() {
  event.preventDefault();
  var startdate = document.getElementByID("startdate").value;
  var enddate = document.getElementByID("startdate").value;
  alert(startdate);
  alert(enddate);
fetch("https://compute.samford.edu/zohauth/clients/data");
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

      // // Function to fetch data and populate the table
      async function fetchDataandPopulateTable(url) {
        try {
          const response = await fetch(url)
          if (!resonpose.ok) {
            throw new Error('Network response was not ok');
          }
        }
      }