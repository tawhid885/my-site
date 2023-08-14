import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import blog_1 from "../../../../images/blog-1.jpg";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import "./Others.css";

const Others = () => {
    return (
        <div>
            <h2 className='posts_trending_others_blogs_heading'>Others</h2>
            <Grid container style={{marginTop: "8px"}}>
            <Grid item xs={12} md={4}>
                                <Grid item xs={12} md={12} className='posts_trending_container'>
                                    {/* image part of trending posts  */}
                                    <img src={blog_1} className='posts_blog_image'/>
                                    {/* date and folder  */}
                                    <Grid container className='posts_date_trending_container'>
                                        <Grid item xs={6} md={6} className='posts_trending_clock'>
                                            <AccessTimeIcon size="small" className='posts_clock_icon'/>
                                            <Typography variant='small' className='posts_trending_date_sub'>October3, 20118</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={6} className='posts_trending_folder'>
                                            <FolderOpenIcon size="small" className='posts_folder_icon'/>
                                            <Typography variant='small' className='posts_trending_date_sub'>Coaching, Recipies</Typography>
                                        </Grid>
                                    </Grid>
                                    {/* post heading  */}
                                    <a href="" className='posts_heading_a'>
                                        <h3 className='posts_trending_heading'>The absolute best foods f
                                        or getting that youthful glow</h3>
                                    </a>
                                    {/* post detail  */}
                                    {/* <p variant="normal" className='posts_detail'>Prepared do an dissuade be so whatever steepest. Yet her beyond 
                                    looked either day wished nay. By doubtful disposed do juvenile an.</p> */}
                                    <a href='' className='posts_trending_readmore'>
                                        <p>Read more <span className='posts_trending_arrow'> > </span></p>
                                    </a>
                                </Grid>
                            </Grid>
                            {/* another blog  */}
                            <Grid item xs={12} md={4}>
                                <Grid item xs={12} md={12} className='posts_trending_container'>
                                    {/* image part of trending posts  */}
                                    <img src={blog_1} className='posts_blog_image'/>
                                    {/* date and folder  */}
                                    <Grid container className='posts_date_trending_container'>
                                        <Grid item xs={6} md={6} className='posts_trending_clock'>
                                            <AccessTimeIcon size="small" className='posts_clock_icon'/>
                                            <Typography variant='small' className='posts_trending_date_sub'>October3, 20118</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={6} className='posts_trending_folder'>
                                            <FolderOpenIcon size="small" className='posts_folder_icon'/>
                                            <Typography variant='small' className='posts_trending_date_sub'>Coaching, Recipies</Typography>
                                        </Grid>
                                    </Grid>
                                    {/* post heading  */}
                                    <a href="" className='posts_heading_a'>
                                        <h3 className='posts_trending_heading'>The absolute best foods f
                                        or getting that youthful glow</h3>
                                    </a>
                                    {/* post detail  */}
                                    {/* <p variant="normal" className='posts_detail'>Prepared do an dissuade be so whatever steepest. Yet her beyond 
                                    looked either day wished nay. By doubtful disposed do juvenile an.</p> */}
                                    <a href='' className='posts_trending_readmore'>
                                        <p>Read more <span className='posts_trending_arrow'> > </span></p>
                                    </a>
                                </Grid>
                            </Grid>
                            {/* another blog  */}
                            <Grid item xs={12} md={4}>
                                <Grid item xs={12} md={12} className='posts_trending_container'>
                                    {/* image part of trending posts  */}
                                    <img src={blog_1} className='posts_blog_image'/>
                                    {/* date and folder  */}
                                    <Grid container className='posts_date_trending_container'>
                                        <Grid item xs={6} md={6} className='posts_trending_clock'>
                                            <AccessTimeIcon size="small" className='posts_clock_icon'/>
                                            <Typography variant='small' className='posts_trending_date_sub'>October3, 20118</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={6} className='posts_trending_folder'>
                                            <FolderOpenIcon size="small" className='posts_folder_icon'/>
                                            <Typography variant='small' className='posts_trending_date_sub'>Coaching, Recipies</Typography>
                                        </Grid>
                                    </Grid>
                                    {/* post heading  */}
                                    <a href="" className='posts_heading_a'>
                                        <h3 className='posts_trending_heading'>The absolute best foods f
                                        or getting that youthful glow</h3>
                                    </a>
                                    {/* post detail  */}
                                    {/* <p variant="normal" className='posts_detail'>Prepared do an dissuade be so whatever steepest. Yet her beyond 
                                    looked either day wished nay. By doubtful disposed do juvenile an.</p> */}
                                    <a href='' className='posts_trending_readmore'>
                                        <p>Read more <span className='posts_trending_arrow'> > </span></p>
                                    </a>
                                </Grid>
                            </Grid>
                            {/* another blog  */}
                            <Grid item xs={12} md={4}>
                                <Grid item xs={12} md={12} className='posts_trending_container'>
                                    {/* image part of trending posts  */}
                                    <img src={blog_1} className='posts_blog_image'/>
                                    {/* date and folder  */}
                                    <Grid container className='posts_date_trending_container'>
                                        <Grid item xs={6} md={6} className='posts_trending_clock'>
                                            <AccessTimeIcon size="small" className='posts_clock_icon'/>
                                            <Typography variant='small' className='posts_trending_date_sub'>October3, 20118</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={6} className='posts_trending_folder'>
                                            <FolderOpenIcon size="small" className='posts_folder_icon'/>
                                            <Typography variant='small' className='posts_trending_date_sub'>Coaching, Recipies</Typography>
                                        </Grid>
                                    </Grid>
                                    {/* post heading  */}
                                    <a href="" className='posts_heading_a'>
                                        <h3 className='posts_trending_heading'>The absolute best foods f
                                        or getting that youthful glow</h3>
                                    </a>
                                    {/* post detail  */}
                                    {/* <p variant="normal" className='posts_detail'>Prepared do an dissuade be so whatever steepest. Yet her beyond 
                                    looked either day wished nay. By doubtful disposed do juvenile an.</p> */}
                                    <a href='' className='posts_trending_readmore'>
                                        <p>Read more <span className='posts_trending_arrow'> > </span></p>
                                    </a>
                                </Grid>
                            </Grid>
            </Grid>           
        </div>
    );
};

export default Others;