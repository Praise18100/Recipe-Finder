import "./dashboardHeader.css";
import logo from "../../assets/logo.png";

function DashboardHeader() {
  return (
    <>
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-user">
          <img src={logo} alt="Recipe Finder" />

          <h2>John Doe</h2>
        </div>

        <button className="logout-btn">
          Sign Out
        </button>
      </header>

      {/* Search */}
      <section className="dashboard-search">
        <input
          type="text"
          placeholder="Search for recipe"
        />

        <button>
          Find Here
        </button>
      </section>
    </>
  );
}

export default DashboardHeader;