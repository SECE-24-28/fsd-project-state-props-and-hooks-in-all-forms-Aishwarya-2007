import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🌐 Layouts
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminLayout from "./pages/admin/AdminLayout";
import AddDoctor from "./pages/admin/AddDoctor";
import AddPatient from "./pages/admin/AddPatient";
import EditPatient from "./pages/admin/EditPatient";
import EditDoctor from "./pages/admin/EditDoctor";

import AddAppointment from "./pages/admin/AddAppointment";
import EditAppointment from "./pages/admin/EditAppointment";

import AdminProfile from "./pages/admin/AdminProfile";
import DashboardCharts from "./pages/admin/DashboardCharts";
import Reports from "./pages/admin/Reports";
import Settings from "./pages/admin/Settings";
import AdminLogout from "./pages/admin/AdminLogout";


// Public Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import ManageDoctors from "./pages/admin/ManageDoctors";
import ManagePatients from "./pages/admin/ManagePatients";
import ManageAppointments from "./pages/admin/ManageAppointments";
import ManageServices from "./pages/admin/ManageServices";

function App() {
  return (
    <BrowserRouter>
      {/* 🌐 PUBLIC NAVBAR */}
      

      <Routes>
        {/* 🏠 PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        {/* 🔐 ADMIN LOGIN (NO SIDEBAR) */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* 🏥 ADMIN PANEL (WITH SIDEBAR LAYOUT) */}
        <Route
          path="/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />

        <Route
          path="/managedoctors"
          element={
          <AdminLayout>
              <ManageDoctors />
            </AdminLayout>
          }
        />

        <Route
          path="/managepatients"
          element={
            
              <ManagePatients />
           
          }
        />

        <Route
          path="/manageappointments"
          element={
            
              <ManageAppointments />
            
          }
        />

        <Route
          path="/manageservices"
          element={
            
              <ManageServices />
            
          }
        />

<Route
  path="/adddoctor"
  element={<AddDoctor />}
 />

<Route
  path="/addpatient"
  element={<AddPatient />}
/>

<Route
  path="/editpatient/:id"
  element={<EditPatient />}
/>

<Route
  path="/managedoctors"
  element={<ManageDoctors />}
/>

<Route 
path="/adddoctor" 
element={<AddDoctor />} />

<Route
  path="/editdoctor/:id"
  element={<EditDoctor />}
/>

<Route
  path="/addappointment"
  element={<AddAppointment />}
/>

<Route
  path="/editappointment/:id"
  element={<EditAppointment />}
/>

<Route
  path="/adminprofile"
  element={<AdminProfile />}
/>

<Route
  path="/dashboardcharts"
  element={<DashboardCharts />}
/>


<Route
  path="/reports"
  element={<Reports />}
/>


<Route
  path="/settings"
  element={<Settings />}
/>

<Route
  path="/adminlogout"
  element={<AdminLogout />}
/>

        {/* ❌ 404 PAGE */}
        <Route
          path="*"
          element={
            <div className="container text-center mt-5">
              <h1>404</h1>
              <h3>Page Not Found</h3>
            </div>
          }
        />
      </Routes>

      {/* 🌐 FOOTER (PUBLIC ONLY STYLE - optional) */}
    
    </BrowserRouter>
  );
}

export default App;
