import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/Aboutpage'
import ContactPage from './pages/Contactpage'
import Servicespage from './pages/Servicespage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PaquetesPage from './pages/PaquetesPage'
import CoberturaPage from './pages/CoberturaPage'
import PagoOnlinePage from './pages/PagoOnlinePage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/nosotros" element={<AboutPage/>} />
      <Route path="/servicios" element={<Servicespage/>} />
      <Route path="/contacto" element={<ContactPage/>} />
      <Route path="*" element={<HomePage/>} />
      <Route path="/paquetes" element={<PaquetesPage/>} />
      <Route path="/cobertura" element={<CoberturaPage/>} />
      <Route path="/pago-online" element={<PagoOnlinePage/>} />
      
      <Route path="/openpay" element={<CheckoutPage/>} />
      
    </Routes>
    <Footer/>
  </BrowserRouter>
   
)
