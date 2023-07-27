import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import health_1 from "../../../images/health1.jpg";
import blog_1 from "../../../images/blog-1.jpg";
import "./Posts.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Sidebar from '../../Shared/Sidebar/Sidebar';


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
                    {/* on trending  */}
                    <div>
                        <h2 className='posts_trending_blogs_heading'>All Blogs</h2>
                        <Grid container style={{marginTop: "8px"}}>
                            <Grid item xs={12} md={6}>
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
                            <Grid item xs={12} md={6}>
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
                            <Grid item xs={12} md={6}>
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
                            <Grid item xs={12} md={6}>
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
                </Grid>
                {/* sidebar portion  */}
                <Sidebar></Sidebar>
            </Grid>
        </Box>
    );
};

export default Posts;