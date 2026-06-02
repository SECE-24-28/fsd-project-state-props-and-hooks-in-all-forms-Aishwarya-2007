import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/Doctors.css";
import D1 from "../assets/images/D1.png";
import D2 from "../assets/images/D2.png";
import D3 from "../assets/images/D3.png";
import D4 from "../assets/images/D4.png";
import D5 from "../assets/images/D5.png";
import D6 from "../assets/images/D6.png";
import D7 from "../assets/images/D7.png";
import D8 from "../assets/images/D8.png";
import D9 from "../assets/images/D9.png";
import D10 from "../assets/images/D10.png";
import { Link } from "react-router-dom";

function Doctors() {

    const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    experience: "12 Years",
    image:D10
  },
  {
    id: 2,
    name: "Dr. David Miller",
    specialization: "Neurologist",
    experience: "10 Years",
    image : D9
  },
  {
    id: 3,
    name: "Dr. Emily Wilson",
    specialization: "Orthopedic Surgeon",
    experience: "8 Years",
    image: D5
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    specialization: "Pediatrician",
    experience: "15 Years",
    image: D8
  },
  {
    id: 5,
    name: "Dr. Jennifer Smith",
    specialization: "Dermatologist",
    experience: "9 Years",
    image: D3
  },
  {
    id: 6,
    name: "Dr. Robert Anderson",
    specialization: "Dentist",
    experience: "11 Years",
    image: D7
  },
  {
  id: 7,
  name: "Dr. Sophia Taylor",
  specialization: "ENT Specialist",
  experience: "7 Years",
  image: D1
},
  {
    id: 8,
    name: "Dr. James Wilson",
    specialization: "General Physician",
    experience: "14 Years",
    image: D2
  },
  {
    id: 9,
    name: "Dr. Olivia Martin",
    specialization: "Gynecologist",
    experience: "13 Years",
    image: D4
  },
  {
    id: 10,
    name: "Dr. Daniel Thomas",
    specialization: "Radiologist",
    experience: "10 Years",
    image: D6
  }
];
  return (
    <>
      <Navbar />

      <section className="doctors-hero">
        <div className="container">
          <h1>Our Doctors</h1>
          <p className="lead">
            Meet our experienced healthcare professionals.
          </p>
        </div>
      </section>

      <section className="container py-5">

        <div className="row g-4">

          {doctors.map((doctor) => (
            <div className="col-md-3" key={doctor.id}>

              <div className="card doctor-card">

                <img
                  src={doctor.image}
                  className="card-img-top"
                  alt={doctor.name}
                />

                <div className="card-body text-center">

                  <h5>{doctor.name}</h5>

                  <p className="text-primary">
                    {doctor.specialization}
                  </p>

                  <p>
                    Experience: {doctor.experience}
                  </p>

                  <Link
  to="/appointment"
  className="btn btn-primary"
>
  Book Appointment
</Link>
                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Doctors;