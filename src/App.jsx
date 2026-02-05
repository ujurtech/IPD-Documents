import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AnesthesiaNote from './components/anesthesia.jsx'
import BabyTicket from './components/babyTicket.jsx'
import OTNote from './components/otNotes.jsx'
import MotherNote from './components/motherNote.jsx'
import BabyNote from './components/babyNote.jsx'
import BabyTempChart from './components/babyTemp.jsx'
import BedHeadTicket from './components/bed.jsx'
import MaternityCaseSheet from './components/babyTemp.jsx'
import PatientRecordChart from './components/patientRecord.jsx'
import SisterNote from './components/sisterNote.jsx'
import InputOutputChart from './components/inputOutput.jsx'
import CesareanSectionAudit from './components/audit.jsx'
import PrescriptionPad from './components/prescription.jsx'



function App() {


  return (
    <>
      <div className="App">

        <Routes>
          <Route path="/" element={<Navigate to="/bedHeadTicket" replace />} />
          <Route path="/anesthesia" element={<AnesthesiaNote />} />
          <Route path="/babyTicket" element={<BabyTicket />} />
          <Route path="/otNotes" element={<OTNote />} />
          <Route path="/motherNote" element={<MotherNote />} />
          <Route path="/babyNote" element={<BabyNote />} />
          <Route path="/babyTempChart" element={<BabyTempChart />} />
          <Route path="/bedHeadTicket" element={<BedHeadTicket />} />
          <Route path="/maternityCaseSheet" element={<MaternityCaseSheet />} />
          <Route path="/patientRecordChart" element={<PatientRecordChart />} />
          <Route path="/sisterNote" element={<SisterNote />} />
          <Route path="/inputOutputChart" element={<InputOutputChart />} />
          <Route path="/cesareanSectionAudit" element={<CesareanSectionAudit />} />
          <Route path="/prescription" element={<PrescriptionPad />} />

        </Routes>
      </div>
    </>
  )
}

export default App
