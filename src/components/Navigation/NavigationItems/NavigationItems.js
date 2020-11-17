import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Home
    </NavigationItem>
    <NavigationItem link="/index">Interaction</NavigationItem>
    <NavigationItem link="/aboutus">About Us</NavigationItem>
    <NavigationItem link="/affliationsevents">Affliations Events</NavigationItem>
    <NavigationItem link="/analytics">Analytics</NavigationItem>
    <NavigationItem link="/knowledgestudio">Knowledge Studio</NavigationItem>
    <NavigationItem link="/pricing">Pricing</NavigationItem>
  </ul>
);

export default navigationItems;
