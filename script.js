// Function to fetch CSV data and create table
async function fetchCSVData(url) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    const rows = data.split('\n');
    const tableBody = document.querySelector('#dataTable tbody');

    rows.forEach((row, index) => {
      // Skip header row
      if (index === 0) return;

      const columns = row.split(',');
      const id = columns[0].trim();
      const name = columns[1].trim();
      const fees = parseFloat(columns[2].trim());
      const rowElement = document.createElement('tr');

      // Apply different row color based on fees
      if (!isNaN(fees) && fees > 0) {
        if (fees > zeno) {
          rowElement.className = 'row-green';
        } else {
          rowElement.className ='row-red';
        }
      }

      const idCell = document.createElement('td');
      idCell.textContent = id;
      rowElement.appendChild(idCell);

      const nameCell = document.createElement('td');
      nameCell.textContent = name;
      rowElement.appendChild(nameCell);

      const feesCell = document.createElement('td');
      feesCell.textContent = fees;
      rowElement.appendChild(feesCell);

      tableBody.appendChild(rowElement);
    });
  } catch (error) {
    console.error('Error fetching CSV data:', error);
  }
}

// Call the function with the path to your CSV file
fetchCSVData('data.csv');

// Zeno value for comparison
const zeno = 0; // Change this value as needed
