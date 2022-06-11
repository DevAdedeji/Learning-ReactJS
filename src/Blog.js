import { useParams } from "react-router"
import useFetch from "./useFetch"

function Blog() {
    const {id} = useParams()
    const {data:blog, error, isPending} = useFetch(`http://localhost:8080/blogs/${id}`)
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
                    </article>
                )
            }
        </div>
    )
}

export default Blog