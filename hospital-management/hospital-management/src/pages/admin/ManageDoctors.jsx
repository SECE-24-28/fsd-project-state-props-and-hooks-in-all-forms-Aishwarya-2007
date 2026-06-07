import "../../assets/styles/ManageDoctors.css";
import { Link } from "react-router-dom";

function ManageDoctors() {

  const doctors = [
    { id: 1, name: "Dr. Emily Carter", specialty: "Cardiologist" },
    { id: 2, name: "Dr. Michael Smith", specialty: "Neurologist" },
    { id: 3, name: "Dr. Olivia Wilson", specialty: "Pediatrician" },
    { id: 4, name: "Dr. James Brown", specialty: "Orthopedic" },
    { id: 5, name: "Dr. Sophia Davis", specialty: "Dermatologist" },
    { id: 6, name: "Dr. William Taylor", specialty: "ENT Specialist" },
    { id: 7, name: "Dr. Ava Anderson", specialty: "Gynecologist" },
    { id: 8, name: "Dr. Benjamin Thomas", specialty: "Psychiatrist" },
    { id: 9, name: "Dr. Charlotte Moore", specialty: "Oncologist" },
    { id: 10, name: "Dr. Henry Martin", specialty: "General Physician" }
  ];

  return (
    <div className="manage-container">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Doctors</h2>

        <Link
  to="/add-doctor"
  className="btn btn-success"
>
  + Add Doctor
</Link>
      </div>

      <table className="table table-bordered table-hover bg-white">

        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Doctor Name</th>
            <th>Specialization</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>

              <td>
                <button className="btn btn-warning btn-sm me-2">
                  Edit
                </button>

                <button className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default ManageDoctors;