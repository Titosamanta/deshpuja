// Function to load data from a CSV file into the table
function loadData() {
  fetch('data1.csv')
    .then(response => response.text())
    .then(data => {
      const rows = data.split('\n').slice(1); // Split by newline and skip header row
      const tableBody = document.querySelector('#dataTable tbody');

      // Clear previous table content
      tableBody.innerHTML = '';

      rows.forEach(row => {
        const cells = row.split(',');
        const [id,Description,Credit,Debit] = cells;

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${id}</td>
          <td>${Description}</td>
          <td>${Credit}</td>
		  <td>${Debit}</td>
        `;
        tableBody.appendChild(tr);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Load data when the page loads
window.addEventListener('DOMContentLoaded', () => {
  loadData();
});
