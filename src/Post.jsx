import React, { useEffect, useState } from 'react'

function Post() {
    const [post,setpost] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/posts').
        then((data)=>data.json()).
        then((data=>setpost(data))).
        catch(err=>console.log(err))

    },[])

  return (
    <div className='d-flex justify-content-center'>
        {post.length > 0 ? (
            <div> 
                {post.map((post)=>(
                    <div className="my-3" key={post.id}>
                        <div className="d-flex">
                            <img className=" dp rounded-circle " src={post.user.profile_pic} alt="profile pic"/>
                            <h5>{post.user.username}</h5>
                        </div>
                        <img className="image" src={post.image} alt="post"/>
                        <div>
                            <i className="bi bi-heart"></i>
                            <i className="bi bi-chat-dots"></i>
                            <i className="bi bi-send"></i>

                        </div>
                        <div>
                            <b>{post.likes} Likes</b>
                        </div>
                        <p>{post.caption}</p>
                    </div>
                ))}
            </div> 
    ):(
            <div>
                Loading post
            </div>
        )} 
  </div>
  )
}

export default Post