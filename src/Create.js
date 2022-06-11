import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Create() {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Yashi')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {title, body, author}
    fetch("http://localhost:8080/blogs", {
      method: 'POST',
      headers:{'Content-Type': "application/json"},
      body: JSON.stringify(blog)
    })
    .then((response)=>{
         if(response.ok){
          navigate('/')
         }
    })
  }

  return (
    <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog Title:</label>
          <input
           type="text" 
           required 
           value={title} 
           onChange={(e) => setTitle(e.target.value)}
          />

          <label>Blog Body:</label>
          <textarea required value={body} onChange={(e)=> setBody(e.target.value)}></textarea>

          <label>Blog Author:</label>
          <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
            <option value="Mario">Mario</option>
            <option value="Yashi">Yashi</option>
          </select>
          <button>Add Blog</button>
        </form>
    </div>
  )
}

export default Create