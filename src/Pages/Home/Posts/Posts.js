import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import health_1 from "../../../images/health1.jpg";
import my_photo from "../../../images/me.jpg";
import "./Posts.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import Search from '@mui/icons-material/Search';


const Posts = () => {
    return (
        <Box className="posts_padding">
            <Grid container spacing={3}>
                {/* post image and rest of work  */}
                <Grid item xs={12} md={8} className='posts_container'>
                    <Grid container spacing={2}>
                        {/* image container  */}
                        <Grid item xs={12} md={6} className='posts_image_container'>
                            <img src={health_1} className='posts_images'/>
                        </Grid>
                        {/* post detail container  */}
                        <Grid item xs={12} md={6} className='posts_detail_container'>
                            {/* date and folder  */}
                            <Grid container className='posts_date_container'>
                                <Grid item xs={6} md={6} className='posts_clock'>
                                    <AccessTimeIcon size="small" className='posts_clock_icon'/>
                                    <Typography variant='small' className='posts_date_sub'>October3, 20118</Typography>
                                </Grid>
                                <Grid item xs={6} md={6} className='posts_folder'>
                                    <FolderOpenIcon size="small" className='posts_folder_icon'/>
                                    <Typography variant='small' className='posts_date_sub'>Coaching, Recipies</Typography>
                                </Grid>
                            </Grid>
                            {/* post heading  */}
                            <a href="" className='posts_heading_a'>
                                <h3 className='posts_heading'>The absolute best foods for getting that youthful glow</h3>
                            </a>
                            {/* post detail  */}
                            <p variant="normal" className='posts_detail'>Prepared do an dissuade be so whatever steepest. Yet her beyond 
                            looked either day wished nay. By doubtful disposed do juvenile an.</p>
                            <a href='' className='posts_readmore'>
                                <p>Read more <span className='posts_arrow'> > </span></p>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
                {/* sidebar portion  */}
                <Grid item xs={12} md={4} className='posts_sidebar_main_container'>
                    <div className='posts_sidebar_container'>
                        <h3 style={{marginTop:0, textAlign:"left"}}>Search on blog</h3>
                        <div className='posts_search'>
                            <input type="text" placeholder="Search....." className='posts_input'></input>
                            <Search style={{color:"rgb(141, 139, 139)", cursor:"pointer"}}/>
                        </div>
                        {/* about me section  */}
                        <div className='posts_about_me'>
                            <h3 className='posts_about_me_heading'>About me</h3>
                            <img src={my_photo} className='posts_my_photo'/>
                            <p className='posts_about_me_text'>Pharetra diam sit amet nisl suscipit adipiscing. 
                                Vel quam elementum pulvinar etiam non quam lacus. 
                                Suspendisse faucibus mauris nunc.
                            </p>
                        </div>
                        {/* social media  */}
                        <div className='posts_social_media_main'>
                            <h3 className='posts_social_media_heading'>Social media</h3>
                            <div className='posts_social_media'>
                                <Facebook size="big" className="posts_facebook"/>
                                <Twitter size="big" className="posts_twitter"/>
                                <Instagram size="big" className="posts_instagram"/>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Posts;