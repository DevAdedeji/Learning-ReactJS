import { useParams } from "react-router"

function Blog() {
    const {id} = useParams()
  return (
    <div className='blog-detail'>
        <h2>Blog {id}</h2>
    </div>
  )
}

export default Blog