import React from "react";
import { Link } from "react-router-dom";
import Bloglist from "./Bloglist";
import { Button, Box } from "@mui/material";
const Blog = () => {
    return (
        <>
            <Box sx={{ paddingTop: "5vh", paddingLeft: "90vh", paddingRight: "32vh" }}>
                <Button variant="outlined" component={Link} to="/blog/form" fullWidth>
                    Add Your Blog
                </Button>
            </Box>
            <Bloglist />
            {/* <div style={{ background: "white" }}>
                <Bloglist />
                <h1>Hii, in blog</h1>

                <Link to="/blog/form">Post Blog</Link>
            </div> */}
        </>


    )
};

export default Blog;
