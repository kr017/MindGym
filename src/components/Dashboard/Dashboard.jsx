import { Header, Sidebar, CategoriesList } from "../../components";

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row ">
        <Sidebar />
        <CategoriesList />
      </div>
    </div>
  );
};
