import React, { useState } from 'react';

export default function InputOutputChart() {
  const [rows, setRows] = useState(Array(18).fill(null).map(() => ({
    date: '',
    time: '',
    typeOfIV: '',
    oralIntake: '',
    urineCollection: '',
    urineOutput: ''
  })));

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
          }
          .no-print {
            display: none !important;
          }
          .print-container {
            width: 210mm;
            height: 297mm;
            margin: 0;
            padding: 10mm;
            box-shadow: none;
          }
          input {
            border: none !important;
            background: transparent !important;
          }
        }
        @media screen {
          .print-container {
            width: 210mm;
            min-height: 297mm;
          }
        }
        
        /* Custom table styles */
        .table-wrapper {
          border: 2px solid black;
          overflow: hidden;
        }
        
        .table-header {
          display: grid;
          grid-template-columns: 10% 10% 18% 18% 22% 22%;
          border-bottom: 2px solid black;
        }
        
        .table-header-cell {
          padding: 8px;
          text-align: center;
          border-right: 1px solid black;
          font-size: 14px;
        }
        
        .table-header-cell:last-child {
          border-right: none;
        }
        
        .table-body {
          display: block;
        }
        
        .table-row {
          display: grid;
          grid-template-columns: 10% 10% 18% 18% 22% 22%;
          min-height: 50px;
        }
        
        .table-cell {
          border-right: 1px solid black;
          display: flex;
          align-items: stretch;
        }
        
        .table-cell:last-child {
          border-right: none;
        }
        
        .table-cell input {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          padding: 8px;
          font-size: 14px;
        }
        
        .table-cell input:focus {
          background-color: #eff6ff;
        }
      `}</style>
      
      <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
        {/* Print Button */}
        <div className="no-print mb-4">
          <button
            onClick={handlePrint}
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-lg flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
            </svg>
            Print Chart
          </button>
        </div>

        <div className="print-container bg-white shadow-lg p-8">
          <div className="table-wrapper">
            {/* Title */}
            <div style={{ 
              padding: '12px', 
              textAlign: 'center', 
              borderBottom: '2px solid black',
              fontFamily: 'Arial, sans-serif',
              fontSize: '18px',
              fontWeight: 'bold',
              fontStyle: 'italic'
            }}>
              INPUT OUTPUT CHAT
            </div>

            {/* Table Header */}
            <div className="table-header">
              <div className="table-header-cell">Date</div>
              <div className="table-header-cell">Time</div>
              <div className="table-header-cell">
                Type of IV<br />Flued & Amount
              </div>
              <div className="table-header-cell">Oral Intake</div>
              <div className="table-header-cell">
                Urine Collection<br />Bag
              </div>
              <div className="table-header-cell">Urine Output</div>
            </div>

            {/* Table Body */}
            <div className="table-body">
              {rows.map((row, index) => (
                <div key={index} className="table-row">
                  <div className="table-cell">
                    <input
                      type="text"
                      value={row.date}
                      onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                      placeholder=""
                    />
                  </div>
                  <div className="table-cell">
                    <input
                      type="text"
                      value={row.time}
                      onChange={(e) => handleInputChange(index, 'time', e.target.value)}
                      placeholder=""
                    />
                  </div>
                  <div className="table-cell">
                    <input
                      type="text"
                      value={row.typeOfIV}
                      onChange={(e) => handleInputChange(index, 'typeOfIV', e.target.value)}
                      placeholder=""
                    />
                  </div>
                  <div className="table-cell">
                    <input
                      type="text"
                      value={row.oralIntake}
                      onChange={(e) => handleInputChange(index, 'oralIntake', e.target.value)}
                      placeholder=""
                    />
                  </div>
                  <div className="table-cell">
                    <input
                      type="text"
                      value={row.urineCollection}
                      onChange={(e) => handleInputChange(index, 'urineCollection', e.target.value)}
                      placeholder=""
                    />
                  </div>
                  <div className="table-cell">
                    <input
                      type="text"
                      value={row.urineOutput}
                      onChange={(e) => handleInputChange(index, 'urineOutput', e.target.value)}
                      placeholder=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}