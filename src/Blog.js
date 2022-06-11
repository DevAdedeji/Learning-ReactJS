import { useParams } from "react-router"
import useFetch from "./useFetch"
import { useNavigate } from "react-router"

function Blog() {
    const {id} = useParams()
    const {data:blog, error, isPending} = useFetch(`http://localhost:8080/blogs/${id}`)
    const navigate = useNavigate()

    const deleteBlog = (id) =>{
        fetch("http://localhost:8080/blogs/"+id, {
            method: 'DELETE',
          })
          .then((res)=>{
              if(res.ok){
                navigate('/')
              }
          })
    }
    return (
        <div className='blog-details'>
            {isPending && <div>Loading....</div> }
            {error && <div>{error}</div> }
            {
                blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                        <p>{blog.body}</p>
                        <button onClick={()=>{deleteBlog(blog.id)}}>Delete</button>
                    </article>
                )
            }
        </div>
    )
}

export default Blog