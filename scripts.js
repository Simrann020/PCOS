function loadCSV(file) {
    fetch(`Datasets/${file}`)  // Ensure correct path to CSV files
        .then(response => response.text())
        .then(csvData => {
            const rows = csvData.split("\n").map(row => row.split(","));
            table.innerHTML = ""; // Clear table
            
            // Create Table Header
            let thead = document.createElement("thead");
            let headerRow = document.createElement("tr");
            rows[0].forEach(header => {
                let th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            // Create Table Body (Limit to First 10 Rows)
            let tbody = document.createElement("tbody");
            rows.slice(1, 11).forEach(rowData => {
                let row = document.createElement("tr");
                rowData.forEach(cellData => {
                    let td = document.createElement("td");
                    td.textContent = cellData;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });
            table.appendChild(tbody);
        })
        .catch(error => console.error("Error loading CSV:", error));
}
