// Function to load data from a CSV file into the table
function loadData() {
  fetch('data.csv')
    .then(response => response.text())
    .then(data => {
      const rows = data.split('\n').slice(1); // Split by newline and skip header row
      const tableBody = document.querySelector('#dataTable tbody');

      // Clear previous table content
      tableBody.innerHTML = '';

      rows.forEach(row => {
        const cells = row.split(',');
        const [id, name, money] = cells;

        const tr = document.createElement('tr');
        tr.innerHTML = `
		if (${money} >0) {
			<td style="color: green;">${id}</td>
		} else {
			<td>${id}</td>
			}
          <td>${id}</td>
          <td>${name}</td>
          <td>${money}</td>
		  
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
