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
      {/* Double Border Container */}
      <div className="w-[210mm] h-[297mm] bg-white shadow-xl p-4 relative print:shadow-none print:w-[210mm] print:h-[297mm] print:p-4 text-black print:mb-0 overflow-hidden mx-auto">
        
        {/* Outer Border */}
        <div className="border-2 border-black h-full p-3">
          
          {/* Inner Border with Content */}
          <div className="border-2 border-black h-full p-8 flex flex-col">
            
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-center text-xl font-bold text-blue-600 uppercase m-0">
                ANESTHESIA NOTE
              </h1>
            </div>

            {/* Top Fields Section */}
            <div className="mb-6">
              <div className="flex justify-between mb-3">
                <div className="flex items-center">
                  <span className="font-bold text-sm">Date :</span>
                  <span className="ml-12">/</span>
                  <span className="ml-12">/</span>
                </div>
              </div>

              <div className="flex justify-between mb-3">
                <div className="flex items-center">
                  <span className="font-bold text-sm">Anesthetist :-</span>
                </div>
                
                <div className="flex items-center">
                  <span className="font-bold text-sm">Surgeon :-</span>
                </div>
              </div>

              <div className="flex items-center">
                <span className="font-bold text-sm">Procedure :-</span>
              </div>
            </div>

            {/* Pre operative Section */}
            <div className="mb-6">
              <h2 className="font-bold text-sm mb-3">Pre operative :- Patient conscious,oriented</h2>
              
              <div className="ml-16 space-y-2">
                <div className="font-bold text-sm">P/R :</div>
                <div className="font-bold text-sm">BP :-</div>
                <div className="font-bold text-sm">SPO2 :-</div>
              </div>
            </div>

            {/* Procedure Paragraph */}
            <div className="mb-6">
              <p className="text-sm leading-relaxed font-medium text-justify">
                <span className="font-bold">PROCEDURE :-</span> Under all available asceptic precations sub arachoid block was done at L 3-4 with a 25 G spinal needle & __________ ml of 0.5% inj bupivaccine heavy was given after free flow of CSF, with patient in supine / sitting position and made supine immediately
              </p>
            </div>

            {/* Intra operative Section */}
            <div className="mb-6">
              <h2 className="font-bold text-sm">INTRA OPERATIVE:- All vitals are monitored and maintained</h2>
            </div>

            {/* Post operative Section */}
            <div className="mb-8">
              <h2 className="font-bold text-sm mb-3">.Post operative : patient consciouss , oriented</h2>
              
              <div className="ml-16 space-y-2">
                <div className="font-bold text-sm">P/R :-</div>
                <div className="font-bold text-sm">BP :-</div>
                <div className="font-bold text-sm">SPO2 :</div>
              </div>
            </div>

            {/* Bottom Section: Advice & Signature on the RIGHT */}
            <div className="mt-auto flex justify-end pb-4 pr-4">
              <div className="w-56 flex flex-col gap-8">
                
                {/* Advice Block */}
                <div className="text-center">
                  <h3 className="font-bold text-base underline mb-3 text-black">Advice</h3>
                  <div className="space-y-2 font-bold text-sm text-black">
                    <div>NPO for 6 hr</div>
                    <div>Moitor Vitals</div>
                    <div>Call SOS</div>
                    <div>IV Fluids</div>
                  </div>
                </div>

                {/* Signature Block */}
                <div className="text-center">
                  <span className="font-bold text-base uppercase tracking-wide">SIGNATURE</span>
                </div>

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
        }
      `}</style>
    </div>
  );
};

export default AnesthesiaNote;