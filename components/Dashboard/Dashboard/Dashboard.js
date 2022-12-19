import AddNews from "../AddNews/AddNews";
import AllNews from "../AllNews/AllNews";
import AllUsers from "../AllUsers/AllUsers";
import Categories from "../Categories/Categories";
import Statistics from "../Statistics/Statistics";

const Dashboard = () => {
    return (
        <div>
            <Statistics></Statistics>
            <AllNews></AllNews>
            <AddNews></AddNews>         
            <Categories></Categories>
            <AllUsers></AllUsers>
        </div>
    );
};

export default Dashboard;