import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
import ModalPopup from './ModalPopup'


const Home = () => {
    const [posts,setPosts] = useState([])
    const [open,setOpen] = useState(true)

    useEffect(() => {
    const fetchPosts =  async  () =>{
        try {
            const response = await axios.get(`https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts`)
            console.log(response.data)
            setPosts(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    fetchPosts()
    }, [])
    
  return (
    <div>
        {posts.map((post) => 
          <> 
           <Card key={post.id} post={post}/>
           <ModalPopup post={post} id={post.id} open={open} setOpen={setOpen}/>
          </> 
          )
          }
    </div>
  )
}

export default Home