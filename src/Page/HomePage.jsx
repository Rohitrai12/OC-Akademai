import React from "react";
import Banner from "../Components/Banner";
import RegisterOpen from "../Components/RegisterOpen";
import Meet from "../Components/Meet";
import WhoeWeHelp from "../Components/WhoeWeHelp";
import JoinCommunity from "../Components/JoinCommunity";
import OurAward from "../Components/OurAward";
import Crafting from "../Components/Crafting";
import Ready from "../Components/Ready";

const HomePage = () => {
    return (
    <div>
      <Banner />
      <RegisterOpen />
      <Meet />
      <WhoeWeHelp />
      <JoinCommunity />
      <OurAward />
      <Crafting />
      <Ready />
       
    </div>
    );
  };
  
  export default HomePage;
  