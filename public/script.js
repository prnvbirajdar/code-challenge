// Client-side fetch call
const fetchAndRenderData = async () => {
  const outputElement = document.getElementById('output');

  // Display a loading message
  outputElement.textContent = "Loading users, please wait...";

  try {
    const response = await fetch('/get-array');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    outputElement.innerHTML = ''; // Clear the loading message

    if (data.length === 0) {
      outputElement.textContent = 'No data available to display.';
      return;
    }

    // Create the table and its header
    const table = document.createElement('table');
    table.classList.add('data-table');

    // Deduce headers dynamically from the keys of the first object in the data array
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    Object.keys(data[0]).forEach(key => {
      const th = document.createElement('th');
      th.textContent = key.toUpperCase()
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Populate the table body with data
    const tbody = document.createElement('tbody');

    data.forEach(user => {
      const bodyRow = document.createElement('tr');
      Object.values(user).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        bodyRow.appendChild(td);
      });
      tbody.appendChild(bodyRow);
    });

    table.appendChild(tbody);

    // Append the table to the output element
    outputElement.appendChild(table);

  } catch (error) {
    console.error('Error fetching and rendering data:', error);

    outputElement.textContent = "Something went wrong. Please check back later."
  }
}

document.addEventListener('DOMContentLoaded', fetchAndRenderData);


