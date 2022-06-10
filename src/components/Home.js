import {useState, useEffect} from 'react'
import BlogList from './BlogList'

function Home() {

    const [blogs, setBlogs] = useState(null)
    const [isPending,  setisPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch("http://localhost:8000/blogs")
        .then(response => {
            
            if(!response.ok){
                throw Error("Could not fetch data for that resources")
            }
            return response.json()
        })
        .then((data)=>{
            setBlogs(data)
            setisPending(false)
            setError(null)
        })
        .catch(err =>{
            setError(err.message);
            setisPending(false)
        })
    }, [])


   
    return (
        <div className="home">
            {error && <div>{error}</div> }
          { isPending && <div>Loading...</div> }
          {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
          
        </div>
    )
}

export default Home