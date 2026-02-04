import React from 'react';
import { useNavigate } from 'react-router-dom';

// IMPORTANT: Replace this with your actual logo import path
// import logo from './ramLogo.jpg';
const logo = "ramLogo.jpg"; 

const BedHeadTicket = () => {
  const navigate = useNavigate();
  
  const handlePrint = () => {
    window.print();
  };
  

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center gap-8 print:p-0 print:bg-white print:gap-0 print:block">
      
      {/* Navigation Buttons - Hidden when printing */}
      <div className="fixed top-5 left-5 print:hidden z-50 flex flex-wrap gap-2 max-w-xs">
        <button onClick={() => navigate('/bedHeadTicket')} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-3 rounded shadow text-xs md:text-sm">Bed Head Ticket</button>
        {/* ... other buttons ... */}
      </div>
            {/* Navigation Buttons - Hidden when printing */}
      <div className="fixed top-5 left-5 print:hidden z-50 flex flex-wrap gap-2 max-w-xs">
        <button 
          onClick={() => navigate('/bedHeadTicket')} 
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-3 rounded shadow text-xs md:text-sm"
        >
          Bed Head Ticket
        </button>
        <button 
          onClick={() => navigate('/babyTicket')} 
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded shadow text-xs md:text-sm"
        >
          Baby Ticket
        </button>
        <button 
          onClick={() => navigate('/motherNote')} 
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-3 rounded shadow text-xs md:text-sm"
        >
          Mother Note
        </button>
        <button 
          onClick={() => navigate('/anesthesia')} 
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-3 rounded shadow text-xs md:text-sm"
        >
          Anesthesia
        </button>
        <button 
          onClick={() => navigate('/otNotes')} 
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded shadow text-xs md:text-sm"
        >
          OT Notes
        </button>
        <button 
          onClick={() => navigate('/babyNote')} 
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-3 rounded shadow text-xs md:text-sm"
        >
          Baby Note
        </button>
        <button 
          onClick={() => navigate('/babyTempChart')} 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-3 rounded shadow text-xs md:text-sm"
        >
          Baby Temp Chart
        </button>
        <button 
          onClick={() => navigate('/sisterNote')} 
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-3 rounded shadow text-xs md:text-sm"
        >
          Sister Note
        </button>
        <button 
          onClick={() => navigate('/inputOutputChart')} 
          className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-3 rounded shadow text-xs md:text-sm"
        >
          I/O Chart
        </button>
        <button 
          onClick={() => navigate('/patientRecordChart')} 
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-3 rounded shadow text-xs md:text-sm"
        >
          Patient Record
        </button>
        <button 
          onClick={() => navigate('/cesareanSectionAudit')} 
          className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-3 rounded shadow text-xs md:text-sm"
        >
          C-Section Audit
        </button>
      </div>
      
      {/* Print Button - Hidden when printing */}
      <div className="fixed top-5 right-5 print:hidden z-50">
        <button 
          onClick={handlePrint} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"
        >
          Print Form
        </button>
      </div>

      {/* ======================= PAGE 1 ======================= */}
      <div className="w-[210mm] min-h-[297mm] bg-white shadow-xl p-8 md:p-10 relative flex flex-col print:shadow-none print:w-full print:h-[297mm] print:p-6 text-black print:mb-0">
        
        {/* Header Section */}
        <div className="flex items-center border-b-2 border-green-700 pb-2 mb-2">
          <div className="w-20 mr-4 flex-shrink-0">
            <img src={logo} alt="Hospital Logo" className="w-full h-auto object-contain" />
          </div>
          <div className="text-center">
            <h1 className="text-red-700 text-2xl md:text-3xl font-extrabold uppercase m-0 leading-tight">
              Ramakrushna Nursing Home
            </h1>
            <h2 className="text-green-700 text-sm md:text-base font-bold mt-1">
              BARPALI ,DIS- BARGARH (Regd.No.-BGH0001/2020)
            </h2>
            <h3 className="text-blue-900 text-lg font-bold mt-0.5">
              BED HEAD TICKET
            </h3>
          </div>
        </div>

        {/* Top Section: Patient Info & Discharge */}
        <div className="flex gap-6 mb-2">
          <div className="w-2/3 space-y-1">
            <div className="flex items-end">
              <span className="font-bold text-sm whitespace-nowrap mr-2">Patient name-</span>
              {/* <div className="flex-grow border-b border-black h-5"></div> */}
            </div>
            <div className="flex items-end">
              <span className="font-bold text-sm whitespace-nowrap mr-2">S/F/W/O of-</span>
              {/* <div className="flex-grow border-b border-black h-5"></div> */}
            </div>
            <div className="flex items-end">
              <span className="font-bold text-sm whitespace-nowrap mr-2">Age/Sex-</span>
              {/* <div className="flex-grow border-b border-black h-5"></div> */}
            </div>
            <div className="mt-1">
              <span className="block font-bold text-sm mb-0.5 text-left">Address-</span>
              {/* <div className="w-full border border-gray-400 h-12"></div> */}
            </div>
          </div>

          <div className="w-1/3 flex flex-col justify-between">
            <div className="flex items-end mb-2">
              <span className="font-bold text-sm whitespace-nowrap mr-2">Cause of Discharge -</span>
              {/* <div className="flex-grow border-b border-black h-5"></div> */}
            </div>
            <div className="text-center mt-auto">
              <span className="text-xs font-bold block">Signature of Medical Officer</span>
            </div>
          </div>
        </div>

        {/* Admission Details */}
        <div className="space-y-1 mb-4">
          <div className="flex items-end">
            <span className="w-32 font-bold text-sm">Nationality-</span>
          </div>
          <div className="flex items-end">
            <span className="w-32 font-bold text-sm">Occupation-</span>
          </div>
          <div className="flex items-end">
            <span className="w-40 font-bold text-sm">Date of Admission-</span>
          </div>
          <div className="flex items-end">
            <span className="w-40 font-bold text-sm">Date of Discharge-</span>
          </div>
          <div className="flex items-end">
            <span className="w-48 font-bold text-sm">Date of Referral/Death-</span>
          </div>
        </div>

        {/* Mid Signatures */}
        <div className="flex justify-between my-4 px-4">
          <div className="">
            <span className="w-48 font-bold text-sm">SIGNATURE OF PATIENT</span>
          </div>
          <div className="">
            <span className="w-48 font-bold text-sm">SIGNATURE OF ATTENDENT WITH RELATIONSHIP</span>
          </div>
        </div>

        <hr className="border-t-2 border-green-700 my-2" />

        {/* Medical History */}
        <div className="space-y-2">
          <div>
            <span className="block font-bold text-sm mb-0.5 text-left">Chief complaint &gt;</span>
          </div>
          <div>
            <span className="block font-bold text-sm mb-0.5 text-left">Past history with treatment history ( if any ) &gt;</span>
          </div>
          <div>
            <span className="block font-bold text-sm mb-0.5 text-left">Family history ( if any ) &gt;</span>
          </div>
        </div>

        {/* Menstrual History */}
        <div className="mt-2">
          <span className="block font-bold text-sm mb-1 text-left">Menstrual history &gt;</span>
          <div className="flex justify-between gap-6">
            <div className="flex items-end flex-1"><span className="font-bold text-sm mr-2">CYCLE</span></div>
            <div className="flex items-end flex-1"><span className="font-bold text-sm mr-2">LMP</span></div>
            <div className="flex items-end flex-1"><span className="font-bold text-sm mr-2">EDD</span></div>
          </div>
        </div>

        {/* Obstetric History */}
        <div className="mt-2">
          <span className="block font-bold text-sm mb-1 text-left">Obstetric history &gt;</span>
          <div className="grid grid-cols-5 gap-4">
            <div className="flex items-end"><span className="font-bold text-sm mr-1">GRAVIDA</span></div>
            <div className="flex items-end"><span className="font-bold text-sm mr-1">PARA</span></div>
            <div className="flex items-end"><span className="font-bold text-sm mr-1">ABORTION</span></div>
            <div className="flex items-end"><span className="font-bold text-sm mr-1">ECTOPIC</span></div>
            <div className="flex items-end col-span-1"><span className="font-bold text-sm mr-1 text-[10px] md:text-xs whitespace-nowrap">LIVING CHILDREN</span><div className="flex-grow border-b border-black h-5"></div></div>
          </div>
        </div>

        {/* Other History */}
        <div className="mt-2 mb-4">
          <span className="block font-bold text-sm mb-0.5 text-left">Other history &gt;</span>
        </div>

        {/* --- O/E SECTION (Placed here, Left Aligned) --- */}
        <div className="mb-4">
          {/* Changed text-center to text-left */}
          <div className="text-left font-bold text-lg mb-2">O/E</div>
          <div className="grid grid-cols-4 gap-x-6 gap-y-4">
            <div className="flex items-end"><span className="font-bold text-sm mr-2">Paller</span><div className="flex-grow border-b border-black h-5"></div></div>
            <div className="flex items-end"><span className="font-bold text-sm mr-2">Icterus</span><div className="flex-grow border-b border-black h-5"></div></div>
            <div className="flex items-end"><span className="font-bold text-sm mr-2">Oedema</span><div className="flex-grow border-b border-black h-5"></div></div>
            <div className="flex items-end"><span className="font-bold text-sm mr-2">Temp</span><div className="flex-grow border-b border-black h-5"></div></div>
            <div className="flex items-end"><span className="font-bold text-sm mr-2">Bp</span><div className="flex-grow border-b border-black h-5"></div></div>
            <div className="flex items-end"><span className="font-bold text-sm mr-2">Pulse</span><div className="flex-grow border-b border-black h-5"></div></div>
            <div className="flex items-end"><span className="font-bold text-sm mr-2">Spo2</span><div className="flex-grow border-b border-black h-5"></div></div>
            <div className="flex items-end"><span className="font-bold text-sm mr-2">Chest</span><div className="flex-grow border-b border-black h-5"></div></div>
          </div>
        </div>

        {/* Page 1 Final Signature - Pushed to Bottom with mt-auto */}
        <div className="mt-auto flex justify-end pb-4">
          <div className="w-48 text-center">
            <div className="border-t border-black mb-1"></div>
            <span className="font-bold text-sm uppercase">Signature</span>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 2 ======================= */}
      <div className="w-[210mm] min-h-[297mm] bg-white shadow-xl p-8 md:p-12 relative flex flex-col print:shadow-none print:w-full print:h-[297mm] print:p-8 text-black print:break-before-page">
        
        {/* P/A Section */}
        <div className="mb-6">
          <div className="flex items-end">
             <span className="font-bold text-sm mr-4 w-12 text-left">P/A</span>
             <div className="flex-grow border-b border-black h-5"></div>
          </div>
          <div className="w-full border-b border-black h-8"></div>
          <div className="w-full border-b border-black h-8"></div>
        </div>

        {/* Others Section */}
        <div className="mb-6">
          <div className="flex items-end">
             <span className="font-bold text-sm mr-4 w-12 text-left">Others</span>
             <div className="flex-grow border-b border-black h-5"></div>
          </div>
          <div className="w-full border-b border-black h-8"></div>
        </div>

        {/* Previous Investigation */}
        <div className="mb-8">
          <span className="block font-bold text-sm mb-2 text-left">Previous investigation &gt;</span>
          <div className="w-full border-b border-black h-6"></div>
          <div className="w-full border-b border-black h-8"></div>
          <div className="w-full border-b border-black h-8"></div>
        </div>

        {/* Present Investigation Grid */}
        <div className="mb-8">
           <div className="flex items-center mb-4">
              <span className="font-bold text-sm mr-2 text-left">Investigations done presently ( Dt</span>
              <div className="w-24 border-b border-black h-5"></div>
              <span className="font-bold text-sm ml-1">) &gt;</span>
           </div>

           <div className="grid grid-cols-3 gap-8 text-sm">
              {/* Column 1 */}
              <div className="space-y-3">
                 <div className="flex justify-between"><span className="font-bold">HB :</span><div className="w-16 border-b border-black"></div></div>
                 <div className="flex justify-between"><span className="font-bold">TLC :</span><div className="w-16 border-b border-black"></div></div>
                 <div className="flex justify-between"><span className="font-bold">PLT :</span><div className="w-16 border-b border-black"></div></div>
                 <div className="flex justify-between"><span className="font-bold">RBS :</span><div className="w-16 border-b border-black"></div></div>
                 <div className="flex justify-between"><span className="font-bold">UREA :</span><div className="w-16 border-b border-black"></div></div>
                 <div className="flex justify-between"><span className="font-bold">CREATININE :</span><div className="w-12 border-b border-black"></div></div>
                 <div className="flex justify-between"><span className="font-bold">URINE : RE</span><div className="w-12 border-b border-black"></div></div>
                 <div className="flex justify-end"><span className="font-bold mr-2">ME</span><div className="w-16 border-b border-black"></div></div>
              </div>

              {/* Column 2 */}
              <div className="space-y-3">
                 <div className="flex justify-between"><span className="font-bold">HBSAG :</span><div className="w-16 border-b border-black"></div></div>
                 <div className="flex justify-between"><span className="font-bold">HIV :</span><div className="w-16 border-b border-black"></div></div>
                 <div className="flex justify-between"><span className="font-bold">BT :</span><div className="w-16 border-b border-black"></div></div>
                 <div className="flex justify-between"><span className="font-bold">CT :</span><div className="w-16 border-b border-black"></div></div>
                 <div className="flex justify-between"><span className="font-bold">SGPT :</span><div className="w-16 border-b border-black"></div></div>
                 <div className="flex justify-between"><span className="font-bold">SGPT :</span><div className="w-16 border-b border-black"></div></div>
              </div>

              {/* Column 3 */}
              <div className="space-y-3">
                 <div className="flex justify-between"><span className="font-bold">LFT :</span><div className="w-16 border-b border-black"></div></div>
                 <div className="flex justify-between"><span className="font-bold">BILIRUBIN (T):</span><div className="w-12 border-b border-black"></div></div>
                 <div className="flex justify-between"><span className="font-bold">BILIRUBIN (D):</span><div className="w-12 border-b border-black"></div></div>
              </div>
           </div>
        </div>

        {/* Text Paragraphs */}
        <div className="mb-8 space-y-4 text-sm font-bold leading-relaxed text-left">
          <p>
            Patient has been immunised and has regular ANC with HB % level almost maintained and on IFA & CALCIUM regularly .
          </p>
          <div className="flex justify-between items-end">
             <p>Patient has opted for abdominal delivery .</p>
             <span className="font-bold text-lg mr-8">RX</span>
          </div>
        </div>

        {/* RX Space */}
        {/* <div className="w-full h-32 border border-gray-300 mb-6"></div> */}

        {/* Pre-Operative Medication */}
        <div className="mb-12">
          <span className="block font-bold text-sm mb-2 uppercase text-left">Pre- Operative Medication &gt;</span>
          {/* <div className="w-full border-b border-black h-8"></div> */}
          {/* <div className="w-full border-b border-black h-8"></div> */}
          {/* <div className="w-full border-b border-black h-8"></div> */}
        </div>

        {/* Page 2 Final Signature */}
        <div className="flex justify-end mt-auto pb-4">
          <div className="w-48 text-center">
            <div className="border-t border-black mb-1"></div>
            <span className="font-bold text-sm uppercase">Signature</span>
          </div>
        </div>

      </div>

      {/* Global Print Styles to force breaks */}
      <style>{`
        @media print {
          @page { margin: 0; size: auto; }
          body { margin: 0; padding: 0; }
          /* Ensure breaks work */
          .print\\:break-before-page {
             break-before: page;
             page-break-before: always;
          }
        }
      `}</style>
    </div>
  );
};

export default BedHeadTicket;