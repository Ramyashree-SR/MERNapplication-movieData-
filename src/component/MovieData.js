import axios from 'axios'
import React, { useState } from 'react'


function MovieData() {
    const [userData, setUserData] = useState({
        movieName:"",
        movieDesc:""

    })
    
    let updateData=(e)=>{
        setUserData({
        ...userData,
        [e.target.name]:e.target.value
       })
      }
      
      
       
    
        let fetchapi=async (req,res)=>{
          try{
             let res= await axios.get("http://localhost:5000/moviedatas/movie")
             console.log("data",res.data);
          }catch(err){
              console.log(err);
          }
        }
        
        let handleSubmit=(e)=>{
          e.preventDefault();
        }
        let getData=()=>{
          fetchapi();
        }
         
        let postData=async ()=>{
          try{
            let res= await axios.post("http://localhost:5000/moviedatas/add",userData)
            console.log("data",res.data);
          }
          catch(err){
            console.log(err);
          }
        }

        let sendData=()=>{
          postData()
          setUserData({
           movieName:"",
           movieDesc:""
          })
        }
        
  return (
    <div>
        <h1 className="login_heading">MovieData</h1>
       <form className='container border' onSubmit={handleSubmit}>
        <div className="m-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Movie Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" 
          value={userData.movieName}name="movieName"
          onChange={(e)=>{updateData(e)}} aria-describedby="emailHelp" />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Movie Description</label>
          <input type="text" name="movieDesc" className="form-control" 
          id="exampleInputPassword1" value={userData.movieDesc}
          onChange={(e)=>{updateData(e)}} />
        </div>
        
        <button type="submit" className="btn btn-primary mb-4" onClick={()=>{sendData()}}>Add</button>
        <button type="submit" className="btn btn-primary mb-4" onClick={()=>{getData()}}>Get</button>
        
        
      </form>
    </div>
  )
  }


export default MovieData;