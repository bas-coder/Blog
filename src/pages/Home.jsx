import BlogList from '../components/BlogList';
import { FadeLoader } from "react-spinners";
import useFetch from '../components/useFetch';

const Home = () => {

  const {data:blogs, IsPending, color, error} = useFetch(" http://localhost:8000/blogs");
  return ( 
    <div className="home">
        {error && <div className="error">{error}</div>}
        {IsPending && <div className="home_blog-loader"><FadeLoader color={color} loading={IsPending} cssOverride={ 
          { textAlign:"center",
            padding: "2rem",
            margin: "50% auto"
          }
         } size={150}/></div>}
        {blogs && <BlogList blogs = {blogs} title = "Today's Blogs!!" />}   
    </div>
   );
}
export default Home;