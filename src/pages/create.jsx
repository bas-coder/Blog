import { useState } from "react";
import { useHistory } from "react-router-dom";
 
const Create = () => {

  //FORM
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [category, setcategory] = useState('');

  //TIME
  const locale = 'en';
  const today = new Date();
  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
  
  //LOADER
  const [ispending, setIsPending] = useState(false);
  
  const history = useHistory();

  //POST
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, time, author, url, category};

    setIsPending(true);

    fetch('http://localhost:8000/blogs',{
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(blog)
    }).then (() => {
      setIsPending(false);
      console.log('new blog added');
      history.push("/");

    })
  }

  return ( 
    <div className="create">
      <h2 className="create_title">Add a new Blog</h2>
        <form onSubmit={handleSubmit} className="create_inputs">

          <label>Blog Title: </label>
          <input 
            type="text"
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required   
          />

          <label>Author: </label>
          <input 
              className="input"
              type="text"
              value={author}
              required   
            onChange = {(e) => setAuthor(e.target.value)}
          />

          <label>Img Url: </label>
          <input 
              type="text"
              className="create_inputs-url"
              required   
              value={url}
              onChange = {(e) => setUrl(e.target.value)}
          />          

          <label>Content: </label>
          <textarea
            value={body}
            onChange = {(e) => setBody(e.target.value)}
            required
          ></textarea> 

          <div className="create_extras">
            <select value={category} onChange = {(e) => setcategory(e.target.value)}>
              <option value="mario">Business</option>
              <option value="yoshi">Fashion</option>
              <option value="yoshi">Celebrities</option>
              <option value="yoshi">Sports</option>
              <option value="yoshi">Science</option>
            </select>

          </div>

          {!ispending && <button className="btn-primary create_btn-add">Add Blog</button>}
          {ispending && <button className="btn-primary create_btn-add" disabled>Adding Blog...</button>}
        </form>
    </div> 
   );
}
 
export default Create;