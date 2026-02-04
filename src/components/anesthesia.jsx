import React from 'react';

const AnesthesiaNote = () => {
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

      {/* ======================= ANESTHESIA NOTE PAGE ======================= */}
      {/* Fixed Height to 297mm (A4) and Overflow Hidden to prevent 2nd page */}
      <div className="w-[210mm] h-[297mm] bg-white shadow-xl p-8 relative print:shadow-none print:w-[210mm] print:h-[297mm] print:p-8 text-black print:mb-0 print:break-after-avoid overflow-hidden border-2 border-gray-400 flex flex-col box-border mx-auto">
        
        {/* Header with Border */}
        <div className="border-2 border-gray-800 py-2 mb-6">
          <h1 className="text-center text-xl font-bold text-blue-800 uppercase m-0">
            ANESTHESIA NOTE
          </h1>
        </div>

        {/* Top Fields Section */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-y-4 justify-between">
            <div className="flex items-end w-5/12">
              <span className="font-bold text-sm whitespace-nowrap mr-2">Date :</span>
              <div className="flex-grow border-b border-black h-5 relative">
                <span className="absolute right-1/3 bottom-1">/</span>
                <span className="absolute right-2/3 bottom-1">/</span>
              </div>
            </div>
            
            <div className="flex items-end w-6/12">
              <span className="font-bold text-sm whitespace-nowrap mr-2">Anesthetist :-</span>
              <div className="flex-grow border-b border-black h-5"></div>
            </div>

            <div className="flex items-end w-5/12">
              <span className="font-bold text-sm whitespace-nowrap mr-2">Procedure :-</span>
              <div className="flex-grow border-b border-black h-5"></div>
            </div>

            <div className="flex items-end w-6/12">
              <span className="font-bold text-sm whitespace-nowrap mr-2">Surgeon :-</span>
              <div className="flex-grow border-b border-black h-5"></div>
            </div>
          </div>
        </div>

        {/* Pre operative Section */}
        <div className="mb-4 space-y-2">
          <h2 className="font-bold text-sm mb-1">Pre operative :- Patient conscious,oriented</h2>
          
          <div className="flex items-end ml-4">
            <span className="font-bold text-sm mr-2 w-12">P/R :</span>
            <div className="w-40 border-b border-black h-5"></div>
          </div>
          
          <div className="flex items-end ml-4">
            <span className="font-bold text-sm mr-2 w-12">BP :-</span>
            <div className="w-40 border-b border-black h-5"></div>
          </div>
          
          <div className="flex items-end ml-4">
            <span className="font-bold text-sm mr-2 w-12">SPO2 :-</span>
            <div className="w-40 border-b border-black h-5"></div>
          </div>
        </div>

        {/* Procedure Paragraph */}
        <div className="mb-4">
          <p className="text-sm leading-relaxed font-medium text-justify">
            <span className="font-bold">PROCEDURE :-</span> Under all available asceptic precations sub arachoid block was done at L 3-4 with a 25 G spinal needle & <span className="inline-block w-16 border-b border-black h-4"></span> ml of 0.5% inj bupivaccine heavy was given after free flow of CSF, with patient in supine / sitting position and made supine immediately
          </p>
        </div>

        {/* Intra operative Section */}
        <div className="mb-4">
          <h2 className="font-bold text-sm">INTRA OPERATIVE:- All vitals are monitored and maintained</h2>
        </div>

        {/* Post operative Section */}
        <div className="mb-4 space-y-2">
          <h2 className="font-bold text-sm mb-1">.Post operative : patient consciouss , oriented</h2>
          
          <div className="flex items-end ml-4">
            <span className="font-bold text-sm mr-2 w-12">P/R :-</span>
            <div className="w-40 border-b border-black h-5"></div>
          </div>
          
          <div className="flex items-end ml-4">
            <span className="font-bold text-sm mr-2 w-12">BP :-</span>
            <div className="w-40 border-b border-black h-5"></div>
          </div>
          
          <div className="flex items-end ml-4">
            <span className="font-bold text-sm mr-2 w-12">SPO2 :</span>
            <div className="w-40 border-b border-black h-5"></div>
          </div>
        </div>

        {/* Bottom Section: Advice & Signature on the RIGHT */}
        {/* mt-auto pushes this section to the bottom of the container */}
        <div className="mt-auto flex justify-end pb-4 pr-4">
          <div className="w-56 flex flex-col gap-8">
            
            {/* Advice Block */}
            <div className="text-left">
              <h3 className="font-bold text-lg underline mb-2 text-black">Advice</h3>
              <ul className="list-none space-y-2 font-bold text-sm text-black">
                <li>NPO for 6 hr</li>
                <li>Moitor Vitals</li>
                <li>Call SOS</li>
                <li>IV Fluids</li>
              </ul>
            </div>

            {/* Signature Block */}
            <div className="text-center">
              <span className="font-bold text-lg uppercase tracking-wide">SIGNATURE</span>
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
          /* Removed the problematic 'body > *' rule */
        }
      `}</style>
    </div>
  );
};

export default AnesthesiaNote;