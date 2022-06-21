import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Button  from "@mui/material/Button";
import Intro from "./Intro";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Delete from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom';
import benchPress from '../assets/images/benchPress.jpg';
import stretchGirl from '../assets/images/stretchGirl.jpeg'
import groupFitness from '../assets/images/groupFitness.jpg'
import trainerPic from '../assets/images/trainerPic.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function LandingPage(props) {
    var items = [
        {
            name: "Bench Press",
            description: "Learn proper technique & form!",
            image: stretchGirl,
        },
        {
            name: "Pull ups",
            description: "Select from a vast array of exercises, stretches, and breathing activities!",
            image: "https://www.trainheroic.com/wp-content/uploads/2021/11/Pull-up.jpg",
        },
        {
            name: "Squats",
            description: "Connect with our trainers, schedule workouts, follow incentive plans!",
            image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/young-woman-doing-squats-on-a-road-at-sunset-royalty-free-image-1645654296.jpg",
        },
        {
            name: "Follow & track your vital signs",
            description: "Track, and log vital signs to share with health care professionals to optimize and empower users!",
            image: "https://agurgentcare.com/wp-content/uploads/2021/04/what-are-normal-vitals.jpeg",
        }, 
        {
          name: "Hello new users!",
          description: "StayFit would like to welcome all new users! We look forward to helping you stay motivated, stay moving, and stayFit!",
          image: stretchGirl
      },
      {
          name: "Bring a friend!",
          description: "Did you know that working out with friends can be a fun way to StayFit?",
          image: groupFitness,
      },
      {
        name: "Need some help?",
        description: "New to the fitness scene or need some more peronalized workouts? Our trainers here at StayFit can help you reach your fitness goals",
        image: trainerPic,
    },
    ]

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      lazyLoad: 'progressive'
    };

    return (
      <>
        <Slider {...settings}>
        {
            items.map( (item, i) => <Item key={i} item={item} />  )
        }
        </Slider>
        <Intro/>
        </>
    )
}
    function Item(props) {

        return (
        <div className="landingPage">
          <div style={{position: 'relative'}}>
            <h1 style={{textAlign: "center", color:"#0b4c8a"}}>StayFit <FitnessCenterIcon style={{color:"#0b4c8a"}}/></h1>
            <Paper style={{marginRight: '15%', marginLeft: '15%'}}>
            <h2 style={{
              position: 'absolute',
              width: '75%',
              textAlign: 'center',
              color: 'white',
              textShadow: '1px 1px rgba(0,0,0,0.5)',
              top: 49,
              left: '50%',
              transform: 'translate(-50%)'
            }}>{props.item.name}</h2>
            <h3 style={{
              position: 'absolute',
              width: '75%',
              textAlign: 'center',
              color: 'white',
              textShadow: '1.5px 1.5px rgba(0,0,0,0.6)',
              bottom: 185,
              left: '50%',
              transform: 'translate(-50%)',
              '@media (maxWidth: 400px)': {}
            }}>{props.item.description}</h3>
            <img alt="images" loading="eager"  style={{objectFit:"cover", display:"block", height:"100%", maxheight:"300px", width:"100%", overflow:"hidden"}}   src={props.item.image}></img>
            </Paper>                     
            <div style={{margin: 'auto', textAlign: 'center'}}>
              <Link to="/mainpage" style={{display: 'inline-block', textDecoration: "none"}}>
                <Button className="CheckButton" variant="contained" style={{marginTop: "10px"}}>Enter!</Button>
              </Link>
              <Link to="/userlogin" style={{display: 'block', textDecoration: "none"}}>
                <Button className="CheckButton" variant="textd" style={{marginTop: "10px"}}>Login</Button>
              </Link>
            </div>
            
          </div>
      </div>
    );
};

export default LandingPage;
