import React from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Typography, Button, Card, CardActions,Box,boxShadow } from "@mui/material";
const Subject = () => {
    return (
        <>
            <Typography variant="h4" marginTop={10} marginLeft={69} marginBottom={5}>SEMESTERS</Typography>
            <Grid container>
                <Grid item md={6}>
                <Box margin={'auto'}>
                    <Card sx={{ boxshadow: 6, marginTop: 3, marginLeft: 10, marginRight: 5}} >
                        <CardActions>
                           
                            <Button size="large" component={Link} to="sem1" fullWidth>
                                Semester 1
                            </Button>
                           
                        </CardActions>
                    </Card>
                    </Box>
                </Grid>

                <Grid item md={6}>
                    <Card sx={{  boxshadow: 6, marginTop: 3, marginLeft: 5, marginRight: 10}} >
                        <CardActions>
                            <Box margin={'auto'}>
                            <Button size="large" component={Link} to="sem2" fullWidth>
                                Semester 2
                            </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card sx={{  boxshadow: 6, marginTop: 3, marginLeft: 10, marginRight: 5}} >
                        <CardActions>
                            <Box margin={'auto'}>
                            <Button size="large" component={Link} to="sem3" fullWidth>
                                Semester 3
                            </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card sx={{  boxshadow: 6, marginTop: 3, marginLeft: 5, marginRight: 10}} >
                        <CardActions>
                            <Box margin={'auto'}>
                            <Button size="large" component={Link} to="sem4" fullWidth>
                                Semester 4
                            </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card sx={{  boxshadow: 6, marginTop: 3, marginLeft: 10, marginRight: 5}} >
                        <CardActions>
                            <Box margin={'auto'}>
                            <Button size="large" component={Link} to="sem5" fullWidth>
                                Semester 5
                            </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card sx={{  boxshadow: 6, marginTop: 3, marginLeft: 5, marginRight: 10}} >
                        <CardActions>
                            <Box margin={'auto'}>
                            <Button size="large" component={Link} to="sem6" fullWidth>
                                Semester 6
                            </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card sx={{  boxshadow: 6, marginTop: 3, marginLeft: 10, marginRight: 5}} >
                        <CardActions>
                            <Box margin={'auto'}>
                            <Button size="large" component={Link} to="sem7" fullWidth>
                                Semester 7
                            </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card sx={{  boxshadow: 6, marginTop: 3, marginLeft: 5, marginRight: 10}} >
                        <CardActions>
                            <Box margin={'auto'}>
                            <Button size="large" component={Link} to="Sem-8" fullWidth>
                                Semester 8
                            </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </>
    )
};

export default Subject;