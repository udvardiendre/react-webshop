import Products from "./Product";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="webshop">Webshop</h1>
      <input placeholder="Search for products" />
      <Products />
    </div>
  );
}

export default Dashboard;
