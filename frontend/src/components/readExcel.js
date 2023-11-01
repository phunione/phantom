import React, { useEffect, useState } from 'react';



import fs from 'fs';
import ExcelJS from 'exceljs';

// Specify the path to your Excel file
// const excelFilePath = 'path-to-your-excel-file.xlsx';

// Initialize the Excel workbook
const fncToReadExcel = async(excelFilePath,start,end)=>{const workbook = new ExcelJS.Workbook();

const extractExcelData = async (start,end) => {
  try {
    await workbook.xlsx.readFile(excelFilePath);

    // Choose the specific worksheet you want to read data from
    const worksheet = workbook.getWorksheet(1); // Assuming it's the first worksheet (index 1)

    // Define the range of rows you want to extract (e.g., rows 2 to 10)
    const startRow = start;
    const endRow = end;

    // Initialize an array to store the extracted data
    const jsonData = [];

    // Loop through the rows and extract data
    for (let i = startRow; i <= endRow; i++) {
      const row = worksheet.getRow(i);
      jsonData.push({
        // Adjust these property names and indexes to match your Excel columns
        // For example, assuming your Excel file has two columns, Name and Age
        name: row.getCell(1).value,
        age: row.getCell(2).value,
      });
    }

    // Convert the extracted data to JSON
    const jsonOutput = JSON.stringify(jsonData, null, 2);

    // Save the JSON data to a file or do whatever you need
    

    console.log('Data extracted and saved as output.json');
    return jsonOutput;
  } catch (error) {
    console.error('Error:', error);
  }
};

await extractExcelData();

}
function ExcelFilePicker() {
  const [excelFilePath, setExcelFilePath] = useState(null);
  const [startRow, setStartRow] = useState(2); // Default value for start row
  const [endRow, setEndRow] = useState(10);   // Default value for end row
  const [required,setrequired] = useState();  

  
  
  useEffect(async() =>{
    const ams = await fncToReadExcel(excelFilePath,start,end)
    setrequired(ams);
  },[endRow])





  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const path = URL.createObjectURL(selectedFile);
      setExcelFilePath(path);
    } else {
      setExcelFilePath(null);
    }
  };

  const extractData = () => {
    // Here, you can use the 'startRow' and 'endRow' values
    // to specify the range of rows you want to extract from the Excel file.
    console.log('Start Row:', startRow);
    console.log('End Row:', endRow);
    // Add the code to extract Excel data based on 'startRow' and 'endRow'.
  };

  return (
    <div>
      <input
        type="file"
        accept=".xlsx"
        onChange={handleFileChange}
      />
      {excelFilePath && (
        <div>
          <p>Selected Excel File Path:</p>
          <p>{excelFilePath}</p>
        </div>
      )}

      <div>
        <label>Start Row:</label>
        <input
          type="number"
          value={startRow}
          onChange={(e) => setStartRow(parseInt(e.target.value))}
        />
      </div>

      <div>
        <label>End Row:</label>
        <input
          type="number"
          value={endRow}
          onChange={(e) => setEndRow(parseInt(e.target.value))}
        />
      </div>

      <button onClick={extractData}>Extract Data</button>
    </div>
  );
}

export default ExcelFilePicker;
