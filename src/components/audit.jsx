import React, { useState } from 'react';

export default function CesareanSectionAudit() {
  const [formData, setFormData] = useState({
    // Page 1
    facilityName: '',
    facilityType: [],
    unit: '',
    date: '',
    patientName: '',
    age: '',
    hospitalNo: '',
    gpla: '',
    bookingStatus: '',
    height: '',
    weight: '',
    admissionDate: '',
    deliveryDate: '',
    deliveryTime: '',
    timeSlots: [],
    gestation: '',
    estimatedBasis: '',
    previousStillbirths: '',
    referred: '',
    referringFacility: '',
    gestationalAge: '',
    corticosteroid: '',
    pregnancyGroup: [],
    // Page 2
    seniorObstetrician: '',
    decisionDeliveryInterval: '',
    csIndication: [],
    partographUsed: '',
    membranesRuptured: '',
    durationFirstStage: '',
    durationFirstStageMin: '',
    durationSecondStage: '',
    durationSecondStageMin: '',
    cervicalDilation: '',
    // Page 3
    prophylacticAntibiotics: '',
    estimatedBloodLoss: '',
    bloodTransfusion: '',
    previousCS: '',
    indication: '',
    vaginTrialOffered: '',
    postOpComplications: '',
    currentStatus: '',
    specialCare: '',
    whereManaged: '',
    fetalHeartMonitoring: '',
    meconiumStainedLiquor: '',
    otherDeliveryMethods: '',
    deliveryOutcome: '',
    babyGender: '',
    birthWeight: '',
    apgarScore: '',
    transferredToSNCU: '',
    maternalOutcome: '',
    newbornOutcome: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
          ? [...(prev[name] || []), value]
          : (prev[name] || []).filter(item => item !== value)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const indicationOptions = [
    'Singleton breech',
    'Malpresentation/Unstable lie',
    'Multiple pregnancy',
    'Presumed fetal',
    'Distress/IUGR/Abnormal CTG',
    'Cord prolapse',
    'Sepsis/Chorioamnionitis',
    'Placenta praevia, actively bleeding',
    'Placenta praevia, not actively bleeding',
    'Postdalism',
    'Oligohydramnios',
    'Previous Cesarean Section',
    'Placental abruption',
    'Intrapartum haemorrhage',
    'Pre-eclampsia/eclampsia/HELLP',
    'Failure to progress (induction/in labour)',
    'Maternal medical disease (see Key)*',
    'Uterine rupture/ scar dehiscence',
    'Previous poor obstetric outcome (BOH)',
    'Long period of infertility',
    'Others (Specify)',
  ];

  const pregnancyGroupOptions = [
    { id: 'group1', label: 'Group 1: Nulliparous, single cephalic pregnancy, ≥37 weeks gestation in spontaneous labour' },
    { id: 'group2', label: 'Group 2: Nulliparous, single cephalic pregnancy, ≥37 weeks gestation who had labour induced or delivered by CS before labour' },
    { id: 'group3', label: 'Group 3: Multiparous, without previous CS, single cephalic pregnancy, ≥37 weeks gestation in spontaneous labour' },
    { id: 'group4', label: 'Group 4: Multiparous, without previous CS, single cephalic pregnancy, ≥37 weeks gestation who had labour induced or delivered by CS before labour' },
    { id: 'group5', label: 'Group 5: All multiparous, with at least one previous CS, with a single cephalic pregnancy, ≥37 weeks gestation' },
    { id: 'group6', label: 'Group 6: All nulliparous, with a single breech pregnancy' },
    { id: 'group7', label: 'Group 7: All multiparous, with a single breech pregnancy including women with previous CS(s)' },
    { id: 'group8', label: 'Group 8: All women with multiple pregnancies including women with previous CS(s)' },
    { id: 'group9', label: 'Group 9: All women with a single pregnancy with a transverse or oblique lie, including women with previous CS(s)' },
    { id: 'group10', label: 'Group 10: All women with a single cephalic pregnancy < 37 weeks gestation, including women with previous CS(s)' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8 print:p-0 print:bg-white">
      
      {/* Print Button - Hidden when printing */}
      <div className="mb-6 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded shadow-lg flex items-center gap-2 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print Audit Form
        </button>
      </div>

      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
            padding: 0;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            margin: 0;
            padding: 0;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-page {
            page-break-after: always;
            margin: 0;
            padding: 0;
            height: 297mm;
            width: 210mm;
            overflow: hidden;
          }
          .print-page:last-child {
            page-break-after: avoid;
          }
        }
        
        .input-line {
          border-bottom: 1px dotted #000;
          outline: none;
          background: transparent;
          width: 100%;
        }
        .table-bordered td {
          border: 1px solid black;
          padding: 4px 8px;
          vertical-align: top;
        }
      `}</style>

      {/* ================= PAGE 1 ================= */}
      <div className="bg-white shadow-2xl print:shadow-none w-[210mm] h-[297mm] p-[15mm] print:p-[10mm] print:w-screen print:h-screen box-border text-black print-page mb-8 print:mb-0 overflow-hidden">
        
        {/* --- Header --- */}
        <div className="flex justify-between items-start border-b-2 border-black pb-2 mb-3">
          <div className="w-3/4">
            <h1 className="text-lg font-bold uppercase tracking-wide">Cesarean Section Audit Format</h1>
            <p className="text-xs italic text-gray-700">(To be filled by doctor conducting C-section)</p>
          </div>
          <div className="w-1/4 text-right">
            <span className="border-2 border-black px-2 py-1 font-bold text-xs bg-gray-100">LAQSHYA</span>
          </div>
        </div>

        {/* --- Facility Details --- */}
        <div className="space-y-2 mb-4 text-xs">
          <div className="flex items-end">
            <span className="font-bold whitespace-nowrap mr-2">Name of the Facility:</span>
            <input 
              type="text" 
              name="facilityName" 
              value={formData.facilityName} 
              onChange={handleChange} 
              className="flex-grow border-b border-black outline-none px-1 bg-transparent"
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-1 text-xs">
            <span className="font-bold">Type of facility (Encircle):</span>
            <span className="px-0.5">MCH</span> / 
            <span className="px-0.5">DH and equivalent</span> / 
            <span className="px-0.5">SDH and equivalent</span> / 
            <span className="px-0.5">AH and equivalent</span> / 
            <span className="px-0.5">RU-CHC and equivalent</span>
          </div>

          <div className="flex items-end gap-6">
            <div className="flex items-end flex-grow">
              <span className="font-bold whitespace-nowrap mr-2 text-xs">Mention Unit:</span>
              <input 
                type="text" 
                name="unit" 
                value={formData.unit} 
                onChange={handleChange} 
                className="flex-grow border-b border-black outline-none px-1 bg-transparent"
              />
            </div>
            <div className="flex items-end w-40">
              <span className="font-bold whitespace-nowrap mr-2 text-xs">Date:</span>
              <input 
                type="text" 
                name="date" 
                value={formData.date} 
                onChange={handleChange} 
                className="flex-grow border-b border-black outline-none px-1 bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* --- Main Table --- */}
        <table className="w-full border-collapse border border-black text-xs table-bordered">
          <thead>
            <tr className="bg-gray-200">
              <th className="w-10 text-center border border-black py-1">I</th>
              <th colSpan="2" className="text-left border border-black px-1 py-1">Patient Information</th>
              <th className="text-left border border-black px-1 py-1">Response</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="text-center font-bold border border-black px-1 py-0.5">1</td><td colSpan="2" className="border border-black px-1 py-0.5">Name of the woman undergone C-section</td><td className="border border-black px-1 py-0.5"><input type="text" name="patientName" value={formData.patientName} onChange={handleChange} className="input-line text-xs" /></td></tr>
            <tr><td className="text-center font-bold border border-black px-1 py-0.5">2</td><td colSpan="2" className="border border-black px-1 py-0.5">Age of woman (in years)</td><td className="border border-black px-1 py-0.5"><input type="text" name="age" value={formData.age} onChange={handleChange} className="input-line text-xs" /></td></tr>
            <tr><td className="text-center font-bold border border-black px-1 py-0.5">3</td><td colSpan="2" className="border border-black px-1 py-0.5">Hospital No. / Patient identification no.</td><td className="border border-black px-1 py-0.5"><input type="text" name="hospitalNo" value={formData.hospitalNo} onChange={handleChange} className="input-line text-xs" /></td></tr>
            <tr><td className="text-center font-bold border border-black px-1 py-0.5">4</td><td colSpan="2" className="border border-black px-1 py-0.5">G / P / L / A</td><td className="border border-black px-1 py-0.5"><input type="text" name="gpla" value={formData.gpla} onChange={handleChange} className="input-line text-xs" /></td></tr>
            <tr><td className="text-center font-bold border border-black px-1 py-0.5">5</td><td colSpan="2" className="border border-black px-1 py-0.5">Booking status</td><td className="border border-black px-1 py-0.5 text-xs">Booked / Booked elsewhere / Un-booked</td></tr>
            <tr><td className="text-center font-bold border border-black px-1 py-0.5">6</td><td colSpan="2" className="border border-black px-1 py-0.5">Maternal height and weight</td><td className="border border-black px-1 py-0.5"><div className="flex justify-between"><div className="flex items-center w-1/2 mr-1"><span className="mr-0.5 text-xs">Ht:</span><input type="text" name="height" value={formData.height} onChange={handleChange} className="border-b border-black w-full outline-none text-center text-xs" /><span className="ml-0.5 text-xs">cm</span></div><div className="flex items-center w-1/2"><span className="mr-0.5 text-xs">Wt:</span><input type="text" name="weight" value={formData.weight} onChange={handleChange} className="border-b border-black w-full outline-none text-center text-xs" /><span className="ml-0.5 text-xs">kg</span></div></div></td></tr>
            <tr><td className="text-center font-bold border border-black px-1 py-0.5">7</td><td colSpan="2" className="border border-black px-1 py-0.5">Date of Admission</td><td className="border border-black px-1 py-0.5"><input type="text" name="admissionDate" value={formData.admissionDate} onChange={handleChange} className="input-line text-xs" /></td></tr>
            <tr><td className="text-center font-bold border border-black px-1 py-0.5">8</td><td colSpan="2" className="border border-black px-1 py-0.5">Date and time of delivery by CS</td><td className="border border-black px-1 py-0.5"><div className="flex items-center mb-1"><span className="mr-1 text-xs">Date:</span><input type="text" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} className="border-b border-black flex-grow outline-none text-xs" /></div><div className="text-xs font-bold mb-0.5">Time Slot (Tick):</div><div className="grid grid-cols-2 gap-0.5 text-xs"><label className="flex items-center"><input type="checkbox" className="mr-0.5" /> 9am - 6pm</label><label className="flex items-center"><input type="checkbox" className="mr-0.5" /> 6pm - 9pm</label><label className="flex items-center"><input type="checkbox" className="mr-0.5" /> 9pm - 12am</label><label className="flex items-center"><input type="checkbox" className="mr-0.5" /> 12am - 6am</label><label className="flex items-center"><input type="checkbox" className="mr-0.5" /> 6am - 9am</label></div></td></tr>

            <tr className="bg-gray-200"><th className="text-center border border-black py-1">II</th><th colSpan="2" className="text-left border border-black px-1 py-1">Obstetric History</th><th className="text-left border border-black px-1 py-1">Response</th></tr>

            <tr><td className="text-center font-bold border border-black px-1 py-0.5">1</td><td colSpan="2" className="border border-black px-1 py-0.5">Estimated gestation (completed weeks)</td><td className="border border-black px-1 py-0.5"><input type="text" name="gestation" value={formData.gestation} onChange={handleChange} className="input-line text-xs" /></td></tr>
            <tr><td className="text-center font-bold border border-black px-1 py-0.5">1a</td><td colSpan="2" className="border border-black px-1 py-0.5">Basis of estimated gestation</td><td className="border border-black px-1 py-0.5 text-xs flex items-center">LMP / USG / Clinical assessment</td></tr>
            <tr><td className="text-center font-bold border border-black px-1 py-0.5">2</td><td colSpan="2" className="border border-black px-1 py-0.5">Number of previous stillbirths {'>'} 24 weeks</td><td className="border border-black px-1 py-0.5"><input type="text" name="previousStillbirths" value={formData.previousStillbirths} onChange={handleChange} className="input-line text-xs" /></td></tr>
            <tr><td className="text-center font-bold border border-black px-1 py-0.5">3</td><td colSpan="2" className="border border-black px-1 py-0.5"><span className="text-xs">Was the mother referred to this hospital from another facility?</span><br /><span className="text-xs font-normal text-gray-600">(If yes, name of transferring facility)</span></td><td className="border border-black px-1 py-0.5"><div className="flex items-center gap-2 mb-0.5 text-xs"><label><input type="radio" name="referred" /> Yes</label><label><input type="radio" name="referred" /> No</label></div><input type="text" placeholder="Facility Name" name="referringFacility" className="input-line text-xs" /></td></tr>
            <tr><td className="text-center font-bold border border-black px-1 py-0.5">3a</td><td colSpan="2" className="border border-black px-1 py-0.5">Gestational age at the time of referral</td><td className="border border-black px-1 py-0.5 text-xs">Term / Pre-term</td></tr>
            <tr><td className="text-center font-bold border border-black px-1 py-0.5">3b</td><td colSpan="2" className="border border-black px-1 py-0.5">If preterm, was AN corticosteroid given prior to referral?</td><td className="border border-black px-1 py-0.5"><div className="flex items-center gap-2 text-xs"><label><input type="radio" name="corticosteroid" /> Yes</label><label><input type="radio" name="corticosteroid" /> No</label></div></td></tr>
            <tr><td className="text-center font-bold align-top pt-1 border border-black px-1 py-0.5">4</td><td colSpan="2" className="align-top pt-1 border border-black px-1 py-0.5 text-xs">Tick the appropriate group in which the pregnant woman belongs to:</td><td className="p-0"><div className="flex flex-col divide-y divide-black text-xs">{pregnancyGroupOptions.slice(0, 4).map((group) => (<div key={group.id} className="p-1 flex items-start gap-1"><input type="checkbox" className="mt-0.5" name="pregnancyGroup" value={group.id} onChange={handleChange} /><span><strong>{group.label.split(':')[0]}:</strong> {group.label.split(':')[1]}</span></div>))}</div></td></tr>
          </tbody>
        </table>
      </div>

      {/* ================= PAGE 2 ================= */}
      <div className="bg-white shadow-2xl print:shadow-none w-[210mm] h-[297mm] p-[10mm] print:p-[10mm] print:w-screen print:h-screen box-border text-black print-page mb-8 print:mb-0 overflow-auto">
        
        <div className="text-center mb-1">
          <h1 className="text-sm font-bold">Cesarean Section Audit Format - Page 2</h1>
        </div>

        <div className="mb-1 border border-gray-300 p-0">
          <div className="flex">
            <div className="w-1/3 border-r border-gray-300 p-1 bg-gray-50"></div>
            <div className="w-2/3 p-1">
              <div className="space-y-0.5">
                {pregnancyGroupOptions.slice(4).map((group) => (
                  <div key={group.id} className="flex items-start gap-1">
                    <span className="inline-flex items-center justify-center w-3 h-3 border border-gray-400 flex-shrink-0 mt-0.5"></span>
                    <span className="text-xs text-gray-800 leading-tight"><strong>{group.label.split(':')[0]}:</strong> {group.label.split(':')[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto border border-gray-300">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="w-6 px-1 py-1 text-left font-semibold border-r border-gray-300">S.No</th>
                <th className="px-2 py-1 text-left font-semibold border-r border-gray-300">Details of Caesarean Section</th>
                <th className="px-2 py-1 text-left font-semibold">Response</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300"><td className="px-1 py-0.5 border-r border-gray-300 align-top">1</td><td className="px-2 py-0.5 border-r border-gray-300 text-xs">Name the senior most obstetrician involved in the decision to perform the caesarean section?</td><td className="px-2 py-0.5 text-xs">Unit chief/ Duty Assistant /HoD/ Assoc. professor/ Assistant professor/others</td></tr>
              <tr className="border-b border-gray-300"><td className="px-1 py-0.5 border-r border-gray-300 align-top">2</td><td className="px-2 py-0.5 border-r border-gray-300 text-xs">Decision · delivery interval</td><td className="px-2 py-0.5"><input type="text" className="border-b border-black w-full text-xs" /></td></tr>
              <tr className="border-b border-gray-300"><td className="px-1 py-0.5 border-r border-gray-300 align-top">3</td><td className="px-2 py-0.5 border-r border-gray-300 text-xs">Which of the following best describes the indication for CS?</td><td className="px-2 py-0.5"><div className="space-y-0.5">{indicationOptions.map((indication, index) => (<div key={index} className="flex items-start gap-1"><span className="inline-flex items-center justify-center w-2.5 h-2.5 border border-gray-400 flex-shrink-0 mt-0.5"></span><span className="text-xs text-gray-800">{indication}</span></div>))}</div></td></tr>
              <tr className="border-b border-gray-300"><td className="px-1 py-0.5 border-r border-gray-300 align-top">5</td><td className="px-2 py-0.5 border-r border-gray-300 text-xs">Was partograph used prior to decision for CS (if yes, attach a copy of filled partograph)</td><td className="px-2 py-0.5 text-xs"><div className="flex gap-4"><label>Yes</label><label>No</label></div></td></tr>
              <tr className="border-b border-gray-300"><td className="px-1 py-0.5 border-r border-gray-300 align-top">6</td><td className="px-2 py-0.5 border-r border-gray-300 text-xs">Were the membranes ruptured (ROM) prior to the caesarean section?</td><td className="px-2 py-0.5 text-xs">Spontaneous ROM/ ARM</td></tr>
              <tr className="border-b border-gray-300"><td className="px-1 py-0.5 border-r border-gray-300 align-top">7</td><td className="px-2 py-0.5 border-r border-gray-300 text-xs">Duration of first stage of labour</td><td className="px-2 py-0.5"><div className="flex gap-1"><div className="flex-1"><span className="text-xs font-semibold">Hr :</span></div><div className="border-l border-gray-300 flex-1 pl-1"><span className="text-xs font-semibold">Mins:</span></div></div></td></tr>
              <tr className="border-b border-gray-300"><td className="px-1 py-0.5 border-r border-gray-300 align-top">8</td><td className="px-2 py-0.5 border-r border-gray-300 text-xs">Duration of second stage of labour</td><td className="px-2 py-0.5"><div className="flex gap-1"><div className="flex-1"><span className="text-xs font-semibold">Hr :</span></div><div className="border-l border-gray-300 flex-1 pl-1"><span className="text-xs font-semibold">Mins:</span></div></div></td></tr>
              <tr className="border-b border-gray-300"><td className="px-1 py-0.5 border-r border-gray-300 align-top">9</td><td className="px-2 py-0.5 border-r border-gray-300 text-xs">What cervical dilation was reached prior to the caesarean section?</td><td className="px-2 py-0.5 text-xs"><input type="text" className="border-b border-black w-full" /></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= PAGE 3 ================= */}
      <div className="bg-white shadow-2xl print:shadow-none w-[210mm] h-[297mm] p-[10mm] print:p-[10mm] print:w-screen print:h-screen box-border text-black print-page mb-8 print:mb-0 overflow-auto">
        
        <div className="text-center mb-1">
          <h1 className="text-sm font-bold">Cesarean Section Audit Format - Page 3</h1>
        </div>

        <div className="overflow-x-auto border border-gray-400">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-gray-200 border-b border-gray-400">
                <th className="w-8 px-1 py-1 text-left font-bold border-r border-gray-400">S.No</th>
                <th className="px-2 py-1 text-left font-bold border-r border-gray-400 w-1/3">Details</th>
                <th className="px-2 py-1 text-left font-bold">Response</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top text-xs">I.1</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">Were prophylactic antibiotics given?</td><td className="px-2 py-0.5 text-xs"></td></tr>
              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top text-xs">I.2</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">What was the estimated blood loss?</td><td className="px-2 py-0.5 text-xs"></td></tr>
              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top text-xs">I.3</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">Blood/ component transfusion</td><td className="px-2 py-0.5 text-xs">If so, mention no. of unit</td></tr>
              <tr className="bg-gray-100 border-b border-gray-400"><td colSpan="3" className="px-2 py-1 font-bold text-xs">IV &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In case of previous Caesarean Delivery &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Response</td></tr>

              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top">1</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">Mention the indication and gestation of previous LSCS (start from most recent LSCS)</td><td className="px-2 py-0.5"><div className="space-y-0.5 text-xs"><div><strong>LSCS 1</strong></div><div><strong>LSCS 2</strong></div><div><strong>N/A</strong></div></div></td></tr>
              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top">2</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">Was the mother offered a trial of vaginal delivery during this pregnancy?</td><td className="px-2 py-0.5 text-xs">Yes / No / Not known</td></tr>
              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top">3</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">Post OP complication, if any</td><td className="px-2 py-0.5 text-xs"></td></tr>
              <tr className="bg-gray-100 border-b border-gray-400"><td colSpan="3" className="px-2 py-1 font-bold text-xs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Current status</td></tr>

              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top">4</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">Does this mother require 'special' care post-caesarean section in addition to 'routine' post-op care)?<br /><strong>If 'Yes' where is she being managed currently?</strong></td><td className="px-2 py-0.5"><div className="space-y-1 text-xs"><div>Yes/No</div><div className="mt-1"><div>OPD, HDU/ICU/ICU</div><div>General HDU/ICU</div><div>Referred to another hospital</div></div></div></td></tr>
              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top">5</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">Whether Fetal heart monitoring – Manual/ Electronic was done (tick appropriately)</td><td className="px-2 py-0.5"><div className="space-y-0.5 text-xs"><div>(a) Normal</div><div>(b) Abnormal</div><div>(c) Severely abnormal</div><div>(d) Not done</div></div></td></tr>
              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top">6</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">Whether Meconium-stained liquor present (tick appropriately)</td><td className="px-2 py-0.5"><div className="space-y-0.5 text-xs"><div>(a) Yes</div><div>(b) No</div><div>(c) Not known</div><div>(d) None</div></div></td></tr>
              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top">7</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">Other methods of delivery attempted (tick appropriately)</td><td className="px-2 py-0.5"><div className="space-y-0.5 text-xs"><div>(a) Vacuum</div><div>(b) Forceps</div><div>(c) Ventouse</div></div></td></tr>
              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top">8</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">Delivery outcome (tick appropriately)</td><td className="px-2 py-0.5"><div className="space-y-0.5 text-xs"><div>(a) Livebirth</div><div>(b) Stillbirth</div><div>(c) Abortion</div></div></td></tr>
              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top">9</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">Sex of the baby (tick appropriately)</td><td className="px-2 py-0.5"><div className="space-y-0.5 text-xs"><div>(a) Male</div><div>(b) Female</div><div>(c) Unknown</div></div></td></tr>
              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top">10</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">Birth weight</td><td className="px-2 py-0.5 text-xs">_________ gms</td></tr>
              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top">11</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">Apgar score (tick appropriately)</td><td className="px-2 py-0.5"><div className="space-y-0.5 text-xs"><div>(a) Score at 1 minute_____</div><div>(b) Score at 5 minutes_____</div><div>(c) Not done</div></div></td></tr>
              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top">12</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">Transferred to SNCU/ NICU (tick appropriately)</td><td className="px-2 py-0.5"><div className="space-y-0.5 text-xs"><div>(a) Yes ________ where</div><div>(b) No</div></div></td></tr>
              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top">13</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">Maternal Outcome (tick appropriately)</td><td className="px-2 py-0.5"><div className="space-y-1 text-xs"><label className="flex items-start gap-1"><input type="checkbox" className="mt-0.5" /><span>Stable and in satisfactory condition</span></label><label className="flex items-start gap-1"><input type="checkbox" className="mt-0.5" /><span>Shifted to Obstetric HDU/ICU due to any complications or for close monitoring</span></label><label className="flex items-start gap-1"><input type="checkbox" className="mt-0.5" /><span>Maternal Near miss</span></label><label className="flex items-start gap-1"><input type="checkbox" className="mt-0.5" /><span>Maternal death. Mention cause of death</span></label></div></td></tr>
              <tr className="border-b border-gray-400"><td className="px-1 py-0.5 border-r border-gray-400 text-center align-top">14</td><td className="px-2 py-0.5 border-r border-gray-400 text-xs">Newborn Outcome (tick appropriately)</td><td className="px-2 py-0.5"><div className="space-y-1 text-xs"><label className="flex items-start gap-1"><input type="checkbox" className="mt-0.5" /><span>Stable and in satisfactory condition</span></label><label className="flex items-start gap-1"><input type="checkbox" className="mt-0.5" /><span>Admitted in SNCU due to complications or for close monitoring</span></label><label className="flex items-start gap-1"><input type="checkbox" className="mt-0.5" /><span>Still birth</span></label></div></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= PAGE 4 ================= */}
      <div className="bg-white shadow-2xl print:shadow-none w-[210mm] h-[297mm] p-[10mm] print:p-[10mm] print:w-screen print:h-screen box-border text-black print-page mb-8 print:mb-0 overflow-auto">
        
        <div className="text-center mb-2">
          <h1 className="text-sm font-bold">Cesarean Section Audit Format - Page 4</h1>
        </div>

        {/* Final Table Row */}
        <div className="overflow-x-auto border border-gray-400 mb-4">
          <table className="w-full border-collapse text-xs">
            <tbody>
              <tr className="border-b border-gray-400">
                <td className="w-8 px-1 py-1 border-r border-gray-400 text-center align-top font-bold">15</td>
                <td className="px-2 py-1 border-r border-gray-400 text-xs">
                  Tick appropriately on the need for C section
                </td>
                <td className="px-2 py-1">
                  <div className="space-y-1 text-xs">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-0.5" />
                      <span>Born alive and died (mention cause of death)</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-0.5" />
                      <span>Absolutely essential at that time</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-0.5" />
                      <span>More time could have been given before deciding for CS</span>
                    </label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Signature Section */}
        <div className="mb-4 space-y-3">
          <div className="flex justify-between items-start">
            <div className="w-1/2 pr-4">
              <div className="mb-6 pb-1 border-b border-black"></div>
              <p className="text-xs font-bold">Name and Designation of doctor</p>
              <div className="mt-3 pb-1 border-b border-black"></div>
              <p className="text-xs font-bold">Date</p>
            </div>
            <div className="w-1/2 pl-4">
              <div className="mb-6 pb-1 border-b border-black"></div>
              <p className="text-xs font-bold">Signature with</p>
            </div>
          </div>
        </div>

        {/* Key for Medical Disorders */}
        <div className="mb-3 p-2 border border-gray-400 bg-gray-50">
          <h2 className="text-xs font-bold mb-2">*Key for Medical Disorders:</h2>
          <div className="space-y-0.5 text-xs">
            <div className="flex gap-2"><span className="font-bold w-6">1.</span><span>Heart Disease Complicating pregnancy</span></div>
            <div className="flex gap-2"><span className="font-bold w-6">2.</span><span>Past history of cardiac surgery like valve replacement</span></div>
            <div className="flex gap-2"><span className="font-bold w-6">3.</span><span>Jaundice Complicating pregnancy</span></div>
            <div className="flex gap-2"><span className="font-bold w-6">4.</span><span>Bronchial asthma/COPD</span></div>
            <div className="flex gap-2"><span className="font-bold w-6">5.</span><span>Tuberculosis- pulmonary/extra pulmonary</span></div>
            <div className="flex gap-2"><span className="font-bold w-6">6.</span><span>Known seizure disorder - on treatment/ not on treatment/treatment discontinued</span></div>
            <div className="flex gap-2"><span className="font-bold w-6">7.</span><span>Known hypertensive - on treatment/ not on treatment/treatment discontinued</span></div>
            <div className="flex gap-2"><span className="font-bold w-6">8.</span><span>Known diabetic - on treatment/ not on treatment/treatment discontinued</span></div>
            <div className="flex gap-2"><span className="font-bold w-6">9.</span><span>Chronic renal disease</span></div>
            <div className="flex gap-2"><span className="font-bold w-6">10.</span><span>Anemia other than iron deficiency anemia</span></div>
          </div>
        </div>

        {/* Glossary */}
        <div className="p-2 border border-gray-400 bg-gray-50">
          <h2 className="text-xs font-bold mb-2">Glossary</h2>
          <div className="space-y-1 text-xs">
            <div><span className="font-bold">• Gravida</span><span> denotes a pregnant state both present and past, irrespective of the period of gestation</span></div>
            <div><span className="font-bold">• Parity</span><span> denotes a state of previous pregnancy beyond the period of viability.</span></div>
            <div><span className="font-bold">• Nullipara:</span><span> A nullipara is one who has never completed a pregnancy to the stage of viability. She may or may not have aborted previously</span></div>
            <div><span className="font-bold">• Multipara:</span><span> Multipara is one who has completed two or more pregnancies to the stage of viability or more</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}