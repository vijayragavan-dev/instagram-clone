import React, { useEffect, useState } from 'react'

function Suggestion() {
  const[profile,setprofile] =useState(null)
  const[Suggestion,setsuggestion]=useState([])

  useEffect(()=>{
    fetch("http://localhost:5000/profile").
    then(data=>data.json()).
    then(data=>setprofile(data)).
    catch(err=>console.log())

    fetch("http://localhost:5000/suggestions").
    then(data=>data.json()).
    then(data=>setsuggestion(data)).
    catch(err=>console.log())


  },[])


  return (
    <div >
      <div className="suggestion m-4  ">
      {profile ?
      <div className="d-flex ">
        <img className=" dp rounded-circle " src={profile.profile_pic} alt="profile pic"/>
        <h5>{profile.username}</h5>
        <small className='ms-auto text-primary'>switch</small>
      </div>
      : <p>Loading...</p>}
      <div className='d-flex'>
        <p>Suggested For you</p>
        <b className='ms-auto'>See All</b>
      </div>

      {Suggestion.length > 0 ? (
            <div> 
                {Suggestion.map((suggestion)=>(
                    <div  key={suggestion.id}>
                        <div className="d-flex">
                            <img className=" dp rounded-circle " src={suggestion.profile_pic} alt="profile pic"/>
                            <h5>{suggestion.username}</h5>
                            <p className='text-primary  ms-auto'>Follow</p>
                        </div>
                    </div>
                ))}
            </div> 
    ):(
            <div>
                Loading
            </div>
        )}
      </div>
    </div>
  )
}

export default Suggestion