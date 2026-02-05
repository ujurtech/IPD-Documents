import React from 'react';

const PrescriptionPad = () => {

  // Native Browser Print Function
  const handlePrint = () => {
    window.print();
  };

  // Reusable Prescription Component
  const PrescriptionContent = () => (
    <div
      style={{
        width: '148.5mm', 
        height: '210mm',  
        backgroundColor: '#ffffff',
        position: 'relative',
        color: '#1a1a1a',
        fontFamily: 'Arial, sans-serif',
        padding: '8mm',
        boxSizing: 'border-box',
        fontSize: '9pt',
        borderRight: '1px dashed #9ca3af',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      {/* HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
        <div style={{ width: '33.33%', textAlign: 'left' }}>
          <h1 style={{ color: '#991b1b', fontWeight: 'bold', fontStyle: 'italic', fontFamily: '"Times New Roman", serif', margin: 0, lineHeight: '1.1' }}>
            Dr. Subhash Chandra Dash
          </h1>
          <p style={{ fontSize: '11px', fontWeight: '600', color: '#1f2937', margin: '3px 0 0 28px' }}>
            B.A.M.S. (Utkal)
          </p>
          <p style={{ fontSize: '8.5px', color: '#374151', margin: '2px 0 0 0' }}>
            Regd. No.- 5791/10
          </p>
        </div>
        <div style={{ width: '16.66%', display: 'flex', justifyContent: 'center', paddingTop: '2px' }}>
          <img 
            src="./ramLogo.jpg" 
            alt="Logo" 
            style={{ width: '80px', height: '80px', objectFit: 'contain' }}
          />
        </div>
        <div style={{ width: '50%', textAlign: 'right' }}>
          <h2 style={{ color: '#1f2937', fontWeight: 'bold', fontSize: '10.5pt', letterSpacing: '-0.025em', textTransform: 'uppercase', margin: 0, lineHeight: '1.1' }}>
            RAMAKRUSHNA NURSING HOME
          </h2>
          <p style={{ color: '#b91c1c', fontWeight: 'bold', fontSize: '9.5pt', lineHeight: '1', margin: '3px 0' }}>
            ରାମକୃଷ୍ଣ ନର୍ସିଂ ହୋମ୍
          </p>
          <p style={{ fontSize: '7.5px', color: '#374151', marginTop: '3px', lineHeight: '1.3' }}>
            Barpali, Dist.-Bargarh<br/>
            Regd. No.- BGH0001/2020<br/>
            Phone : 06646-256199
          </p>
          <p style={{ fontSize: '7.5px', color: '#374151', margin: '1px 0 0 0' }}>
            Mob. : 6371491691, 8280810672
          </p>
        </div>
      </div>

      <div style={{ width: '100%', borderBottom: '1px solid #9ca3af', marginBottom: '5px' }}></div>

      {/* PATIENT DETAILS */}
      <div style={{ marginBottom: '5px', fontSize: '8.5pt' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '3px' }}>
          <span style={{ fontWeight: '600', color: '#374151', marginRight: '6px', whiteSpace: 'nowrap' }}>
            Patient's Name
          </span>
          <div style={{ borderBottom: '1px dotted #6b7280', flexGrow: 1 }}></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', flexGrow: 1, marginRight: '12px' }}>
            <span style={{ fontWeight: '600', color: '#374151', marginRight: '6px' }}>Address</span>
            <div style={{ borderBottom: '1px dotted #6b7280', flexGrow: 1 }}></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', whiteSpace: 'nowrap' }}>
            <span style={{ fontWeight: '600', color: '#374151' }}>Age</span>
            <div style={{ borderBottom: '1px dotted #6b7280', width: '30px' }}></div>
            <span style={{ fontWeight: '600', color: '#374151' }}>Wt</span>
            <div style={{ borderBottom: '1px dotted #6b7280', width: '30px' }}></div>
            <span style={{ fontWeight: '600', color: '#374151' }}>Sex</span>
            <div style={{ borderBottom: '1px dotted #6b7280', width: '30px' }}></div>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', borderBottom: '1px solid #9ca3af', marginBottom: '5px' }}></div>

      {/* MAIN BODY */}
      <div style={{ display: 'flex', flex: 1, position: 'relative', minHeight: 0 }}>
        <div style={{ width: '43mm', border: '1px solid #4b5563', borderRadius: '6px', height: '100%', position: 'relative', marginRight: '12px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ borderBottom: '1px solid #4b5563', padding: '2px 6px', backgroundColor: 'rgba(243, 244, 246, 0.5)', borderTopLeftRadius: '6px', borderTopRightRadius: '6px', flexShrink: 0 }}>
            <span style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '9pt', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
              ADVICE
            </span>
          </div>
        </div>
        <div style={{ flexGrow: 1, paddingTop: '3px' }}>
          <span style={{ fontFamily: 'serif', fontWeight: 'bold', fontSize: '22px', color: '#1e293b' }}>℞</span>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ marginTop: '6px', borderTop: '1px solid #0f766e', paddingTop: '3px', flexShrink: 0 }}>
        <div style={{ display: 'flex', fontSize: '7.5pt', color: '#115e59', fontWeight: '600', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ width: '25%' }}>
             <span style={{ color: '#b91c1c', fontWeight: 'bold', display: 'block', marginBottom: '3px', fontSize: '7.5pt' }}>
               Facilities Available :
             </span>
             <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
               <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5px' }}>
                 <span style={{ color: '#dc2626', marginRight: '3px', fontSize: '9px' }}>•</span> 
                 <span style={{ fontSize: '7.5pt' }}>Medical Store</span>
               </li>
               <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5px' }}>
                 <span style={{ color: '#dc2626', marginRight: '3px', fontSize: '9px' }}>•</span> 
                 <span style={{ fontSize: '7.5pt' }}>Patho Lab</span>
               </li>
             </ul>
          </div>
          <div style={{ width: '25%', paddingTop: '14px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
               <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5px' }}>
                 <span style={{ color: '#dc2626', marginRight: '3px', fontSize: '9px' }}>•</span> 
                 <span style={{ fontSize: '7.5pt' }}>Ambulance (24x7)</span>
               </li>
               <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5px' }}>
                 <span style={{ color: '#dc2626', marginRight: '3px', fontSize: '9px' }}>•</span> 
                 <span style={{ fontSize: '7.5pt' }}>ECG</span>
               </li>
               <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5px' }}>
                 <span style={{ color: '#dc2626', marginRight: '3px', fontSize: '9px' }}>•</span> 
                 <span style={{ fontSize: '7.5pt' }}>Ultrasound</span>
               </li>
             </ul>
          </div>
          <div style={{ width: '25%', paddingTop: '14px', textAlign: 'right' }}>
             <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'inline-block', textAlign: 'left' }}>
               <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5px' }}>
                 <span style={{ color: '#dc2626', marginRight: '3px', fontSize: '9px' }}>•</span> 
                 <span style={{ fontSize: '7.5pt' }}>Endoscopy</span>
               </li>
               <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5px' }}>
                 <span style={{ color: '#dc2626', marginRight: '3px', fontSize: '9px' }}>•</span> 
                 <span style={{ fontSize: '7.5pt' }}>Digital X-Ray</span>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );

  // Blank right side component
  const BlankSide = () => (
    <div
      style={{
        width: '148.5mm', 
        height: '210mm',  
        backgroundColor: '#ffffff',
        position: 'relative',
        color: '#1a1a1a',
        fontFamily: 'Arial, sans-serif',
        padding: '8mm',
        boxSizing: 'border-box',
        fontSize: '9pt',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      {/* Completely blank */}
    </div>
  );

  return (
    <>
      {/* SCREEN VIEW */}
      <div className="screen-view" style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
        
        {/* PRINT BUTTON */}
        <button
          onClick={handlePrint}
          style={{
            position: 'fixed',
            bottom: '32px',
            right: '32px',
            backgroundColor: '#2563eb',
            color: 'white',
            fontWeight: 'bold',
            padding: '16px',
            borderRadius: '9999px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            zIndex: 50,
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#1d4ed8';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#2563eb';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '24px', height: '24px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 001.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
          </svg>
          <span>Print Prescription</span>
        </button>

        {/* SCREEN PREVIEW */}
        <div style={{ backgroundColor: 'white', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
          <PrescriptionContent />
        </div>
      </div>

      {/* PRINT VIEW */}
      <div className="print-view" style={{ display: 'none' }}>
        <div 
          id="printable-section"
          style={{ 
            width: '297mm',
            height: '210mm',
            display: 'flex',
            flexDirection: 'row',
            margin: 0,
            padding: 0,
            backgroundColor: '#ffffff',
            boxSizing: 'border-box'
          }}
        >
          <PrescriptionContent />
          <BlankSide />
        </div>
      </div>

      <style>{`
        @media screen {
          .print-view {
            display: none !important;
          }
        }

        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          body, html {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: 100% !important;
            overflow: hidden !important;
          }

          body * {
            visibility: hidden;
          }

          .print-view, .print-view * {
            visibility: visible;
          }

          .screen-view {
            display: none !important;
          }
          
          .print-view {
            display: flex !important;
            align-items: center;
            justify-content: center;
            width: 100vw !important;
            height: 100vh !important;
            position: fixed;
            top: 0;
            left: 0;
          }

          #printable-section {
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) rotate(90deg) !important;
            transform-origin: center center !important;
            width: 297mm !important;
            height: 210mm !important;
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
          }
          
          button {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default PrescriptionPad;