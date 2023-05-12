import React from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardActions, CardContent, CardActionArea, Button, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
const Experiencelist = (props) => {

    const useStyles = makeStyles((theme) => ({
        exper: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(25),
            marginRight: theme.spacing(30),
            marginBottom: theme.spacing(1),


        },
    }));

    const styles = useStyles();
    return (
        <>
            <Card className={styles.exper} sx={{ boxShadow: 6 }}>
                {/* <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name} experience
                        </Typography>
                    </CardContent>
                </CardActionArea> */}
                <CardActions>
                    <Button size="large" component={Link} to={props.linkedto} fullWidth> {props.name} experience</Button>
                </CardActions>
            </Card>

        </>
    )
};

export default Experiencelist;