import React from 'react';
import "./Footer.css"
import { Box, Grid } from '@mui/material';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import hackerrank from "./../../../images/hackerrank.png"

const Footer = () => {
    return (
        <Box className="footer">
            <Grid container>
                <Grid item xs={12} md={6} className='footer_first_col_container'>
                    <div className='footer_first_col'>
                        <h4>About</h4>
                        <h4>Contact</h4>
                        <h4>Chemistry</h4>
                        <h4>Python</h4>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className='footer_social_media'>
                    <Facebook className="footer_posts_facebook"/>
                    <Twitter className="footer_posts_twitter"/>
                    <Instagram className="footer_posts_instagram"/>
                    <GitHubIcon className="footer_posts_github"/>
                    <a href="#"><img src={hackerrank} className='footer_hackerrank'/></a>
                </Grid>
            </Grid>
            <hr className='horizontal_line'></hr>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <h4>Categories</h4>
                    <ul>
                        <li><a href="#">Chemistry</a></li>
                        <li><a href="#">Programming</a></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Others</a></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={4}>
                    <h4>Tags</h4>
                    <ul>
                        <li><a href="#">Chemistry</a></li>
                        <li><a href="#">Computational Chemistry</a></li>
                        <li><a href="#">Python</a></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Data Science</a></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={4}>
                    <h4>Shakil</h4>
                    <p>I am Md. Shakil Hossen. Interest on different domain of chemistry and programming as well. I love to read historical phenomena and its interpretations.</p>
                </Grid>
            </Grid>
            <p style={{"textAlign":"center"}}>Md. Shakil Hossen © All right reserved - 2023</p>
        </Box>
    );
};

export default Footer;