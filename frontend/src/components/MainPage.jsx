import ResponsiveAppBar from "./Navbar";
import BottomAppBar from "./Footer";
import ExerciseList from "./Exercises";
import RegisterTrainer from "./RegisterTrainer";
import RegisterUser from "./RegisterUser";
import Announcements from "./AnnouncementBar";
import SponsorBar from "./SponsorBar";

const MainPage = () => {
    return (  
      <div className="mainpage">
          <ResponsiveAppBar/>
          <Announcements/>
          <SponsorBar/>
      </div>
    );
}
 
export default MainPage;