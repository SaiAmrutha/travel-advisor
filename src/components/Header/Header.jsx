import { AppBar, Box, InputBase, Toolbar, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@react-google-maps/api";
import React, { useState } from "react";

import useStyles from "./styles.js";

const Header = ({ setCoordinates }) => {
  // const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    // if (autocomplete) {
    //   const place = autocomplete.getPlace();
    //   if (place && place.geometry && place.geometry.location) {
    const lat = autocomplete.getPlace().geometry.location.lat();
    // const lat = place.geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    // const lng = place.geometry.location.lng();
    setCoordinates({ lat, lng });
    // }
    // }
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
