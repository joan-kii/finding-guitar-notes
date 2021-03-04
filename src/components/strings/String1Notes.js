import React, { useContext, useState } from 'react';
/* import { ExercisesContext } from '../Exercises'; */
import Fretboard from '../Fretboard';
import Infozone from '../Infozone';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const String1Notes = () => {
  const [noteChoices, setNoteChoices] = useState(null);

  /* const { exercises } = useContext(ExercisesContext); */

  const handleFretClick = (event) => {

    setAnchorEl(event.currentTarget);

    if (event.target.parentNode.classList.contains('string1')) {
      setNoteChoices(
        <Menu 
          id='noteChoices'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>C</MenuItem>
            <MenuItem onClick={handleClose}>D</MenuItem>
            <MenuItem onClick={handleClose}>F</MenuItem>
        </Menu>);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = useState(
    <Menu 
      id='noteChoices'
      keepMounted
      onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>C</MenuItem>
        <MenuItem onClick={handleClose}>D</MenuItem>
        <MenuItem onClick={handleClose}>F</MenuItem>
    </Menu>);

  

  return (
    <div>
      <Fretboard 
        stringSelected='1' 
        handleFretClick={handleFretClick}
        noteChoices={noteChoices} />
      <Infozone />
    </div>
  );
}; 

export default String1Notes;