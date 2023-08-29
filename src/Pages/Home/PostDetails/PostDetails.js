import React from 'react';
import "./PostDetails.css";
import { useParams } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import blog_1 from "../../../../src/images/blog-1.jpg";
import Footer from "./../../Shared/Footer/Footer";

const PostDetails = () => {
    return (
        <div>
            <div className='post_container_main'>
            <Grid item xs={12} md={12} className='post_container'>
            <Grid item xs={12} md={12} className='posts_trending_container'>
                {/* post heading  */}
                <a href="" className='posts_heading_a'>
                    <h1 className='posts_trending_heading'>the most lucrative site of blog design</h1>
                </a>
                {/* autor part  */}
                <p className='post_author'>By Md. Shakil Hossen</p>
                {/* last update  */}
                <p className='post_last_update'>Last updated on October 21, 2023</p>
                {/* image part of trending posts  */}
                <div className='post_main_image_container'>
                    <img src={blog_1} className='post_blog_image_main'/>
                </div>
                    {/* date and folder  */}
                    <Grid container className='posts_date_trending_container'>
                        {/* <Grid item xs={6} md={6} className='posts_trending_clock'>
                            <AccessTimeIcon size="small" className='posts_clock_icon'/>
                            <Typography variant='small' className='posts_trending_date_sub'>date</Typography>
                        </Grid> */}
                        {/* <Grid item xs={6} md={6} className='posts_trending_folder'>
                            <FolderOpenIcon size="small" className='posts_folder_icon'/>
                            <Typography variant='small' className='posts_trending_date_sub'>category, etc</Typography>
                        </Grid> */}
                        <Grid item xs={6} md={6} className='post_table_of_content'>
                            <ul style={{fontSize:"18px"}}>
                                <li>1. first line of content</li>
                                <li>2. second line of content</li>
                                <li>3. third line of content</li>
                                <li>4. forth line of content</li>
                                <li>5. five line of content</li>
                            </ul>
                        </Grid>
                    </Grid>
                    
                    {/* post detail  */}
                    <p variant="normal" className='post_detail'>There are a lot of factors that can make a blog grasping, attention-holding, informative, and entertaining at the same time. Such posts have well thought out headlines with proses that are enlightening, use persuasive words that convey the message and are crafted in a manner that is attractive enough to make readers come back to the blog regularly. A lecture on what counts in a great blog post can go on and on but simply put; bloggers should abide by and use these top 10 essential ingredients of a blog post if they want to give their posts a chance at visibility.

1. Epic Content
Readers will often remember blogs that strive to provide the best information in their niche areas. Epic content can help in a different number of ways, including substantiating your standing as an expert in your chosen line of specialization, attracting both subscribers and links and encourage content sharing on social media platforms. Epic content also provides fresh content that helps to rank your blog favorably in the search engines in as far as relevance is concerned.

2. Quality Graphics and Images
Ensure you accompany the epic content you publish with equally high-quality graphics and images. This not only ensures your blog post is appealing to visitors; it also encourages visitors to share the content through the various social media channels they subscribe to. It is good to note that blogging as a form of content marketing needs to take advantage of the various benefits that social media readily offer. Both have grown intensely visual, making quality images and well-done graphics very essential.

3. Eliminate Fluff in Your Content
A good blog needs to have fresh content added regularly. This, however, should not push you as a blogger, to produce or even publish content that is not well researched or improperly created in the name of attracting an audience. Such content normally has little value for the intended audience. You should instead strive to focus your time appropriately and create beneficial content for your readers. Doing just two impressive posts a week will get you a bigger following that doing seven run down posts.

4. Have Useful and Efficient Content
In blogging, quality content is essential, but not enough. You have to ensure that the great content you publish is useful and that your readers can convert them to practical and beneficial actions. Blog posts that provide readers with practical solutions not only maintain the visitors’ readership; they also benefit from such followers’ word of mouth, the biggest form of advertisement there is. An important guide here is to make the blog post both relevant to your target niche and also provide actionable content as an extra.

5. Build on Your Unique Industry Experiences and Strengths
There may be so many other blogs in your niche area covering almost the same topics as you do. The bloggers who post in such blogs, however, do not have the same industry experiences as you and neither do they share your strengths. It makes perfect sense to extol your experiences and strengths if they have practicality in your niche. You can use your strengths and practical experiences to create a learning point for your readers and also reveal your personality.

6. Outstanding Personality
Speaking of personality, you can easily reveal it by creating a post that allows you to connect with your readers, both prospective and regular clients on a personal level. Such a personal connection will get you more subscribers from the list of potential clients as well as more repeat visitors. To develop a personal connection, create posts that encourage interactions with the readers. Then ensure you respond to all the comments your readers send in. You can also use the social media platforms that promote your blog post as a means of engaging even further with your audience.

7. Use Sentences That Effectively Convey the Message
Exceptional blog posts are made of phenomenally good sentences. These effectively pass across your message in a manner that attracts your readers. Such sentences do not have to be long; they need to have the right words and structure. It is effortless to weave benefits that your product or service promise inside the realm of such magnetic sentences. Everyone can successfully create such effective sentences; spend time on them, and infuse passion in writing.

8. Create Exquisite Subheads and Engaging Bullet Points in Your Posts
Imposing massive blocks of passages to your readers is the easiest way of losing or cutting down on their attention span. This can then turn them into text scanners. Good subheadings can, however, make the whole difference. It helps if you can use your subheadings as highlights that accentuate specific benefits or important information your readers need to know about. You can also include killer bullet points for the purposes of emphasis. These can be used to convey both promise and brevity.

Heading and Subheading

9. Include Arresting Images That Tell an Enticing Story
The imagery that you include in your blog post can tell an alluring story aside from encouraging page shares on social media. Such imagery will do more than give your post a fighting chance in the trenches; it will introduce the post with a bang and do the heavy lifting that comes with blog visibility. These images will also be the heroes behind the marketing story that your blog is trying to put across.

10. Keep Authenticity
Creating a copy that sells has a lot to do with the passion of the writer and is also one of the top 10 essential ingredients of a blog post. Creating such a copy breathes life into the pages you are creating, giving the products or services you are promoting the energy of their own. There are several ways of effectively doing this, and the beauty is that you do not need to be a master copywriter to succeed. You can document a conversation about the product or service and use it as a draft. This works well, especially if you understand your readers and know exactly where you want them to be once they are done reading your blog post.

</p>
            </Grid>
            
        </Grid>
        
        </div>
        {/* comment section  */}
        <div className='post_comments_main'>
            <div className='post_comments'>
                <h2 className='post_comments_heading'>Comments</h2>
                <div>
                    <p>User name</p>
                    <p>this  post is very beautiful for me. I love this kind of post very much.</p>
                </div>
            </div>
        </div>
        {/* related post  */}
        <div className='related_post_main'>
        <div className='related_post'>
            <h2 className='posts_trending_others_blogs_heading'>Related Post</h2>
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
            </Grid>           
        </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default PostDetails;