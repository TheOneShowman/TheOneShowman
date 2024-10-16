function downloadData() {
  event.preventDefault();
  var startdate = document.getElementByID("startdate").value;
  var enddate = document.getElementByID("startdate").value;
  alert(startdate);
  alert(enddate);
fetch("https://compute.samford.edu/zohauth/clients/data");
      }
