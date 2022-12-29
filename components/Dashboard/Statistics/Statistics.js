import DashboardSideBar from "../../Shared/DashboardSideBar/DashboardSideBar";

const Statistics = () => {
    return (
        <div className='max-w-[1440px] w-[95%] mx-auto flex gap-6 mt-[100px]'>
            <div>
                <DashboardSideBar></DashboardSideBar>
            </div>
            <div>
                <h2>Statistics</h2>
            </div>
        </div>
    );
};

export default Statistics;