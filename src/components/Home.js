import {useState, useEffect} from 'react'
import BlogList from './BlogList'

function Home() {

    const [blogs, setBlogs] = useState(null)


    const deleteBlog = (id) =>{
        let newBlogs = blogs.filter((blog)=>{
            return blog.id !== id
        })
        setBlogs(newBlogs)
    }


    useEffect(()=>{
        fetch("http://localhost:8000/blogs")
        .then(response => {
            return response.json()
        })
        .then((data)=>{
            setBlogs(data)
        })
    }, [])


   
    return (
        <div className="home">
          { blogs &&
           <BlogList blogs={blogs} title="All Blogs" handleDelete={deleteBlog}/>}
          
        </div>
    )
}

export default Home