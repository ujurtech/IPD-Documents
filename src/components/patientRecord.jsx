import React, { useState } from 'react';

export default function PatientRecordChart() {
  const [rows, setRows] = useState(Array(25).fill(null).map(() => ({
    dateTime: '',
    bp: '',
    pulse: '',
    temp: '',
    resp: '',
    sign: ''
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
          {/* Header */}
          <div className="border-2 border-black mb-0">
            <div className="bg-white p-3 text-center border-b-2 border-black">
              <h1 className="text-lg font-bold tracking-wide" style={{ fontFamily: 'Arial, sans-serif' }}>
                PATIENT RECORD CHART
              </h1>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-6 border-black">
              <div className="border-r-2 border-black p-2 text-center font-bold text-sm bg-white">
                Date / Time
              </div>
              <div className="border-r-2 border-black p-2 text-center font-bold text-sm bg-white">
                B.P.
              </div>
              <div className="border-r-2 border-black p-2 text-center font-bold text-sm bg-white">
                Pulse
              </div>
              <div className="border-r-2 border-black p-2 text-center font-bold text-sm bg-white">
                Temp.
              </div>
              <div className="border-r-2 border-black p-2 text-center font-bold text-sm bg-white">
                Resp.
              </div>
              <div className="p-2 text-center font-bold text-sm bg-white">
                Sign.
              </div>
            </div>

            {/* Table Rows */}
            {rows.map((row, index) => (
              <div key={index} className="grid grid-cols-6 border-t border-black">
                <div className="border-r-2 border-black p-0">
                  <input
                    type="text"
                    value={row.dateTime}
                    onChange={(e) => handleInputChange(index, 'dateTime', e.target.value)}
                    className="w-full h-full px-2 py-3 text-sm focus:outline-none focus:bg-blue-50"
                    placeholder=""
                  />
                </div>
                <div className="border-r-2 border-black p-0">
                  <input
                    type="text"
                    value={row.bp}
                    onChange={(e) => handleInputChange(index, 'bp', e.target.value)}
                    className="w-full h-full px-2 py-3 text-sm focus:outline-none focus:bg-blue-50"
                    placeholder=""
                  />
                </div>
                <div className="border-r-2 border-black p-0">
                  <input
                    type="text"
                    value={row.pulse}
                    onChange={(e) => handleInputChange(index, 'pulse', e.target.value)}
                    className="w-full h-full px-2 py-3 text-sm focus:outline-none focus:bg-blue-50"
                    placeholder=""
                  />
                </div>
                <div className="border-r-2 border-black p-0">
                  <input
                    type="text"
                    value={row.temp}
                    onChange={(e) => handleInputChange(index, 'temp', e.target.value)}
                    className="w-full h-full px-2 py-3 text-sm focus:outline-none focus:bg-blue-50"
                    placeholder=""
                  />
                </div>
                <div className="border-r-2 border-black p-0">
                  <input
                    type="text"
                    value={row.resp}
                    onChange={(e) => handleInputChange(index, 'resp', e.target.value)}
                    className="w-full h-full px-2 py-3 text-sm focus:outline-none focus:bg-blue-50"
                    placeholder=""
                  />
                </div>
                <div className="p-0">
                  <input
                    type="text"
                    value={row.sign}
                    onChange={(e) => handleInputChange(index, 'sign', e.target.value)}
                    className="w-full h-full px-2 py-3 text-sm focus:outline-none focus:bg-blue-50"
                    placeholder=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}