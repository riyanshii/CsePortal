import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Fire from "../firebase/Fire";
import { Paper, Box, Grid, Typography, Button, Link,
    Divider,
    List,
    ListItem,
    ListItemText } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    margin: 'auto',
    padding: theme.spacing(2),
    backgroundColor: '#f4f4f4',
    boxShadow: 'none',
    marginTop: theme.spacing(5),
    paddingTop:theme.spacing(5),
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1)
  },
  field: {
    marginBottom: theme.spacing(1)
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

function InterviewExperience(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Interview Experience
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" className={classes.field}>Branch: {props.interviewExperience.branch} </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* s<Typography variant="subtitle1" className={classes.field}>LinkedIn Profile:</Typography> */}
          <Typography variant="body1">
            <Link href={props.interviewExperience.linkedin} target="_blank" rel="noreferrer">
            LinkedIn Profile
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" className={classes.field}>Name: {props.interviewExperience.name}</Typography>
          {/* <Typography variant="body1">{props.interviewExperience.name}</Typography> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" className={classes.field}>No. of Rounds:{props.interviewExperience.no_of_rounds}</Typography>
          {/* <Typography variant="body1">{props.interviewExperience.no_of_rounds}</Typography> */}
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <Typography variant="subtitle1" className={classes.field}>Profile:</Typography> */}
          <Typography variant="body1">
            <Link href={props.interviewExperience.profile} target="_blank" rel="noreferrer">
            Profile
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" className={classes.field}>Role:{props.interviewExperience.role}</Typography>
          {/* <Typography variant="body1">{props.interviewExperience.role}</Typography> */}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.field}>Rounds:</Typography>
          <List dense>
            {props.interviewExperience.rounds.map((round, index) => (
              <ListItem key={index} className={classes.listItem}>
              <Typography variant="subtitle1">Round {index + 1}</Typography>
                <ListItemText primary={round} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.field}>Tips:</Typography>
          <Typography variant="body1">{props.interviewExperience.tips}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.field}>Year</Typography>
        </Grid>
      </Grid>
    </Paper>
)}

const Showexperience = () => {
    const { iid } = useParams();
    const { id } = useParams();
    const { ip } = useParams();
    var collect = id.toString() + "-" + ip.toString();

    const [userDetails, setUserDetails] = useState(null);
    
    useEffect(() => {
        Fire.firestore().collection(collect).doc(iid).get()
        .then(snapshot => {
            setUserDetails(<InterviewExperience interviewExperience={snapshot.data()} />);
        });
    }, []);
    

    return (userDetails);
};

export default Showexperience;
