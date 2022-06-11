import BlogList from './BlogList'
import useFetch from '../useFetch'


function Home() {   
    const {data, isPending, error} = useFetch("http://localhost:8080/blogs")
    return (
        <div className="home">
            {error && <div>{error}</div> }
          { isPending && <div>Loading...</div> }
          {data && <BlogList blogs={data} title="All Blogs"/>}
        </div>
    )
}

export default Home