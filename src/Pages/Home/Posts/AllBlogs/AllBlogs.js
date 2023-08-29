import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import blog_1 from "../../../../images/blog-1.jpg";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PostDetails from '../../PostDetails/PostDetails';
import Blog from './Blog';

const posts =[
    {
        id : 1,
        img : blog_1,
        data : "October3, 20118",
        category : "Coaching, Recipies",
        heading : "The absolute best foods for getting that youthful glow",
    },
    {
        id : 2,
        img : blog_1,
        data : "October3, 20118",
        category : "Coaching, Recipies",
        heading : "The absolute best foods for getting that youthful glow",
    },
    {
        id : 3,
        img : blog_1,
        data : "October3, 20118",
        category : "Coaching, Recipies",
        heading : "The marvelous solution of getting rich at any tiem",
    },
    {
        id : 4,
        img : blog_1,
        data : "October3, 20118",
        category : "Coaching, Recipies",
        heading : "The absolute best foods for getting that youthful glow",
    },
]

const AllBlogs = () => {
    return (
        <div>
            <h2 className='posts_trending_blogs_heading'>All Blogs</h2>
            <Grid container style={{marginTop: "8px"}}>
                {
                    posts.map(post=>(
                        <Blog
                        key = {post.id}
                        id = {post.id}
                        img = {post.img}
                        date = {post.date}
                        category = {post.category}
                        heading = {post.heading}
                        ></Blog>
                    ))
                }             
            </Grid>
        </div>
    );
};

export default AllBlogs;