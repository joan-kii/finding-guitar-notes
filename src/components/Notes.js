import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  buttonsGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  selectString: {
    color: theme.palette.common.white,
    padding: theme.spacing(12, 0, 12),
    fontSize: 32,
  },
}));

const Notes = () => {

  const classes = useStyles();

  return (
    <div className={classes.buttonsGrid}>
      <div className={classes.selectString}>
        <Container maxWidth='sm'>
          <Typography component='h3' variant='h4' align='center'>
            Select a string
          </Typography>
        </Container>
      </div>
      <Grid>
        <Button variant='contained'>
          String 1
        </Button>
        <Button variant='contained'>
          String 2
        </Button>
        <Button variant='contained'>
          String 3
        </Button>
        <Button variant='contained'>
          String 4
        </Button>
        <Button variant='contained'>
          String 5
        </Button>
        <Button variant='contained'>
          String 6
        </Button>
      </Grid>
    </div>
  );
}; 

export default Notes;