import { Grid } from '@mui/material';
import React from 'react';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import Search from '@mui/icons-material/Search';
import my_photo from "../../../images/me.jpg";
import "./Sidebar.css";

const Sidebar = () => {
    return (
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
                                <Facebook className="posts_facebook"/>
                                <Twitter className="posts_twitter"/>
                                <Instagram className="posts_instagram"/>
                            </div>
                        </div>
                    </div>
                </Grid>
    );
};

export default Sidebar;