import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Fire from "../firebase/Fire"
import { Paper, Box, Grid, Typography, Button } from "@mui/material";
import { minHeight } from "@mui/system";
const Blogdata = () =>{
    const {blogid} = useParams();

    const [userDetails, setUserDetails] = useState('')
    Fire.firestore().collection("blog_data").doc(blogid).get()
        .then(snapshot => setUserDetails(snapshot.data()));

        return(
            <>
                
            {/* <Paper sx={{boxShadow:6,marginLeft:8, marginRight:10 }}> */}
                <Box sx={{ marginTop:6,marginLeft:13, marginRight:10 }}>
                <Typography variant="h3" gutterBottom  marginLeft="26vw" marginBottom="6vh">{userDetails.title} </Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={9}>
                    <Typography variant="h6" marginRight="4vw">
                    {userDetails.description}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Paper sx={{boxShadow:6 ,minHeight:"15svh", marginTop:"10vh"}}>
                    <Typography paddingLeft= "5vw" marginRight="2vw" paddingTop="8vh">Name : {userDetails.name}</Typography>
                    <Typography paddingLeft= "6vw" marginRight="2vw" paddingBottom="8vh" ><Button variant="text" href={userDetails.linkedin}target="_blank"> Profile</Button></Typography>
                    {/* <Button variant="text" href={userDetails.linkedin}target="_blank"
                    style={{marginLeft:"2vw", marginRight:"2vw"}} >
                       Profile
                    </Button> */}
                    </Paper>

                </Grid>
            </Grid>
                </Box>
            {/* </Paper> */}
                
            </>
        )
};

export default Blogdata;