import "../../assets/styles/ManageServices.css";

function ManageServices() {
  return (
    <div className="services-container">

      <h2 className="page-title">Manage Services</h2>

      <div className="services-grid">

        <div className="service-card">
          <h3>Emergency Care</h3>
          <p>24/7 emergency medical services</p>
          <button className="edit-btn">Edit</button>
        </div>

        <div className="service-card">
          <h3>Cardiology</h3>
          <p>Heart-related treatments and surgeries</p>
          <button className="edit-btn">Edit</button>
        </div>

        <div className="service-card">
          <h3>Neurology</h3>
          <p>Brain and nervous system care</p>
          <button className="edit-btn">Edit</button>
        </div>

      </div>

    </div>
  );
}

export default ManageServices;