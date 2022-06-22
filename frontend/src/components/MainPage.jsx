import ResponsiveAppBar from "./Navbar";
import BottomAppBar from "./Footer";
import Announcements from "./AnnouncementBar";
import SponsorBar from "./SponsorBar"
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