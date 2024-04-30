import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import './yt.css';

export function CollectionVideos(){
    const[videos,setVideos]=useState([])
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://127.0.0.1:5000/collect-videos")
        .then(response =>{
            setVideos(response.data);
        })
    },[]);
    return(
        <div className="bg-dark h-auto">
            <h2 id="cv">Videos</h2>
            <Link to="/dashboard"><button className="btn btn-danger">Home</button><br /><br /></Link>
            <div className="d-flex flex-wrap">
                {
                    videos.map(video =>
                    <div className="ms-5">
                        <p className="fw-bold text-center">{video.Title}</p>
                        <iframe src={video.Url} width='300' height='200'></iframe>
                        <p>{video.Views} views - {video.Uploaded}</p>
                    </div>
                    
                    
                    )
                }
            </div>
        </div>
    )
}