function displayDateTime() {
    var currentDateTime = new Date();
    var formattedDateTime = currentDateTime.toLocaleString();
    alert("Current Date and Time: " + formattedDateTime);
  }