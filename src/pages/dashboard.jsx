import DashboardHeader from "../components/dashboard/dashboardHeader";
import DashboardCards from "../components/dashboard/dashboardCards";
import RecipeItem from "../components/dashboard/recipeItem";

function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <DashboardCards />
      <RecipeItem />
    </div>
  );
}

export default Dashboard;