function filterData(event) { 
  event.preventDefault();
  var startdate = document.getElementByID("startdate").value;
  var enddate = document.getElementByID("startdate").value;
  alert(startdate);
  alert(enddate);
fetch("https://compute.samford.edu/zohauth/clients/data");
      }

      // // Function to fetch data and populate the table
      async function fetchDataandPopulateTable(url) {
        try {
          const response = await fetch(url)
          if (!resonpose.ok) {
            throw new Error('Network response was not ok');
    }
  }
}