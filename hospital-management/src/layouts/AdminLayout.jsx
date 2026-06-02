import Sidebar from "../components/Sidebar";

function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div style={{ marginLeft: "220px", width: "100%", padding: "20px" }}>
        {children}
      </div>

    </div>
  );
}

export default AdminLayout;