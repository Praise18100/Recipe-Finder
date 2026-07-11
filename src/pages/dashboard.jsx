
import logo from "../assets/logo.png";
import tomaotoe from "../assets/tomatoe.png"
import bread from "../assets/bread.png"
function Dashboard() {
  const recipes = [
    {
      image: tomaotoe,
      title: "Spring Tomato",
      description:
        "Fresh tomatoes with herbs and vegetables for a healthy homemade meal.",
      benefit:
        "Rich in Vitamin C and antioxidants that strengthen immunity and improve skin health.",
    },
    {
      image: bread,
      title: "Bread and Butter",
      description:
        "A light breakfast option that's quick, filling, and satisfying.",
      benefit:
        "Provides energy for the day and can be paired with healthy proteins or fruits.",
    },
  ];
  return (
    <div className="dashboard">

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

      {/* Cards */}
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


        {/* food items */}
       <section className="recipe-list">

          {recipes.map((recipe, index) => (

            <div className="recipe-item" key={index}>

              <img src={recipe.image} alt={recipe.title} />

              <div className="recipe-info">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </div>

              <div className="recipe-benefit">
                <h3>Health Benefit</h3>
                <p>{recipe.benefit}</p>
              </div>

            </div>

          ))}

    </section>

    </div>
  );
}

export default Dashboard;
