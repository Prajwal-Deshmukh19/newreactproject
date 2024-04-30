import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function AdminDashboard(){
 const[cookies,setcookie,removecookie]= useCookies('userid');
 const[videos,setVideos]=useState([]);
 let navigate = useNavigate();

function AdminVideos(){
    axios.get('http://127.0.0.1:5000/admin-videos')
    .then(response=>{
        setVideos(response.data)
    })
}

useEffect(()=>{
    if(cookies.userid== undefined){
        navigate('/')
    }else{
        AdminVideos();
    }
},[])

 function handlelogout(){
    removecookie('userid');
    navigate('/');
 }

 function handleDeletevideo(id,Title){
    axios.delete(`http://127.0.0.1:5000/delete-video/${id}`)
    window.location.reload();
    navigate('/admindb');
 }


    return(
        <div>
           <header id='dshhead'>
                <div className="bi bi-list"> <span><img src="yt-logo.jpg" alt="" /></span></div>
                <div><h3>Admin: <b>{cookies.userid}</b></h3></div>
                <div className="input-group"><input type="text" placeholder="Search" className="form-control" /><button className=" btn btn-danger bi bi-search"></button></div>
                <div id='signoutbtn'><button className='btn btn-danger' onClick={handlelogout}>Signout</button></div>
            </header>
            <div><Link to='/addvideo'><button className="btn btn-info">Add Videos</button></Link></div><br /><br />
              <div className="d-flex flex-wrap"> 
              {
                videos.map(video =>
                <div className="ms-5">
                  <p className="fw-bold"> {video.Title} </p>
                   <iframe src={video.Url} frameborder="0" width='300' height='200'></iframe><br />
                   <Link to={`/editvideo/${video.VideoId}`}><button className="btn btn-warning ms-5 bi bi-pen-fill me-5"> Edit</button></Link>

                    <button className="btn btn-danger bi bi-trash3" onClick={ ()=> handleDeletevideo(video.VideoId,video.Title)}> Delete</button>


                </div>
                
                )
               }
              </div>
          
        </div>
    )
}