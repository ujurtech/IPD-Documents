import React from 'react';

const OTNote = () => {
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

      {/* ======================= OT NOTE PAGE ======================= */}
      {/* A4 Container - Fixed Height & Overflow Hidden */}
      <div className="w-[210mm] h-[297mm] bg-white shadow-xl p-4 relative print:shadow-none print:w-[210mm] print:h-[297mm] print:p-4 text-black print:mb-0 overflow-hidden box-border">
        
        {/* Outer Border */}
        <div className="w-full h-full border-2 border-black p-3">
          
          {/* Inner Border Frame - Flex Column to space out content */}
          <div className="w-full h-full border-2 border-black p-6 flex flex-col justify-between">
          
            {/* ============ TOP SECTION ============ */}
            <div>
              {/* Header */}
              <div className="text-center mb-6">
                <h1 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-blue-700">OT NOTE</h1>
              </div>

              {/* Staff Section */}
              <div className="space-y-1 mb-6 font-bold text-sm text-left">
                <div className="flex"><span className="w-32">SURGEON :</span></div>
                <div className="flex"><span className="w-32">ASSISTANT :</span></div>
                <div className="flex"><span className="w-32">STAFF NURSE :</span></div>
                <div className="flex"><span className="w-32">ANESTHETIST :</span></div>
              </div>

              {/* Procedure Text */}
              <div className="mb-6 text-left font-bold text-sm leading-7 text-justify">
                <p>
                  Under all available aseptic measures and SA abdomen opened with a transverse incision LSCS done and delivered a living 
                  <span className="inline-block w-20 border-b border-black border-dotted mx-1"></span>
                  baby at 
                  <span className="inline-block w-16 border-b border-black border-dotted mx-1"></span>
                  am/pm on dt 
                  <span className="inline-block w-20 border-b border-black border-dotted mx-1"></span>
                  . Placenta delivered after 
                  <span className="inline-block w-12 border-b border-black border-dotted mx-1"></span>
                  minutes no pph. Uterus and abdomen closed in layers, Skin stitches with 
                  <span className="inline-block w-24 border-b border-black border-dotted mx-1"></span>
                  intra operative uneventual.
                </p>
              </div>

              {/* Intra-operative Drugs */}
              <div className="mb-6 text-left font-bold text-sm">
                <h2 className="mb-2 underline">(Intra operative drugs)</h2>
                <div className="space-y-1 pl-1">
                  <p>INJ OXYTOCIN 2 AMPIM</p>
                  <p>INJ OXYTOCIN 2 AP IN IV DRIP AFTER BABY DELIVERED</p>
                  <p>TAB MISOPROSTOL 600 MG IN INTRA UTERINE</p>
                  <p>INJ TRANIXAMIC ACID 500 MG IV</p>
                  <p>INJ DICLOFANAC SODIUM AQA 1 AMP IM</p>
                  <p>INJ TRAMADOL 1 AMP IM</p>
                </div>
              </div>

              {/* Post-Operative Findings */}
              <div className="text-left font-bold text-sm">
                <h2 className="mb-2 underline">POST OPERATIVE FINDINGS:-</h2>
                <div className="space-y-1 pl-1">
                  <div className="flex items-center"><span className="w-32">BP:</span></div>
                  <div className="flex items-center"><span className="w-32">PULSE:</span></div>
                  <div className="flex items-center"><span className="w-32">SPO2:</span></div>
                  <div className="flex items-center"><span className="w-32">URINE OUTPUT:</span></div>
                  <div className="flex items-center"><span>BLEEDING P/V (PPH)</span></div>
                </div>
              </div>
            </div>

            {/* ============ BOTTOM SECTION (Advice & Signature) ============ */}
            <div className="mt-auto">
              <div className="flex justify-between items-end">
                
                {/* Advice Section */}
                <div className="text-left font-bold text-sm w-3/4 ml-auto">
                  <h2 className="mb-2 underline text-left -ml-20">ADVICE:</h2>
                  <ul className="list-none space-y-1">
                    <li className="flex gap-2"><span>•</span> <span>IVE RL/ DNS /NS ALTERNATIVELY</span></li>
                    <li className="flex gap-2"><span>•</span> <span>1. INJ PIPERCILIN + TAZOBACTUM (4.5 GM) IV TDS</span></li>
                    <li className="flex gap-2"><span>•</span> <span>2. INJ METRONIDAZOLE IV TDS</span></li>
                    <li className="flex gap-2"><span>•</span> <span>3. INJ ONDENCETRON IV BD</span></li>
                    <li className="flex gap-2"><span>•</span> <span>4. INJ PANTOPRAZOLE IV</span></li>
                    <li className="flex gap-2"><span>•</span> <span>5. INJ DICLOFANAC SODIUM IM BD</span></li>
                    <li className="flex gap-2"><span>•</span> <span>6. INJ FORTWIN + INJ PHENERGON ( 1.ML + 1 ML ) IM AT BED TIME</span></li>
                    <li className="flex gap-2"><span>•</span> <span>7. INJ CEFRIAXONE + TAZOBACTUM ( 1.125 MG ) IV BD</span></li>
                    <li className="flex gap-2"><span>•</span> <span>8. INJ TRENEXAMIC ACID IV BD / TDS / SOS</span></li>
                    <li className="flex gap-2"><span>•</span> <span>9. INJ TRAMADOL IM BD / SOS</span></li>
                    <li className="flex gap-2"><span>•</span> <span>10. INJ AMIKACINE 500 MG IV BD</span></li>
                  </ul>
                </div>
              </div>

              {/* Signature */}
              <div className="flex justify-end mt-12 mr-8">
                <div className="text-center">
                  <span className="font-bold text-lg uppercase tracking-wider">SIGNATURE</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Global Print Styles - REMOVED THE BODY > * RULE */}
      <style>{`
        @media print {
          @page { margin: 0; size: A4; }
          body { margin: 0; padding: 0; }
          /* The problematic rule has been removed */
        }
      `}</style>
    </div>
  );
};

export default OTNote;