import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Fire from "../firebase/Fire"
import { Paper, Box, Typography, TextField, Grid, FormControlLabel, FormControl, RadioGroup, Radio, Select, FormLabel, MenuItem, Button, InputLabel} from "@mui/material";
import { makeStyles } from "@mui/styles";

const Interviewform = () => {
    const [user, setUser] = useState({});
    const [roundsField, setRoundsField] = useState(null);
    const [noOfRounds,setNoofRounds] = useState('');
    const [roundsArr,setRoundsArr] = useState([])
    const navigate = useNavigate();

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value })
    };

    const getRoundWiseUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setRoundsArr((roundsArr) => [
            ...roundsArr,
            event.target.value,
          ])
        // if(user.rounds === 0) {
        //     setRoundsArr((roundsArr) => [
        //         ...roundsArr,
        //         event.target.value,
        //       ])
        //     //setUser({...user, rounds: roundsArr});
        // } else {
        //     const roundsArr = user.rounds;
        //      roundsArr.push(value);
        //     //setUser({...user, rounds: roundsArr});
        // }
    }

    const getUserDataAndSetRounds = (event) => {
        name = event.target.name;
        value = event.target.value;
       console.log(name,value);

        const compToRender = [];
       let tempNum = event.target.value;
       setNoofRounds(tempNum);
      for(let num = 0; num < tempNum; num+=1) {
            compToRender.push(<Grid item>
                <TextField
                    id="standard-basic"
                    key={num}
                    variant="standard"
                    label={`Interview Round ${num+1}`}
                    type="text"
                    placeholder="Interview round details"
                    onChange={getRoundWiseUserData}
                    name="rounds"
                    multiline
                    rows={3}
                    maxRows = {10}
                    fullWidth
                    required
                />
            </Grid>);
      }
      console.log(compToRender.length);
      setRoundsField(compToRender);
      //setUser({ ...user, [name]: value });
    }

    let res = false;
    const postData = async (e) => {
        e.preventDefault();

        
        const { name, branch, year, role, company, job, profile, linkedin, noOfRounds, roundsArr, tips } = user;

        if ((name && branch && year && role && company && profile && linkedin && noOfRounds && roundsArr && tips)) {
            let reslink = String(company) + "-" + String(job)
            Fire.firestore().collection(reslink).add({
                name, 
                branch, 
                year, 
                role, 
                profile, 
                linkedin, 
                noOfRounds, 
                roundsArr, 
                tips
            });
            res = true;
        }
        if (res) {
            setUser({});
            // <Alert severity="success">Thanks for filling Form</Alert>
            alert("Thanks for filling Form");
            navigate('/');
        }
        else {
            // <Alert severity="error">Please fill All required fields</Alert>
            alert('Please fill All required fields');
        }

    };

    const useStyles = makeStyles(theme => ({
        formStyling: {
            backgroundColor: "#fafafa",
            marginTop:"5vh"
        },
    }));

    const classes = useStyles();
    
    return (
        <>
        <div className={classes.formStyling}>
            
        <Paper component={Box} width="80%" mx="auto" p={4}>
                <Typography variant="h4" align="center" gutterBottom >Add Your Experience </Typography>

                <form onSubmit={postData}>
                    <Grid >
                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                name="name"
                                label="Name"
                                type="text"
                                value={user.name}
                                placeholder="Enter Your Name"
                                onChange={getUserData}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                name="branch"
                                label="Branch"
                                type="text"
                                value={user.branch}
                                placeholder="Enter Your Branch"
                                onChange={getUserData}
                                fullWidth
                                required
                              
                            />
                        </Grid>

                        <Grid item>
                            <FormControl>
                                <FormLabel>Your Year </FormLabel>
                                <RadioGroup
                                    name="year"
                                    value={user.year}
                                    onChange={getUserData}
                                    row
                                    required
                                  
                                >
                                    <FormControlLabel
                                        key="2nd Year"
                                        value="2nd Year"
                                        control={<Radio size="small" />}
                                        label="2nd Year"
                                    />
                                    <FormControlLabel
                                        key="3rd Year"
                                        value="3rd Year"
                                        control={<Radio size="small" />}
                                        label="3rd Year"
                                    />
                                    <FormControlLabel
                                        key="Final Year"
                                        value="Final Year"
                                        control={<Radio size="small" />}
                                        label="Final Year"
                                    />
                                    <FormControlLabel
                                        key="Passout"
                                        value="Passout"
                                        control={<Radio size="small" />}
                                        label="Passout"
                                    />
                                </RadioGroup>
                            </FormControl>

                        </Grid>
                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                name="role"
                                label="Role"
                                type="text"
                                value={user.role}
                                placeholder="Enter Your Role"
                                onChange={getUserData}
                                fullWidth
                                required
                              
                            />
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <FormLabel>Job Type</FormLabel>
                                <RadioGroup
                                    name="job"
                                    value={user.job}
                                    onChange={getUserData}
                                    row
                                    required
                                >
                                    <FormControlLabel
                                        key="intern"
                                        value="intern"
                                        control={<Radio size="small" />}
                                        label="Internship"
                                    />
                                    <FormControlLabel
                                        key="placement"
                                        value="placement"
                                        control={<Radio size="small" />}
                                        label="Placement"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <FormControl fullWidth>
                                <InputLabel > Company</InputLabel>
                                <Select
                                    name="company"
                                    value={user.company}
                                    onChange={getUserData}
                                    label="Selct Company"
                                    required
                                >
                                    <MenuItem key="microsoft" value="microsoft">
                                        Microsoft
                                    </MenuItem>
                                    <MenuItem key="amazon" value="amazon">
                                        Amazon
                                    </MenuItem>
                                    <MenuItem key="deshaw " value="deshaw">
                                        De Shaw
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>


                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                label="Profile"
                                type="text"

                                placeholder="Enter Your Job Profile"
                                name="profile"
                                value={user.profile}
                                onChange={getUserData}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                label="linkedin Profile"
                                type="url"

                                placeholder="Enter Your Linkedein Profile"
                                name="linkedin"
                                value={user.linkedin}
                                onChange={getUserData}
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                label="No of Rounds"
                                placeholder="No of Rounds"
                                name="noOfRounds"
                                value={noOfRounds}
                                onChange={getUserDataAndSetRounds}
                                fullWidth
                                required
                            />
                        </Grid>
                        {
                            roundsField
                        }
                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                label="Suggestion for others"
                                type="text"
                                placeholder="Suggestion"
                                value={user.tips}
                                onChange={getUserData}
                                name="tips"
                                multiline
                                rows={3}
                                maxRows = {10}
                                fullWidth
                                required
                            />
                        </Grid>

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            mt={1}
                            >
                            Submit
                        </Button>
                    </Grid>
                </form>

            </Paper>
        </div>
            
        </>
    );
};

export default Interviewform;