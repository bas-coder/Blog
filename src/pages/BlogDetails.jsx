import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import useFetch from "../components/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {data:blog, IsPending, color, error} = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();
  const back  = () => {
    history.push("/")
  }

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE"
    }).then(() =>{
        history.push("/");
    })
  }

  return ( 
    <div className="blog-details">
        {IsPending && <div className="home_blog-loader"><FadeLoader color={color} loading={IsPending} cssOverride={ 
          { textAlign:"center",
            padding: "2rem",
            margin: "50% auto"
          }}
          size={150}/></div>}    
          {error && <div className="error">{error}</div>}
          {blog && (
            <article className="details">
              <div className="home_blog-preview_head">
                <div className="home_blog-left">
                <div className="details_head-img">
                    <img src={blog.url} alt="Img"  />
                  </div>                
                  <div className="details_head-author">{blog.author}</div>
                </div>
                <p className="home_head-time">{blog.time}</p>
              </div>
              <div className="home_head-content">
                <h2 className="details_head-title">{blog.title}</h2>
                <p className="home_head-body">{blog.body}</p>
              </div>
              <div className="home_head-btns">
                <div onClick = {back} className="btn-primary">Back</div>
                <button onClick={handleClick} class="home_head-btn btn-delete">Delete <span>x</span></button>
              </div>        
            </article>
          )}
    </div>
   );
}
 
export default BlogDetails;