import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import health_1 from "../../../images/health1.jpg";
import "./Posts.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const Posts = () => {
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img src={health_1} className='posts_images'/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container>
                                <Grid item xs={6} md={6}>
                                    <AccessTimeIcon className='color'/>
                                    <Typography variant='small' className='posts_date_sub'>October3, 20118</Typography>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <FolderOpenIcon className='color'/>
                                    <Typography variant='small' className='posts_date_sub'>Coaching, Recipies</Typography>
                                </Grid>
                            </Grid>
                            <a href="" style={{textDecoration:"none", color:'black'}}>
                            <Typography variant="h6"className='posts_heading'>The absolute best foods for getting that youthful glow</Typography>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <h2>hossen</h2>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Posts;