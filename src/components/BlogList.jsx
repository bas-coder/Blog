import { Link } from "react-router-dom";
const BlogList = ({blogs, title}) => {

  return ( 
    <div className="blog-list">
        <h2 className="home_blog-preview_title">{title}</h2>
        {blogs.map((blog) => (
          <div className="home_blog-preview" key={blog.id}>
            <div className="home_blog-preview_head">
              <div className="home_blog-left">
              <div className="home_head-img">
                  <img src={blog.url} alt="Img"  />
                </div>                
                <h3 className="home_head-author">{blog.author}</h3>
              </div>
              <p className="home_head-time">{blog.time}</p>
            </div>
            <div className="home_head-content">
              <h2 className="home_head-title">{blog.title}</h2>
              <p className="home_head-body">{blog.body}</p>
            </div>
            <div className="home_head-btns">
              <div class="home_head-btn btn-primary"><Link to={`/blogs/${blog.id}`}><p>Read More</p></Link></div>
                <div className="btn-secondary">Follow<span>+</span></div>
              </div>
          </div>
        ))}
    </div>
   );
}
 
export default BlogList;