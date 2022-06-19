import { useState, useEffect } from 'react'
import ResponsiveAppBar from './Navbar'
import stayFitDataService from '../services/stayFitDataService'
import BasicMenu from './ClientDropdownMenu'


const TrainerDashboard = () => {


  return (
    <div className="trainerDashboard">
      <ResponsiveAppBar />
      <BasicMenu />
    </div> 
  );
}

export default TrainerDashboard;

