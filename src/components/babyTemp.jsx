import React, { useState } from 'react';

// Simple Printer Icon SVG Component
const PrinterIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="6 9 6 2 18 2 18 9"></polyline>
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
    <rect x="6" y="14" width="12" height="8"></rect>
  </svg>
);

export default function BabyTempChart() {
  // 25 rows allows for a good writing height when stretched over A4
  const [rows, setRows] = useState(Array(25).fill(null).map(() => ({
    date: '',
    time: '',
    temp: '',
    spo2: '',
    paracetamolDose: '',
    signature: ''
  })));

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handlePrint = () => {
    window.print();
  };

  // Helper to render a full column of inputs
  // CHANGED: Added 'w-1/6' and 'flex-none' to enforce strict width alignment
  const renderColumn = (field, isLast = false) => (
    <div className={`w-1/6 flex-none flex flex-col h-full min-h-0 ${!isLast ? 'border-r-2 border-black' : ''}`}>
      {rows.map((row, index) => (
        <input
          key={index}
          type="text"
          value={row[field]}
          onChange={(e) => handleInputChange(index, field, e.target.value)}
          // flex-1 stretches input to fill the column height evenly
          className="flex-1 w-full min-h-0 text-center text-sm focus:outline-none focus:bg-blue-50 bg-transparent print:placeholder-transparent px-1"
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-start print:p-0 print:bg-white">
      
      {/* Print Button (Hidden on Print) */}
      <div className="fixed top-5 right-5 print:hidden z-50">
        <button 
          onClick={handlePrint} 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-colors"
        >
          <PrinterIcon />
          <span>Print Chart</span>
        </button>
      </div>

      {/* A4 Page Container */}
      <div className="w-[210mm] h-[297mm] bg-white shadow-2xl p-8 relative print:shadow-none print:w-full print:h-[297mm] print:p-8 box-border overflow-hidden flex flex-col">
        
        {/* Main Border Frame - Flex Column to manage height */}
        {/* Added h-full to ensure border goes all the way down */}
        <div className="border-2 border-black h-full flex flex-col">
          
          {/* Header */}
          <div className="bg-white p-4 text-center border-b-2 border-black shrink-0">
            <h1 className="text-2xl font-bold tracking-widest uppercase" style={{ fontFamily: 'Arial, sans-serif' }}>
              Baby Temp. Chart
            </h1>
          </div>

          {/* Table Header Row */}
          {/* CHANGED: Using 'w-1/6' and 'flex-none' instead of 'flex-1' to match body columns exactly */}
          <div className="flex w-full bg-gray-50 border-b-2 border-black print:bg-white shrink-0">
            <div className="w-1/6 flex-none border-r-2 border-black p-3 text-center font-bold text-sm flex items-center justify-center">DATE</div>
            <div className="w-1/6 flex-none border-r-2 border-black p-3 text-center font-bold text-sm flex items-center justify-center">TIME</div>
            <div className="w-1/6 flex-none border-r-2 border-black p-3 text-center font-bold text-sm flex items-center justify-center">TEMP</div>
            <div className="w-1/6 flex-none border-r-2 border-black p-3 text-center font-bold text-sm flex items-center justify-center">SPO2</div>
            <div className="w-1/6 flex-none border-r-2 border-black p-3 text-center font-bold text-sm flex items-center justify-center leading-tight break-words">PARACETAMOL<br />DROP DOSE</div>
            <div className="w-1/6 flex-none p-3 text-center font-bold text-sm flex items-center justify-center">SISTER SIGNATURE</div>
          </div>

          {/* Table Body - Flex Grow to fill page */}
          <div className="flex-grow flex w-full h-full min-h-0">
            {renderColumn('date')}
            {renderColumn('time')}
            {renderColumn('temp')}
            {renderColumn('spo2')}
            {renderColumn('paracetamolDose')}
            {renderColumn('signature', true)}
          </div>

        </div>

      </div>

      {/* Global Print Styles */}
      <style>{`
        @media print {
          @page { size: A4; margin: 0; }
          body { 
            -webkit-print-color-adjust: exact; 
            margin: 0; 
            padding: 0;
          }
          /* Removes default input styling for cleaner print */
          input { border: none; box-shadow: none; }
        }
      `}</style>
    </div>
  );
}