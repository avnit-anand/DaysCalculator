// script.js

function calculateDays() {
  const startDate = new Date(document.getElementById('start-date').value);
  const endDate = new Date(document.getElementById('end-date').value);

  // Calculate the time difference between the dates in milliseconds
  const timeDifference = endDate - startDate;

  // Convert time difference from milliseconds to days
  const dayDifference = timeDifference / (1000 * 3600 * 24);

  // Display the result
  document.getElementById('result').textContent = `Number of days: ${dayDifference}`;
}
