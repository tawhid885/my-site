import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PostDetails from '../../PostDetails/PostDetails';    
import blog_1 from "../../../../images/blog-1.jpg";
import { useNavigate, useParams } from 'react-router-dom';

const Blog = (props) => {
    const {id, date, category, heading} = props;
    const navigate = useNavigate();
    const postDetails=(e)=>{
        console.log("shkail hossen")
        navigate(`/post/${id}`)
        e.preventDefault();
    }
    return (
        <Grid item xs={12} md={6} onClick={postDetails}>
            <Grid item xs={12} md={12} className='posts_trending_container'>
                {/* image part of trending posts  */}
                <img src={blog_1} className='posts_blog_image'/>
                    {/* date and folder  */}
                    <Grid container className='posts_date_trending_container'>
                        <Grid item xs={6} md={6} className='posts_trending_clock'>
                            <AccessTimeIcon size="small" className='posts_clock_icon'/>
                            <Typography variant='small' className='posts_trending_date_sub'>{date}</Typography>
                        </Grid>
                        <Grid item xs={6} md={6} className='posts_trending_folder'>
                            <FolderOpenIcon size="small" className='posts_folder_icon'/>
                            <Typography variant='small' className='posts_trending_date_sub'>{category}</Typography>
                        </Grid>
                    </Grid>
                    {/* post heading  */}
                    <a href="" className='posts_heading_a'>
                                        <h3 className='posts_trending_heading'>{heading}</h3>
                    </a>
                    {/* post detail  */}
                    {/* <p variant="normal" className='posts_detail'>Prepared do an dissuade be so whatever steepest. Yet her beyond 
                    looked either day wished nay. By doubtful disposed do juvenile an.</p> */}
                    <a href='' className='posts_trending_readmore'>
                        <p>Read more <span className='posts_trending_arrow'> > </span></p>
                    </a>
            </Grid>
        </Grid>
    );
};

export default Blog;