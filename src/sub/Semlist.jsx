import React from "react";
import { Link } from "react-router-dom";
import { CardContent, Typography, Button, Card, CardActions, } from "@mui/material";
const Semlist = (props) => {
    let namee = props.name.replace(/_/g,' ');
    return (
        <>
         
           <Card sx={{boxShadow:10, marginTop: 4,marginLeft:30, marginRight:50 }}>
                
                <CardActions>

                    <Button size="Large" component={Link} to={props.linkedto} fullWidth>{namee}</Button>
                </CardActions>
            </Card>
                
            
        </>
        
    )  
};

export default Semlist;