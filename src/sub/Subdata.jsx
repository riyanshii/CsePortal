import React, { useState } from "react";
import Fire from "../firebase/Fire";
import { useParams } from "react-router";
import Link from '@mui/material/Link';
import { Grid, Paper, Typography, Button, Card, CardActionArea, CardActions, Box, boxShadow } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Subdata = () => {
    const { sem } = useParams();
    const { sub } = useParams();
    const semm = sem.toString() + " Notes";
    //const semm =  sem.toString() + " Notes";
    const [userDetails, setUserDetails] = useState('')
    Fire.firestore().collection(semm).doc(sub).get()
        .then(snapshot => setUserDetails(snapshot.data()))
    let namee = sub.replace(/_/g,' ');
    let nameee = namee.toUpperCase();
    return (
        <>
            <Typography variant="h4" marginTop={10} marginLeft={60} marginBottom={5}>{nameee}   </Typography>
            <Grid container>
                <Grid item md={6}>
                    <Card sx={{ maxWidth: 345 , marginLeft:"20vw", marginBottom:"6vh"}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://thumbs.dreamstime.com/b/study-notes-message-white-paper-index-cards-pen-desk-211255797.jpg"
                                alt="green iguana"
                            />
                        </CardActionArea>
                        <CardActions>
                         <Link href={userDetails.note}>Notes</Link>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card sx={{ maxWidth: 345 ,marginLeft:"5vw", marginBottom:"6vh"}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg"
                                alt="green iguana"
                            />
                        </CardActionArea>
                        <CardActions>
                        <Link href={userDetails.book}>Books</Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card sx={{ maxWidth: 345 ,marginLeft:"20vw", marginBottom:"6vh"}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://cache.careers360.mobi/media/article_images/2018/04/09/IELTS_Syllabus.jpeg"
                                alt="green iguana"
                            />
                        </CardActionArea>
                        <CardActions>
                        <Link href={userDetails.syllabus}> Syllabus</Link>
                            
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card sx={{ maxWidth: 345 ,marginLeft:"5vw", marginBottom:"6vh"}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eW91dHViZSUyMGxvZ298ZW58MHx8MHx8&w=1000&q=80"
                                alt="green iguana"
                            />
                        </CardActionArea>
                        <CardActions>
                        <Link href={userDetails.reference}>Reference</Link>
                          
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>

        </>

    )
};

export default Subdata;