import { useState, useEffect, useParams} from 'react'
import stayFitDataService from '../services/stayFitDataService';
import Exercise from './Exercises'


const ExerciseDetail = () =>{

    const {id} = useParams();
    const [exercise, setExercise] = useState([]);
    // console.log(exercises);
    useEffect(() => {
      retrieveExercises();
    }, []);

    const retrieveExercises = async () => {
      await stayFitDataService
        .getExerciseById(id)
        .then((response) => {
          console.log(response.data);
          setExercise(response.data);
        })
        .catch((e) => {
          console.log("error is: ");
          console.log(e);
        });
    }
} 
export default ExerciseDetail;