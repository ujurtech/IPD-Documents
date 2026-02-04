import React from 'react';

const BabyTicket = () => {
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

      {/* ======================= BABY TICKET PAGE ======================= */}
      {/* A4 Container - Fixed Height & Overflow Hidden for Perfect Print */}
      <div className="w-[210mm] h-[297mm] bg-white shadow-xl p-8 relative print:shadow-none print:w-[210mm] print:h-[297mm] print:p-6 text-black print:mb-0 overflow-hidden box-border mx-auto">
        
        {/* Inner Border Frame */}
        <div className="w-full h-full border-2 border-black p-8 flex flex-col">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-2xl font-extrabold uppercase tracking-wide">BABY TICKET</h1>
          </div>

          {/* Vitals Section */}
          <div className="space-y-6 mb-8 pl-2">
            <div className="flex items-end">
              <span className="font-bold text-sm w-24">TIME</span>
              <span className="font-bold text-sm mr-2">:-</span>
              {/* Fixed width line */}
              <div className="w-64 border-b border-black border-dotted h-4"></div>
            </div>
            <div className="flex items-end">
              <span className="font-bold text-sm w-24">SEX</span>
              <span className="font-bold text-sm mr-2">:-</span>
              <div className="w-64 border-b border-black border-dotted h-4"></div>
            </div>
            <div className="flex items-end">
              <span className="font-bold text-sm w-24">WEIGHT</span>
              <span className="font-bold text-sm mr-2">:-</span>
              <div className="w-64 border-b border-black border-dotted h-4"></div>
            </div>
          </div>

          {/* Observation Note */}
          <div className="mb-6 pl-2">
            <p className="font-bold text-sm leading-relaxed">
              Baby cried immidiately .Clean the baby with soft cloth and kept in warmer and observed the activity of the baby.
            </p>
          </div>

          {/* AP Score */}
          <div className="flex items-end mb-10 pl-2">
            <span className="font-bold text-sm mr-2">AP SCORE :-</span>
            <div className="w-64 border-b border-black border-dotted h-4"></div>
          </div>

          {/* Management Section */}
          <div className="mb-8">
            <h2 className="text-center font-bold text-sm uppercase mb-6">:MANAGEMENT :-</h2>
            <div className="space-y-4 pl-2 font-bold text-sm text-left">
              <p>Inj neo k 1 amp im</p>
              <p>Inj taxim 125 mg 1 vial IM</p>
              <p>Brest feeding inniciated after 1 hr.</p>
            </div>
          </div>

          {/* Advice Section */}
          <div className="mb-8 pl-2 text-left">
            <h2 className="font-bold text-sm uppercase mb-6">ADVICE :-</h2>
            <div className="space-y-4 font-bold text-sm">
              <p>Keep baby warm</p>
              <p>Brest feeding in every 2 hrly</p>
              
              {/* Immunization Sentence with Inline Blank */}
              <div className="leading-loose">
                <span>0 birth dose immunisation to be given on dt-</span>
                <span className="inline-block w-32 border-b border-black border-dotted mx-2"></span>
                <span>at chc barpali immunisation</span>
                <br />
                <span>center</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Global Print Styles */}
      <style>{`
        @media print {
          @page { margin: 0; size: A4; }
          body { 
            margin: 0; 
            padding: 0; 
            -webkit-print-color-adjust: exact; 
          }
          /* Removed the problematic 'body > *' rule that was hiding the React root */
        }
      `}</style>
    </div>
  );
};

export default BabyTicket;