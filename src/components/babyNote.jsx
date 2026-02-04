import React from 'react';

const BabyNote = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center gap-8 print:p-0 print:bg-white print:gap-0 print:block">
      
      {/* Print Button - Hidden when printing */}
      <div className="fixed top-5 right-5 print:hidden z-50">
        <button 
          onClick={handlePrint} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"
        >
          Print Form
        </button>
      </div>

      {/* ======================= MOTHER NOTE PAGE ======================= */}
      {/* A4 Container - Fixed dimensions for perfect print */}
      <div className="w-[210mm] h-[297mm] bg-white shadow-xl p-8 relative print:shadow-none print:w-[210mm] print:h-[297mm] print:p-8 text-black print:mb-0 overflow-hidden box-border mx-auto">
        
        {/* Inner Border Frame */}
        <div className="w-full h-full border-2 border-black p-6 flex flex-col">
          
          {/* Header */}
          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-blue-700">
              BABY NOTE
            </h1>
          </div>

          {/* The rest of the page is intentionally left blank */}
          <div className="flex-grow">
             {/* Blank space for handwritten notes */}
          </div>

        </div>
      </div>

      {/* Global Print Styles */}
      <style>{`
        @media print {
          @page { margin: 0; size: A4; }
          body { margin: 0; padding: 0; }
        }
      `}</style>
    </div>
  );
};

export default BabyNote;