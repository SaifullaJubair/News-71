import DashboardSideBar from "../../Shared/DashboardSideBar/DashboardSideBar";

const Dashboard = () => {
    return (
        <div className="max-w-[1440px] w-[95%] mx-auto flex gap-6 mt-7">
            <DashboardSideBar></DashboardSideBar>
            <h2 className="text-2xl font-bold flex-grow text-center">Welcome to Dashboard</h2>
        </div>
    );
};

export default Dashboard;