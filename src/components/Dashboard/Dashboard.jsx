import { Header, Sidebar, DashboardContent } from "../../components";

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row ">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
};
