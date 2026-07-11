import "./dashboardCards.css";

function DashboardCards() {
  return (
    <section className="dashboard-cards">

      <div className="dashboard-card">

        <h2>Create Recipe</h2>

        <p>
          Add a personal or custom recipe to your collection.
        </p>

        <button>Create</button>

      </div>

      <div className="dashboard-card">

        <h2>Save a Recipe</h2>

        <p>
          Bookmark recipes you find inspiring or useful.
        </p>

        <button>Save</button>

      </div>

      <div className="dashboard-card">

        <h2>Add Favorite</h2>

        <p>
          Keep all your favourite recipes in one place.
        </p>

        <button>Add</button>

      </div>

    </section>
  );
}

export default DashboardCards;